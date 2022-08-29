import { createCliConfig } from 'sanity/cli'
import type { UserConfig } from 'vite'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET

export default createCliConfig({
  api: { projectId, dataset },
  vite: (config: UserConfig): UserConfig => ({
    ...config,
    build: {
      ...config.build,
      // esbuild requires es2022 or later to allow top-level await: https://esbuild.github.io/content-types/#javascript
      target: 'es2022',
    },
  }),
})
