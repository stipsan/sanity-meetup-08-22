export const schemaTypes = [
  {
    name: 'bookmark',
    title: 'Bookmark',
    type: 'document',
    fields: [
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        options: {
          fetch: true,
        },
      },
    ],
    preview: {
      select: {
        url: 'url',
        title: 'title',
      },
      prepare: (selection: any) => {
        let faviconUrl = ''
        let host = ''
        try {
          const { hostname } = new URL(selection.url)
          faviconUrl = new URL(`https://icon.horse/icon/${hostname}`).toString()
          host = hostname
        } catch {
          // ignore
        }

        return {
          title: selection.title || 'Untitled',
          subtitle: host,
          // eslint-disable-next-line @next/next/no-img-element
          media: <img alt="" src={faviconUrl} />,
        }
      },
    },
  },
  {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    ],
  },
]
