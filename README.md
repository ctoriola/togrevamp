# Temple of Glory Abuja

A modern, visually stunning website for Temple of Glory Abuja built with [Next.js](https://nextjs.org), featuring responsive design, smooth animations, and an extensive component library.

## About the Project

Temple of Glory Abuja is a contemporary place of worship with a digital presence that reflects its mission and community values. This website serves as the primary digital touchpoint for visitors, members, and the broader community.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with typography
- **UI Components**: [Radix UI](https://www.radix-ui.com) primitive components
- **Icons**: [@tabler/icons-react](https://tabler-icons.io) and [@heroicons/react](https://heroicons.com)
- **Authentication**: [Better Auth](https://betterauth.dev)
- **Database**: [LibSQL](https://turso.tech)
- **Form Handling**: [React Hook Form](https://react-hook-form.com) with Zod validation
- **Visualization**: [Three.js](https://threejs.org) for 3D elements, [Cobe](https://cobe.io) for globe, and [tsParticles](https://tsparticles.js.org)
- **Animations**: Framer Motion
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page auto-updates as you edit files in `src/app/page.tsx`.

## Project Structure

```
src/
├── app/              # Next.js app directory with pages and layouts
├── components/       # React components
│   └── ui/          # Reusable UI component library
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
└── visual-edits/    # Visual editing and messaging components
```

## Key Features

- **Responsive Design**: Mobile-first approach with seamless experience across devices
- **Component Library**: Comprehensive set of reusable UI components from Radix UI
- **Modern Aesthetics**: Gradient backgrounds, smooth transitions, and polished interactions
- **3D Elements**: Three.js integration for enhanced visual experiences
- **Visual Editing**: Built-in visual editing capabilities for content management
- **Error Handling**: Comprehensive error reporting and user-friendly error messages

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## Development

The project uses modern development tools and best practices:
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling consistency
- Component-driven development with Radix UI primitives

## Contributing

When contributing to this project, please follow the existing code structure and component patterns.

## License

Private project for Temple of Glory Abuja.
