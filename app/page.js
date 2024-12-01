import Loader from '@/Components/Loader';
import dynamic from 'next/dynamic';

const Matches = dynamic(() => import('@/app/(Routing)/Home/Matches'), {
  ssr: false,
});

const LatestNews = dynamic(() => import('@/app/(Routing)/Home/Latest News'), {
  loading: () => <Loader />,
  ssr: false,
});

const YoutubeSlider = dynamic(() => import('@/app/(Routing)/Home/YouTube Video'), {
  ssr: false,
});
const Live = dynamic(() => import('@/app/(Routing)/Home/Live Match'), {
  ssr: false,
});
export function generateMetadata() {
  return {
    title: 'The Cricket Nerd | Nepal Cricket News, Matches, Players',
    description: 'The Cricket Nerd is your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Stay informed with detailed articles, match summaries, and expert opinions on everything cricket.',
    keywords: 'Cricket news, cricket updates, match previews, cricket articles, cricket insights, player news, cricket blog, cricket analysis, upcoming matches, cricket stories.',
    openGraph: {
      description: 'The Cricket Nerd is your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Stay informed with detailed articles, match summaries, and expert opinions on everything cricket.',
      title: 'The Cricket Nerd | Nepal Cricket News, Matches, Players',
      type: 'website',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
      url: 'https://www.thecricketnerd.com',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The Cricket Nerd | Nepal Cricket News, Matches, Players',
      description: 'The Cricket Nerd is your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Stay informed with detailed articles, match summaries, and expert opinions on everything cricket.',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
    },
    canonical: 'https://www.thecricketnerd.com',
    robots: {
      index: true,
      follow: true,
    },
    jsonLd: {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'The Cricket Nerd',
      description: 'Your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis.',
      url: 'https://www.thecricketnerd.com',
      publisher: {
        '@type': 'Organization',
        name: 'The Cricket Nerd',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
        },
      }
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

export default function Home() {
  return (
    <>
      <h1 className="hidden">The Cricket Nerd | Nepal Cricket News, Matches, Players</h1>
      <Live Match></Live>
      <Matches />
      <LatestNews />
      <YoutubeSlider />
    </>
  );
}
