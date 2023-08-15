## Description

Frontend project using [Next.js](https://nextjs.org/) and [Tailwind](https://tailwindcss.com/). I'm just using it for testing and for fun, but Next comes with a lot of great features, like the "Routing system"

## Project Structure

Anything inside `app` with a `page.tsx` is already recognized as a page, so the main page is `app/page.tsx`.

- the first real pages are inside `employee/list` and `employee/details`
- the project is using a context store `Context/store`
- the generic componetes are inside `app/components`
- specific components/types are insde the current pages (ex: `employee/list/localComponents` or `employee/details/types`)
- types and interfaces are inside the `types` file
- utils folder is used to store generic functions, contants, etc

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## OBS (TODO)

Found the following problens/news using Next:

- Takes time to understand how "Server/client components are used"
- Client components can't make api calls (need to find how to enable cors)
- Couldn't implement the pages using Context beause of CORS (added an example on "employee/details/:id")
- Need to Add the project to a container as well

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
