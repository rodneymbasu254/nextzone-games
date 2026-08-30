import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05080c] px-6 py-24 text-white sm:px-10 lg:px-16">

      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="text-sm text-white/40 transition hover:text-white"
        >
          ← Back to NextZone Games
        </Link>

        <div className="mt-12">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Legal
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-sm text-white/30">
            Last updated: August 30, 2026
          </p>

        </div>


        <div className="mt-16 space-y-12 text-base leading-8 text-white/55">

          <section>

            <h2 className="text-2xl font-bold text-white">
              1. About NextZone Games
            </h2>

            <p className="mt-4">
              NextZone Games is an independent game studio and a subsidiary
              of Wiz@rd Group Holdings. We create and publish games,
              interactive experiences, and related digital products.
            </p>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              2. Information We Collect
            </h2>

            <p className="mt-4">
              This website is primarily an informational and promotional
              website for NextZone Games. We do not intentionally collect
              personal information simply because you visit or browse the
              website.
            </p>

            <p className="mt-4">
              If you contact us directly, we may receive information such
              as your name, email address, and the contents of your message.
            </p>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              3. How We Use Information
            </h2>

            <p className="mt-4">
              Information provided to us may be used to respond to
              enquiries, provide support, communicate with you, and improve
              our products and services.
            </p>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              4. Third-Party Services
            </h2>

            <p className="mt-4">
              Our website may link to or display content from third-party
              services, including Google Play, YouTube, Supabase, and
              hosting or infrastructure providers. These services may
              process information according to their own privacy policies.
            </p>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              5. Data Protection
            </h2>

            <p className="mt-4">
              We take reasonable technical and organisational measures to
              protect information entrusted to us against unauthorised
              access, alteration, disclosure, or destruction.
            </p>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              6. Your Rights
            </h2>

            <p className="mt-4">
              Where applicable, individuals have rights concerning their
              personal information, including rights to be informed about
              processing, access their information, request correction,
              object to certain processing, and request deletion where
              applicable under law.
            </p>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              7. Contact
            </h2>

            <p className="mt-4">
              If you have questions about this Privacy Policy or how
              NextZone Games handles personal information, contact us at:
            </p>

            <a
              href="mailto:contact@nextzonegames.co.ke"
              className="mt-4 inline-block text-cyan-400 transition hover:text-cyan-300"
            >
              contact@nextzonegames.co.ke
            </a>

          </section>


          <section>

            <h2 className="text-2xl font-bold text-white">
              8. Changes to This Policy
            </h2>

            <p className="mt-4">
              We may update this Privacy Policy from time to time to
              reflect changes to our website, services, or applicable
              requirements. The latest version will always be published
              on this page.
            </p>

          </section>

        </div>

      </div>

    </main>
  );
}