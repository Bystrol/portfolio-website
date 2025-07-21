/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.michalbystryk.dev',
  alternateRefs: [
    {
      href: 'https://www.michalbystryk.dev',
      hreflang: 'en'
    },
    {
      href: 'https://www.michalbystryk.dev',
      hreflang: 'pl'
    }
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api']
      }
    ]
  }
}
