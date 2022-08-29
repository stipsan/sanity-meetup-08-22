import { createConfig } from 'sanity'
import { deskTool, usePaneRouter } from 'sanity/desk'

import { schemaTypes } from './schemas'

export default createConfig({
  title: 'meetup-08-22-030',

  projectId: 'w0v7mkda',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
