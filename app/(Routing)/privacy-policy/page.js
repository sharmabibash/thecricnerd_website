import Link from "next/link";

export function generateMetadata() {
  return {
    title: 'Privacy Policy | The Cricket Nerd | Nepal Cricket News, Matches, Players',
    description: 'Read the Privacy Policy of The Cricket Nerd to understand how we collect, use, and protect your personal information. Learn more about our data practices for cricket news, match updates, player analysis, and more.',
    keywords: 'Privacy Policy, The Cricket Nerd, cricket news, personal information, data protection, user privacy, cricket blog, privacy terms, privacy policy Nepal',
    openGraph: {
      description: 'Read the Privacy Policy of The Cricket Nerd to understand how we collect, use, and protect your personal information. Learn more about our data practices for cricket news, match updates, player analysis, and more.',
      title: 'Privacy Policy | The Cricket Nerd | Nepal Cricket News, Matches, Players',
      type: 'website',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
      url: 'https://www.thecricketnerd.com/privacy-policy',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Privacy Policy | The Cricket Nerd | Nepal Cricket News, Matches, Players',
      description: 'Read the Privacy Policy of The Cricket Nerd to understand how we collect, use, and protect your personal information.',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
    },
    canonical: 'https://www.thecricketnerd.com/privacy-policy',
    robots: {
      index: true,
      follow: true,
    },
    jsonLd: {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy | The Cricket Nerd',
      description: 'Read The Cricket Nerd Privacy Policy to understand how your data is handled, including our practices around cricket news, player updates, and match previews.',
      url: 'https://www.thecricketnerd.com/privacy-policy',
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-[#2E3192] md:text-4xl">
            Privacy Policy
          </h1>

          <p className="mb-8 text-gray-700">
            Welcome to The Cricket Nerd! Your privacy is important to us, and
            this Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website,
            <Link href="/" className="text-[#2E3192] underline">
              thecricnerd.com
            </Link>
            .
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                1. Information We Collect
              </h2>
              <p className="text-gray-700">
                We may collect the following types of information:
              </p>
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>
                  <span className="font-semibold">Personal Information:</span>{" "}
                  When you subscribe to our newsletter, leave comments, or
                  contact us, we may collect your name, email address, and other
                  details you provide.
                </li>
                <li>
                  <span className="font-semibold">Non-Personal Information:</span>{" "}
                  Automatically collected data, such as IP address, browser
                  type, device type, and browsing behavior, through cookies and
                  similar technologies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700">
                The information we collect is used to:
              </p>
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>Improve the user experience on our website.</li>
                <li>Respond to your inquiries and provide support.</li>
                <li>
                  Send newsletters, updates, or promotional materials (if
                  you’ve opted in).
                </li>
                <li>
                  Analyze website traffic and trends for better content and
                  services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                3. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700">
                We use cookies to enhance your browsing experience and gather
                non-personal data. You can manage your cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-700">
                We do not sell, rent, or share your personal information with
                third parties except:
              </p>
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>When required by law or to protect our rights.</li>
                <li>
                  With trusted service providers who assist us in website
                  operations (e.g., email delivery).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                5. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may include links to third-party websites. We are
                not responsible for their privacy practices, and we encourage
                you to review their policies when visiting.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                6. Data Security
              </h2>
              <p className="text-gray-700">
                We take appropriate security measures to protect your
                information from unauthorized access, alteration, or disclosure.
                However, no method of online transmission or storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                7. Your Rights
              </h2>
              <p className="text-gray-700">
                Depending on your location, you may have rights regarding your
                personal data, including:
              </p>
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>Accessing the information we have about you.</li>
                <li>Requesting corrections or deletions.</li>
                <li>Opting out of marketing communications.</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at{" "}
                <span className="font-semibold">info@thecricnerd.com</span>.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                8. Children’s Privacy
              </h2>
              <p className="text-gray-700">
                We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We reserve the right to update this Privacy Policy at any time.
                Changes will be posted on this page with the revised effective
                date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
                10. Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us:
              </p>
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
