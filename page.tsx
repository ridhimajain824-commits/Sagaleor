import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SagaLeor · About Us',
  description:
    'SagaLeor is an AI-powered Personal Styling Operating System that helps people discover, build, and manage their complete personal style.',
  openGraph: {
    title: 'SagaLeor · About Us',
    description: 'Your Personal Styling Intelligence.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 hero-blob bg-gold/5" style={{ top: '-20%', right: '-10%', width: '500px', height: '500px' }} />
        <div className="absolute inset-0 hero-blob bg-gold/5" style={{ bottom: '-20%', left: '-10%', width: '400px', height: '400px', animationDelay: '-5s' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            About SagaLeor
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Your Personal<br />
            <span className="text-gradient-gold">Styling Intelligence.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            SagaLeor is an AI-powered Personal Styling Operating System that helps people
            discover, build, and manage their complete personal style.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built Around <span className="text-gold">You.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every person has a different body. A different lifestyle. Different routines.
                Different goals. Different preferences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A recommendation that looks perfect for one person may not work for another.
                SagaLeor is designed to understand these differences. From body proportions
                and colour compatibility to personal preferences and wardrobe habits,
                every recommendation is generated specifically for the individual using it.
              </p>
              <p className="text-gold font-medium mt-4">
                The result is styling that feels personal, practical, and authentic.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-3xl p-8 sm:p-10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Body Shape & Proportions',
                    'Face Shape',
                    'Skin Tone & Colour Harmony',
                    'Personal Style Preferences',
                    'Lifestyle',
                    'Budget',
                    'Occasion & Weather',
                    'Existing Wardrobe',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Than a Wardrobe */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              More Than a <span className="text-gold">Wardrobe.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Style extends far beyond clothing. SagaLeor brings every element of personal
              expression into one intelligent ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Clothing',
              'Footwear',
              'Accessories',
              'Jewellery',
              'Bags',
              'Watches',
              'Makeup',
              'Hairstyles',
              'Eyewear',
              'Fragrances',
              'Personal Grooming',
              'Beauty Essentials',
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-4 text-center hover:shadow-gold-sm transition-all duration-300 card-lift"
              >
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 sm:py-20 bg-[#f0eee8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gold">Principles.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The beliefs that guide how we think, build, and create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Identity before trends.',
                description:
                  'We believe personal style is about who you are, not what is popular. Every recommendation is designed to help you discover and express your authentic self.',
              },
              {
                title: 'Personalisation over generalisation.',
                description:
                  'One-size-fits-all recommendations do not work. SagaLeor is built to understand the nuances of every individual and deliver styling that feels truly personal.',
              },
              {
                title: 'Confidence through clarity.',
                description:
                  'Styling should simplify your decisions, not complicate them. We help you make confident choices by understanding what works for you.',
              },
              {
                title: 'Technology with purpose.',
                description:
                  'AI exists to serve people, not the other way around. We use technology to enhance human expression, never to replace it.',
              },
              {
                title: 'Style evolves with people.',
                description:
                  'Tastes change, lives change, and style changes too. SagaLeor grows with you, continuously learning and adapting to your evolving identity.',
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-6 sm:p-8 hover:shadow-gold-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-gold font-serif text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1]">
              The World&apos;s Most Intelligent<br />
              <span className="text-gradient-gold">Personal Styling Platform.</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              We believe styling should become intelligent. Finding what suits you should
              never depend on endless scrolling, guesswork or following trends blindly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to build the world&apos;s most intelligent personal styling
              platform—one that understands every aspect of personal presentation and helps
              people make confident styling decisions every day.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As SagaLeor grows, it will continue expanding beyond clothing into every
              category that contributes to personal style, creating a unified ecosystem
              where every recommendation works together to reflect the individual behind it.
            </p>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <p className="text-gold font-medium italic text-center">
                &ldquo;From recommending products to becoming the intelligence that helps
                people build, evolve, and express their personal identity throughout every
                stage of life.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f8f7f4] to-gold/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-serif italic mb-6">
              &ldquo;SagaLeor is not simply helping people get dressed. It is helping people
              discover, express, and evolve their personal identity through intelligent
              styling—today, tomorrow, and in the future.&rdquo;
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Your Story. <span className="text-gold">Your Style.</span>
            </p>
            <div className="mt-8">
              <Link
                href="/features"
                className="btn-gold inline-block px-8 py-3 rounded-full font-medium"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}