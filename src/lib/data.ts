export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  duration: string;
  price: string;
  benefits: string[];
  category: "body" | "mind" | "energy" | "recovery";
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  bio: string;
  fullBio: string;
  specialties: string[];
  credentials: string[];
  imageInitials: string;
}

export const services: Service[] = [
  {
    id: "acupuncture",
    title: "Acupuncture",
    tagline: "Restore the body's natural rhythm",
    description: "Precise, calming treatments tailored to your body's energetic landscape.",
    fullDescription: "Our acupuncturists assess your pulse, tongue, and history to place fine needles at precise meridian points. Sessions release endorphins, reduce cortisol, and improve microcirculation — leaving you deeply grounded.",
    duration: "60 min",
    price: "$120",
    benefits: ["Reduces chronic tension", "Improves sleep quality", "Supports immune function", "Balances energy flow"],
    category: "energy",
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine",
    tagline: "Custom formulas from the earth's pharmacy",
    description: "Personalized tinctures and teas that support recovery, sleep, and steady energy.",
    fullDescription: "Each formula is custom-blended after a thorough intake that examines your constitution, digestion, and stress patterns. We source organic herbs and prepare them in small batches for potency and purity.",
    duration: "45 min",
    price: "$95",
    benefits: ["Supports deep sleep", "Strengthens digestion", "Balances mood", "Boosts vitality"],
    category: "recovery",
  },
  {
    id: "mind-body-therapy",
    title: "Mind-Body Therapy",
    tagline: "Release what lives in the nervous system",
    description: "Breathwork, somatic movement, and guided practice for stress that lives deep in the body.",
    fullDescription: "Through a blend of therapeutic breath patterns, gentle movement, and guided imagery, you'll learn to down-regulate your nervous system and release stored tension. Each session leaves you with tools you can use daily.",
    duration: "55 min",
    price: "$110",
    benefits: ["Lowers anxiety", "Improves emotional regulation", "Increases body awareness", "Builds resilience"],
    category: "mind",
  },
  {
    id: "float-therapy",
    title: "Float Therapy",
    tagline: "Weightlessness for the overstimulated mind",
    description: "Sensory deprivation in a warm, Epsom-saturated tank — a reset button for the nervous system.",
    fullDescription: "Float in 900 lbs of pharmaceutical-grade Epsom salts at skin temperature in complete darkness and silence. Without sensory input, your brain shifts into theta waves — the same state experienced during deep meditation.",
    duration: "90 min",
    price: "$85",
    benefits: ["Deep muscle relaxation", "Reduces anxiety", "Enhances creativity", "Improves sleep"],
    category: "body",
  },
  {
    id: "sound-healing",
    title: "Sound Healing",
    tagline: "Vibrational medicine for the whole being",
    description: "Crystal singing bowls, gongs, and tuning forks realign your cellular resonance.",
    fullDescription: "Our practitioner uses quartz crystal bowls tuned to specific chakras, paired with frame drums and tuning forks. The vibrations help entrain brainwaves to restorative frequencies, promoting deep relaxation and energetic clearing.",
    duration: "60 min",
    price: "$100",
    benefits: ["Releases emotional blockages", "Improves focus", "Deepens meditation", "Balances chakras"],
    category: "energy",
  },
  {
    id: "cryotherapy",
    title: "Cryotherapy",
    tagline: "Cold exposure for recovery and vitality",
    description: "Brief whole-body cold exposure that reduces inflammation and elevates mood.",
    fullDescription: "Stand in a chamber cooled to -160°F for 2-3 minutes while our technician monitors your vitals. The cold triggers a cascade of beneficial responses: reduced inflammation, dopamine release, and metabolic activation.",
    duration: "15 min",
    price: "$65",
    benefits: ["Reduces inflammation", "Boosts metabolism", "Elevates mood", "Improves recovery"],
    category: "body",
  },
  {
    id: "aromatherapy",
    title: "Aromatherapy",
    tagline: "The healing power of botanical essence",
    description: "Therapeutic-grade essential oil protocols tailored to your nervous system's needs.",
    fullDescription: "We assess your current state and blend pure, organic essential oils for diffusion, topical application, or inhalation. Each protocol is designed to support your specific goals — whether calming, energizing, or grounding.",
    duration: "45 min",
    price: "$80",
    benefits: ["Reduces stress", "Improves mood", "Supports respiratory health", "Enhances focus"],
    category: "mind",
  },
];

export const practitioners: Practitioner[] = [
  {
    id: "elara-voss",
    name: "Elara Voss",
    title: "Founder & Lead Acupuncturist",
    bio: "With 14 years of clinical experience, Elara blends classical Chinese medicine with modern neuroscience.",
    fullBio: "Elara trained at the Pacific College of Health and Science and holds advanced certifications in scalp acupuncture and motor-point needling. She works with athletes, chronic pain patients, and anyone seeking deeper nervous-system regulation.",
    specialties: ["Acupuncture", "Herbal Medicine", "Cupping"],
    credentials: ["L.Ac.", "Dipl. O.M. (NCCAOM)", "MSOM"],
    imageInitials: "EV",
  },
  {
    id: "mira-chendra",
    name: "Mira Chendra",
    title: "Senior Mind-Body Therapist",
    bio: "Mira specializes in somatic therapy and breathwork for trauma recovery and stress resilience.",
    fullBio: "After a decade of study in Somatic Experiencing® and yoga therapy, Mira joined Aether to help clients release deeply held tension patterns. She holds certifications in TRE® and Polyvagal Coaching.",
    specialties: ["Somatic Therapy", "Breathwork", "Guided Meditation"],
    credentials: ["SEP", "RYT-500", "C-IAYT"],
    imageInitials: "MC",
  },
  {
    id: "thomas-rivera",
    name: "Thomas Rivera",
    title: "Float & Cryotherapy Specialist",
    bio: "Thomas guides clients through cold exposure and float therapy with calm, attentive expertise.",
    fullBio: "A former NCAA athlete and certified Wim Hof Method instructor, Thomas brings both personal experience and clinical knowledge to every session. He prioritizes safety and gradual adaptation for every client.",
    specialties: ["Cryotherapy", "Float Therapy", "Cold Exposure Training"],
    credentials: ["WHM Instructor", "NCSF-CPT", "CPR/AED"],
    imageInitials: "TR",
  },
  {
    id: "sarah-kim",
    name: "Sarah Kim",
    title: "Sound Healer & Energy Practitioner",
    bio: "Sarah uses crystal bowls, tuning forks, and Reiki to clear energetic blockages and restore flow.",
    fullBio: "Sarah trained at the Sound Healing Academy and is a Usui Reiki Master Teacher. She incorporates vibrational frequency analysis into her sessions, using biofeedback to select the most effective tones and attunements.",
    specialties: ["Sound Healing", "Reiki", "Chakra Balancing"],
    credentials: ["SHA-Certified", "RMT", "CAC"],
    imageInitials: "SK",
  },
];

export interface SymptomModality {
  symptoms: string[];
  modalities: string[];
  recommendation: string;
}

export const symptomData: SymptomModality[] = [
  {
    symptoms: ["chronic pain", "headaches", "muscle tension"],
    modalities: ["Acupuncture", "Float Therapy", "Cryotherapy"],
    recommendation: "Your symptoms suggest stored tension patterns. We recommend starting with Acupuncture to release energetic blockages, followed by Float Therapy to allow your nervous system to reset."
  },
  {
    symptoms: ["anxiety", "insomnia", "restlessness"],
    modalities: ["Mind-Body Therapy", "Sound Healing", "Aromatherapy"],
    recommendation: "Your nervous system appears over-activated. Mind-Body Therapy coupled with Sound Healing can help down-regulate your stress response and improve sleep quality."
  },
  {
    symptoms: ["fatigue", "low energy", "brain fog"],
    modalities: ["Herbal Medicine", "Acupuncture", "Cryotherapy"],
    recommendation: "Deep fatigue often signals a need for constitutional support. Herbal Medicine can rebuild your vitality while Acupuncture clears energetic stagnation."
  },
  {
    symptoms: ["digestive issues", "bloating", "food sensitivity"],
    modalities: ["Herbal Medicine", "Acupuncture", "Aromatherapy"],
    recommendation: "Gut health is central to whole-body wellness. Custom herbal formulas combined with Acupuncture can regulate digestion and reduce inflammation."
  },
  {
    symptoms: ["stress", "burnout", "overwhelm"],
    modalities: ["Float Therapy", "Mind-Body Therapy", "Sound Healing"],
    recommendation: "Burnout requires deep rest. Float Therapy provides complete sensory respite while Mind-Body Therapy gives you tools to rebuild resilience."
  },
  {
    symptoms: ["mood swings", "irritability", "sadness"],
    modalities: ["Sound Healing", "Aromatherapy", "Herbal Medicine"],
    recommendation: "Emotional imbalance often responds well to vibrational and botanical medicine. Sound Healing can help regulate your emotional state while herbal support provides stability."
  },
];

export const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export const journalPrompts = [
  "What sensation in your body is asking for your attention right now?",
  "Describe a moment today when you felt most at ease. What contributed to that feeling?",
  "If your nervous system could speak, what would it say it needs today?",
  "What is one small act of care you can offer yourself in the next hour?",
  "Notice a recurring thought. What would it feel like to gently set it down?",
  "Where in your body do you hold tension? Describe its texture and temperature.",
  "What does 'enough' feel like for you today — not too much, not too little?",
  "If you could breathe color into your body, what shade would you start with?",
  "Recall a place that felt completely safe. What made it so?",
  "What are you protecting yourself from — and is that protection still needed?",
];