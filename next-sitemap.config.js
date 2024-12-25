const axios = require('axios');

// Set your API base URL and endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_NEWS = process.env.NEXT_PUBLIC_API_NEWS;  
const API_STATISTICS = process.env.NEXT_PUBLIC_API_STATISTICS;

// Known category slugs (hardcoded based on your database categories)
const categorySlugs = [
  '/category/nepal-premier-league',
  '/category/nepal-national',
  '/category/nepal-domestic',
  '/category/nepal-editorial',
  '/category/elite-cup-jay-trophy'
];

async function fetchDynamicSlugs() {
  try {
    // Fetch Spotlight Slugs
    const spotlightResponse = await axios.get(API_NEWS, {
      params: { FetchNewsDetails: true }
    });
    const spotlightSlugs = spotlightResponse.data.map(item => `/Spotlight/${item['Slug Url']}`);

   const PlayerResponse = await axios.get(API_STATISTICS, {
    params: { Statistics: true }  
  });
  const PlayerSlugs = PlayerResponse.data.map(item => `/Statistics/${item['Slug Url']}`);

  return [...spotlightSlugs, ...categorySlugs, ...PlayerSlugs];
  } catch (error) {
    console.error('Error fetching dynamic slugs:', error);
    return [];  
  }
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thecricnerd.com/',  
  generateRobotsTxt: true, 
  additionalPaths: async (config) => {
    const dynamicPaths = await fetchDynamicSlugs();
    return dynamicPaths.map((slug) => ({
      loc: slug,
      lastmod: new Date().toISOString(), 
      changefreq: 'daily',  
      priority: 1.0,  
    }));
  },
};
