const productFragment = `#graphql
  fragment ProductFragment on Product {
    id
    key
    productType {
      key
    }
    masterData {
      current {
        name(locale: $locale)
        description(locale: $locale)
        slug(locale: $locale)
        masterVariant {
          id
        }
        allVariants {
          id
          sku
          key
          images {
            url
            label
          }
          attributesRaw {
            name
            value,
            attributeDefinition {
              label(locale: $locale)
              isSearchable
              type {
                name
              }
            }
          }
        }
        categories {
          id
          key
        }
      }
    }
  }
`;

const productQuery = `#graphql
  query GetProducts(
    $limit: Int,
    $locale: Locale
  ) {
    products(limit: $limit) {
      results {
        ...ProductFragment
      }
    }
  }

  ${productFragment}
`;

const productBatchQuery = `#graphql
  query GetProductBatch(
    $limit: Int
    $locale: Locale
    $where: String
    $sort: [String!]
  ) {
    products(limit: $limit, where: $where, sort: $sort) {
      results {
        ...ProductFragment
      }
    }
  }

  ${productFragment}
`;

export { productQuery, productBatchQuery };
