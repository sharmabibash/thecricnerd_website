import { useEffect } from 'react';

const NPLStatsMetaInfo = () => {
  useEffect(() => {
    const meta = {
      title: 'NPL 2024 Statistics | Top Run Scorers & Wicket Takers | The Cricket Nerd',
      description:
        'Explore NPL 2024 statistics including top run scorers, top wicket takers, and detailed player performances. Stay updated with Nepal Premier League stats and insights.',
      keywords:
        'NPL 2024 statistics, Nepal Premier League stats, top run scorers NPL, top wicket takers NPL, Nepal cricket players, NPL 2024 updates, cricket stats Nepal, cricket statistics NPL 2024',
      canonical: 'https://www.thecricnerd.com/npl-stats',
      openGraph: {
        title: 'NPL 2024 Statistics | Top Run Scorers & Wicket Takers | The Cricket Nerd',
        description:
          'Explore NPL 2024 statistics including top run scorers, top wicket takers, and detailed player performances. Stay updated with Nepal Premier League stats and insights.',
        type: 'website',
        image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
        url: 'https://www.thecricnerd.com/npl-stats',
        locale: 'en_US',
      },
      robots: { index: true, follow: true },
    };

    // Set document title
    document.title = meta.title;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = meta.description;

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = meta.keywords;

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = meta.canonical;

    // Open Graph meta tags
    const setOgMeta = (property, content) => {
      let metaOg = document.querySelector(`meta[property="${property}"]`);
      if (!metaOg) {
        metaOg = document.createElement('meta');
        metaOg.setAttribute('property', property);
        document.head.appendChild(metaOg);
      }
      metaOg.content = content;
    };

    setOgMeta('og:title', meta.openGraph.title);
    setOgMeta('og:description', meta.openGraph.description);
    setOgMeta('og:type', meta.openGraph.type);
    setOgMeta('og:image', meta.openGraph.image);
    setOgMeta('og:url', meta.openGraph.url);
    setOgMeta('og:locale', meta.openGraph.locale);

    // Meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = meta.robots.index ? 'index, follow' : 'noindex, nofollow';
  }, []);

  return null;
};

export default NPLStatsMetaInfo;
