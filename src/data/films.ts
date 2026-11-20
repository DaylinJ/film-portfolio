export type Film = {
  slug: string;
  title: string;
  year?: string;
  type?: string;
  role?: string;
  url: string;
  image?: string;
  watchLabel?: string;
  provider: "youtube" | "instagram";
  videoId?: string;
  startSeconds?: number;
};

export const films: Film[] = [
  {
    slug: "first-seek",
    title: "FIRST SEEK",
    year: "2026",
    type: "Narrative promotional film",
    role: "Writer, Director, Cinematographer, Editor",
    url: "https://www.youtube.com/watch?v=YJAXNpS7pUA",
    image: "/images/YJAXNpS7pUA.jpg",
    provider: "youtube",
    videoId: "YJAXNpS7pUA",
  },
  {
    slug: "college-town",
    title: "college town",
    url: "https://www.youtube.com/watch?v=rIIhpmK9jiU",
    image: "/images/rIIhpmK9jiU.jpg",
    provider: "youtube",
    videoId: "rIIhpmK9jiU",
  },
  {
    slug: "cancun",
    title: "cancún",
    url: "https://www.youtube.com/watch?v=1uxhBN8ZX2w",
    image: "/images/1uxhBN8ZX2w.jpg",
    provider: "youtube",
    videoId: "1uxhBN8ZX2w",
  },
  {
    slug: "answer",
    title: "Answer",
    year: "2025",
    type: "Music video",
    role: "Director, Editor, Contributing Camera, Music Production, Mixing and Mastering",
    url: "https://www.youtube.com/watch?v=ndBMtgpiw54",
    image: "/images/ndBMtgpiw54.jpg",
    provider: "youtube",
    videoId: "ndBMtgpiw54",
  },
  {
    slug: "visions-of-the-night",
    title: "visions of the night",
    url: "https://www.youtube.com/watch?v=AddHV-lp348",
    image: "/images/AddHV-lp348.jpg",
    provider: "youtube",
    videoId: "AddHV-lp348",
  },
  {
    slug: "welcome-back-24",
    title: "Welcome Back ’24",
    year: "2024",
    type: "Scripted school film",
    role: "Co-Director, Co-Producer, Writer, Editor",
    url: "https://www.youtube.com/watch?v=-0L7QvGCwj0&t=802s",
    image: "/images/-0L7QvGCwj0.jpg",
    watchLabel: "Watch excerpt",
    provider: "youtube",
    videoId: "-0L7QvGCwj0",
    startSeconds: 802,
  },
  {
    slug: "fiddler-on-the-roof-cast-promo",
    title: "Fiddler on the Roof Cast Promo",
    year: "2024",
    type: "Interview promo",
    role: "Co-Producer, Camera Team, Editor",
    url: "https://www.youtube.com/watch?v=uSFaBVOqn5E",
    image: "/images/uSFaBVOqn5E.jpg",
    provider: "youtube",
    videoId: "uSFaBVOqn5E",
  },
  {
    slug: "think-on-these-things",
    title: "think on these things.",
    url: "https://www.youtube.com/watch?v=Uwsr6Hg0dKA",
    image: "/images/Uwsr6Hg0dKA.jpg",
    provider: "youtube",
    videoId: "Uwsr6Hg0dKA",
  },
];

export const moreFilmsUrl = "https://www.youtube.com/playlist?list=PLTn3_TJPkEko";
