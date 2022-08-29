import { createConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { deskTool } from 'sanity/desk'

export default createConfig({
  title: 'meetup-08-22-020',

  projectId: 'mamrryvm',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
