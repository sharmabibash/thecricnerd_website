import Link from "next/link"
export function generateMetadata() {
  return {
    title: 'Terms and Conditions | The Cricket Nerd | Nepal Cricket News, Matches, Players',
    description: 'Review the Terms and Conditions of The Cricket Nerd. Understand the rules and guidelines for using our website, accessing cricket news, match updates, and engaging with our content.',
    keywords: 'Terms and Conditions, The Cricket Nerd, cricket news, website terms, usage policy, website guidelines, cricket blog, Nepal cricket, terms of service',
    openGraph: {
      description: 'Review the Terms and Conditions of The Cricket Nerd. Understand the rules and guidelines for using our website, accessing cricket news, match updates, and engaging with our content.',
      title: 'Terms and Conditions | The Cricket Nerd | Nepal Cricket News, Matches, Players',
      type: 'website',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
      url: 'https://www.thecricketnerd.com/terms-and-conditions',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Terms and Conditions | The Cricket Nerd | Nepal Cricket News, Matches, Players',
      description: 'Review the Terms and Conditions of The Cricket Nerd. Understand the rules and guidelines for using our website and accessing our cricket-related content.',
      image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
    },
    canonical: 'https://www.thecricketnerd.com/terms-and-conditions',
    robots: {
      index: true,
      follow: true,
    },
    jsonLd: {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: 'Terms and Conditions | The Cricket Nerd',
      description: 'Review The Cricket Nerd Terms and Conditions to understand the rules for using our website, engaging with our content, and accessing cricket news and updates.',
      url: 'https://www.thecricketnerd.com/terms-and-conditions',
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

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-[#2E3192] md:text-4xl">Terms and Conditions</h1>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using thecricnerd.com, you agree to comply with and be bound by these Terms and Conditions.
                If you do not agree, please refrain from using our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">2. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Updates will be posted on this page,
                and continued use of the site indicates acceptance of revised terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">3. Use of Content</h2>
              <p className="text-gray-700">
                All content, including text, images, videos, and other materials on thecricnerd.com,
                is for informational and entertainment purposes only. Unauthorized reproduction, distribution,
                or modification of our content is prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">4. User Conduct</h2>
              <p className="text-gray-700">Users agree not to:</p>
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>Use the website for illegal purposes.</li>
                <li>Post offensive, defamatory, or inappropriate comments.</li>
                <li>Attempt to interfere with the website's functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">5. Third-Party Links</h2>
              <p className="text-gray-700">
                Our site may include links to third-party websites. We are not responsible for the content
                or practices of these external sites. Visiting these links is at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">6. Intellectual Property</h2>
              <p className="text-gray-700">
                All intellectual property rights, including logos, articles, and multimedia content,
                are owned by thecricnerd.com. Written consent is required for use of any materials.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                Thecricnerd.com and its team will not be held liable for any direct, indirect, or consequential
                damages arising from the use of our site. Although we try to ensure none of our users are harmed.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">8. Privacy</h2>
              <p className="text-gray-700">
                We are committed to protecting your privacy. For details, please review our{" "}
                <Link href="/privacy-policy" className="text-[#2E3192] underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">9. Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance with the laws of Nepal.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">10. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns regarding these Terms and Conditions, feel free to contact us at:
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
  )
}

