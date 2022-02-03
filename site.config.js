module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '1e1694d953ae4b529142b1128bfef084',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'RSS Source | RSS订阅源推荐',
  domain: 'rss-source.com',
  author: 'Issei',

  // open graph metadata (optional)
  description: 'RSS Source 是一个RSS订阅源推荐·收藏网站｜充实你的订阅源，提高信息质量。',
  socialImageTitle: 'RSS Source',
  socialImageSubtitle: 'RSS订阅源推荐｜充实你的订阅源，提高信息质量。',

  // social usernames (optional)
  twitter: 'ryou-issei',
  github: null,
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    'technology': 'bf7604b81aeb47ccbafb0680e0b87d9d',
    'coding': 'c8aab68522e64c33890994a91cd4c621',
    'pm': '8a05ffbc78f941e7b0cd285ba3504647',
    'design&art': '978d03c5ca0e49f9937e121cb0001624',
    'business': '9bdc9e104e0f4b2e8f6bf6a4bad54e54',
    'blog': '21a94fa3aa6f4d0eb067629e694844a8',
    'Arts': '20163dad20dc4aafa58ed73eaccfec7b',
    'news': '03faa47a95d84b63ab197e517f4ca71f',
    'architect': '8309b2d169a449ad988d80445641d039',
    'all-sources': '66a93e09f448459d8c6326ec9bcf1e12',
    'sources-cn': 'a823011277854b04be6ee8d91682b55d',
    'sources-En': '1f12bd7832be4748ae174a164348015d',
    'sources-jp': '82d7df45126944598c4feec7dde0e34d',
    'Filter-Bubble': '643a00d4a286463b804b3d19419e3e9e',
    'reeder-4': 'b62c9c5bc30d4d7f88a5979d268c234e',
    'english': 'RSS-Source-RSS-feeds-recommendation-902a1f504fa441c4b82ed1a84f3fe122'
  }
}
