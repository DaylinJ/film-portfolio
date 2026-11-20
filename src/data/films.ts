export type Film = {
  slug: string;
  title: string;
  type: string;
  year?: string;
  credits?: string;
  description: string;
  gridLabel: string;
  watchCredit?: string;
  provider: "youtube";
  url: string;
  videoId: string;
  image: string;
};

export const films: Film[] = [
  {
    slug: "first-seek",
    title: "FIRST SEEK",
    type: "Narrative promotional film",
    year: "2026",
    credits: "Writer, director, cinematographer, editor",
    description:
      "Created for PLK Youth’s Back-to-School Revival. Scripted scenes and live-event footage come together through voiceover, music, and sound design.",
    gridLabel: "Promotional short",
    watchCredit: "Director / Cinematographer",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=YJAXNpS7pUA",
    videoId: "YJAXNpS7pUA",
    image: "/images/YJAXNpS7pUA.jpg",
  },
  {
    slug: "college-town",
    title: "college town",
    type: "Short film",
    description: "An understated portrait of the landscapes and everyday scenes around Storrs.",
    gridLabel: "Short film",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=rIIhpmK9jiU",
    videoId: "rIIhpmK9jiU",
    image: "/images/rIIhpmK9jiU.jpg",
  },
  {
    slug: "cancun",
    title: "cancún",
    type: "Cinematic travel short",
    credits: "Editor and colorist",
    description: "A visual postcard from Cancún built around scenery and composition.",
    gridLabel: "Travel short",
    watchCredit: "Editor / Colorist",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=1uxhBN8ZX2w",
    videoId: "1uxhBN8ZX2w",
    image: "/images/1uxhBN8ZX2w.jpg",
  },
  {
    slug: "answer",
    title: "Answer",
    type: "Music video",
    year: "2025",
    credits: "Director, editor, contributing camera, music production, mixing and mastering",
    description:
      "A collaborative music video built around performance footage from multiple locations and edits timed to the track.",
    gridLabel: "Music video",
    watchCredit: "Director / Editor",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=ndBMtgpiw54",
    videoId: "ndBMtgpiw54",
    image: "/images/ndBMtgpiw54.jpg",
  },
  {
    slug: "visions-of-the-night",
    title: "visions of the night",
    type: "Experimental short",
    description: "An experimental film inspired by the Book of Job.",
    gridLabel: "Experimental short",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=AddHV-lp348",
    videoId: "AddHV-lp348",
    image: "/images/visions-of-the-night-v1.webp",
  },
  {
    slug: "welcome-back-24",
    title: "Welcome Back ’24",
    type: "Scripted school film",
    year: "2024",
    credits: "Co-director, co-producer, writer, editor",
    description:
      "A 16-minute scripted school film built around scripted performances, parallel scenes, dialogue, and sound cues.",
    gridLabel: "School film",
    watchCredit: "Co-director / Editor",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=-0L7QvGCwj0",
    videoId: "-0L7QvGCwj0",
    image: "/images/-0L7QvGCwj0.jpg",
  },
  {
    slug: "fiddler-on-the-roof-cast-promo",
    title: "Fiddler on the Roof Cast Promo",
    type: "Interview promo",
    year: "2024",
    credits: "Co-producer, camera team, editor",
    description:
      "An interview-led promo for the Christian Heritage School production, cut across multiple camera angles.",
    gridLabel: "Cast promo",
    watchCredit: "Co-producer / Editor",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=uSFaBVOqn5E",
    videoId: "uSFaBVOqn5E",
    image: "/images/uSFaBVOqn5E.jpg",
  },
  {
    slug: "think-on-these-things",
    title: "think on these things.",
    type: "Microfilm",
    description: "A series of locked-off beach compositions inspired by Philippians 4:8.",
    gridLabel: "Microfilm",
    provider: "youtube",
    url: "https://www.youtube.com/watch?v=Uwsr6Hg0dKA",
    videoId: "Uwsr6Hg0dKA",
    image: "/images/Uwsr6Hg0dKA.jpg",
  },
];

export const moreFilmsUrl = "https://www.youtube.com/playlist?list=PLTn3_TJPkEko";
