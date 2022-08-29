/// <reference types="vite/client" />

import { BookIcon } from '@sanity/icons'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

const projectId = import.meta.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_API_DATASET

export default createConfig({
  title: 'Bookmarks',
  icon: BookIcon,

  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
