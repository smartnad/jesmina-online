import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                pastel: {
                    pink: "#FFB7B2",
                    lilac: "#C7CEEA",
                    cream: "#FDFBF7", // Warmer, richer cream
                    gold: "#D4AF37", // Metallic gold
                    text: "#2D2D2D", // Softer black
                    accent: "#FF9A9E", // Vibrant gradient start
                    accent2: "#FECFEF", // Vibrant gradient end
                },
                glass: {
                    100: "rgba(255, 255, 255, 0.1)",
                    200: "rgba(255, 255, 255, 0.2)",
                    300: "rgba(255, 255, 255, 0.3)",
                    border: "rgba(255, 255, 255, 0.5)",
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                cursive: ['var(--font-great-vibes)'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'neon': '0 0 10px rgba(255, 183, 178, 0.5), 0 0 20px rgba(255, 183, 178, 0.3)',
                '3d': '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
                'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #FFB7B2 0deg, #C7CEEA 180deg, #FFB7B2 360deg)',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 15s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
export default config;
