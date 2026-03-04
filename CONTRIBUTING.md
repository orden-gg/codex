# Contributing to Fireball Codex

Thank you for your interest in contributing to the Fireball Codex! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

If you find a bug, have a question, or want to suggest an improvement:

1. Check if the issue already exists in the [issue tracker](https://github.com/orden-gg/codex/issues)
2. If not, create a new issue with a clear title and description
3. Include steps to reproduce (for bugs) or a detailed explanation (for features)

### Improving Documentation

Documentation improvements are always welcome! This includes:

- Fixing typos or grammatical errors
- Clarifying confusing sections
- Adding missing information
- Improving examples
- Adding screenshots or diagrams

### Submitting Changes

1. **Fork the repository** and create a new branch from `master`
2. **Make your changes** following our guidelines below
3. **Test your changes locally** with `bun run dev`
4. **Run type checking** with `bun run typecheck`
5. **Commit your changes** with a clear commit message
6. **Submit a pull request** to the `master` branch

## Development Setup

1. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/codex.git
cd codex
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your changes

## Documentation Guidelines

### File Structure

- Place new documentation in the appropriate subdirectory under `content/docs/`
- Use lowercase with hyphens for file names (e.g., `getting-started.mdx`)
- Organize related content into subdirectories

### Content Style

- Write in clear, concise language
- Use active voice and present tense
- Include code examples where relevant
- Add frontmatter to all MDX files:

```mdx
---
title: Your Page Title
description: Brief description of the page content
---
```

### Code Examples

- Use proper syntax highlighting
- Include comments for complex code
- Test all code examples to ensure they work
- Use realistic examples that users can relate to

### Formatting

- Use proper Markdown formatting
- Break up long sections with headings
- Use bullet points for lists
- Use tables for structured data
- Add alt text to images

## Pull Request Guidelines

### Before Submitting

- [ ] Test your changes locally
- [ ] Run `bun run typecheck` to check for TypeScript errors
- [ ] Ensure your changes don't break existing functionality
- [ ] Update relevant documentation if needed
- [ ] Keep pull requests focused on a single change

### PR Description

Provide a clear description of your changes:

- What problem does this solve?
- What changes did you make?
- How can reviewers test your changes?
- Include screenshots for visual changes

### Review Process

- Maintainers will review your PR as soon as possible
- Address any feedback or requested changes
- Once approved, a maintainer will merge your PR

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Questions?

If you have questions about contributing, feel free to:

- Open a discussion in the repository
- Join our [Discord community](https://discord.gg/fireball)
- Reach out to the maintainers

## License

By contributing to Fireball Codex, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Fireball Codex! 🎉
