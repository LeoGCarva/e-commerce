# Simple Shop

A study project for learning Next.js by building a small online store. It lists products from the [Fake Store API](https://fakestoreapi.com) and shares them across the app with the React Context API. This repository is named `e-commerce`; Simple Shop is the name shown in the app.

## Project status

The project is in progress.

**Done:**

- Product grid with images, titles, and prices
- Loading and error messages while fetching products
- A quantity selector on each product card
- Navigation between the home and cart pages

**Still to do:**

- Make the "Add to Cart" button work
- Build the cart page, which is still a placeholder
- Update the cart counter in the navigation bar, which always shows 0

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Axios

## Getting started

You need Node.js and npm. The app doesn't need any environment variables, but it does need internet access to load the products.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
  cart/         Cart page
  components/   Navbar and ProductCard
  context/      Product data fetching and shared state
  types/        TypeScript types
  layout.tsx    Root layout and context provider
  page.tsx      Product listing
```
