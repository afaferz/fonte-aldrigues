// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Font Aldrigues'
        }
    },
    devtools: { enabled: true },
    modules: [['@nuxtjs/google-fonts', { families: { Roboto: true, } }], 'nuxt-swiper'],
    css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    plugins: ['~/plugins/FontAwesome'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_colors.scss" as *;'
                }
            }
        }
    }
})
