# v3 does what v2 don't - Sanity.io Meetup

> [Watch](https://www.youtube.com/watch?v=4jsmHAVbmRk)

## How to run the demos locally

### [bookmarks.studio](https://bookmarks.studio/)

#### Async config demo

1. `cd 010 && npm i`
2. `cp .env.example .env.development` and modify `.env.development` with your own Sanity project
3. `npm run sanity:dev`

#### Nextjs config demo

> Live [bookmarks.studio](https://bookmarks.studio/)

1. `cd 010 && npm i`
2. `cp .env.example .env` and modify `.env` with your own Sanity project
3. `npm run dev`

### [getstarted.lol](https://getstarted.lol)

Use the Deploy button to end up with a working instance of the demo:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstipsan%2Fsanity-meetup-08-22%2Ftree%2Fmain%2F020&project-name=get-started-lol&repository-name=get-started-lol&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

This demo only works if you're logged in to the studio, it doesn't pair with the `unstable_noAuthBoundary` API that the other demos are using.

### [sanity.parts](https://sanity.parts/blog)

This demo shows how one Studio instance:
https://sanity.parts/blog/desk

Is reused and deployed on two other sites:

- [cancelpineapple.pizza](https://www.cancelpineapple.pizza/studio) - [source](https://github.com/stipsan/cancelpineapple.pizza)
- [potatoes.fyi](https://www.potatoes.fyi/studio) - [source](https://github.com/stipsan/potatoes.fyi)

You can start by deploying your own:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstipsan%2Fsanity-meetup-08-22%2Ftree%2Fmain%2F030&project-name=sanity-parts&repository-name=sanity-parts&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

1. `npm i && npm run build:vX`
2. Push the commit to trigger a new vercel deploy.
3. Make a new site, somewhere, and paste a snippet like this:
   ```html
   <div id="sanity"></div>
   <script type="module">
     import { createStudio } from 'https://projectId.sanity-parts.vercel.app/vX/blog.js'
     createStudio(document.querySelector('#sanity'), {
       projectId: 'projectId',
       dataset: 'production',
       title: 'Sanity Studio',
     })
   </script>
   ```
4. Now, whenever you run `npm run build:vX` and push all the Studios using it will update 😉
