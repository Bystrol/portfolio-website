/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.michalbystryk.dev',
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
