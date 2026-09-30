export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  duration: string;
  price: string;
  benefits: string[];
  contraindications: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "craniosacral",
    title: "Craniosacral Therapy",
    tagline: "Releasing the deepest held patterns in the fluid body.",
    description: "Gentle palpation to release tension held in the cerebrospinal fluid and dural membranes.",
    fullDescription:
      "Craniosacral therapy is a subtle, profound modality that works with the cerebrospinal fluid pulse — the breath of the central nervous system. Through precise, feather-light touch at the cranium, sacrum, and along the dural tube, practitioners invite the body to release compensatory patterns stored in the meninges and fascia. Clients often report a sense of spaciousness, mental clarity, and deep somatic unwinding.",
    duration: "60–75 min",
    price: "$145",
    benefits: [
      "Relieves chronic headache and TMJ tension",
      "Calms sympathetic overdrive (PTSD, anxiety)",
      "Improves CSF circulation and neural fluid dynamics",
      "Supports vagal nerve regulation",
      "Deepens proprioceptive awareness",
    ],
    contraindications: [
      "Recent concussion or traumatic brain injury (wait 6 weeks)",
      "Active cranial or cervical fracture",
      "Unmanaged chiari malformation",
      "Acute psychosis or dissociative episode",
    ],
    icon: "sparkles",
  },
  {
    slug: "guasha",
    title: "Gua Sha Facilitation",
    tagline: "Contoured stone meets fascial memory.",
    description: "Contoured stone guided along meridians to remodel fascia and move stagnant lymph.",
    fullDescription:
      "Rooted in Classical East Asian medicine, Gua Sha uses contoured stone tools — jade, bian stone, or rose quartz — to systematically scrape, lift, and remodel superficial fascia. Our facilitation goes beyond the cosmetic: we target the emotional memory embedded in myofascial tissue, releasing physical restriction and the held patterns of chronic stress. Each session is a conversation between the stone and the nervous system.",
    duration: "45–60 min",
    price: "$120",
    benefits: [
      "Reduces facial and cervical tension",
      "Stimulates lymphatic drainage and immune function",
      "Softens adhesions in superficial fascia",
      "Improves microcirculation and tissue oxygenation",
      "Supports emotional release held in the jaw and neck",
    ],
    contraindications: [
      "Active acne or skin infection in treatment area",
      "Recent Botox or filler (wait 2 weeks)",
      "Unmanaged rosacea flare",
      "Anticoagulant therapy (consult physician)",
    ],
    icon: "gem",
  },
  {
    slug: "acupuncture",
    title: "Clinical Acupuncture",
    tagline: "Precise points. Measurable shifts.",
    description: "Fine-needle therapy rooted in Classical Chinese Medicine and supported by modern neuroanatomy.",
    fullDescription:
      "Aether's acupuncture practice bridges the Classical channel system with contemporary trigger-point mapping and neuroanatomy. Our practitioners select points based on your presentation — whether you're addressing chronic pain, endocrine imbalance, digestive stasis, or emotional dysregulation. Fine-gauge sterile needles, single-use, placed with anatomical precision. Each session includes distal and local point selection, with optional moxibustion or cupping.",
    duration: "50–70 min",
    price: "$135",
    benefits: [
      "Pain modulation via adenosine receptor pathways",
      "Downregulates inflammatory cytokine cascades",
      "Improves HRV (heart rate variability)",
      "Supports digestive motility and vagal tone",
      "Addresses stored emotional patterns at myofascial intersections",
    ],
    contraindications: [
      "Needle phobia requiring sedation (refer to counseling first)",
      "Active chemotherapy or compromised immune system (consult oncologist)",
      "Pregnancy first trimester (limited points)",
      "Uncontrolled bleeding disorder",
    ],
    icon: "plus",
  },
  {
    slug: "soma-breath",
    title: "Somatic Breathwork",
    tagline: "The breath as a therapeutic instrument.",
    description: "Structured breath patterns that shift autonomic state and unlock held somatic patterns.",
    fullDescription:
      "Somatic Breathwork is a structured, facilitator-guided practice that uses specific breath rhythms — conscious connected, box, and diaphragmatic wave — to shift autonomic nervous system state. Unlike passive meditation, this is an active, embodied practice. Clients are guided through cycles of oxygenation and intentional retention, with trained facilitators holding space for emotional release, somatic unwinding, and nervous system titration. Sessions may include gentle touch, voice, and resonance work.",
    duration: "60 min",
    price: "$110",
    benefits: [
      "Resets autonomic baseline (parasympathetic activation)",
      "Increases carbon dioxide tolerance (CO₂ table work)",
      "Releases interoceptive grip (anxiety, hypervigilance)",
      "Improves sleep architecture and HRV",
      "Accesses non-ordinary states safely (therapeutic context)",
    ],
    contraindications: [
      "Cardiovascular conditions (arrhythmia, hypertension) — consult physician",
      "Active epilepsy or seizure disorder",
      "Pregnancy third trimester",
      "History of severe trauma without established support system",
      "COPD or moderate-to-severe asthma",
    ],
    icon: "wind",
  },
  {
    slug: "moxibustion",
    title: "Moxibustion Therapy",
    tagline: "Warmth as medicine.",
    description: "Burning Artemisia vulgaris near acupoints to move qi and reduce stagnation.",
    fullDescription:
      "Moxibustion involves the slow, controlled burning of dried Artemisia vulgaris (mugwort) over specific acupoints or along channel pathways. The gentle, penetrating heat — called the 'warming technique' — stimulates microcirculation, relaxes local fascia, and signals the autonomic nervous system to downregulate. Our practitioners use stick moxa and loose moxa on a base of ginger or turmeric for enhanced anti-inflammatory effect.",
    duration: "30–45 min",
    price: "$85",
    benefits: [
      "Deep, penetrating heat moves stagnant fluids",
      "Anti-inflammatory — Artemisia vulgaris is a COX-2 inhibitor",
      "Supports kidney-adrenal axis recovery",
      "Effective for cold-type conditions (fatigue, poor circulation)",
      "Can be combined with acupuncture for amplified effect",
    ],
    contraindications: [
      "Diabetes with peripheral neuropathy (reduced heat sensation)",
      "Active skin lesions or burns in treatment area",
      "Pregnancy over lower abdomen",
      "History of heat stroke or heat sensitivity",
    ],
    icon: "flame",
  },
  {
    slug: "cupping",
    title: "Myofascial Cupping",
    tagline: "Negative pressure, positive release.",
    description: "Therapeutic vacuum cups to lift, glide, and decompress fascia layers.",
    fullDescription:
      "Myofascial cupping uses medical-grade silicone and glass cups to create negative pressure that lifts superficial and deep fascia layers. Unlike stationary cupping, our approach emphasizes dynamic gliding — cups moved along meridians with massage oil — to create shear force that breaks adhesions and creates space between tissue planes. The cups are applied at controlled vacuum levels, and the resulting petechiae (cup marks) are a normal sign of metabolic clearance.",
    duration: "40–55 min",
    price: "$100",
    benefits: [
      "Decompresses entrapped nerves and fascia",
      "Increases local blood flow 3–5x (hyperemic response)",
      "Moves stagnant interstitial fluid and lymph",
      "Reduces trigger point density",
      "Creates visible separation in scar tissue and adhesions",
    ],
    contraindications: [
      "Anticoagulant therapy (blood thinners)",
      "Active thrombosis or DVT risk",
      "Skin fragility / purpura-prone conditions",
      "Recent sunburn or compromised skin barrier",
    ],
    icon: "circle",
  },
  {
    slug: "herbal-compress",
    title: "Herbal Compress Therapy",
    tagline: "Pressed herbs, steamed cloth, deep restoration.",
    description: "Warm poultices of medicinal herbs applied along channel pathways.",
    fullDescription:
      "Herbal compress therapy combines the wisdom of botanical medicine with targeted thermal application. Muslin bundles filled with organic chamomile, lavender, ginger, turmeric, and slippery elm bark are steamed and pressed along the spine, sacrum, and abdomen. The moist heat drives volatile compounds into the superficial circulation while the physical pressure stimulates mechanoreceptors. This is deep, nurturing work — ideal as a preparatory or closing therapy.",
    duration: "45 min",
    price: "$95",
    benefits: [
      "Transdermal delivery of anti-inflammatory botanicals",
      "Moist heat relaxes superficial and intermediate fascia",
      "Volatile compounds (bisabolol, curcumin) enter microcirculation",
      "Calms sympathetic drive via C-tactile afferent stimulation",
      "Deeply grounding — ideal for nervous system overwhelm",
    ],
    contraindications: [
      "Allergy to Asteraceae (chamomile) or Zingiberaceae (ginger)",
      "Open wounds or active dermatitis",
      "Heat intolerance / multiple sclerosis heat sensitivity",
    ],
    icon: "leaf",
  },
  {
    slug: "sound-bath",
    title: "Guided Sound Bath",
    tagline: "Vibration as an organizing signal.",
    description: "Gongs, crystal bowls, and monochord in a structured sonic journey.",
    fullDescription:
      "Sound bath at Aether is not a passive listening session — it is a structured sonic intervention. Crystal singing bowls tuned to specific frequencies (396–936 Hz), gongs with complex overtonal spectra, and the monochord's monotone pulse work together to entrain brainwave states. Our facilitators guide the group through a narrative arc: grounding, activation, release, and integration. The result is a coherent shift in EEG patterns — measurable, repeatable, and deeply restorative.",
    duration: "50 min",
    price: "$40 (group) / $95 (private)",
    benefits: [
      "EEG entrainment toward theta-alpha states",
      "Reduces cortisol and salivary alpha-amylase",
      "Improves interhemispheric coherence",
      "Accessible for non-ambulatory clients",
      "Group format creates community coherence",
    ],
    contraindications: [
      "Sound-sensitive conditions (misophonia, certain autism profiles)",
      "Unmanaged epilepsy (certain frequencies may trigger — consult facilitator)",
      "Pregnancy first trimester (high-intensity gong work is avoided)",
    ],
    icon: "music",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}