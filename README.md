# ProTalent CV

A free,professional CV and resume builder by [DPN Media Works](https://dpnmw.com).

**Live:** [protalent.cv](https://protalent.cv)

## Features

### Resume Building
- Real-time preview as you type
- 13 professionally designed templates
- Comprehensive section support: experience, education, skills, projects, certifications, publications, volunteer work, references, and custom sections
- Drag-and-drop reordering of sections and items
- Rich text editing with table support
- Multi-page resume support
- Undo/redo history

### Customization
- Typography control (font family, weight, size, line height via Google Fonts)
- Custom color schemes
- Adjustable margins, spacing, and column layouts
- Profile picture with border, shadow, and rotation options
- Skill/language level display styles (icons, circles, bars)
- Custom CSS for advanced styling
- A4, Letter, and free-form page formats

### AI Integration
- **Supported providers:** OpenAI, Anthropic Claude, Google Gemini, Ollama (local), Vercel AI Gateway
- Resume parsing from PDF and DOCX files
- AI chat assistant for resume editing via natural language
- One-click resume tailoring for specific job postings
- ATS-optimized summary and skills rewriting

### Export & Sharing
- Export to PDF, DOCX, and JSON
- Share resumes via public links (`/{username}/{slug}`)
- Optional password protection on shared links
- Optional link expiration (configurable per plan)
- View and download statistics

### Authentication
- Email/password, Google OAuth, GitHub OAuth, custom OAuth
- Passkeys (passwordless)
- Two-factor authentication (TOTP + backup codes)
- API key support for programmatic access

### Developer Features
- MCP (Model Context Protocol) server at `/mcp` for LLM integration
- OpenAPI documentation at `/api/openapi`
- Type-safe ORPC API
- JSON import/export for backup and portability

### Platform
- Dark mode
- Multi-language support with RTL
- Mobile and tablet responsive
- Self-hostable with Docker

## Quick Start

```bash
# Clone the repository
git clone https://github.com/dpnmw/protalentcv.git
cd protalentcv

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Or start with Docker
docker compose up -d
```

## Tech Stack

| Category         | Technology                          |
| ---------------- | ----------------------------------- |
| Framework        | TanStack Start (React 19, Vite)     |
| Runtime          | Node.js                             |
| Language         | TypeScript                          |
| Database         | PostgreSQL with Drizzle ORM         |
| API              | ORPC (type-safe RPC)                |
| Auth             | Better Auth                         |
| Styling          | Tailwind CSS + Radix UI (shadcn)    |
| State Management | Zustand + TanStack Query            |
| AI               | Vercel AI SDK (multi-provider)      |
| LLM Integration  | MCP SDK                             |
| Storage          | Local filesystem or S3-compatible   |

## Configuration

Key environment variables (see `.env.example` for full reference):

| Variable               | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `DATABASE_URL`         | PostgreSQL connection string                     |
| `BETTER_AUTH_SECRET`   | Auth signing secret                              |
| `FLAG_ENABLE_PAID_PLAN`| Show/hide paid tier UI (default: `false`)        |
| `FREE_RESUME_LIMIT`    | Max resumes on free plan (default: `3`)          |
| `FREE_SHARING_DAYS`    | Sharing link expiry in days (default: `30`)      |
| `UPGRADE_URL`          | External URL for plan upgrades                   |
| `SMTP_*`               | Email configuration (optional)                   |

## Attribution

ProTalent CV is built on [Reactive Resume](https://github.com/AmruthPillai/Reactive-Resume) by Amruth Pillai, licensed under the [MIT License](./LICENSE).

## License

[MIT](./LICENSE)
