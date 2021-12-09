# Sveltekit with Graphcms - Authentication

This respository is the the result from two very good articles and 

1. "Authentication in SvelteKit using cookies" from Jannik Wempe (you can read [here](https://blog.logrocket.com/authentication-sveltekit-using-cookies/))
2. "Next.js Authentication with NextAuth.js and GraphCMS" from Jamie Barton (you can read [here](https://graphcms.com/blog/nextjs-authenticaton-with-nextauth-and-graphcms))
3. [Scott Spence](https://scottspence.com/)


## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
