import { useEffect } from 'react';

const MetaInfo = ({ Slug }) => {
  const getMetaInfo = (Slug) => {
    switch (Slug) {
      case 'nepal-national':
        return {
          title: 'Nepal National Cricket | The Cricket Nerd | News, Matches, Players',
          description:
            'Stay updated with all the latest news, match updates, and player analysis of the Nepal National Cricket team. Your ultimate guide to Nepal Cricket!',
          keywords:
            'Nepal National Cricket, Nepal cricket team, cricket news Nepal, cricket players Nepal, Nepal matches, cricket updates Nepal, Nepal cricket analysis, cricket blog Nepal',
          canonical: 'https://www.thecricketnerd.com/category/nepal-national',
          openGraph: {
            title: 'Nepal National Cricket | The Cricket Nerd | News, Matches, Players',
            description:
              'Stay updated with all the latest news, match updates, and player analysis of the Nepal National Cricket team. Your ultimate guide to Nepal Cricket!',
            type: 'article',
            image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
            url: 'https://www.thecricketnerd.com/category/nepal-national',
            locale: 'en_US',
          },
          robots: { index: true, follow: true },
        };

      case 'nepal-premier-league':
        return {
          title: 'Nepal Premier League | The Cricket Nerd | News, Matches, Teams',
          description:
            'Catch the latest updates, schedules, and team news of the Nepal Premier League. Dive into Nepal exciting cricket league with The Cricket Nerd.',
          keywords:
            'Nepal Premier League, Nepal cricket league, NPL news, Nepal cricket teams, cricket matches Nepal, cricket updates NPL, cricket blog Nepal',
          canonical: 'https://www.thecricketnerd.com/category/nepal-premier-league',
          openGraph: {
            title: 'Nepal Premier League | The Cricket Nerd | News, Matches, Teams',
            description:
              'Catch the latest updates, schedules, and team news of the Nepal Premier League. Dive into Nepal exciting cricket league with The Cricket Nerd.',
            type: 'website',
            image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
            url: 'https://www.thecricketnerd.com/category/nepal-premier-league',
            locale: 'en_US',
          },
          robots: { index: true, follow: true },
        };

      case 'nepal-domestic':
        return {
          title: 'Nepal Domestic Cricket | The Cricket Nerd | Matches, News, Players',
          description:
            'Explore Nepal domestic cricket scene with match reports, player updates, and exclusive insights. Stay connected to Nepal cricket journey!',
          keywords:
            'Nepal domestic cricket, Nepal cricket matches, cricket news Nepal, domestic players Nepal, cricket teams Nepal, cricket blog Nepal',
          canonical: 'https://www.thecricketnerd.com/category/nepal-domestic',
          openGraph: {
            title: 'Nepal Domestic Cricket | The Cricket Nerd | Matches, News, Players',
            description:
              'Explore Nepal domestic cricket scene with match reports, player updates, and exclusive insights. Stay connected to Nepal cricket journey!',
            type: 'article',
            image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
            url: 'https://www.thecricketnerd.com/category/nepal-domestic',
            locale: 'en_US',
          },
          robots: { index: true, follow: true },
        };

      case 'elite-cup-jay-trophy':
        return {
          title: 'Elite Cup (Jay Trophy) | Nepal Cricket Tournament | Matches, Updates, Insights',
          description:
            'Discover the Elite Cup (Jay Trophy), a premier domestic cricket tournament in Nepal. Get match updates, player news, and in-depth analysis from The Cricket Nerd.',
          keywords:
            'Elite Cup Nepal, Jay Trophy Nepal cricket, Nepal cricket tournaments, domestic cricket Nepal, Nepal cricket news, Nepal cricket players',
          canonical: 'https://www.thecricketnerd.com/category/elite-cup-jay-trophy',
          openGraph: {
            title: 'Elite Cup (Jay Trophy) | Nepal Cricket Tournament | Matches, Updates, Insights',
            description:
              'Discover the Elite Cup (Jay Trophy), a premier domestic cricket tournament in Nepal. Get match updates, player news, and in-depth analysis from The Cricket Nerd.',
            type: 'article',
            image: 'https://www.thecricketnerd.com/Images/Logo/Elite Cup (Jay Trophy).jpg',
            url: 'https://www.thecricketnerd.com/category/elite-cup-jay-trophy',
            locale: 'en_US',
          },
          robots: { index: true, follow: true },
        };


      default:
        return {
          title: 'The Cricket Nerd | Nepal Cricket News, Matches, Players',
          description:
            'The Cricket Nerd brings you the latest news, insights, and updates on Nepal Cricket. Dive into match previews, player analysis, and expert opinions.',
          keywords:
            'Nepal Cricket, cricket news Nepal, cricket updates, cricket analysis, Nepal cricket matches, cricket blog Nepal',
          canonical: 'https://www.thecricketnerd.com/',
          openGraph: {
            title: 'The Cricket Nerd | Nepal Cricket News, Matches, Players',
            description:
              'The Cricket Nerd brings you the latest news, insights, and updates on Nepal Cricket. Dive into match previews, player analysis, and expert opinions.',
            type: 'website',
            image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
            url: 'https://www.thecricketnerd.com/',
            locale: 'en_US',
          },
          robots: { index: true, follow: true },
        };
    }
  };

  useEffect(() => {
    const meta = getMetaInfo(Slug);

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
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.content = meta.openGraph.title;

    let metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (!metaOgDescription) {
      metaOgDescription = document.createElement('meta');
      metaOgDescription.setAttribute('property', 'og:description');
      document.head.appendChild(metaOgDescription);
    }
    metaOgDescription.content = meta.openGraph.description;

    let metaOgType = document.querySelector('meta[property="og:type"]');
    if (!metaOgType) {
      metaOgType = document.createElement('meta');
      metaOgType.setAttribute('property', 'og:type');
      document.head.appendChild(metaOgType);
    }
    metaOgType.content = meta.openGraph.type;

    let metaOgImage = document.querySelector('meta[property="og:image"]');
    if (!metaOgImage) {
      metaOgImage = document.createElement('meta');
      metaOgImage.setAttribute('property', 'og:image');
      document.head.appendChild(metaOgImage);
    }
    metaOgImage.content = meta.openGraph.image;

    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement('meta');
      metaOgUrl.setAttribute('property', 'og:url');
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.content = meta.openGraph.url;

    let metaOgLocale = document.querySelector('meta[property="og:locale"]');
    if (!metaOgLocale) {
      metaOgLocale = document.createElement('meta');
      metaOgLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(metaOgLocale);
    }
    metaOgLocale.content = meta.openGraph.locale;

    // Meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = meta.robots.index ? 'index, follow' : 'noindex, nofollow';

  }, [Slug]);


  return null;
};

export default MetaInfo;
