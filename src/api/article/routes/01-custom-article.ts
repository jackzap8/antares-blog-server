
export default {
    routes: [
        {
            method: 'GET',
            path: '/articles/:slug',
            handler: 'article.findOneBySlug'
        }
    ]
}