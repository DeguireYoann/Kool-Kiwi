import type { AlgoliaProductRecord, AttributeRaw, Product, ProductVariant } from "./types";

const mapAttributes = (attributes: AttributeRaw[]) => {
	return attributes.map((attribute: AttributeRaw) => {
		switch (attribute.attributeDefinition.type.name) {
			case "enum": {
				return {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
					[attribute.name]: attribute.value.label,
				};
			}
			default: {
				return {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					[attribute.name]: attribute.value,
				};
			}
		}
	});
};

export const mapProductToAlgolia = (product: Product, productVariant: ProductVariant): AlgoliaProductRecord => {
	return {
		objectID: `${product.key} - ${productVariant.id}`,
		name: product.masterData.current.name,
		productId: product.id,
		productKey: product.key,
		productType: {
			key: product.productType.key,
		},
		slug: product.masterData.current.slug,
		sku: productVariant.sku,
		variantKey: productVariant.key,
		description: product.masterData.current.description,
		categories: product.masterData.current.categories,
		images: productVariant.images,
		attributes: mapAttributes(productVariant.attributesRaw)
	};
};
