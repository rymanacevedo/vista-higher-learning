# Vista Higher Learning Recording Activity

A React-based recording activity interface built with TypeScript, Tailwind CSS, and Vite.

## Prerequisites

Before you begin, ensure you have installed:
- [Bun](https://bun.sh/) (For package management and running the project)

## Installation

1. Clone the repository
```bash
git clone https://github.com/rymanacevedo/vista-higher-learning.git
cd vista-higher-learning
```

2. Install dependencies
```bash
bun install
```

## Running the Project

To start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
vista-higher-learning/
├── src/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## Features

- Recording activity interface with three main controls:
  - Stop button
  - Record button
  - Review button
- Text area for student responses
- Final answer confirmation with radio buttons
- Responsive design for screens under 350px
- Accessibility-focused implementation

## Approach

The project leverages modern web development tech. React is used for building the user interface, providing a component-based architecture that enhances reusability and maintainability. TypeScript adds static typing, which helps catch errors early in the development process and improves code quality. Biome is similar to ESLint/Prettier, but is much easier to configure and run much faster. Tailwind CSS is employed for styling, offering utility-first classes that streamline the design process and ensure a consistent look and feel. Vite is chosen as the build tool for its fast development server and optimized build process, while Bun is used for package management and running the project, offering performance benefits over traditional tools. I've used these in pass project and it seems like a good "framework" for those used to node projects.

## Critique

The use of React and TypeScript ensures a scalable and maintainable codebase, while Tailwind CSS provides a clean and efficient styling approach. Tailwind takes some time to get used to, but if you've used other UI/utility libraries it will come easy.  However, there is always room for improvement. More animations could be present and using some of Tailwind's transformer classes and utilizing @keyframes to make the interface more engaging. Tailwind was giving me issues when I created components based off color, and I have issues with the "purge" feature not adding the styles to the inline stylesheet.

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Bun
