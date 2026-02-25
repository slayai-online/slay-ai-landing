/**
 * JSON-LD Structured Data generators for SLAY AI.
 * Used for SEO and AEO (Answer Engine Optimization).
 */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlashFusion Labs Private Limited",
    alternateName: "SLAY AI",
    url: "https://slayai.in",
    logo: "https://slayai.in/images/hero-avatar.webp",
    sameAs: [
      "https://www.linkedin.com/company/slayai",
      "https://x.com/slayai",
      "https://www.instagram.com/slayai",
      "https://www.youtube.com/@slayai",
    ],
    description:
      "SLAY AI is a hyper-personalized AI stylist app that creates your digital twin, finds perfect outfits from 500+ local brands, and delivers them within 1 hour.",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@slayai.in",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function getWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SLAY AI",
    applicationCategory: "LifestyleApplication",
    genre: "Fashion Technology",
    operatingSystem: "Web, iOS, Android",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "Beta",
    description:
      "Upload 1 photo, get an AI-powered digital twin, try on outfits from 500+ local stores, and get 1-hour delivery or pickup. The anti-generic AI stylist for Gen Z.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free early access for first 1,000 users with lifetime perks",
      category: "Free Trial",
    },
    creator: {
      "@type": "Organization",
      name: "FlashFusion Labs Private Limited",
    },
    featureList: [
      "Digital Twin Creation",
      "Virtual Try-On",
      "Local Brand Integration",
      "60-Minute Delivery",
    ],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is my data safe with SLAY AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All photos are encrypted and never shared. Your AI twin belongs exclusively to you. We use end-to-end encryption and never sell or share your personal data.",
        },
      },
      {
        "@type": "Question",
        name: "How does SLAY AI work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upload a single photo and SLAY AI builds your digital twin in 30 seconds. The AI then scans 500+ local stores to find outfits that match your body, style, and budget. You can get items delivered in 1 hour or pick them up at a discount.",
        },
      },
      {
        "@type": "Question",
        name: "Where is SLAY AI available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SLAY AI is launching in Bangalore and Mumbai within 8 weeks. Join the waitlist to be among the first 1,000 users and receive lifetime perks.",
        },
      },
    ],
  };
}
