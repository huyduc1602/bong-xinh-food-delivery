import { type Config } from 'tailwindcss';

export default {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B35',
                secondary: '#2E294E',
                accent: '#1B998B',
                light: '#F5F5F5',
                dark: '#1A1A1A',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
