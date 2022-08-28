import { NextStudio } from 'next-sanity/studio'
import createConfig from 'parts/blog'

const config = createConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_BLOG!,
  basePath: '/blog',
  title: 'Blog [staging]',
})

export default function StudioPage() {
  return <NextStudio config={config} />
}
