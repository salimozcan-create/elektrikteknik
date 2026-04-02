/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.elektrikteknik.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/dashboard/*'],
  transform: async (config, path) => {
    // Her sayfa için öncelik ve sıklık ayarı
    const priorities = {
      '/': 1.0,
      '/elektrik-usta': 0.9,
      '/elektrik-urun': 0.8,
      '/gunes-enerji': 0.8,
      '/guvenlik': 0.8,
      '/hakkimizda': 0.6,
      '/iletisim': 0.6,
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}