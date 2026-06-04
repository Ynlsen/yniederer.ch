/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yniederer.ch',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/Maturaarbeit_Kryptowährungen_YannickNiederer.pdf')
    ];
  },
};