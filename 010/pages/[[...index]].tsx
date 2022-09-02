import { BookIcon } from '@sanity/icons'
import { Box, Button, Flex, Stack, useToast } from '@sanity/ui'
import { theme } from 'https://themer.sanity.build/api/hues?default=61667c;600&primary=fbd305;200&transparent=61667c;600&positive=43d675;300&caution=fbad24;300&lightest=fcfcfd&darkest=0f1013'
import { NextStudio } from 'next-sanity/studio'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { useFormValue } from 'sanity/form'

import { schemaTypes } from '../schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const config = createConfig({
  projectId,
  dataset,
  icon: BookIcon,
  logo: BookIcon,
  title: 'Bookmarks',
  theme,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },

  form: {
    renderInput(props, next) {
      if (props.schemaType.options?.fetch && props.id === 'title') {
        return <FetchInput>{next(props)}</FetchInput>
      }

      return next(props)
    },
  },
})

function FetchInput({ children }: { children: React.ReactNode }) {
  const { push: pushToast } = useToast()
  const id = useFormValue(['_id'])

  return (
    <Stack space={3}>
      <Flex>
        <Box flex={1}>{children}</Box>
        <Box marginLeft={1}>
          <Button
            mode="ghost"
            type="button"
            onClick={(event) => {
              event.preventDefault()
              const target = event.currentTarget
              target.disabled = true
              fetch(`/api/title/${id}`)
                .then(
                  (res) => {
                    if (!res.ok) {
                      throw new Error(res.statusText)
                    }
                    pushToast({
                      closable: true,
                      status: 'success',
                      title: 'Title updated',
                    })
                  },
                  (err) => {
                    pushToast({
                      closable: true,
                      duration: 30000, // 30s
                      status: 'error',
                      title: err.message,
                    })
                  }
                )
                .finally(() => {
                  target.disabled = false
                })
            }}
            text={'Fetch'}
          />
        </Box>
      </Flex>
    </Stack>
  )
}

export default function StudioPage() {
  return <NextStudio config={config}
  // Turn off login in production so that anyone can look around in the Studio and see how it works
      // eslint-disable-next-line no-process-env
      unstable_noAuthBoundary={process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'}
   />
}
