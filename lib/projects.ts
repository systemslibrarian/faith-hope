export type Stage = "Understand" | "Remember" | "Discern" | "Intercede";

export type Project = {
  slug: string;
  name: string;
  stage: Stage;
  stageOrder: number;
  tagline: string;
  description: string;
  longDescription: string;
  scripture?: { reference: string; text: string };
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  status: "live" | "in-development";
  icon: "book" | "heart" | "compass" | "hands";
};

export const stages: { name: Stage; verse: string; summary: string }[] = [
  {
    name: "Understand",
    verse: "Luke 24:27",
    summary: "Faith sees Christ at the center of Scripture.",
  },
  {
    name: "Remember",
    verse: "Psalm 119:11",
    summary: "Faith carries God's Word into daily life.",
  },
  {
    name: "Discern",
    verse: "James 1:5",
    summary: "Faith trusts God when the next step is unclear.",
  },
  {
    name: "Intercede",
    verse: "1 Timothy 2:1",
    summary: "Hope turns outward in prayer for others.",
  },
];

export const projects: Project[] = [
  {
    slug: "scripture-journey",
    name: "Scripture Journey",
    stage: "Understand",
    stageOrder: 1,
    tagline:
      "A Christ-centered learning app for tracing how the whole Bible points to Jesus.",
    description:
      "A Christ-centered learning app for exploring how the whole Bible points to Jesus through messianic prophecy, fulfillment, and biblical storyline.",
    longDescription:
      "Scripture Journey is a guided learning experience for readers who want to see the unity of the Bible. It walks through messianic prophecy and fulfillment, the unfolding biblical storyline, and the way each covenant prepares for Christ. It is designed for steady, careful study — not entertainment.",
    scripture: {
      reference: "Luke 24:27",
      text: "And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.",
    },
    tags: ["Bible learning", "Prophecy", "Timeline", "Next.js", "TypeScript"],
    liveUrl: "https://www.scripturejourney.com/",
    githubUrl: "https://github.com/systemslibrarian/scripture-journey",
    status: "live",
    icon: "book",
  },
  {
    slug: "hide-in-heart",
    name: "Hide in Heart",
    stage: "Remember",
    stageOrder: 2,
    tagline:
      "A calm daily companion for hiding God's Word in your heart.",
    description:
      "A calm daily Scripture memorization companion rooted in Psalm 119:11, guiding users through reading, reflection, memorization, and application.",
    longDescription:
      "Hide in Heart is a quiet, deliberate Scripture memorization companion. Each day moves through reading, reflection, memorization, and application — formed around the simple rhythm of letting a verse settle into the heart before carrying it into the day.",
    scripture: {
      reference: "Psalm 119:11",
      text: "I have stored up your word in my heart, that I might not sin against you.",
    },
    tags: [
      "Scripture memory",
      "Daily practice",
      "Reflection",
      "Next.js",
      "Supabase",
    ],
    liveUrl: "https://hideinheart.com/",
    githubUrl: "https://github.com/systemslibrarian/HideInHeart",
    status: "live",
    icon: "heart",
  },
  {
    slug: "hiswillguide",
    name: "HisWillGuide",
    stage: "Discern",
    stageOrder: 3,
    tagline:
      "A Scripture-centered guide for discerning God's will.",
    description:
      "A Scripture-centered guide for discerning God's will through surrender, Scripture, prayer, wisdom, and obedient trust.",
    longDescription:
      "HisWillGuide helps believers walk through decisions the way Scripture invites: with surrender, with the Word, with prayer, with wisdom from others, and with obedient trust. It is not a fortune-telling tool. It is a framework for slowing down and seeking God.",
    scripture: {
      reference: "James 1:5",
      text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.",
    },
    tags: ["Discernment", "Prayer", "Wisdom", "React", "Vite"],
    liveUrl: "https://hiswillguide.com/",
    githubUrl: "https://github.com/systemslibrarian/hiswillguide",
    status: "live",
    icon: "compass",
  },
  {
    slug: "prayerwarriors",
    name: "PrayerWarriors",
    stage: "Intercede",
    stageOrder: 4,
    tagline:
      "A prayer-centered platform for organizing intercession.",
    description:
      "A mobile-first prayer platform for organizing prayer requests, tracking intercession, and encouraging others. Designed as a prayer-centered app, not a general-purpose private messenger.",
    longDescription:
      "PrayerWarriors is being built as a focused, mobile-first space for intercession — a place to gather requests, mark prayers prayed, and quietly encourage one another. It is deliberately not a general-purpose private messenger. The goal is to keep prayer at the center.",
    scripture: {
      reference: "1 Timothy 2:1",
      text: "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people.",
    },
    tags: ["Prayer", "Intercession", "Privacy", "Security", "Mobile-first"],
    liveUrl: null,
    githubUrl: null,
    status: "in-development",
    icon: "hands",
  },
];

export const getProjectByStage = (stage: Stage): Project =>
  projects.find((p) => p.stage === stage)!;
