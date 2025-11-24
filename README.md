# Jesmina Online - Premium Website

A fully functional, dynamic, and premium website built with Next.js, Tailwind CSS, Framer Motion, and MongoDB.

## Features
- **Premium Design**: Pastel color palette, cursive fonts, and smooth animations.
- **Dynamic Content**: All content (Services, Pricing, Portfolio, Blog) is editable via the Admin Panel.
- **Admin Panel**: Secure login to manage all website content.
- **Contact Form**: Fully functional contact form that saves messages to the database.
- **Responsive**: Optimized for all devices.

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin Panel (Protected)
│   ├── api/            # Backend API Routes
│   ├── blog/           # Blog Page
│   ├── contact/        # Contact Page
│   ├── portfolio/      # Portfolio Page
│   ├── pricing/        # Pricing Page
│   ├── services/       # Services Page
│   ├── login/          # Admin Login
│   ├── layout.tsx      # Root Layout (Navbar + Footer)
│   └── page.tsx        # Home Page
├── components/
│   ├── ui/             # Reusable UI components (Button, etc.)
│   ├── Navbar.tsx      # Navigation Bar
│   └── Footer.tsx      # Footer
├── lib/
│   ├── db.ts           # Database Connection
│   └── utils.ts        # Utility functions
└── models/             # Mongoose Database Models
    ├── Service.ts
    ├── Pricing.ts
    ├── Portfolio.ts
    ├── Post.ts
    └── Contact.ts
```

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Create a `.env.local` file in the root directory with the following variables:
    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jesmina-online
    NEXTAUTH_SECRET=your-super-secret-key-change-this
    NEXTAUTH_URL=http://localhost:3000
    ADMIN_EMAIL=admin@example.com
    ADMIN_PASSWORD=password123
    ```

3.  **Run Locally**:
    ```bash
    npm run dev
    ```
    Visit [http://localhost:3000](http://localhost:3000).

4.  **Access Admin Panel**:
    -   Go to [http://localhost:3000/login](http://localhost:3000/login).
    -   Log in with the credentials defined in your `.env.local`.

## Deployment

This project is ready to be deployed on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Add the Environment Variables (`MONGODB_URI`, `NEXTAUTH_SECRET`, etc.) in the Vercel Project Settings.
4.  Deploy!

## Technologies Used
-   **Frontend**: Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lucide React.
-   **Backend**: Next.js API Routes.
-   **Database**: MongoDB (Mongoose).
-   **Authentication**: NextAuth.js.
