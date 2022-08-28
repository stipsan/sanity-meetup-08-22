/* eslint-disable react/no-unescaped-entities */
import { Stack, studioTheme, Text, ThemeProvider } from '@sanity/ui'
import { createMemoryHistory } from 'history'
import { NextStudio } from 'next-sanity/studio'
import { useEffect, useMemo, useState } from 'react'
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride'
import { StudioLayout, StudioProvider, useCurrentUser } from 'sanity'

import config from '../sanity.config'

const history = createMemoryHistory()

export default function StudioPage() {
  const [user, setUser] = useState<ReturnType<typeof useCurrentUser>>(null)
  const [run, setRun] = useState(false)

  const steps = useMemo<Step[]>(
    () => [
      {
        content: (
          <Stack space={4}>
            <Text size={4}>Hello {user?.name}!</Text>
            <Text size={4}>Welcome to </Text>
            <Text size={4} weight="bold">
              Legit Reviews International Ltd.
            </Text>
            <Text size={4}>
              The world's largest provider of 5-star ⭐️⭐️⭐️⭐️⭐️ reviews.
            </Text>
          </Stack>
        ),
        placement: 'center',
        target: 'body',
      },
      {
        content: (
          <Text size={4}>
            You'll be writing reviews for a lot of diverse markets. Some of them
            have sophisticated spam detection tools so there's no room for
            laziness!
          </Text>
        ),
        placement: 'auto',
        placementBeacon: 'right',
        target: '[data-testid="pane-content"] [data-ui="Stack"]',
      },
      {
        content: (
          <Stack space={4}>
            <Text size={4}>Amazon is by far our most popular request.</Text>
            <Text size={4}>
              Let's use them as the target for your first review 🥳
            </Text>
          </Stack>
        ),
        placement: 'auto',
        placementBeacon: 'right',
        target: '[href="/review/amazon"]',
      },
      {
        content: <Text size={4}>Here's where you create new reviews</Text>,
        placement: 'auto',
        target: '[data-testid="action-intent-button"]',
      },
      {
        content: (
          <Text size={4}>
            Make the title creative, unique and catchy. But also generic and
            vague enough to fit any product.
          </Text>
        ),
        spotlightClicks: true,
        placement: 'auto',
        target: '#title',
      },
      {
        content: <Text size={4}>Give it your honest rating.</Text>,
        spotlightClicks: true,
        placement: 'auto',
        target:
          '[data-testid="field-rating"] [data-testid="change-bar__field-wrapper"]',
      },
      {
        content: (
          <Text size={4}>
            A good description is not too lengthy and not too short.
          </Text>
        ),
        spotlightClicks: true,
        placement: 'auto',
        target: '#description',
      },
      {
        content: (
          <Text size={4}>
            Then you publish and rince and repeat to get rich in no time 🤑
          </Text>
        ),
        spotlightClicks: true,
        placement: 'auto',
        target: '[data-testid="action-Publish"]',
      },
    ],
    [user]
  )

  useEffect(() => void setRun(!!user), [user])

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type, step } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (finishedStatuses.includes(status)) {
      setRun(false)
    }

    if (type === 'step:before') {
      switch (step.target) {
        case '[href="/review/amazon"]':
          history.push('/review/amazon')
          break

        case '[data-testid="action-intent-button"]':
          history.push('/intent/create/template=amazon;type=amazon/')
          break
      }
    }
  }

  return (
    <>
      <NextStudio config={config}>
        <StudioProvider config={config} unstable_history={history}>
          <StudioLayout />
          <GetCurrentUser onChange={setUser} />
        </StudioProvider>
      </NextStudio>
      <ThemeProvider theme={studioTheme}>
        <Joyride
          callback={handleJoyrideCallback}
          continuous
          disableScrolling
          hideBackButton
          hideCloseButton
          run={run}
          showProgress
          showSkipButton={false}
          steps={steps}
        />
      </ThemeProvider>
    </>
  )
}

function GetCurrentUser({
  onChange,
}: {
  onChange: (user: ReturnType<typeof useCurrentUser>) => void
}) {
  const user = useCurrentUser()

  useEffect(() => void onChange(user), [onChange, user])

  return null
}
