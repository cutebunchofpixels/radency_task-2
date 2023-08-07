/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                body: "0.75rem",
                "body-xl": "0.875rem",
                "body-2xl": "1rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};

