import React from 'react'
import CurrentNews from './Current News'
import NewsSection from './Category'

export function generateMetadata() {
  return {
      title: 'Cricket News | The Cricket Nerd | Nepal Premier League, National, Domestic, Editorial',
      description: 'Explore the latest updates on Nepal Premier League, Nepal National, Nepal Domestic, and Editorial news. Stay informed with the top cricket news, match highlights, and player insights from Nepal and beyond.',
      keywords: 'Nepal cricket news, Nepal Premier League news, Nepal National cricket, Nepal Domestic cricket, editorial cricket, cricket news updates, Nepal cricket highlights, Nepal cricket players, Nepal cricket matches',
      openGraph: {
          description: 'Explore the latest updates on Nepal Premier League, Nepal National, Nepal Domestic, and Editorial news. Stay informed with the top cricket news, match highlights, and player insights from Nepal and beyond.',
          title: 'Cricket News | The Cricket Nerd | Nepal Premier League, National, Domestic, Editorial',
          type: 'website',
          image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
          url: 'https://www.thecricketnerd.com/News',
          locale: 'en_US',
      },
      twitter: {
          card: 'summary_large_image',
          title: 'Cricket News | The Cricket Nerd | Nepal Premier League, National, Domestic, Editorial',
          description: 'Explore the latest updates on Nepal Premier League, Nepal National, Nepal Domestic, and Editorial news. Stay informed with the top cricket news, match highlights, and player insights.',
          image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
      },
      canonical: 'https://www.thecricketnerd.com/News',
      robots: {
          index: true,
          follow: true,
      },
      jsonLd: {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: 'The Cricket Nerd',
          description: 'Explore the latest cricket news, including updates on Nepal Premier League, Nepal National, Nepal Domestic, and Editorial stories. Get insights on players, matches, and more.',
          url: 'https://www.thecricketnerd.com/News',
          publisher: {
              '@type': 'Organization',
              name: 'The Cricket Nerd',
              logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
              },
          },
      },
      link: [
          {
              rel: 'icon',
              href: '/favicon.ico',
          },
      ],
      socialProfiles: {
          facebook: 'https://www.facebook.com/thecricketnerd01/',
          instagram: 'https://www.instagram.com/thecricketnerd17/',
      },
  };
}


export default function News() {
  return (
    <>
      <div className="bg-background text-foreground px-6 md:flex md:flex-col md:items-center">
      <NewsSection/>
        <CurrentNews />
      </div>
    </>
  )
}
