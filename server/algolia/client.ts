import algoliasearch from "algoliasearch";
import algoliaConfig from "~/.algolia.json"
const searchClient = () => algoliasearch(algoliaConfig.ALGOLIA_APPID, algoliaConfig.ALGOLIA_API_KEY);

const getProductIndex = () => searchClient().initIndex(algoliaConfig.ALGOLIA_INDEX);

const clearProductIndex = async () => {
	const index = getProductIndex();
	await index.clearObjects();
};

export { searchClient, getProductIndex, clearProductIndex };