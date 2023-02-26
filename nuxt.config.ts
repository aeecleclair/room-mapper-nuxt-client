// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Matrix Room Mapper",
            meta: [
                { name: "description", content: "une description" },
            ],
        },
    },
})
