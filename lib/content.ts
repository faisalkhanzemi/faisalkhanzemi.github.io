export const profile = {
  name: "Mohd Faisal Khan",
  title: "CRM Manager · Retention · Lifecycle Marketing",
  location: "Dubai, UAE",
  email: "faisalkhanzemi@gmail.com",
  linkedin: "linkedin.com/in/faisalkhanzemi",
  linkedinUrl: "https://linkedin.com/in/faisalkhanzemi",
  handle: "faisalkhanzemi",
  githubUrl: "https://github.com/faisalkhanzemi",
  threadsUrl: "https://www.threads.net/@faisalkhanzemi",
  instagramUrl: "https://www.instagram.com/faisalkhanzemi",
  xUrl: "https://x.com/faisalkhanzemi",
  resumeUrl: "/Faisal-Khan-CV.pdf",
  resumeName: "Faisal-Khan-CV.pdf",
};

export const heroMetrics = [
  { from: 2, value: 8, suffix: "+", label: "Years in CRM" },
  { from: 1, value: 5, suffix: "", label: "Brands scaled" },
  { from: 1.8, value: 3.4, suffix: "%", decimals: 1, label: "Push CTR achieved" },
  { from: 5, value: 18, prefix: "+", suffix: "%", label: "Retention lift" },
];

export const toolStack = [
  { group: "CRM Platforms", tools: ["Klaviyo", "CleverTap", "MoEngage", "WebEngage", "Braze"] },
  { group: "Channels", tools: ["Push", "Email", "WhatsApp API", "In-App", "SMS", "Web"] },
  { group: "Analytics & SEO", tools: ["Google Analytics", "SEOmonitor", "Semrush", "Excel"] },
  { group: "AI & Automation", tools: ["Claude Code", "MCP", "Python"] },
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  logo?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Traininpink",
    location: "Dubai, UAE",
    role: "CRM Manager",
    period: "Aug 2026 — Present",
    current: true,
    points: [
      "Own lifecycle automation in Klaviyo across the subscription journey: onboarding, trials, payment recovery, renewals and win-back, in Italian and English",
      "Rebuilding the CRM event and metric layer (CRM 2.0) with product and tech, so every flow triggers on reliable app and payment events",
      "Report flow performance to leadership by lifecycle stage (new users, existing leads, retention), counting trials and payments rather than opens",
      "Run QA, localisation and go-live checks for every flow before it reaches customers",
    ],
  },
  {
    company: "Justlife",
    location: "Dubai, UAE",
    role: "CRM Specialist",
    period: "Jun 2025 — Jul 2026",
    logo: "/logos/justlife.png",
    points: [
      "Ran weekly Focus Campaigns across push, WhatsApp, and email; A/B tested channels, timings, and copy. CTR improved from 1.8% to 3.4%, conversions up 26%",
      "Built CleverTap abandonment journeys triggered within 30 min of drop-off, recovering 21% of dropped sessions and lifting repeat order rate by 15%",
      "Designed control group lift analysis frameworks to isolate true campaign impact; built real-time KPI dashboards used across the growth team",
      "Initiated in-house SEO operations, structured a monthly content calendar targeting UAE and KSA keywords, reducing external agency dependence",
      "Applied hyperlocal personalization by neighbourhood, city, and service type",
    ],
  },
  {
    company: "Loblaw Companies Ltd.",
    location: "Canada",
    role: "Growth & Retention Specialist",
    period: "Apr 2023 — May 2025",
    logo: "/logos/loblaw.png",
    points: [
      "Lifecycle campaigns targeting win-back, lapsed, and at-risk segments, improving 30-day retention by 18% over 12 months",
      "Multivariate A/B tests on subject lines, send times, and segments. Email open rate lifted from 18% to 26% over two quarters",
      "Segmentation models with BI and product teams based on RFM signals, cutting unsubscribe rates by 22%",
      "Reduced campaign turnaround time by 30% via templatized CRM workflows",
    ],
  },
  {
    company: "Gaana — Times Internet",
    location: "India",
    role: "CRM Executive",
    period: "Oct 2020 — Mar 2023",
    logo: "/logos/gaana.png",
    points: [
      "Full lifecycle campaigns across email, push, in-app, and web on MoEngage for a 50M+ user base",
      "Improved DAU/MAU ratio by 8%; reduced time-to-re-engagement from 7 days to under 3",
      "Deployed in-app nudges at subscription funnel exit points, recovering 14% of abandoned premium flows",
      "Lifted push CTR from 2.1% to 4.3% and in-app conversion rates by 19% through A/B testing",
    ],
  },
  {
    company: "Zomato",
    location: "India",
    role: "Senior Digital Marketing Associate",
    period: "Jul 2018 — Sep 2020",
    logo: "/logos/zomato.png",
    points: [
      "CRM automation across push, email, and in-app, improving 30-day retention by 11%, order frequency from 1.8 to 2.3 orders/month",
      "Dynamic content journeys using behavioural signals, reducing first-30-day churn by 17%",
      "Audience targeting refinements that grew AOV by 12%",
    ],
  },
  {
    company: "Shopguinea Pvt Ltd",
    location: "India",
    role: "Digital Marketing Executive",
    period: "Jul 2017 — May 2018",
    points: [
      "Branding strategy, campaign planning, organic traffic growth",
      "Social media management, performance reporting",
    ],
  },
];

export const skills = [
  {
    name: "Lifecycle & Journey Design",
    desc: "End-to-end customer journey architecture: onboarding, activation, engagement, re-activation, and win-back flows built for measurable retention impact",
  },
  {
    name: "Segmentation & Personalisation",
    desc: "RFM modelling, behavioural segmentation, real-time triggered messaging. Hyperlocal personalisation by geography, service type, and user intent",
  },
  {
    name: "A/B Testing & Experimentation",
    desc: "Control group frameworks, incremental lift analysis, multivariate testing across channels, copy, timing, and audience, with statistical rigour",
  },
  {
    name: "CRM Analytics & Reporting",
    desc: "KPI dashboards, campaign performance tracking, funnel analysis. Comfortable working with BI and product teams",
  },
  {
    name: "Multi-channel Campaign Execution",
    desc: "Push, email, WhatsApp, in-app, SMS, and web, coordinated across the full lifecycle",
  },
  {
    name: "SEO & Content Strategy",
    desc: "Keyword portfolio management, near-miss opportunity identification, content calendar execution targeting UAE and KSA markets",
  },
];

export type CaseStudy = {
  index: string;
  title: string;
  tag: string;
  logo?: string;
  description: string;
  metrics: { value: string; label: string }[];
  link?: { href: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    title: "Abandonment Recovery at Justlife",
    tag: "CleverTap · Justlife",
    logo: "/logos/justlife.png",
    description:
      "Designed and deployed multi-step abandonment journeys in CleverTap triggered within 30 minutes of service drop-off. Used behavioural signals to personalise message content by service type and city.",
    metrics: [
      { value: "21%", label: "sessions recovered" },
      { value: "+15%", label: "repeat order rate" },
      { value: "30 min", label: "trigger window" },
    ],
  },
  {
    index: "02",
    title: "In-App Nudges for Subscription Conversion",
    tag: "MoEngage · Gaana",
    logo: "/logos/gaana.png",
    description:
      "Identified premium subscription funnel drop-off points using funnel analytics. Deployed targeted in-app messages and web banners at exit-intent moments with personalised upgrade prompts.",
    metrics: [
      { value: "14%", label: "drop-offs recovered" },
      { value: "+19%", label: "in-app conversions" },
      { value: "50M+", label: "user base" },
    ],
  },
  {
    index: "03",
    title: "Retention Lift via Lifecycle Segmentation",
    tag: "A/B Testing · Loblaw",
    logo: "/logos/loblaw.png",
    description:
      "Built RFM-based segmentation models with the BI team to power differentiated lifecycle campaigns. Ran multivariate tests across subject lines, timing, and audience splits.",
    metrics: [
      { value: "+18%", label: "30-day retention" },
      { value: "18→26%", label: "email open rate" },
      { value: "-22%", label: "unsubscribes" },
    ],
  },
  {
    index: "04",
    title: "In-House SEO Function from Zero",
    tag: "SEO · Justlife",
    logo: "/logos/justlife.png",
    description:
      "Analysed a 12,874-keyword portfolio, identified near-miss opportunities in high-intent UAE service queries, and built a structured monthly content calendar to capture organic traffic without agency reliance.",
    metrics: [
      { value: "12.8K", label: "keywords audited" },
      { value: "UAE + KSA", label: "markets" },
      { value: "In-house", label: "agency replaced" },
    ],
  },
  {
    index: "05",
    title: "Insta Edits for Claude (open source)",
    tag: "Claude Code · MCP · Open source",
    description:
      "A free plugin and MCP server that lets Claude Code edit Reels inside Instagram's Edits for Mac. Edits only shows AI agents 32 of its 274 tools until a project is open and never says when that changes; the plugin checks after every call so Claude gets the full editor. Published on GitHub, PyPI and the official MCP Registry, and featured in the Big Bang AI Weekly newsletter.",
    metrics: [
      { value: "32→274", label: "Edits tools unlocked" },
      { value: "MIT", label: "free and open source" },
      { value: "0.1.2", label: "latest release" },
    ],
    link: { href: "https://faisalkhanzemi.github.io/insta-edits-for-claude/", label: "See the project" },
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
