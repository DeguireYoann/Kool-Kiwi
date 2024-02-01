import type { AlgoliaProductRecord, GraphQLResponseBodyData, Product, ProductQueryVariables, ProductVariant } from "../lib/types";
import { getProductIndex, clearProductIndex } from "../algolia/client";
import { mapProductToAlgolia } from "../lib/mappers";
import { productQuery } from "../lib/queries";
import { apiRoot } from "../utils/httpApiClient";

const getProduct = async (id: string): Promise<any> => {
	const response = await apiRoot
								.products()
                                .withId({ID: id})
                                .get()
                                .execute();
	return response.body;
};

const mapProductToRecord = (product: Product): AlgoliaProductRecord => {
	const productVariant = product.masterData.current.allVariants.find(
		(variant) => variant.id === product.masterData.current.masterVariant.id
	);

	if (!productVariant) {
		throw new Error("No variant found");
	}

	return mapProductToAlgolia(product, productVariant);
};

export const fetchProduct = async (id: string) => {
    const product = await getProduct(id);
    console.log(product);
	return mapProductToRecord(product);
}