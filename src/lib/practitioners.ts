export interface Practitioner {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  specialties: string[];
  imageSeed: string;
  pronouns: string;
}

export const practitioners: Practitioner[] = [
  {
    id: "lila-chen",
    name: "Lila Chen",
    title: "Clinical Director",
    credentials: "LAc, Dipl. Ac. (NCCAOM)",
    bio: "Lila has practiced Classical Chinese Medicine for 14 years, with advanced training in craniosacral therapy and myofascial release. She leads Aether's clinical team and sees clients for acupuncture, gua sha, and complex pain presentations. Her approach is precise, trauma-informed, and deeply intuitive.",
    specialties: ["Acupuncture", "Craniosacral Therapy", "Gua Sha", "Pain Management"],
    imageSeed: "lila",
    pronouns: "she/her",
  },
  {
    id: "marcus-okere",
    name: "Marcus Okere",
    title: "Senior Somatic Practitioner",
    credentials: "BCST, SEP",
    bio: "Marcus brings 10 years of biodynamic craniosacral therapy and Somatic Experiencing® training. He works with clients recovering from acute and developmental trauma, nervous system dysregulation, and complex grief. His holding is steady, spacious, and clinically grounded in polyvagal theory.",
    specialties: ["Craniosacral Therapy", "Somatic Breathwork", "Trauma Recovery"],
    imageSeed: "marcus",
    pronouns: "he/him",
  },
  {
    id: "sophia-ren",
    name: "Sophia Ren",
    title: "Acupuncturist & Herbalist",
    credentials: "MSTOM, Dipl. Ac.",
    bio: "Sophia blends Classical Five-Element Acupuncture with Western herbal medicine. She is known for her gentle precision with needles and her depth of botanical knowledge. She also facilitates herbal compress therapy and moxibustion, often in the same session for synergistic effect.",
    specialties: ["Acupuncture", "Moxibustion", "Herbal Compress", "Women's Health"],
    imageSeed: "sophia",
    pronouns: "she/her",
  },
  {
    id: "dorian-park",
    name: "Dorian Park",
    title: "Sound & Breath Facilitator",
    credentials: "C-IAYT, Breathwork Coach",
    bio: "Dorian leads Aether's sound bath and somatic breathwork offerings. With a background in music therapy and yoga therapy, he designs sonic architectures that guide clients into coherent states. His group sound baths are known for their precision — each frequency chosen intentionally for its physiological effect.",
    specialties: ["Sound Bath", "Somatic Breathwork", "Group Facilitation"],
    imageSeed: "dorian",
    pronouns: "they/them",
  },
  {
    id: "elara-mendez",
    name: "Elara Méndez",
    title: "Myofascial Specialist",
    credentials: "LMT, CF-L1",
    bio: "Elara specializes in myofascial cupping and gua sha facilitation for structural and emotional release. Her work targets the dialogue between fascia and the autonomic nervous system. She is especially effective with clients who carry tension from desk work, athletic overtraining, or chronic stress patterning.",
    specialties: ["Myofascial Cupping", "Gua Sha", "Sports Recovery", "Fascial Release"],
    imageSeed: "elara",
    pronouns: "she/her",
  },
];