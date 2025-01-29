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

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Bun