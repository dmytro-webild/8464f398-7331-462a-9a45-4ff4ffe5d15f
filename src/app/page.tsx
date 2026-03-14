"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Shield, Star, Heart, Award, HelpCircle, MessageCircle, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="blurBottom"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="LUMIÈRE"
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Radiant Skin Starts Here"
          description="Experience the transformative power of luxurious, science-backed skincare formulated for your most radiant self."
          tag="Premium Skincare"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Discover Collections", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-skin-regeneration-products_23-2151242158.jpg"
          imageAlt="Luxury skincare products on elegant surface"
          showBlur={true}
          ariaLabel="Hero section - luxurious skincare welcome"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Crafted for Your Skin's Journey"
          description={[
            "At LUMIÈRE, we believe that beautiful skin is a reflection of commitment to quality. Each product in our collection is meticulously formulated using the finest natural ingredients and cutting-edge skincare science.",            "Our dermatologist-approved formulas are designed to address real skin concerns without compromise. From hydration to anti-aging, our comprehensive range serves every skin type and concern with luxurious efficacy.",            "We're committed to sustainability, cruelty-free practices, and transparent ingredient sourcing. Your skin deserves better—and so does the planet."
          ]}
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Shop Skincare", href: "#products" }
          ]}
          useInvertedBackground={false}
          showBorder={false}
          ariaLabel="About section - brand mission and values"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Our Essential Collection"
          description="Transform your skincare routine with our signature product line, each crafted to deliver visible results."
          tag="Premium Formulations"
          tagIcon={Shield}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore All Products", href: "#products" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "serum",              title: "Radiant Serum",              description: "Concentrated brightening formula infused with vitamin C and hyaluronic acid for luminous, hydrated skin.",              tag: "Best Seller",              imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-bottle-with-serum-pipette-hand-stone-gray-background_185193-162254.jpg",              imageAlt: "Vitamin C serum in luxury bottle"
            },
            {
              id: "moisturizer",              title: "Luxury Moisturizer",              description: "Rich, nourishing cream that melts into skin, providing 24-hour hydration with anti-aging peptides.",              tag: "Anti-Aging",              imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-face-cream-with-her-finger-bathroom_140725-1637.jpg",              imageAlt: "Premium moisturizer cream jar"
            },
            {
              id: "cleanser",              title: "Gentle Cleanser",              description: "Luxurious gel cleanser that removes impurities without stripping skin of its natural oils.",              tag: "Daily Use",              imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232286.jpg",              imageAlt: "Gentle cleanser in elegant bottle"
            }
          ]}
          animationType="slide-up"
          carouselMode="buttons"
          ariaLabel="Features section - product highlights"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Shop Premium Skincare"
          description="Discover our complete collection of luxury skincare products designed for every skin type and concern."
          tag="Bestsellers"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            { text: "View All", href: "#" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          products={[
            {
              id: "serum-product",              name: "Luminous Vitamin C Serum",              price: "$85.00",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-composition-natural-argan-product_23-2148955802.jpg",              imageAlt: "Luminous Vitamin C Serum"
            },
            {
              id: "moisturizer-product",              name: "Velvet Night Moisturizer",              price: "$95.00",              imageSrc: "http://img.b2bpic.net/free-photo/ecofriendly-beauty-product_23-2150669121.jpg",              imageAlt: "Velvet Night Moisturizer"
            },
            {
              id: "cleanser-product",              name: "Silk Facial Cleanser",              price: "$45.00",              imageSrc: "http://img.b2bpic.net/free-photo/beach-skincare-product-still-life_23-2150167975.jpg",              imageAlt: "Silk Facial Cleanser"
            }
          ]}
          ariaLabel="Products section - shop skincare collection"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Loved by Thousands"
          description="Discover what our community of skincare enthusiasts are saying about LUMIÈRE products."
          tag="Customer Reviews"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Mitchell",              date: "2 weeks ago",              title: "Skincare Enthusiast",              quote: "My skin has never looked better. The Vitamin C Serum transformed my complexion in just three weeks. Highly recommend!",              tag: "5 Stars",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-business-woman_158595-4746.jpg",              avatarAlt: "Sarah Mitchell"
            },
            {
              id: "testimonial-2",              name: "Emma Johnson",              date: "1 month ago",              title: "Beauty Blogger",              quote: "The quality and efficacy of these products is unmatched. I've tried luxury brands worldwide, and LUMIÈRE stands out.",              tag: "5 Stars",              avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-young-smiling-photographer-girl-taking-photos-using-her-retro-camera_158538-1377.jpg",              avatarAlt: "Emma Johnson"
            },
            {
              id: "testimonial-3",              name: "Jessica Chen",              date: "3 weeks ago",              title: "Dermatology Patient",              quote: "My dermatologist approved these formulas. My sensitive skin finally has products that work without irritation.",              tag: "5 Stars",              avatarSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-adult-woman-leaning-wall_1262-1759.jpg",              avatarAlt: "Jessica Chen"
            },
            {
              id: "testimonial-4",              name: "Amanda Roberts",              date: "1 week ago",              title: "Busy Professional",              quote: "Perfect for my routine. Fast-absorbing, luxurious feel, and I see results. Worth every penny!",              tag: "5 Stars",              avatarSrc: "http://img.b2bpic.net/free-photo/front-view-female-office-worker-black-strict-jacket-posing-with-displeased-expression-light-pink-wall_140725-58762.jpg",              avatarAlt: "Amanda Roberts"
            },
            {
              id: "testimonial-5",              name: "Lisa Anderson",              date: "2 months ago",              title: "Skincare Devotee",              quote: "This brand truly cares about quality. The ingredients are pure, the packaging is sustainable, and results speak volumes.",              tag: "5 Stars",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66975.jpg",              avatarAlt: "Lisa Anderson"
            },
            {
              id: "testimonial-6",              name: "Rachel Davis",              date: "3 days ago",              title: "First Time Customer",              quote: "Just started using these products and already impressed. Luxury quality at a fair price. Ordering again!",              tag: "5 Stars",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident-stan_1258-118782.jpg",              avatarAlt: "Rachel Davis"
            }
          ]}
          ariaLabel="Testimonials section - customer reviews"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Proven Results"
          description="Backed by science and loved by customers worldwide."
          tag="Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "satisfaction", value: "98%", description: "Customer Satisfaction Rate" },
            { id: "users", value: "50K+", description: "Happy Customers Worldwide" },
            { id: "results", value: "4 Weeks", description: "Average Time to Visible Results" },
            { id: "natural", value: "100%", description: "Natural & Cruelty-Free" }
          ]}
          ariaLabel="Metrics section - key achievements"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Skincare Questions Answered"
          description="Everything you need to know about our products and skincare practices."
          tag="FAQs"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="right"
          mediaAnimation="blur-reveal"
          faqsAnimation="slide-up"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "faq-1",              title: "Are these products suitable for all skin types?",              content: "Yes, our collection includes products formulated for all skin types including sensitive, oily, combination, and dry skin. Each product is tested and dermatologist-approved for safety and efficacy."
            },
            {
              id: "faq-2",              title: "How long before I see results?",              content: "Most customers notice visible improvements within 2-4 weeks of consistent use. Results vary based on individual skin type and concerns, but continued use enhances benefits over time."
            },
            {
              id: "faq-3",              title: "Are ingredients organic and natural?",              content: "We use 100% natural, plant-based ingredients sourced from sustainable suppliers. All products are free from harmful chemicals, sulfates, and parabens."
            },
            {
              id: "faq-4",              title: "Can I use multiple products together?",              content: "Yes, our products are designed to work together synergistically. We recommend: cleanser, serum, then moisturizer. For personalized guidance, consult our skincare specialists."
            },
            {
              id: "faq-5",              title: "Do you offer refunds or returns?",              content: "Absolutely. We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, return it for a full refund, no questions asked."
            }
          ]}
          ariaLabel="FAQ section - skincare information"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have questions about our skincare products? Our beauty experts are ready to help you find the perfect routine."
          ctaButton={{ text: "Send Message", href: "mailto:hello@lumiere-skincare.com" }}
          ctaIcon={MessageCircle}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "contact-1",              title: "Email Support",              content: "Reach us at hello@lumiere-skincare.com. Our team responds within 24 hours."
            },
            {
              id: "contact-2",              title: "Phone Support",              content: "Call +1 (555) 123-4567 Monday-Friday, 9am-6pm EST for personalized skincare consultations."
            },
            {
              id: "contact-3",              title: "Free Consultations",              content: "Schedule a free 30-minute skincare consultation with our beauty experts to create your personalized routine."
            }
          ]}
          ariaLabel="Contact section - get in touch"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="LUMIÈRE"
          copyrightText="© 2025 LUMIÈRE Skincare | All Rights Reserved"
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "Connect on LinkedIn" }
          ]}
          ariaLabel="Footer section"
        />
      </div>
    </ThemeProvider>
  );
}