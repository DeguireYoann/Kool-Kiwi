import type { AlgoliaProductRecord, GraphQLResponseBodyData, Product, ProductBatchQueryVariables } from "../lib/types";
import { mapProductToAlgolia } from "../lib/mappers";
import { productBatchQuery } from "../lib/queries";
import { apiRoot } from "../utils/httpApiClient";


const fetchProductsBatch = async (locale: string, batchSize: number, lastId?: string): Promise<Product[]> => {
const productBatchQueryVariables = {
		locale,
		limit: batchSize,
		sort: "id asc",
		where: lastId === undefined ? undefined : `id > "${lastId}"`,
	} as ProductBatchQueryVariables;

	const graphQLResponse = await apiRoot
									?.graphql()
									.post({
										body: {
											query: productBatchQuery,
											variables: productBatchQueryVariables
										}
									})
									.execute();
	const {products} = graphQLResponse?.body.data as GraphQLResponseBodyData<Product>;
	return products.results;
};

const getProductsData = async (): Promise<Product[]> => {
	const locale = "en-US"; 
	const batchSize = 2;
	const result = [] as Product[];
	let lastId: string | undefined;
	let shouldContinue = false;
	do {
		const currentBatch = await fetchProductsBatch(locale, batchSize, lastId);
		result.push(...currentBatch);
		shouldContinue = currentBatch.length > 0;
		lastId = currentBatch.pop()?.id;
	} while (shouldContinue);
	return result;
};

const mapProductsToRecords = (products: Product[]): AlgoliaProductRecord[] => {
	return products.map(product => {
		const productVariant = product.masterData.current.allVariants.find(
			(variant) => variant.id === product.masterData.current.masterVariant.id
		);
		if (!productVariant) {
			throw new Error("No variant found");
		}

		return mapProductToAlgolia(product, productVariant);
	})
};


const getProducts = async (): Promise<AlgoliaProductRecord[]> => {
	const products = await getProductsData();
	return mapProductsToRecords(products);
};

export default getProducts;

