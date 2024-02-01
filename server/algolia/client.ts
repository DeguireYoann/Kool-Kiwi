import algoliasearch from "algoliasearch";

const searchClient = () => algoliasearch(process.env.ALGOLIA_APPID ?? "", process.env.ALGOLIA_API_KEY ?? "");

const getProductIndex = () => searchClient().initIndex(process.env.ALGOLIA_INDEX ?? "");

const clearProductIndex = async () => {
	const index = getProductIndex();
	await index.clearObjects();
};

export { searchClient, getProductIndex, clearProductIndex };