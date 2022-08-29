/// <reference types="vite/client" />

import { BookIcon } from '@sanity/icons'
import { isValidElement } from 'react'
import { isValidElementType } from 'react-is'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { PikachuIcon, PikachuLogo } from './components/icons/Pikachu'
import { schemaTypes } from './schemas'

const projectId = import.meta.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_API_DATASET

const { theme } = await import(
  'https://themer.sanity.build/api/hues?default=61667c;600&primary=fbd305;200&transparent=61667c;600&positive=43d675;300&caution=fbad24;300&lightest=fcfcfd&darkest=0f1013'
)

const pikachuTheme = { ...theme }

let title = 'Bookmarks'
try {
  /*
  const res = await fetch(
    'https://v2.jokeapi.dev/joke/Any?type=single&safe-mode&format=json&amount=10'
  )
  const { jokes } = await res.json()
  
  const joke = jokes
    .map(({ joke }) => joke)
    .reduce((prev, joke) => (prev.length > joke.length ? joke : prev))
    
    if (joke) title = joke
    // */
  const res = await fetch('https://my-bao-server.herokuapp.com/api/breadpuns')
  const pun = await res.text()
  if (pun) title = `🍞 ${pun}`
} catch {
  // ignore
}

console.log(pikachuTheme)

export default createConfig({
  title,
  icon: PikachuIcon,
  // logo: PikachuLogo,

  projectId,
  dataset,
  theme: pikachuTheme,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
