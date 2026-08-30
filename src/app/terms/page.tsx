import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#05080c] px-6 py-24 text-white sm:px-10 lg:px-16">

      <div className="mx-auto max-w-4xl">

        {/* Back */}

        <Link
          href="/"
          className="text-sm text-white/40 transition hover:text-white"
        >
          ← Back to NextZone Games
        </Link>


        {/* Header */}

        <div className="mt-12">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Legal
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-5 text-sm text-white/30">
            Last updated: August 30, 2026
          </p>

        </div>


        {/* Content */}

        <div className="mt-16 space-y-12 text-base leading-8 text-white/55">


          {/* 1 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              1. About These Terms
            </h2>

            <p className="mt-4">
              These Terms of Use govern your use of the NextZone Games
              website and the content made available through it. By
              accessing or using this website, you agree to comply with
              these terms.
            </p>

            <p className="mt-4">
              NextZone Games is an independent game studio and a subsidiary
              of Wiz@rd Group Holdings.
            </p>

          </section>


          {/* 2 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              2. Use of the Website
            </h2>

            <p className="mt-4">
              You may access and use this website for lawful purposes and
              for personal, informational, and legitimate business
              purposes.
            </p>

            <p className="mt-4">
              You must not use the website in a manner that could damage,
              disable, overburden, or impair the website or interfere with
              another person's ability to use it.
            </p>

          </section>


          {/* 3 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              3. Intellectual Property
            </h2>

            <p className="mt-4">
              Unless otherwise stated, the content on this website,
              including game names, logos, artwork, graphics, screenshots,
              videos, text, designs, and other materials, is owned by or
              licensed to NextZone Games or Wiz@rd Group Holdings.
            </p>

            <p className="mt-4">
              You may view and access this content for personal and
              informational purposes. You may not reproduce, modify,
              distribute, publicly display, commercially exploit, or
              otherwise use our content without appropriate permission,
              except where permitted by applicable law.
            </p>

          </section>


          {/* 4 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              4. Games and Digital Products
            </h2>

            <p className="mt-4">
              Information about our games, including screenshots,
              descriptions, features, release dates, availability, and
              supported platforms, is provided for informational purposes.
            </p>

            <p className="mt-4">
              Features, availability, pricing, release schedules, and other
              aspects of our games may change without notice.
            </p>

            <p className="mt-4">
              A game being displayed on this website does not guarantee
              that it will remain available or that every described feature
              will be included in a particular release.
            </p>

          </section>


          {/* 5 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              5. Third-Party Services and Links
            </h2>

            <p className="mt-4">
              This website may contain links to or embedded content from
              third-party services, including Google Play and YouTube.
            </p>

            <p className="mt-4">
              Third-party websites and services operate independently from
              NextZone Games and may have their own terms, privacy
              policies, and practices. We are not responsible for the
              content, availability, or policies of third-party services.
            </p>

          </section>


          {/* 6 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              6. Availability and Accuracy
            </h2>

            <p className="mt-4">
              We make reasonable efforts to keep the information on this
              website accurate and up to date. However, we do not guarantee
              that all information will always be complete, accurate,
              current, or free from errors.
            </p>

            <p className="mt-4">
              We may modify, suspend, or discontinue any part of the
              website without prior notice.
            </p>

          </section>


          {/* 7 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              7. Disclaimer
            </h2>

            <p className="mt-4">
              The website and its content are provided on an "as available"
              basis. To the extent permitted by applicable law, NextZone
              Games makes no warranties regarding uninterrupted availability
              or that the website will always be free from errors or
              technical issues.
            </p>

          </section>


          {/* 8 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              8. Limitation of Liability
            </h2>

            <p className="mt-4">
              To the extent permitted by applicable law, NextZone Games
              shall not be liable for losses or damages arising from the
              use of, or inability to use, this website or information
              provided through it.
            </p>

            <p className="mt-4">
              Nothing in these terms is intended to exclude or limit
              liability that cannot lawfully be excluded or limited.
            </p>

          </section>


          {/* 9 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              9. Changes to These Terms
            </h2>

            <p className="mt-4">
              We may update these Terms of Use from time to time to reflect
              changes to our website, games, services, or applicable
              requirements.
            </p>

            <p className="mt-4">
              When changes are made, the updated version will be published
              on this page together with the latest revision date.
            </p>

          </section>


          {/* 10 */}

          <section>

            <h2 className="text-2xl font-bold text-white">
              10. Contact
            </h2>

            <p className="mt-4">
              If you have questions about these Terms of Use, you can
              contact NextZone Games at:
            </p>

            <a
              href="mailto:contact@nextzonegames.co.ke"
              className="mt-4 inline-block text-cyan-400 transition hover:text-cyan-300"
            >
              contact@nextzonegames.co.ke
            </a>

          </section>


          {/* Footer note */}

          <div className="border-t border-white/[0.06] pt-8 text-sm text-white/25">
            NextZone Games is a subsidiary of Wiz@rd Group Holdings.
          </div>

        </div>

      </div>

    </main>
  );
}