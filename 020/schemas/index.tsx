import { defineType } from 'sanity'

const farms = [
  'Airbnb',
  'Amazon',
  'AppStore',
  'Best Buy',
  'eBay',
  'G2 Reviews',
  'Glassdoor',
  'Google My Business',
  'Google Play',
  'LinkedIn',
  'Metacritic',
  'Nintendo eShop',
  'PlayStation Store',
  'Rotten Tomatoes',
  'Sephora',
  'Steam',
  'TripAdvisor',
  'Trustpilot',
  'Walmart',
  'Xbox Games',
  'Yelp',
] as const

export const schemaTypes = farms.map((title) =>
  defineType({
    name: title.toLowerCase().replace(/\s+/g, '-'),
    title,
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'string',
        readOnly: true,
        initialValue: '5',
        options: {
          layout: 'radio',
          direction: 'horizontal',
          list: [
            {
              title: '⭐️',
              value: '1',
            },
            {
              title: '⭐️⭐️',
              value: '2',
            },
            {
              title: '⭐️⭐️⭐️',
              value: '3',
            },
            {
              title: '⭐️⭐️⭐️⭐️',
              value: '4',
            },
            {
              title: '⭐️⭐️⭐️⭐️⭐️',
              value: '5',
            },
          ],
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
    ],
  })
)
