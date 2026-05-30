import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Clearwater Dental Associates",
    tagline: "Your Smile, Our Priority. Today.",
    phone: "(727) 555-0188",
    phoneHref: "tel:+17275550188",
    email: "info@clearwaterdental.com",
    address: "123 Main St, Clearwater, FL 33756",
    city: "Clearwater",
    serviceAreas: ["Belleair", "Safety Harbor", "Largo", "Oldsmar", "Feather Sound"],
    license: "FL Dental License #12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "noir",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "General Dentistry", desc: "Comprehensive care for your entire family's oral health needs.", urgent: false },
    { icon: "sparkles", title: "Cosmetic Dentistry", desc: "Transform your smile with veneers, whitening, and clear aligners.", urgent: false },
    { icon: "thermometer", title: "Dental Cleaning", desc: "Professional cleanings and exams for optimal oral hygiene.", urgent: false },
    { icon: "shield-check", title: "Emergency Dentistry", desc: "Immediate care for unexpected dental pain or injuries.", urgent: true },
    { icon: "wrench", title: "Dental Implants", desc: "Permanent solutions for missing teeth, restoring function and aesthetics.", urgent: false },
    { icon: "heart", title: "Preventive Care", desc: "Proactive treatments to keep your teeth and gums healthy.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Largo, FL", stars: 5, text: "I had a dental emergency last month and Clearwater Dental Associates got me in the same day. Dr. Smith was incredibly kind and fixed my chipped tooth quickly and painlessly. I'm so grateful for their prompt and professional service!" },
    { name: "Mark T.", location: "Belleair, FL", stars: 5, text: "Getting my Invisalign here was a fantastic experience. The team explained everything clearly, and my teeth look amazing now. The payment plan was also very manageable. Highly recommend for anyone considering clear aligners!" },
    { name: "Jessica R.", location: "Clearwater, FL", stars: 5, text: "My regular cleanings are always thorough and gentle. The hygienist is wonderful, and Dr. Jones always takes the time to answer all my questions. It's a truly welcoming and professional environment." }
  ],

  trustBadges: [
    "ADA Member", "Same-Day Consultations", "Modern Technology", "Emergency Visits Available", "Invisalign Provider"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Appointments", desc: "We offer same-day consultations and emergency visits for your convenience." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear explanations of costs before any treatment begins." },
    { icon: "award", title: "Experienced Dentists", desc: "Our team consists of highly qualified and compassionate dental professionals." },
    { icon: "thumbs-up", title: "Patient Comfort", desc: "We prioritize your comfort with a gentle approach and modern amenities." },
    { icon: "phone", title: "Easy Scheduling", desc: "Book your appointment online or by phone with our friendly staff." },
    { icon: "sparkles", title: "Modern Technology", desc: "Utilizing the latest dental technology for precise and effective treatments." }
  ],

  formServiceOptions: ["General Dentistry", "Cosmetic Dentistry", "Dental Cleaning", "Emergency Dentistry", "Dental Implants", "Preventive Care"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!