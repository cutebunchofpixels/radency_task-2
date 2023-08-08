module.exports = {
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: {
                    implementation: require.resolve("postcss"),
                },
            },
        },
    ],
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};

