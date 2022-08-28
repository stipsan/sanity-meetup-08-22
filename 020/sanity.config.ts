import { StarIcon } from '@sanity/icons'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

export default createConfig({
  title: 'Legit Reviews International Ltd.',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({
      icon: StarIcon,
      name: 'review',
      title: 'Review farm',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
