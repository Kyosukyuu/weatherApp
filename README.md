# NextJS Template

This is a template of [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dependencies

The template comes with some useful dependencies to get started:

- [Chakra UI](https://chakra-ui.com/), a sensible and easy to use component library
  - The template also comes with a useful custom hook, `useMediaQueryBool`, which uses Chakra UI's `useMediaQuery` hook under the hood with basic React hooks to ensure the media queries are working correctly in a server-side environment
  - A basic theme file for Chakra UI is already provided
- [React Icons](https://react-icons.github.io/react-icons/), a npm package that has a ton of popular icons
- [SWR](https://swr.vercel.app/), a simple and lightweight way of fetching data developed by Vercel, the same team behind NextJS
  - A fetcher function is already pre-defined in the `helpers` folder
- [React Hook Form](https://react-hook-form.com/), flexible form building with easy-to-use validation

## Other Features

- The template also comes with a preset and bare-bones custom document file labeled `_document.js`, wherein the html tags are already set to `en` as the `lang` attribute

## Getting Started

First, install the dependencies:

```bash
npm install
```

After the dependencies are finished installing, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
