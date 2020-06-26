const website = require('./config/website');

module.exports = {
  siteMetadata: {
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    siteUrl: website.siteUrl,
    image: website.image,
    owner: website.owner,
    twitterUsername: website.twitterUsername,
    facebookAppID: '',
  },
  font: website.font,
  work1Config: website.work1Config,
  work2Config: website.work2Config,
  work3Config: website.work3Config,
};
