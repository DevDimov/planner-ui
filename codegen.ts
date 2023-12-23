import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://nameless-brook-540102.eu-central-1.aws.cloud.dgraph.io/graphql',
  documents: ['src/gql/operations/**/*.ts'],
  generates: {
    'src/gql/codegen/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: "gql",
      },
      // plugins: [],
    },
    // './graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
  },
  ignoreNoDocuments: false,
}

export default config
