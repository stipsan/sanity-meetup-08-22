import { createHashHistory } from 'history'
import { createElement } from 'react'
import { render } from 'react-dom'
import { Studio } from 'sanity'

import createConfig, { type Config } from '../parts/blog'

export function createStudio(rootElement: HTMLElement, config: Config) {
  if (!rootElement) {
    throw new Error('Missing root element to mount application into')
  }

  return render(
    createElement(Studio, {
      config: createConfig(config),
      unstable_history: createHashHistory(),
      unstable_noAuthBoundary: true,
    }),
    rootElement
  )
}
