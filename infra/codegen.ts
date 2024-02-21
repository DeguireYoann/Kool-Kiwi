import { CodegenConfig } from "@graphql-codegen/cli";

const CMS_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}/environments/${process.env.CTF_ENVIRONMENT}`
const config: CodegenConfig = {
    schema: [
    {
        [CMS_URL]: {
            headers: {
                authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}`,
            },
        },
    }],
    documents: './infra/src/queries/',
    generates: {
        'dist/index.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-vue-apollo',
                {
                    add: {
                        content: ['/* eslint-disable */', '// @ts-nocheck', '// THIS IS A GENERATED FILE. Do not edit manually.'],
                    },
                },
            ],
            config: {
                withCompositionFunctions: true,
                vueCompositionApiImportFrom: "vue"
            }
        },
    },
}

export default config