export type Language = 'en' | 'fr' | 'es'

export type HeroLine = {
  prefix: string
  highlight: string
  suffix?: string
}

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

type FooterSection = {
  heading: string
  links: FooterLink[]
}

type FooterMessages = {
  tagline: string
  sections: {
    connect: FooterSection
    ministries: FooterSection
    resources: FooterSection
    media: FooterSection
  }
  contact: {
    heading: string
    people: { name: string; phone: string }[]
  }
  services: {
    heading: string
    lines: string[]
  }
  social: {
    youtube: string
    instagram: string
    whatsapp: string
    tiktok: string
  }
  copyright: string
}

type AboutBelief = {
  title: string
  content: string
  verse?: string
}

type AboutCoreValue = {
  title: string
  description: string
}

type AboutTestimonyCard = {
  quote?: string
  title?: string
  paragraphs?: string[]
  author: string
  meta: string
  fullWidth?: boolean
}

type AboutJoinCard = {
  title: string
  details: string[]
}

type AboutMessages = {
  hero: {
    headingLead: string
    headingHighlight: string
    subtitle: string
    description: string
  }
  story: {
    heading: string
    paragraphs: string[]
  }
  beliefs: {
    heading: string
    items: AboutBelief[]
  }
  missionVision: {
    missionLabel: string
    missionHeading: string
    missionStatement: string
    missionDescription: string
    visionLabel: string
    visionHeading: string
    visionStatement: string
    visionDescription: string
  }
  coreValues: {
    heading: string
    items: AboutCoreValue[]
  }
  leadership: {
    heading: string
    name: string
    role: string
    paragraphs: string[]
  }
  testimonies: {
    heading: string
    intro: string
    cards: AboutTestimonyCard[]
    share: {
      heading: string
      description: string
      cta: string
    }
  }
  join: {
    heading: string
    description: string
    cards: AboutJoinCard[]
    watchCta: string
  }
  finalCta: {
    heading: string
    description: string
    buttons: { label: string; href: string }[]
  }
}

export type Messages = {
  nav: {
    home: string
    about: string
    quickLinks: string
    ministries: string
    events: string
    sermons: string
    map: string
    give: string
    language: string
  }
  hero: {
    visionBadge: string
    lines: HeroLine[]
    featuredTagline: string
    featuredDetails: string
    registerCta: string
    watchLive: string
    quickLinks: string
  }
  footer: FooterMessages
  about: AboutMessages
  general: {
    languageLabel: string
  }
}

const en: Messages = {
  nav: {
    home: 'Home',
    about: 'About',
    quickLinks: 'Quick Links',
    ministries: 'Ministries',
    events: 'Events',
    sermons: 'Sermons',
    map: 'Map',
    give: 'Give',
    language: 'Language',
  },
  hero: {
    visionBadge: 'Our Vision',
    lines: [
      { prefix: 'Souls ', highlight: 'saved', suffix: '.' },
      { prefix: 'Men ', highlight: 'trained', suffix: '.' },
      { prefix: 'Nations ', highlight: 'taken', suffix: '.' },
    ],
    featuredTagline: 'Rooted December · Living in Abundance',
    featuredDetails: 'Saturday 20 December · The Light House · Apostle Nelson Isaiah',
    registerCta: 'Register Free',
    watchLive: 'Watch Live',
    quickLinks: 'Quick Links',
  },
  footer: {
    tagline: 'Souls saved. Men trained. Nations taken.',
    sections: {
      connect: {
        heading: 'Connect',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Join a Ministry', href: '/ministries' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'Become a Member', href: '/contact#become-member' },
        ],
      },
      ministries: {
        heading: 'Ministries',
        links: [
          { label: 'TLCC Online ministry', href: '/ministries#tlcc-online' },
          { label: 'TLCC Firestorm', href: '/ministries#firestorm' },
          { label: 'TLCC Follow up', href: '/ministries#follow-up' },
          { label: 'TLCC Prayer team', href: '/ministries#prayer-team' },
          { label: 'TLCC Media & visibility', href: '/ministries#media-visibility' },
          { label: 'Growth initiatives', href: '/ministries#growth-initiatives' },
        ],
      },
      resources: {
        heading: 'Resources',
        links: [
          { label: 'Daily Devotionals', href: '/sermons#featured' },
          { label: 'Rooted Program', href: '/map' },
          { label: 'Prayer Requests', href: '/contact#prayer-request' },
          { label: 'Testimonies', href: '/about#testimonies' },
          { label: 'Service Times', href: '/about#services' },
        ],
      },
      media: {
        heading: 'Media',
        links: [
          { label: 'Sermons', href: '/sermons' },
          { label: 'YouTube Channel', href: 'https://youtube.com/@TheLightCommunity', external: true },
          { label: 'Worship Sessions', href: '/sermons' },
        ],
      },
    },
    contact: {
      heading: 'Contact Us',
      people: [
        { name: 'Joy', phone: '09035004764' },
        { name: 'Naomi', phone: '08087207044' },
      ],
    },
    services: {
      heading: 'Service Times',
      lines: [
        'Mon-Wed: Rooted Prayers (9:00 PM)',
        'Tues & Sat: Sermons (9:00 PM)',
        'Watch Hour Prayers: 9:00 PM (fortnightly)',
      ],
    },
    social: {
      youtube: 'YouTube',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      tiktok: 'TikTok',
    },
    copyright: 'The Light Community Church. All rights reserved.',
  },
  about: {
    hero: {
      headingLead: 'We Are',
      headingHighlight: 'The Light Community Church',
      subtitle: 'A House of Grace, A Home of Love, A Beacon of Hope',
      description:
        'Welcome to The Light Community Church, a vibrant and diverse family where everyone is valued, nobody is perfect, and anything is possible through Christ. We are more than just a Sunday gathering; we are a community on a mission to know God and make Him known in our city and to the ends of the earth.',
    },
    story: {
      heading: 'Our Story',
      paragraphs: [
        'The Light Community Church began with a small group of believers united by a simple yet powerful vision: to build a church that reflects the joy and life-changing power of the Gospel. From those humble beginnings, God has faithfully grown us into a multi-generational family passionate about His Kingdom.',
        "Our story is one of God's relentless grace—a story we are still writing together as we serve our communities, disciple believers, and celebrate every life changed by Jesus. We are committed to raising men and women who will be arsenals for Christ, taking nations and transforming cultures with the message of the Gospel.",
      ],
    },
    beliefs: {
      heading: 'What We Believe',
      items: [
        {
          title: 'The Bible',
          content:
            'We believe the Bible is the inspired, infallible, and authoritative Word of God. It is our ultimate source of truth and the final authority for all faith and conduct.',
          verse: '2 Timothy 3:16-17',
        },
        {
          title: 'God',
          content:
            'We believe in one eternal God, Creator of all things, who exists in three persons: Father, Son, and Holy Spirit. He is perfectly holy, infinitely loving, and all-powerful.',
        },
        {
          title: 'Jesus Christ',
          content:
            'We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.',
        },
        {
          title: 'Salvation',
          content:
            "We believe that for the salvation of lost and sinful humanity, repentance and faith in Jesus Christ alone are essential. Salvation is a gift of God's grace, received through faith, not by works.",
          verse: 'Ephesians 2:8-9',
        },
        {
          title: 'The Holy Spirit',
          content:
            'We believe in the present ministry of the Holy Spirit, whose indwelling presence empowers the Christian for life and service. He provides spiritual gifts for the edification of the church and convicts the world of sin, righteousness, and judgment.',
        },
        {
          title: 'The Church',
          content:
            'We believe in the universal church as the body of Christ, of which Jesus is the head. The local church is the practical expression of this body, gathered for worship, fellowship, discipleship, and the mission of spreading the Gospel.',
        },
      ],
    },
    missionVision: {
      missionLabel: 'Our Mission',
      missionHeading: 'What We Do',
      missionStatement: 'To lead people into a growing relationship with Jesus Christ.',
      missionDescription:
        'This is our daily focus—helping everyone, from the seeker to the seasoned believer, take their next step toward God.',
      visionLabel: 'Our Vision',
      visionHeading: "Where We're Going",
      visionStatement: 'To see our city and our world transformed by the hope of the Gospel.',
      visionDescription:
        "We envision thriving communities, restored families, and countless lives redeemed by God's love—souls saved, men trained, nations taken.",
    },
    coreValues: {
      heading: 'Our Core Values',
      items: [
        { title: 'Biblical Authority', description: 'We submit to the Word of God as our final authority.' },
        { title: 'Spiritual Family', description: 'We are a diverse community committed to loving God and one another.' },
        { title: 'Heart of Service', description: "We follow Jesus' example by serving our church and our city with humility." },
        { title: 'Generous Living', description: 'We give freely of our time, talents, and resources because we serve a generous God.' },
        { title: 'Spiritual Growth', description: "We are committed to every believer's journey toward Christ-like maturity." },
        { title: 'Outward Focus', description: 'We exist for those not yet here, always seeking to share the love of Christ.' },
      ],
    },
    leadership: {
      heading: 'Meet Our Lead Pastor',
      name: 'Apostle Nelson Isaiah',
      role: 'Lead Pastor & Founder',
      paragraphs: [
        "With a passion for God's Word and a deep love for people, Apostle Nelson has led The Light Community Church with visionary leadership grounded in practical Bible teaching. His ministry has been instrumental in fostering a culture of grace, growth, and generosity.",
        'He is dedicated to raising up disciples and leaders who will impact every sphere of society, training men and women to be arsenals for Christ who will take nations with the Gospel.',
      ],
    },
    testimonies: {
      heading: 'Stories of Transformation',
      intro:
        "Real people. Real stories. Real miracles. See how God is moving in the lives of our community members.",
      cards: [
        {
          quote:
            "The Light Community Church is what I call a 'family.' It's a place where you grow and you never get tired of growing. Before I joined in August 2022, I was comfortable in my own shell, not used to expressing myself fully. But when I came to this family, I met with the Senior Pastor and other members, and I've been able to express myself fully. I've connected with people I never thought I would meet and realized my full potential in Christ. TLCC has given me a new lens of seeing life—a new definition of life.",
          author: 'Oghale',
          meta: 'Member since August 2022',
        },
        {
          quote:
            "I joined The Light Community Church on October 1st, 2022. The first day Papa called me, we spent about two hours talking, and I was free enough to tell someone about my past without feeling judged. I got four prophetic words in one week! I'd never knew God was this intentional about me. I've grown so much. A few years from now, I can see myself in a crusade, changing lives just like mine was changed. I haven't found a better family than The Light Community Church.",
          author: 'Isaac',
          meta: 'Member since October 2022',
        },
        {
          quote:
            "In February, while praying with Apostle Nelson, he prophesied over my life and confirmed the ministry God has placed in my hands. From then till now, God has been opening doors—leading me to orphanages, providing resources, and showing His faithfulness step by step. I thank God for fulfilling His word and for Apostle's covering over my life, which has been a key part of this journey. His testimony is a reminder that when God sends you, He also provides and brings the vision to pass.",
          author: 'Susan',
          meta: 'Member',
        },
        {
          quote:
            "I would have never thought God was going to use us to where He was going to use us. In May 2022, the Lord told me to hold a meeting. I obeyed immediately, and I saw people pray with fervor for six hours. I've seen people who knew nothing about the gospel turn into vocal evangelists. People who didn't know they could hear God have become prophets. People who never knew they could teach have become eloquent teachers. God has turned mere kids into His ministers. That's the story of The Light Community Church. That's the story of my family.",
          author: 'Apostle Nelson Isaiah',
          meta: 'Lead Pastor & Founder',
          fullWidth: true,
        },
        {
          title: 'A Short Documentary',
          paragraphs: [
            'Hello there, my name is Joy.',
            "Before I joined The Light Community Church, I honestly didn't know who I was. I was a woman carrying so much baggage but never knowing when to stop or let go — only piling more. I didn't really know God, and because of that, I didn't know myself or what I truly wanted.",
            'Then came Tarry Zeo in April 2024 — thank God for using Susan to invite me. I had never prayed for one hour, not to mention eight hours straight! My body was weak, but my spirit was alive and awakened.',
            "But after some time, I drifted until my ex broke up with me, Apostle Nelson called that day. The first words he said were, 'God loves you.' And that was exactly what I needed to hear. I broke down in tears.",
            'That call marked the beginning of my transformation. God started using Apostle Nelson to water my heart — he sent me sermons daily, and I sent back my reviews and notes. For the first time, I was consistent and determined to know God.',
            'Gradually, my heart, mind, and space became lighter — like a clog had been cleared away. I began to hear God clearly, and He started leading me to do things I normally wouldn\'t.',
            'Fast forward to January 2025, I grew more serious with God. He led me into a season of consecration. I started watching sermons daily, praying more, and allowing God to help me. There were struggles, but I knew I wasn\'t alone anymore.',
            'In March 2025, Apostle Nelson called and asked if I wanted to join The Rooted Clan. I said yes immediately because I desired a community where I could grow and connect. That decision blessed me beyond words. I met amazing people.',
            'Since then, there has been tremendous growth — in my personal walk with God and my understanding of who I am in Christ.',
            'I\'m lighter, happier, and stronger. I handle situations better — all glory to God. I used to think I couldn\'t be used by Him, but this truth set me free: \'God doesn\'t call the qualified; He qualifies the unqualified who he has called.\'',
            'He called me, and I answered. He healed me from the pain I carried, lifted my burdens, and gave me peace — the kind that surpasses all understanding. God loves me deeply and is very intentional with me.',
            "Thank you, Apostle Nelson, for not giving up on me — for nurturing, disciplining, and helping me grow. You saw me through the lens of God — who He says I am — and that made all the difference. God bless you, sir.",
            "Thank you to The Light Community Church — filled with powerful, beautiful souls. An army God is raising, and I'm honored to be among you. I can't just watch when God needs men to go forth. And it's amazing here.",
          ],
          author: 'Joy',
          meta: 'Member',
          fullWidth: true,
        },
      ],
      share: {
        heading: 'Share Your Testimony',
        description:
          "Has God done something amazing in your life? We'd love to hear your story! Your testimony could be the encouragement someone else needs today.",
        cta: 'Share Your Story',
      },
    },
    join: {
      heading: 'Join Us This Week',
      description:
        "Experience a warm welcome, engaging atmosphere, and a relevant message from the Bible. We can't wait to meet you!",
      cards: [
        { title: 'Weekly Services', details: ['Tuesday & Saturday | 9:00 PM'] },
        {
          title: 'Prayer Meetings',
          details: ['Monday-Wednesday | 9:00 PM (Rooted Prayers)', 'Friday | 9:00 PM (Watch Hour Prayers)'],
        },
      ],
      watchCta: 'Watch Live on YouTube',
    },
    finalCta: {
      heading: 'Your Story Is Next',
      description:
        'We believe that God has a purpose and a plan for your life. You have a place here. Whether you are exploring faith for the first time or looking for a church to call home, we invite you to join our family.',
      buttons: [
        { label: 'Plan Your Visit', href: '/map' },
        { label: 'Watch A Sermon', href: '/sermons' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  },
  general: {
    languageLabel: 'Language',
  },
}

const fr: Messages = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    quickLinks: 'Raccourcis',
    ministries: 'Ministères',
    events: 'Événements',
    sermons: 'Messages',
    map: 'Plan',
    give: 'Donner',
    language: 'Langue',
  },
  hero: {
    visionBadge: 'Notre vision',
    lines: [
      { prefix: 'Des âmes ', highlight: 'sauvées', suffix: '.' },
      { prefix: 'Des hommes ', highlight: 'formés', suffix: '.' },
      { prefix: 'Des nations ', highlight: 'gagnées', suffix: '.' },
    ],
    featuredTagline: 'Rooted décembre · Vie en abondance',
    featuredDetails: 'Samedi 20 décembre · The Light House · Apôtre Nelson Isaiah',
    registerCta: 'Inscription gratuite',
    watchLive: 'Regarder en direct',
    quickLinks: 'Liens rapides',
  },
  footer: {
    tagline: 'Des âmes sauvées. Des hommes formés. Des nations gagnées.',
    sections: {
      connect: {
        heading: 'Connexion',
        links: [
          { label: 'À propos de nous', href: '/about' },
          { label: 'Rejoindre un ministère', href: '/ministries' },
          { label: 'Nous contacter', href: '/contact' },
          { label: 'Devenir membre', href: '/contact#become-member' },
        ],
      },
      ministries: {
        heading: 'Ministères',
        links: [
          { label: 'TLCC Online ministry', href: '/ministries#tlcc-online' },
          { label: 'TLCC Firestorm', href: '/ministries#firestorm' },
          { label: 'TLCC Follow up', href: '/ministries#follow-up' },
          { label: 'TLCC Prayer team', href: '/ministries#prayer-team' },
          { label: 'TLCC Media & visibility', href: '/ministries#media-visibility' },
          { label: 'Growth initiatives', href: '/ministries#growth-initiatives' },
        ],
      },
      resources: {
        heading: 'Ressources',
        links: [
          { label: 'Dévotions quotidiennes', href: '/sermons#featured' },
          { label: 'Programme Rooted', href: '/map' },
          { label: 'Requêtes de prière', href: '/contact#prayer-request' },
          { label: 'Témoignages', href: '/about#testimonies' },
          { label: 'Horaires des cultes', href: '/about#services' },
        ],
      },
      media: {
        heading: 'Médias',
        links: [
          { label: 'Prédications', href: '/sermons' },
          { label: 'Chaîne YouTube', href: 'https://youtube.com/@TheLightCommunity', external: true },
          { label: 'Moments de louange', href: '/sermons' },
        ],
      },
    },
    contact: {
      heading: 'Nous contacter',
      people: [
        { name: 'Joy', phone: '09035004764' },
        { name: 'Naomi', phone: '08087207044' },
      ],
    },
    services: {
      heading: 'Horaires des cultes',
      lines: [
        'Lun-Mer : Rooted Prayers (21h00)',
        'Mar & Sam : Prédications (21h00)',
        'Watch Hour Prayers : 21h00 (toutes les deux semaines)',
      ],
    },
    social: {
      youtube: 'YouTube',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      tiktok: 'TikTok',
    },
    copyright: 'The Light Community Church. Tous droits réservés.',
  },
  about: {
    hero: {
      headingLead: 'Nous sommes',
      headingHighlight: 'The Light Community Church',
      subtitle: "Une maison de grâce, un foyer d'amour, un phare d'espérance",
      description:
        "Bienvenue à The Light Community Church, une famille vibrante et diverse où chacun a de la valeur, où personne n'est parfait et où tout est possible en Christ. Nous sommes bien plus qu'un rassemblement du dimanche : nous sommes une communauté en mission pour connaître Dieu et le faire connaître dans notre ville et jusqu'aux extrémités de la terre.",
    },
    story: {
      heading: 'Notre histoire',
      paragraphs: [
        "The Light Community Church est née d'un petit groupe de croyants unis par une vision simple mais puissante : bâtir une Église qui reflète la joie et la puissance transformatrice de l'Évangile. Depuis ces débuts humbles, Dieu nous a fait grandir fidèlement en une famille intergénérationnelle passionnée par Son Royaume.",
        "Notre histoire est celle de la grâce infatigable de Dieu — une histoire que nous continuons d'écrire ensemble en servant nos communautés, en formant des disciples et en célébrant chaque vie transformée par Jésus. Nous sommes déterminés à élever des hommes et des femmes qui seront des arsenaux pour Christ, prenant les nations et transformant les cultures par le message de l'Évangile.",
      ],
    },
    beliefs: {
      heading: 'Ce que nous croyons',
      items: [
        {
          title: 'La Bible',
          content:
            "Nous croyons que la Bible est la Parole de Dieu inspirée, infaillible et faisant autorité. Elle est notre source ultime de vérité et l'autorité finale pour la foi et la conduite.",
          verse: '2 Timothée 3:16-17',
        },
        {
          title: 'Dieu',
          content:
            'Nous croyons en un Dieu éternel, Créateur de toutes choses, qui existe en trois personnes : Père, Fils et Saint-Esprit. Il est parfaitement saint, infiniment aimant et tout-puissant.',
        },
        {
          title: 'Jésus-Christ',
          content:
            'Nous croyons en la divinité de notre Seigneur Jésus-Christ, en Sa naissance virginale, Sa vie sans péché, Ses miracles, Sa mort substitutive et expiatoire par Son sang versé, Sa résurrection corporelle, Son ascension à la droite du Père et Son retour personnel avec puissance et gloire.',
        },
        {
          title: 'Le salut',
          content:
            "Nous croyons que pour le salut de l'humanité perdue et pécheresse, la repentance et la foi en Jésus-Christ seul sont essentielles. Le salut est un don de la grâce de Dieu, reçu par la foi et non par les œuvres.",
          verse: 'Éphésiens 2:8-9',
        },
        {
          title: 'Le Saint-Esprit',
          content:
            "Nous croyons au ministère actuel du Saint-Esprit dont la présence intérieure donne aux croyants la puissance pour vivre et servir. Il accorde des dons spirituels pour l'édification de l'Église et convainc le monde de péché, de justice et de jugement.",
        },
        {
          title: "L'Église",
          content:
            "Nous croyons en l'Église universelle comme corps de Christ, dont Jésus est la tête. L'Église locale est l'expression pratique de ce corps, rassemblée pour l'adoration, la communion, le discipulat et la mission de répandre l'Évangile.",
        },
      ],
    },
    missionVision: {
      missionLabel: 'Notre mission',
      missionHeading: 'Ce que nous faisons',
      missionStatement: 'Amener les gens dans une relation grandissante avec Jésus-Christ.',
      missionDescription:
        'Ceci est notre objectif quotidien : aider chacun, du chercheur au croyant mature, à faire un pas de plus vers Dieu.',
      visionLabel: 'Notre vision',
      visionHeading: 'Où nous allons',
      visionStatement: 'Voir notre ville et notre monde transformés par l’espérance de l’Évangile.',
      visionDescription:
        "Nous imaginons des communautés florissantes, des familles restaurées et d'innombrables vies rachetées par l'amour de Dieu — des âmes sauvées, des hommes formés, des nations gagnées.",
    },
    coreValues: {
      heading: 'Nos valeurs fondamentales',
      items: [
        { title: 'Autorité biblique', description: 'Nous nous soumettons à la Parole de Dieu comme autorité finale.' },
        { title: 'Famille spirituelle', description: "Nous sommes une communauté diverse engagée à aimer Dieu et à nous aimer les uns les autres." },
        { title: 'Cœur de service', description: "Nous suivons l'exemple de Jésus en servant notre Église et notre ville avec humilité." },
        { title: 'Générosité de vie', description: 'Nous offrons librement notre temps, nos talents et nos ressources parce que nous servons un Dieu généreux.' },
        { title: 'Croissance spirituelle', description: 'Nous nous engageons dans le parcours de chaque croyant vers la maturité en Christ.' },
        { title: 'Orientation vers l’extérieur', description: 'Nous existons pour ceux qui ne sont pas encore là, cherchant toujours à partager l’amour de Christ.' },
      ],
    },
    leadership: {
      heading: 'Rencontrez notre pasteur principal',
      name: 'Apôtre Nelson Isaiah',
      role: 'Pasteur principal & fondateur',
      paragraphs: [
        "Animé par une passion pour la Parole de Dieu et un profond amour pour les gens, l'apôtre Nelson conduit The Light Community Church avec une vision ancrée dans un enseignement biblique pratique. Son ministère a favorisé une culture de grâce, de croissance et de générosité.",
        "Il se consacre à former des disciples et des leaders qui impacteront chaque sphère de la société, entraînant des hommes et des femmes à devenir des arsenaux pour Christ afin de conquérir les nations par l'Évangile.",
      ],
    },
    testimonies: {
      heading: 'Histoires de transformation',
      intro:
        'Des personnes réelles. Des histoires réelles. Des miracles réels. Voyez comment Dieu agit dans la vie des membres de notre communauté.',
      cards: [
        {
          quote:
            "The Light Community Church is what I call a 'family.' It's a place where you grow and you never get tired of growing. Before I joined in August 2022, I was comfortable in my own shell, not used to expressing myself fully. But when I came to this family, I met with the Senior Pastor and other members, and I've been able to express myself fully. I've connected with people I never thought I would meet and realized my full potential in Christ. TLCC has given me a new lens of seeing life—a new definition of life.",
          author: 'Oghale',
          meta: 'Membre depuis août 2022',
        },
        {
          quote:
            "I joined The Light Community Church on October 1st, 2022. The first day Papa called me, we spent about two hours talking, and I was free enough to tell someone about my past without feeling judged. I got four prophetic words in one week! I'd never knew God was this intentional about me. I've grown so much. A few years from now, I can see myself in a crusade, changing lives just like mine was changed. I haven't found a better family than The Light Community Church.",
          author: 'Isaac',
          meta: 'Membre depuis octobre 2022',
        },
        {
          quote:
            "In February, while praying with Apostle Nelson, he prophesied over my life and confirmed the ministry God has placed in my hands. From then till now, God has been opening doors—leading me to orphanages, providing resources, and showing His faithfulness step by step. I thank God for fulfilling His word and for Apostle's covering over my life, which has been a key part of this journey. His testimony is a reminder that when God sends you, He also provides and brings the vision to pass.",
          author: 'Susan',
          meta: 'Membre',
        },
        {
          quote:
            "I would have never thought God was going to use us to where He was going to use us. In May 2022, the Lord told me to hold a meeting. I obeyed immediately, and I saw people pray with fervor for six hours. I've seen people who knew nothing about the gospel turn into vocal evangelists. People who didn't know they could hear God have become prophets. People who never knew they could teach have become eloquent teachers. God has turned mere kids into His ministers. That's the story of The Light Community Church. That's the story of my family.",
          author: 'Apôtre Nelson Isaiah',
          meta: 'Pasteur principal & fondateur',
          fullWidth: true,
        },
        {
          title: 'Un court documentaire',
          paragraphs: [
            'Hello there, my name is Joy.',
            "Before I joined The Light Community Church, I honestly didn't know who I was. I was a woman carrying so much baggage but never knowing when to stop or let go — only piling more. I didn't really know God, and because of that, I didn't know myself or what I truly wanted.",
            'Then came Tarry Zeo in April 2024 — thank God for using Susan to invite me. I had never prayed for one hour, not to mention eight hours straight! My body was weak, but my spirit was alive and awakened.',
            "But after some time, I drifted until my ex broke up with me, Apostle Nelson called that day. The first words he said were, 'God loves you.' And that was exactly what I needed to hear. I broke down in tears.",
            'That call marked the beginning of my transformation. God started using Apostle Nelson to water my heart — he sent me sermons daily, and I sent back my reviews and notes. For the first time, I was consistent and determined to know God.',
            'Gradually, my heart, mind, and space became lighter — like a clog had been cleared away. I began to hear God clearly, and He started leading me to do things I normally wouldn\'t.',
            'Fast forward to January 2025, I grew more serious with God. He led me into a season of consecration. I started watching sermons daily, praying more, and allowing God to help me. There were struggles, but I knew I wasn\'t alone anymore.',
            'In March 2025, Apostle Nelson called and asked if I wanted to join The Rooted Clan. I said yes immediately because I desired a community where I could grow and connect. That decision blessed me beyond words. I met amazing people.',
            'Since then, there has been tremendous growth — in my personal walk with God and my understanding of who I am in Christ.',
            'I\'m lighter, happier, and stronger. I handle situations better — all glory to God. I used to think I couldn\'t be used by Him, but this truth set me free: \'God doesn\'t call the qualified; He qualifies the unqualified who he has called.\'',
            'He called me, and I answered. He healed me from the pain I carried, lifted my burdens, and gave me peace — the kind that surpasses all understanding. God loves me deeply and is very intentional with me.',
            "Thank you, Apostle Nelson, for not giving up on me — for nurturing, disciplining, and helping me grow. You saw me through the lens of God — who He says I am — and that made all the difference. God bless you, sir.",
            "Thank you to The Light Community Church — filled with powerful, beautiful souls. An army God is raising, and I'm honored to be among you. I can't just watch when God needs men to go forth. And it's amazing here.",
          ],
          author: 'Joy',
          meta: 'Membre',
          fullWidth: true,
        },
      ],
      share: {
        heading: 'Partagez votre témoignage',
        description:
          "Dieu a-t-Il fait quelque chose d'extraordinaire dans votre vie ? Nous serions honorés d'entendre votre histoire ! Votre témoignage peut encourager quelqu'un aujourd'hui.",
        cta: 'Raconter mon histoire',
      },
    },
    join: {
      heading: 'Rejoignez-nous cette semaine',
      description:
        'Vivez un accueil chaleureux, une atmosphère engageante et un message pertinent de la Bible. Nous avons hâte de vous rencontrer !',
      cards: [
        { title: 'Cultes hebdomadaires', details: ['Mardi & samedi | 21h00'] },
        {
          title: 'Réunions de prière',
          details: ['Lundi-mercredi | 21h00 (Rooted Prayers)', 'Vendredi | 21h00 (Watch Hour Prayers)'],
        },
      ],
      watchCta: 'Regarder en direct sur YouTube',
    },
    finalCta: {
      heading: 'Votre histoire est la prochaine',
      description:
        'Nous croyons que Dieu a un but et un plan pour votre vie. Vous avez votre place ici. Que vous découvriez la foi ou recherchiez une église comme foyer, nous vous invitons à rejoindre notre famille.',
      buttons: [
        { label: 'Planifier votre visite', href: '/map' },
        { label: 'Regarder une prédication', href: '/sermons' },
        { label: 'Nous contacter', href: '/contact' },
      ],
    },
  },
  general: {
    languageLabel: 'Langue',
  },
}

const es: Messages = {
  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    quickLinks: 'Accesos rápidos',
    ministries: 'Ministerios',
    events: 'Eventos',
    sermons: 'Mensajes',
    map: 'Mapa',
    give: 'Dar',
    language: 'Idioma',
  },
  hero: {
    visionBadge: 'Nuestra visión',
    lines: [
      { prefix: 'Almas ', highlight: 'salvadas', suffix: '.' },
      { prefix: 'Hombres ', highlight: 'formados', suffix: '.' },
      { prefix: 'Naciones ', highlight: 'alcanzadas', suffix: '.' },
    ],
    featuredTagline: 'Rooted diciembre · Vida en abundancia',
    featuredDetails: 'Sábado 20 de diciembre · The Light House · Apóstol Nelson Isaiah',
    registerCta: 'Regístrate gratis',
    watchLive: 'Ver en vivo',
    quickLinks: 'Enlaces rápidos',
  },
  footer: {
    tagline: 'Almas salvadas. Hombres formados. Naciones tomadas.',
    sections: {
      connect: {
        heading: 'Conecta',
        links: [
          { label: 'Acerca de nosotros', href: '/about' },
          { label: 'Únete a un ministerio', href: '/ministries' },
          { label: 'Contáctanos', href: '/contact' },
          { label: 'Hazte miembro', href: '/contact#become-member' },
        ],
      },
      ministries: {
        heading: 'Ministerios',
        links: [
          { label: 'TLCC Online ministry', href: '/ministries#tlcc-online' },
          { label: 'TLCC Firestorm', href: '/ministries#firestorm' },
          { label: 'TLCC Follow up', href: '/ministries#follow-up' },
          { label: 'TLCC Prayer team', href: '/ministries#prayer-team' },
          { label: 'TLCC Media & visibility', href: '/ministries#media-visibility' },
          { label: 'Growth initiatives', href: '/ministries#growth-initiatives' },
        ],
      },
      resources: {
        heading: 'Recursos',
        links: [
          { label: 'Devocionales diarios', href: '/sermons#featured' },
          { label: 'Programa Rooted', href: '/map' },
          { label: 'Peticiones de oración', href: '/contact#prayer-request' },
          { label: 'Testimonios', href: '/about#testimonies' },
          { label: 'Horarios de servicio', href: '/about#services' },
        ],
      },
      media: {
        heading: 'Medios',
        links: [
          { label: 'Mensajes', href: '/sermons' },
          { label: 'Canal de YouTube', href: 'https://youtube.com/@TheLightCommunity', external: true },
          { label: 'Sesiones de adoración', href: '/sermons' },
        ],
      },
    },
    contact: {
      heading: 'Contáctanos',
      people: [
        { name: 'Joy', phone: '09035004764' },
        { name: 'Naomi', phone: '08087207044' },
      ],
    },
    services: {
      heading: 'Horarios de servicio',
      lines: [
        'Lun-Mié: Rooted Prayers (9:00 p. m.)',
        'Mar & Sáb: Mensajes (9:00 p. m.)',
        'Watch Hour Prayers: 9:00 p. m. (cada dos semanas)',
      ],
    },
    social: {
      youtube: 'YouTube',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      tiktok: 'TikTok',
    },
    copyright: 'The Light Community Church. Todos los derechos reservados.',
  },
  about: {
    hero: {
      headingLead: 'Somos',
      headingHighlight: 'The Light Community Church',
      subtitle: 'Una casa de gracia, un hogar de amor, un faro de esperanza',
      description:
        'Bienvenido a The Light Community Church, una familia vibrante y diversa donde todos son valorados, nadie es perfecto y todo es posible en Cristo. Somos más que una reunión dominical; somos una comunidad en misión para conocer a Dios y darlo a conocer en nuestra ciudad y hasta los confines de la tierra.',
    },
    story: {
      heading: 'Nuestra historia',
      paragraphs: [
        'The Light Community Church comenzó con un pequeño grupo de creyentes unidos por una visión simple pero poderosa: construir una iglesia que reflejara la alegría y el poder transformador del Evangelio. Desde esos inicios humildes, Dios nos ha hecho crecer fielmente hasta convertirnos en una familia multigeneracional apasionada por Su Reino.',
        'Nuestra historia es la de la gracia incansable de Dios; una historia que seguimos escribiendo juntos mientras servimos a nuestras comunidades, discipulamos a los creyentes y celebramos cada vida transformada por Jesús. Estamos comprometidos a levantar hombres y mujeres que sean arsenales para Cristo, tomando naciones y transformando culturas con el mensaje del Evangelio.',
      ],
    },
    beliefs: {
      heading: 'Lo que creemos',
      items: [
        {
          title: 'La Biblia',
          content:
            'Creemos que la Biblia es la Palabra de Dios inspirada, infalible y con autoridad. Es nuestra fuente suprema de verdad y la autoridad final para la fe y la conducta.',
          verse: '2 Timoteo 3:16-17',
        },
        {
          title: 'Dios',
          content:
            'Creemos en un Dios eterno, Creador de todas las cosas, que existe en tres personas: Padre, Hijo y Espíritu Santo. Es perfectamente santo, infinitamente amoroso y todopoderoso.',
        },
        {
          title: 'Jesucristo',
          content:
            'Creemos en la deidad de nuestro Señor Jesucristo, en Su nacimiento virginal, Su vida sin pecado, Sus milagros, Su muerte vicaria y expiatoria mediante Su sangre, Su resurrección corporal, Su ascensión a la diestra del Padre y Su regreso personal con poder y gloria.',
        },
        {
          title: 'La salvación',
          content:
            'Creemos que para la salvación de la humanidad perdida y pecadora son esenciales el arrepentimiento y la fe sólo en Jesucristo. La salvación es un regalo de la gracia de Dios, recibido por la fe y no por obras.',
          verse: 'Efesios 2:8-9',
        },
        {
          title: 'El Espíritu Santo',
          content:
            'Creemos en el ministerio presente del Espíritu Santo, cuya presencia habita en el creyente y lo capacita para la vida y el servicio. Él da dones espirituales para la edificación de la iglesia y convence al mundo de pecado, justicia y juicio.',
        },
        {
          title: 'La Iglesia',
          content:
            'Creemos en la iglesia universal como el cuerpo de Cristo, del cual Jesús es la cabeza. La iglesia local es la expresión práctica de este cuerpo, reunida para la adoración, la comunión, el discipulado y la misión de difundir el Evangelio.',
        },
      ],
    },
    missionVision: {
      missionLabel: 'Nuestra misión',
      missionHeading: 'Lo que hacemos',
      missionStatement: 'Guiar a las personas a una relación creciente con Jesucristo.',
      missionDescription:
        'Este es nuestro enfoque diario: ayudar a todos, desde el buscador hasta el creyente maduro, a dar su siguiente paso hacia Dios.',
      visionLabel: 'Nuestra visión',
      visionHeading: 'Hacia dónde vamos',
      visionStatement: 'Ver nuestra ciudad y nuestro mundo transformados por la esperanza del Evangelio.',
      visionDescription:
        'Imaginamos comunidades florecientes, familias restauradas y vidas redimidas por el amor de Dios: almas salvadas, hombres formados, naciones tomadas.',
    },
    coreValues: {
      heading: 'Nuestros valores',
      items: [
        { title: 'Autoridad bíblica', description: 'Nos sometemos a la Palabra de Dios como autoridad final.' },
        { title: 'Familia espiritual', description: 'Somos una comunidad diversa comprometida a amar a Dios y amarnos unos a otros.' },
        { title: 'Corazón de servicio', description: 'Seguimos el ejemplo de Jesús sirviendo a nuestra iglesia y a nuestra ciudad con humildad.' },
        { title: 'Vida generosa', description: 'Damos libremente nuestro tiempo, talentos y recursos porque servimos a un Dios generoso.' },
        { title: 'Crecimiento espiritual', description: 'Nos comprometemos con el viaje de cada creyente hacia la madurez en Cristo.' },
        { title: 'Enfoque hacia afuera', description: 'Existimos para quienes aún no están aquí, buscando siempre compartir el amor de Cristo.' },
      ],
    },
    leadership: {
      heading: 'Conoce a nuestro pastor principal',
      name: 'Apóstol Nelson Isaiah',
      role: 'Pastor principal y fundador',
      paragraphs: [
        'Con una pasión por la Palabra de Dios y un profundo amor por las personas, el apóstol Nelson ha guiado a The Light Community Church con un liderazgo visionario fundamentado en la enseñanza bíblica práctica. Su ministerio ha fomentado una cultura de gracia, crecimiento y generosidad.',
        'Está dedicado a levantar discípulos y líderes que impacten cada esfera de la sociedad, formando a hombres y mujeres para que sean arsenales de Cristo y lleven el Evangelio a las naciones.',
      ],
    },
    testimonies: {
      heading: 'Historias de transformación',
      intro:
        'Personas reales. Historias reales. Milagros reales. Mira cómo Dios se mueve en la vida de nuestra comunidad.',
      cards: [
        {
          quote:
            'The Light Community Church es lo que llamo una "familia". Es un lugar donde creces y nunca te cansas de crecer. Antes de unirme en agosto de 2022, vivía dentro de mi propio caparazón y no solía expresarme. Pero cuando llegué a esta familia, conocí al Pastor Principal y a otros miembros, y pude abrirme por completo. Conecté con personas que jamás pensé conocer y descubrí mi máximo potencial en Cristo. TLCC me dio una nueva manera de ver la vida: una nueva definición de vida.',
          author: 'Oghale',
          meta: 'Miembro desde agosto de 2022',
        },
        {
          quote:
            'Me uní a The Light Community Church el 1.º de octubre de 2022. El primer día que Papá me llamó hablamos casi dos horas, y me sentí lo suficientemente libre como para contarle mi pasado sin sentirme juzgado. ¡Recibí cuatro palabras proféticas en una semana! Nunca imaginé que Dios fuera tan intencional conmigo. He crecido muchísimo. Dentro de unos años me veo en cruzadas, cambiando vidas como la mía fue transformada. No he encontrado una familia mejor que The Light Community Church.',
          author: 'Isaac',
          meta: 'Miembro desde octubre de 2022',
        },
        {
          quote:
            'En febrero, mientras oraba con el apóstol Nelson, él profetizó sobre mi vida y confirmó el ministerio que Dios puso en mis manos. Desde entonces Dios ha abierto puertas: me ha dirigido a orfanatos, ha provisto recursos y ha mostrado Su fidelidad paso a paso. Doy gracias a Dios por cumplir Su palabra y por la cobertura del apóstol en mi vida; ha sido clave en este viaje. Su testimonio me recuerda que cuando Dios te envía, también provee y hace realidad la visión.',
          author: 'Susan',
          meta: 'Miembro',
        },
        {
          quote:
            'Nunca imaginé que Dios nos usaría de la manera en que lo está haciendo. En mayo de 2022, el Señor me dijo que convocara una reunión. Obedecí de inmediato y vi personas orar con fervor durante seis horas. He visto a quienes no sabían nada del evangelio convertirse en evangelistas apasionados. Personas que no sabían que podían oír a Dios ahora profetizan. Aquellos que pensaban que no podían enseñar hoy son maestros elocuentes. Dios ha convertido a simples jóvenes en Sus ministros. Esa es la historia de The Light Community Church. Esa es la historia de mi familia.',
          author: 'Apóstol Nelson Isaiah',
          meta: 'Pastor principal y fundador',
          fullWidth: true,
        },
        {
          title: 'Un breve documental',
          paragraphs: [
            '"Hola, mi nombre es Joy.',
            'Antes de unirme a The Light Community Church no sabía quién era. Cargaba con mucho equipaje y nunca sabía cuándo parar o soltarlo; sólo acumulaba más. No conocía realmente a Dios, y por eso tampoco me conocía a mí misma ni sabía lo que quería.',
            'Luego llegó Tarry Zeo en abril de 2024 — gracias a Dios por usar a Susan para invitarme. Nunca había orado ni una hora, ¡mucho menos ocho seguidas! Mi cuerpo estaba cansado, pero mi espíritu estaba vivo y despierto.',
            "Con el tiempo me enfrié, hasta que mi ex terminó conmigo y el apóstol Nelson me llamó ese mismo día. Las primeras palabras que escuché fueron: 'Dios te ama'. Era justo lo que necesitaba oír. Me quebré en lágrimas.",
            'Esa llamada marcó el comienzo de mi transformación. Dios empezó a usar al apóstol Nelson para regar mi corazón: me enviaba mensajes cada día y yo le respondía con mis notas. Por primera vez fui constante y determinada en conocer a Dios.',
            'Poco a poco mi corazón, mi mente y mi entorno se volvieron más ligeros — como si hubieran destapado algo. Empecé a oír a Dios con claridad y Él comenzó a guiarme a hacer cosas que normalmente no haría.',
            'En enero de 2025 me volví más seria con Dios. Él me llevó a una temporada de consagración. Empecé a ver mensajes cada día, a orar más y a permitir que Dios me ayudara. Hubo luchas, pero ya no me sentía sola.',
            'En marzo de 2025, el apóstol Nelson me preguntó si quería unirme a The Rooted Clan. Dije que sí de inmediato porque deseaba una comunidad donde crecer y conectarme. Esa decisión me bendijo más de lo que puedo expresar. Conocí gente increíble.',
            'Desde entonces he experimentado un crecimiento enorme en mi caminar con Dios y en mi entendimiento de quién soy en Cristo.',
            'Ahora soy más ligera, feliz y fuerte. Manejo mejor las situaciones — toda la gloria es para Dios. Antes pensaba que Él no podía usarme, pero esta verdad me liberó: "Dios no llama a los capacitados; capacita a los llamados".',
            'Él me llamó y respondí. Sanó el dolor que cargaba, levantó mis cargas y me dio paz, una paz que sobrepasa todo entendimiento. Dios me ama profundamente y es muy intencional conmigo.',
            'Gracias, apóstol Nelson, por no rendirte conmigo — por nutrirme, corregirme y ayudarme a crecer. Me viste a través de los ojos de Dios, tal como Él dice que soy, y eso marcó la diferencia. Dios le bendiga, señor.',
            'Gracias a The Light Community Church, una iglesia llena de almas poderosas y hermosas. Un ejército que Dios está levantando, y es un honor estar entre ustedes. No puedo quedarme mirando cuando Dios necesita hombres que avancen. Y aquí es maravilloso."',
          ],
          author: 'Joy',
          meta: 'Miembro',
          fullWidth: true,
        },
      ],
      share: {
        heading: 'Comparte tu testimonio',
        description:
          '¿Dios ha hecho algo increíble en tu vida? ¡Nos encantaría escuchar tu historia! Tu testimonio puede ser el ánimo que alguien necesita hoy.',
        cta: 'Compartir mi historia',
      },
    },
    join: {
      heading: 'Únete a nosotros esta semana',
      description:
        'Vive una bienvenida cálida, un ambiente vibrante y un mensaje relevante de la Biblia. ¡Estamos emocionados por conocerte!',
      cards: [
        { title: 'Reuniones semanales', details: ['Martes y sábado | 9:00 p. m.'] },
        {
          title: 'Reuniones de oración',
          details: ['Lunes-miércoles | 9:00 p. m. (Rooted Prayers)', 'Viernes | 9:00 p. m. (Watch Hour Prayers)'],
        },
      ],
      watchCta: 'Ver en vivo en YouTube',
    },
    finalCta: {
      heading: 'Tu historia es la próxima',
      description:
        'Creemos que Dios tiene un propósito y un plan para tu vida. Tienes un lugar aquí. Ya sea que estés explorando la fe por primera vez o buscando una iglesia como hogar, te invitamos a unirte a nuestra familia.',
      buttons: [
        { label: 'Planear tu visita', href: '/map' },
        { label: 'Ver un mensaje', href: '/sermons' },
        { label: 'Contáctanos', href: '/contact' },
      ],
    },
  },
  general: {
    languageLabel: 'Idioma',
  },
}

const translations: Record<Language, Messages> = { en, fr, es }

export const DEFAULT_LANGUAGE: Language = 'en'
export const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'fr', label: 'FR' },
  { value: 'es', label: 'ES' },
]

export function getMessages(language: Language): Messages {
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}
