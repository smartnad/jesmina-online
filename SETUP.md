# Jesmina Online - Setup Instructions

Since the automatic setup could not be completed due to missing Node.js, the project files have been created manually. Follow these steps to get the project running.

## 1. Install Node.js
You need Node.js to run this project.
- Download and install the **LTS version** from [nodejs.org](https://nodejs.org/).
- After installation, restart your computer or terminal.

## 2. Install Dependencies
Open your terminal in this folder (`c:\Users\netna\OneDrive\Desktop\jesmina online`) and run:

```bash
npm install
```

This will download Next.js, React, Tailwind CSS, and other required libraries.

## 3. Run the Development Server
To start the website locally, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure
- `src/app`: Contains the pages and layout.
- `src/components`: (To be created) Will contain UI components.
- `src/lib`: Utility functions.
- `tailwind.config.ts`: Design system configuration (colors, fonts).
