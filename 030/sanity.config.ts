import { createConfig } from 'sanity'

import { schemaTypes } from './schemas'

import { deskTool, usePaneRouter } from 'sanity/desk'

export default createConfig({
  title: 'meetup-08-22-030',

  projectId: 'w0v7mkda',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
