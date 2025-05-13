This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Overview

This project is a Café Rewards Analytics Dashboard built with Next.js, TypeScript, and Tailwind CSS. The dashboard visualizes key metrics from a café rewards program, with data stored in a Supabase (PostgreSQL) database.

### Project Goals

As outlined in the `prompt.txt` file, this dashboard displays:

1. **KPIs**: Overall completion rate, completion by offer type, percentage of users who completed at least one offer, and average days to complete
2. **Trends**: Daily transactions, weekly completion rate, and stacked bar of offer types over time
3. **Demographics**: Gender breakdown of completions, income vs. completion rate, and channel effectiveness
4. **Summaries**: Total transactions, percentage of BOGO offers completed, and 7-day rolling average spend

### Technical Implementation

The dashboard:
- Uses Supabase for data storage and retrieval
- Renders metrics as cards/charts using React and Tailwind CSS
- References Figma designs for layout and styling
- Is a read-only analytics frontend based on live database values

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
