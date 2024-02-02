import type { AlgoliaProductRecord, Product } from "../../server/lib/types";
import { mapProductToAlgolia } from "../../server/lib/mappers";
import { apiRoot } from "../../server/utils/httpApiClient";

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

export const fetchProduct = async (id: string): Promise<AlgoliaProductRecord> => {
    const product = await getProduct(id);
    console.log(product);
	return mapProductToRecord(product);
}