# Fireball Codex

Official documentation site for [Fireball](https://fireball.gg) - the intelligent gaming agent platform for Gigaverse.

**Live Site**: [codex.fireball.gg](https://codex.fireball.gg)

## About

Codex is the documentation repository for Fireball, a complementary game client and automation platform for [Gigaverse](https://gigaverse.io). Fireball helps players automate dungeon runs, manage fishing, run background services, and engage with the Gigaverse ecosystem efficiently.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with Turbopack
- **Documentation**: [Fumadocs](https://fumadocs.vercel.app/) - Modern documentation framework
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Content**: MDX (Markdown + React components)
- **Deployment**: [Vercel](https://vercel.com/)

## Prerequisites

- Node.js 22.0.0 or higher
- [Bun](https://bun.sh/) (recommended) or npm/yarn/pnpm

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd codex
```

2. Install dependencies:

```bash
bun install
```

## Development

Start the development server:

```bash
bun run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun run lint` - Run ESLint
- `bun run typecheck` - Run TypeScript type checking

## Project Structure

```
codex/
├── app/                    # Next.js app directory
│   ├── [[...slug]]/       # Dynamic documentation routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── content/
│   └── docs/              # MDX documentation files
│       ├── index.mdx      # Homepage
│       ├── features/      # Feature documentation
│       ├── games/         # Game guides (Dungeons, Fishing)
│       ├── guides/        # General guides
│       └── changelog/     # Version history
├── lib/                   # Utility functions
├── source.config.ts       # Fumadocs configuration
├── next.config.mjs        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json           # Vercel deployment config
```

## Writing Documentation

Documentation is written in MDX format and stored in the `content/docs/` directory.

### Creating a New Page

1. Create a new `.mdx` file in the appropriate directory under `content/docs/`
2. Add frontmatter at the top:

```mdx
---
title: Your Page Title
description: Brief description of the page
---

Your content here...
```

3. The file will automatically be available in the documentation based on its path

### Using Components

MDX allows you to use React components within your markdown:

```mdx
<Card title="Getting Started" href="/getting-started">
  Set up your account and start playing
</Card>
```

See the [Fumadocs documentation](https://fumadocs.vercel.app/) for available components.

## Contributing

1. Create a new branch for your changes
2. Make your changes to the MDX files or code
3. Test locally with `bun run dev`
4. Run `bun run typecheck` to verify TypeScript
5. Submit a pull request

## Content Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Add screenshots or diagrams for complex features
- Keep the table of contents up to date
- Follow the existing file structure and naming conventions

## Support

For questions or issues:

- Open an issue in this repository
- Join the [Fireball Discord community](https://discord.gg/fireball)
- Visit [fireball.gg](https://fireball.gg)

## License

[Add your license here]

---

Built with [Fumadocs](https://fumadocs.vercel.app/) and [Next.js](https://nextjs.org/)
