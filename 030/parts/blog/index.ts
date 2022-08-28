import { type SingleWorkspace, createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { schemaTypes } from './schemas'

export type Config = Pick<
  SingleWorkspace,
  'projectId' | 'dataset' | 'title' | 'basePath'
>

export default ({ projectId, dataset, title, basePath, ...config }: Config) =>
  createConfig({
    projectId,
    dataset,
    title,
    basePath,
    ...config,
    plugins: [deskTool(), unsplashImageAsset()],
    schema: {
      types: schemaTypes,
    },
  })
