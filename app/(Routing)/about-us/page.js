export function generateMetadata() {
  return {
    title: 'About Us | The Cricket Nerd | Nepal Cricket News, Matches, Players',
    description: 'Learn more about The Cricket Nerd, your trusted source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. We are passionate about bringing you the best in cricket content.',
    keywords: 'About The Cricket Nerd, cricket news, cricket updates, cricket blog, cricket analysis, cricket insights, Nepal cricket, cricket community, cricket experts',
    openGraph: {
      description: 'Learn more about The Cricket Nerd, your trusted source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. We are passionate about bringing you the best in cricket content.',
      title: 'About Us | The Cricket Nerd | Nepal Cricket News, Matches, Players',
      type: 'website',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
      url: 'https://www.thecricketnerd.com/about-us',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | The Cricket Nerd | Nepal Cricket News, Matches, Players',
      description: 'Learn more about The Cricket Nerd, your trusted source for the latest cricket news, match previews, player updates, and in-depth cricket analysis.',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
    },
    canonical: 'https://www.thecricketnerd.com/about-us',
    robots: {
      index: true,
      follow: true,
    },
    jsonLd: {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'The Cricket Nerd',
      description: 'Your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Learn more about us and what we do.',
      url: 'https://www.thecricketnerd.com/about-us',
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

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-[#2E3192] md:text-4xl">About Us</h1>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">Welcome to The Cricket Nerd</h2>
              <p className="text-gray-700">
                Your ultimate destination for everything related to Nepal Cricket.
              </p>
              <p className="mt-4 text-gray-700">
                At The Cricket Nerd, we are passionate about the game that unites millions across the country and beyond.
                Our mission is to provide cricket fans, especially from Nepal, with comprehensive and engaging content that celebrates the spirit of the sport.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">Who We Are</h2>
              <p className="text-gray-700">
                We are a team of dedicated cricket enthusiasts who live and breathe the game. From breaking news and in-depth analysis
                to exclusive player features and entertaining trivia, we cover every angle to keep you informed and entertained.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">What We Offer</h2>
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li><strong>Latest News:</strong> Stay updated with the hottest headlines from the cricketing world.</li>
                <li><strong>Match Coverage:</strong> From live scores to post-match analysis, we've got you covered.</li>
                <li><strong>Exclusive Content:</strong> Player profiles, interviews, and behind-the-scenes stories you won't find anywhere else.</li>
                <li><strong>Nepali Cricket Spotlight:</strong> As proud supporters of Nepali cricket, we shine a light on local talents, leagues, and milestones.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">Our Vision</h2>
              <p className="text-gray-700">
                We aim to be the go-to platform for cricket enthusiasts, creating a community where fans can connect, share, and celebrate their love for the game.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">Why Choose Us?</h2>
              <p className="text-gray-700">
                Whether you're a casual fan or a cricket connoisseur, The Cricket Nerd delivers curated content tailored to your interests.
                We focus on quality, accuracy, and storytelling that resonates with cricket lovers worldwide.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">Join the Community</h2>
              <p className="text-gray-700">
                Follow us on our journey to celebrate cricket in all its glory. Let's grow the game together and cheer for every six, every wicket, and every milestone!
              </p>
              <p className="mt-4 text-gray-700">
                For feedback and collaboration, feel free to reach out to us.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">Contact Us</h2>
              <div className="mt-2 text-gray-700">
                <p>Email: info@thecricnerd.com</p>
                <p>Phone: +9779827304128</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
