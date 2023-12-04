
export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'hhttp://translation-bureau.com/sitemap.xml',
    }
  }