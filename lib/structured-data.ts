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
      "SLAY AI is a personal AI stylist app that helps you find outfits that actually suit you — from nearby fashion stores, within your budget, with fast delivery or pickup.",
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
      "Upload a photo, get personalised outfit recommendations from nearby fashion stores, and choose fast delivery or store pickup. Your AI stylist for every occasion.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free early access for first 1,000 users with lifetime perks.",
      category: "Free Trial",
    },
    creator: {
      "@type": "Organization",
      name: "FlashFusion Labs Private Limited",
    },
    featureList: [
      "Style Profile Creation",
      "Personalised Outfit Recommendations",
      "Nearby Fashion Store Integration",
      "Fast Delivery or Store Pickup",
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
          text: "Your photos and profile stay private and protected. You stay in control of what you share. We never sell or share your personal data.",
        },
      },
      {
        "@type": "Question",
        name: "How does SLAY AI work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upload your photo, set your preferences, and let Slay AI suggest outfits based on your body, style, budget, and occasion. Choose fast delivery or store pickup.",
        },
      },
      {
        "@type": "Question",
        name: "Where is SLAY AI available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're starting with Bangalore and expanding city by city. Join the waitlist to be among the first 1,000 users and receive lifetime perks.",
        },
      },
    ],
  };
}
