'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Sparkles, Users, ShoppingBag, Palette, Calendar, Zap, Compass, Gem } from 'lucide-react';

// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
  items,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  items?: string[];
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay || 0);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-3xl p-6 sm:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      {items && items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FeaturesPage() {
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
            Features
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Everything You Need to<br />
            <span className="text-gradient-gold">Build Your Personal Style.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From discovering what truly suits you to managing your wardrobe, shopping smarter,
            planning outfits, and receiving personalised styling guidance—SagaLeor brings every
            part of personal styling into one intelligent platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Style Profile */}
            <FeatureCard
              icon={Users}
              title="Your Personal Style Profile"
              description="Every styling decision begins with understanding you. SagaLeor creates a comprehensive personal styling profile by analysing your unique characteristics, preferences, and lifestyle."
              items={[
                'Body Shape & Proportions',
                'Face Shape & Skin Tone',
                'Style Preferences & Lifestyle',
                'Budget & Favourite Brands',
                'Comfort & Personal Goals',
              ]}
              delay={0}
            />

            {/* Style Discovery */}
            <FeatureCard
              icon={Compass}
              title="Style Discovery"
              description="Finding your personal style shouldn't depend on endless scrolling or copying trends. Discover aesthetics that genuinely complement your appearance, personality, and lifestyle."
              items={[
                'Personal Style Archetypes',
                'Colour Palettes & Seasonal Styling',
                'Capsule Wardrobes & Signature Looks',
                'Style Moodboards & Inspiration',
              ]}
              delay={100}
            />

            {/* Smart Wardrobe */}
            <FeatureCard
              icon={Palette}
              title="Smart Wardrobe"
              description="Transform your wardrobe into an intelligent digital collection. Upload, organise and manage every item you own while receiving personalised outfit suggestions."
              items={[
                'Wardrobe Upload & Organisation',
                'Outfit Builder & Top Picks',
                'Wear History & Wardrobe Insights',
                'Favourite Collections',
              ]}
              delay={200}
            />

            {/* AI Stylist */}
            <FeatureCard
              icon={Sparkles}
              title="AI Stylist"
              description="Your personal stylist, available anytime. Choose how you want recommendations—using your wardrobe, marketplace products, or a hybrid approach."
              items={[
                'Style using My Wardrobe',
                'Style using Marketplace Products',
                'Hybrid Styling (Wardrobe + Marketplace)',
                'Adjust by Occasion, Weather, Budget, & More',
              ]}
              delay={300}
            />

            {/* Personal Shopping */}
            <FeatureCard
              icon={ShoppingBag}
              title="Personal Shopping"
              description="Shopping becomes intentional rather than overwhelming. SagaLeor recommends items selected specifically for your profile and styling needs."
              items={[
                'Clothing, Footwear & Accessories',
                'Jewellery, Bags & Watches',
                'Eyewear, Beauty & Makeup',
                'Grooming Essentials',
                'Filter by Budget, Brand, Colour, & More',
              ]}
              delay={400}
            />

            {/* Beauty & Makeup Intelligence */}
            <FeatureCard
              icon={Gem}
              title="Beauty & Makeup Intelligence"
              description="Styling extends beyond clothing. SagaLeor recommends beauty and makeup choices that complement your complete appearance."
              items={[
                'Everyday, Professional & Party Looks',
                'Bridal & Special Occasion Makeup',
                'Colour Recommendations & Product Suggestions',
                'Hairstyle Pairing & Complete Looks',
              ]}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Daily Styling & Personalisation */}
      <section className="py-16 sm:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Daily Styling */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Daily Styling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Wake up knowing exactly what to wear. SagaLeor prepares complete styling
                recommendations using your schedule, weather, wardrobe and preferences.
              </p>
              <ul className="space-y-2">
                {[
                  'Outfit Recommendation & Footwear',
                  'Accessories & Makeup Suggestions',
                  'Hairstyle Ideas & Layering Advice',
                  'Weather Adaptations & Alternative Looks',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intelligent Personalisation */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Intelligent Personalisation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                SagaLeor learns continuously through your interactions. As your preferences
                evolve, your recommendations become increasingly personalised.
              </p>
              <ul className="space-y-2">
                {[
                  'Saved Looks & Favourite Products',
                  'Purchases & Wardrobe Usage',
                  'Outfit Feedback & Style Preferences',
                  'Brand Preferences & Shopping Behaviour',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              One Connected <span className="text-gold">Styling Ecosystem.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Most styling decisions happen across disconnected apps. SagaLeor brings them together.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {['Discover', 'Style', 'Manage', 'Shop', 'Learn', 'Evolve'].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gold/5 rounded-2xl p-4 font-serif text-lg font-medium text-gray-800 hover:bg-gold/10 transition-colors duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Everything works as one connected personal styling experience.
            </p>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 sm:py-20 bg-[#f0eee8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Looking <span className="text-gold">Ahead.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              SagaLeor is being built to become the world's most intelligent personal styling ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Advanced Personal Styling Intelligence',
              'AI Wardrobe Planning',
              'Intelligent Packing Assistance',
              'Occasion Planning',
              'Virtual Try-On Experiences',
              'Personal Shopping Concierge',
              'Custom Outfit Generation',
              'Personalised Fashion & Beauty Product Creation',
              'Signature Style Development',
              'Brand Collaboration Experiences',
              'Made-for-You Styling Recommendations',
              'Cross-Category Styling Intelligence',
              'Lifestyle & Home Style Expansion',
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-4 text-center hover:shadow-gold-sm transition-all duration-300 card-lift"
              >
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              One intelligent platform that understands your identity and helps you express it
              confidently across every styling decision you make.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Discover Your <span className="text-gold">Personal Style.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let SagaLeor help you build a wardrobe, discover your signature aesthetic,
              and make every styling decision with confidence.
            </p>
            <Link
              href="/"
              className="btn-gold inline-block px-8 py-3 rounded-full font-medium"
            >
              Get Started
            </Link>
            <p className="text-sm text-gray-500 mt-4 font-serif italic">
              Your Story. Your Style.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}