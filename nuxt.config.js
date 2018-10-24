const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/VueNuxt/'
    }
  } : {}

export default {
    ...routerBase,
    css: [
        'bulma/css/bulma.css',
        '~/assets/style.css'
    ]
}