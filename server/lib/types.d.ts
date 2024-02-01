import type { BaseHit, Hit } from "instantsearch.js";

interface AlgoliaCategory {
	id: string;
	key: string;
}

interface AlgoliaProductType {
	key: string;
}

interface AlgoliaProductImage {
	url: string;
	label?: string;
}

type AlgoliaProductRecord = Hit<BaseHit> & {
	objectID: string;
	productId: string;
	productKey?: string;
	variantKey?: string;
	productType: AlgoliaProductType;
	name: string;
	slug: string;
	description?: string;
	categories: AlgoliaCategory[];
	sku?: string;
	images?: AlgoliaProductImage[];
	attributes?: { [key: string]: string }[];
};

type ProductVariantReference = {
	id: number;
};

type Image = {
	url: string;
	label?: string;
};

type AttributeDefinitionType = {
	name: string;
};

type AttributeDefinition = {
	type: AttributeDefinitionType;
};

type Category = {
	id: string;
	key: string;
};

type ProductType = {
	key: string;
};

type AttributeRaw = {
	name: string;
	value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	attributeDefinition: AttributeDefinition;
};

type ProductVariant = {
	id: number;
	sku?: string;
	key?: string;
	images: Image[];
	attributesRaw: AttributeRaw[];
};
type ProductData = {
	name: string;
	description: string;
	slug: string;
	masterVariant: ProductVariantReference;
	allVariants: ProductVariant[];
	categories: Category[];
};

// Main product
interface Product {
	id: string;
	key: string;
	productType: ProductType;
	masterData: {
		current: ProductData;
	};
}

// GraphQL
type ProductQueryVariables = {
	limit: number;
	locale: string;
};

type ProductBatchQueryVariables = {
	limit: number;
	locale: string;
	sort: string;
	where: string;
};

type GraphQLResponseBodyData<Tresult> = {
	products: { results: Tresult[] };
};

export {
	AttributeRaw,
	ProductVariant,
	Product,
	ProductQueryVariables,
	ProductBatchQueryVariables,
	GraphQLResponseBodyData,
	AlgoliaCategory,
	AlgoliaProductType,
	AlgoliaProductImage,
	AlgoliaProductRecord
};
