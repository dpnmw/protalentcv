import type { ResumeData } from "./data";

export const sampleResumeData: ResumeData = {
  picture: {
    hidden: false,
    url: "https://i.imgur.com/o4Jpt1p.jpeg",
    size: 100,
    rotation: 0,
    aspectRatio: 1,
    borderRadius: 50,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowWidth: 0,
  },
  basics: {
    name: "Marie Andrew",
    headline: "Marketing Manager | Regional Communications & Brand Strategy",
    email: "marie.andrew@email.com",
    phone: "+1 (767) 555-0182",
    location: "Roseau, Dominica",
    website: {
      url: "https://linkedin.com/in/marieandrew",
      label: "linkedin.com/in/marieandrew",
    },
    customFields: [
      {
        id: "019bef5a-0477-77e0-968b-5d0e2ecb34e3",
        icon: "linkedin-logo",
        text: "linkedin.com/in/marieandrew",
        link: "https://linkedin.com/in/marieandrew",
      },
      {
        id: "019bef5a-93e4-7746-ad39-3a132360f823",
        icon: "instagram-logo",
        text: "@marieandrew.dm",
        link: "https://instagram.com/marieandrew.dm",
      },
    ],
  },
  summary: {
    title: "",
    columns: 1,
    hidden: false,
    content:
      "<p>Strategic communications and marketing professional with 8+ years of experience driving brand visibility, stakeholder engagement, and public campaigns across the Eastern Caribbean. Proven ability to develop and execute regional marketing strategies aligned with institutional mandates, government priorities, and community outcomes. Adept at managing multi-disciplinary teams, regional partnerships, and high-impact communications in both English and French. Committed to advancing Caribbean development through purposeful, people-centred brand strategy.</p>",
  },
  sections: {
    profiles: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-3d42ddc9b4d8",
          hidden: false,
          icon: "linkedin-logo",
          network: "LinkedIn",
          username: "marieandrew",
          website: {
            url: "https://linkedin.com/in/marieandrew",
            label: "linkedin.com/in/marieandrew",
          },
        },
        {
          id: "019bef5a-93e4-7746-ad39-43c470b77f4a",
          hidden: false,
          icon: "instagram-logo",
          network: "Instagram",
          username: "marieandrew.dm",
          website: {
            url: "https://instagram.com/marieandrew.dm",
            label: "instagram.com/marieandrew.dm",
          },
        },
      ],
    },
    experience: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-44d8cec98ca4",
          hidden: false,
          company: "Caribbean Tourism Organisation (CTO)",
          position: "Senior Marketing Manager",
          location: "Bridgetown, Barbados",
          period: "January 2022 - Present",
          website: {
            url: "",
            label: "",
          },
          roles: [],
          description:
            "<ul><li><p>Led the development and execution of CTO's regional marketing strategy across 24 member states, overseeing a cross-functional team of 8 and an annual campaign budget of USD $1.4M</p></li><li><p>Directed the 'Live It. Love It. Caribbean.' multi-platform campaign — achieving 22M+ impressions and contributing to an 18% year-on-year increase in regional visitor arrivals</p></li><li><p>Established and managed media partnerships with BBC Travel, Condé Nast Traveller, and Caribbean Journal, generating 40+ earned editorial features across UK, US, and Canadian markets</p></li><li><p>Produced quarterly impact reports and stakeholder briefs distributed to tourism ministers, national tourism boards, and private hospitality partners across the region</p></li><li><p>Spearheaded CTO's digital transformation: migrated to HubSpot CRM, overhauled SEO architecture, and grew combined social media audience from 68K to 142K in 18 months</p></li><li><p>Represented CTO at the Caribbean Hotel & Tourism Association (CHTA) Annual Conference and the World Travel Market (WTM) London — leading regional destination presentations to 500+ industry stakeholders</p></li></ul>",
        },
      ],
    },
    education: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-48455f6cef9e",
          hidden: false,
          school: "Monroe College, St Lucia",
          degree: "Bachelor of Science",
          area: "Marketing Management",
          grade: "Upper Second Class Honours",
          location: "Castries, St Lucia",
          period: "2015 - 2019",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Relevant coursework: Consumer Behaviour, Brand Management, Digital Marketing Strategy, Marketing Research Methods, International Business, Corporate Communications, Strategic Management</p>",
        },
        {
          id: "019bef5a-93e4-7746-ad39-48455f6cef9f",
          hidden: false,
          school: "Dominica State College",
          degree: "Associate of Science",
          area: "Business Administration",
          grade: "",
          location: "Roseau, Dominica",
          period: "2013 - 2015",
          website: {
            url: "",
            label: "",
          },
          description: "",
        },
      ],
    },
    projects: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-4d2603fe2801",
          hidden: false,
          options: { showLinkInTitle: false },
          name: "Dominica Resilience Nation Brand Campaign",
          period: "2020 - 2021",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Led the strategy and creative direction for Dominica's post-Hurricane Maria nation brand recovery campaign in partnership with the Discover Dominica Authority and the Ministry of Tourism. The campaign repositioned Dominica as 'The Nature Isle Rebuilt Stronger' — reaching 6M+ impressions across digital and print, and contributing to a 32% increase in tourism enquiries within 12 months of launch.</p>",
        },
        {
          id: "019bef5a-93e4-7746-ad39-524195dd7eff",
          hidden: false,
          name: "OECS Youth Employment Awareness Initiative",
          period: "2022",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Contracted by the OECS Commission to design and deliver a regional communications campaign raising awareness of the OECS Youth Employment Programme across six member states. Produced multilingual digital content (English and French), coordinated with national youth desks, and achieved 85% of target reach within the campaign period.</p>",
        },
        {
          id: "019bef5a-93e4-7746-ad39-549106273c73",
          hidden: false,
          name: "Caribbean SME Digital Marketing Bootcamp",
          period: "2021",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Co-designed and facilitated a 6-week digital marketing programme for small business owners across Dominica and St Lucia, training 120+ participants in social media strategy, content creation, SEO, and Google Ads. Programme was supported by the National Development Foundation of Dominica (NDFD).</p>",
        },
      ],
    },
    skills: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-5a52dcf50ed4",
          hidden: false,
          icon: "trend-up",
          name: "Brand & Communications Strategy",
          proficiency: "Expert",
          level: 5,
          keywords: ["Brand Positioning", "Campaign Planning", "Institutional Communications"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-5e8bb7cacbc8",
          hidden: false,
          icon: "globe",
          name: "Digital Marketing",
          proficiency: "Expert",
          level: 5,
          keywords: ["SEO", "Google Ads", "Meta Ads", "HubSpot", "Email Campaigns"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-622f9d41da55",
          hidden: false,
          icon: "users",
          name: "Stakeholder & Partner Relations",
          proficiency: "Expert",
          level: 5,
          keywords: ["Government Liaison", "NGO Partnerships", "Regional Bodies"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-6574ab6814bd",
          hidden: false,
          icon: "chart-bar",
          name: "Analytics & Impact Reporting",
          proficiency: "Advanced",
          level: 4,
          keywords: ["Google Analytics", "Meta Insights", "Campaign KPIs"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-6a8e22bec684",
          hidden: false,
          icon: "pencil-line",
          name: "Content & Copywriting",
          proficiency: "Advanced",
          level: 4,
          keywords: ["Institutional Messaging", "Press Releases", "Policy Communications"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-6d8bf7be7514",
          hidden: true,
          icon: "projector-screen-chart",
          name: "Public Speaking & Facilitation",
          proficiency: "Advanced",
          level: 4,
          keywords: ["Conferences", "Regional Panels", "Workshop Delivery"],
        },
      ],
    },
    languages: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-73807ccc48b5",
          hidden: false,
          language: "English",
          fluency: "Native",
          level: 5,
        },
        {
          id: "019bef5a-93e4-7746-ad39-768670459358",
          hidden: false,
          language: "French",
          fluency: "Professional Working",
          level: 4,
        },
        {
          id: "019bef5a-93e4-7746-ad39-768670459359",
          hidden: false,
          language: "Spanish",
          fluency: "Conversational",
          level: 2,
        },
      ],
    },
    interests: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-7821b4de95f7",
          hidden: false,
          icon: "paint-brush",
          name: "Brand Design & Visual Identity",
          keywords: ["Typography", "Colour Theory", "Brand Systems"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-7c64c1a607d3",
          hidden: false,
          icon: "globe-hemisphere-west",
          name: "Caribbean Development & Policy",
          keywords: ["OECS Integration", "Sustainable Tourism", "Regional Trade"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-80bccce3c0ef",
          hidden: false,
          icon: "microphone",
          name: "Public Speaking",
          keywords: ["Regional Conferences", "Panel Discussions", "Keynotes"],
        },
        {
          id: "019bef5a-93e4-7746-ad39-84bb7e9af005",
          hidden: false,
          icon: "book-open",
          name: "Continuous Learning",
          keywords: ["Strategic Communications", "Leadership", "Marketing Innovation"],
        },
      ],
    },
    awards: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-8a8bb9fbe182",
          hidden: false,
          title: "Caribbean Marketing Excellence Award",
          awarder: "Caribbean Business Awards",
          date: "November 2023",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Recognised for outstanding contribution to regional brand building and institutional digital communications across the Eastern Caribbean</p>",
        },
        {
          id: "019bef5a-93e4-7746-ad39-8dd81379c7c9",
          hidden: false,
          title: "Young Professional of the Year",
          awarder: "Dominica Chamber of Commerce",
          date: "March 2021",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Awarded in recognition of leadership in marketing and communications, community service, and professional achievement under 35</p>",
        },
      ],
    },
    certifications: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-91fe8a4dfea6",
          hidden: false,
          title: "Google Digital Marketing & E-commerce Certificate",
          issuer: "Google / Coursera",
          date: "August 2022",
          website: {
            url: "",
            label: "",
          },
          description: "",
        },
        {
          id: "019bef5a-93e4-7746-ad39-961afccc2508",
          hidden: false,
          title: "HubSpot Marketing Hub Certification",
          issuer: "HubSpot Academy",
          date: "February 2023",
          website: {
            url: "",
            label: "",
          },
          description: "",
        },
        {
          id: "019bef5a-93e4-7746-ad39-961afccc2509",
          hidden: false,
          title: "Meta Blueprint — Digital Marketing Associate",
          issuer: "Meta",
          date: "July 2023",
          website: {
            url: "",
            label: "",
          },
          description: "",
        },
      ],
    },
    publications: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-9816f0081895",
          hidden: false,
          title: "Marketing the Caribbean: Beyond the Beach",
          publisher: "Caribbean Journal of Business",
          date: "June 2022",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Opinion piece exploring how Caribbean institutions and destinations can differentiate through culture, community storytelling, and authentic brand positioning rather than competing solely on natural appeal</p>",
        },
        {
          id: "019bef5a-93e4-7746-ad39-9cf55c272c05",
          hidden: false,
          title: "Building a Digital-First Brand on a Small Island Budget",
          publisher: "Dominica Business Review",
          date: "March 2021",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Practical guide for Caribbean SMEs and institutions on achieving high brand visibility with limited resources through organic content, community partnerships, and strategic storytelling</p>",
        },
      ],
    },
    volunteer: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-a02580473e05",
          hidden: false,
          organization: "Junior Achievement Dominica",
          location: "Roseau, Dominica",
          period: "2019 - Present",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Mentor and workshop facilitator for secondary school students exploring entrepreneurship, business, and personal branding. Led the annual business pitch competition supporting 40+ student teams across Dominica.</p>",
        },
        {
          id: "019bef5a-93e4-7746-ad39-a731c5b1b286",
          hidden: false,
          organization: "Discover Dominica Authority — Brand Ambassador",
          location: "Roseau, Dominica",
          period: "2021 - 2023",
          website: {
            url: "",
            label: "",
          },
          description:
            "<p>Served as a voluntary brand ambassador and content contributor for Dominica's national tourism authority, supporting destination marketing campaigns, the World Creole Music Festival promotion, and social media content for international audiences.</p>",
        },
      ],
    },
    references: {
      title: "",
      columns: 1,
      hidden: false,
      items: [
        {
          id: "019bef5a-93e4-7746-ad39-a945c0f42dd5",
          hidden: false,
          name: "Available upon request",
          position: "",
          website: {
            url: "",
            label: "",
          },
          phone: "",
          description: "",
        },
      ],
    },
  },
  customSections: [
    {
      title: "Experience",
      columns: 1,
      hidden: false,
      id: "019becaf-0b87-769d-98a6-46ccf558c0e8",
      type: "experience",
      items: [
        {
          id: "019bef5a-d1fa-7289-a87c-2677688d9e75",
          hidden: false,
          company: "Discover Dominica Authority",
          position: "Marketing & Communications Officer",
          location: "Roseau, Dominica",
          period: "June 2019 - December 2021",
          website: {
            url: "",
            label: "",
          },
          roles: [],
          description:
            "<ul><li><p>Managed Dominica's destination brand across Facebook, Instagram, and YouTube — growing combined following from 14K to 52K and increasing average post engagement by 64% over two years</p></li><li><p>Led digital and print communications for the annual World Creole Music Festival, coordinating with regional broadcasters, international media, and diaspora networks to reach audiences across North America and Europe</p></li><li><p>Coordinated press trips for 18 international travel journalists and influencers, resulting in editorial features in Caribbean Beat, Travel + Leisure Caribbean, and Lonely Planet</p></li><li><p>Produced monthly stakeholder newsletters distributed to 8,500 travel agents, tourism partners, and government contacts with a consistent 38%+ open rate</p></li><li><p>Played a central role in the post-Hurricane Maria brand recovery strategy, developing the 'Dominica Rebuilt Stronger' messaging framework adopted by the Ministry of Tourism</p></li></ul>",
        },
        {
          id: "019bef5a-db0e-73c6-9b6e-4471703864f1",
          hidden: false,
          company: "Prism Communications Dominica",
          position: "Marketing Coordinator",
          location: "Roseau, Dominica",
          period: "August 2016 - May 2019",
          website: {
            url: "",
            label: "",
          },
          roles: [],
          description:
            "<ul><li><p>Supported brand strategy and multi-channel campaign delivery for a portfolio of 12 regional clients across retail, financial services, and hospitality sectors</p></li><li><p>Coordinated advertising placements across radio, print, and digital platforms — managing media buying, vendor negotiations, and production timelines</p></li><li><p>Designed marketing collateral including brochures, event banners, social graphics, and email templates using Adobe Creative Suite</p></li><li><p>Assisted in launching three new client brands from identity development through to public debut — including one financial services brand that became a recognisable name across the Eastern Caribbean within 12 months</p></li></ul>",
        },
      ],
    },
    {
      title: "Cover Letter",
      columns: 1,
      hidden: false,
      id: "019bef5b-0b3d-7e2a-8a7c-12d9e23a4f6b",
      type: "cover-letter",
      items: [
        {
          id: "019bef5b-0f8d-77d1-9b2a-4a1b65e1b8aa",
          hidden: false,
          recipient:
            '<p>Human Resources Division<br />Organisation of Eastern Caribbean States (OECS) Commission<br />Morne Fortune, Castries, Saint Lucia<br /><a href="mailto:careers@oecs.int">careers@oecs.int</a></p>',
          content:
            "<p>Dear Hiring Committee,</p><p>I am writing to express my strong interest in the position of Communications and Marketing Manager at the OECS Commission. As a Marketing professional with over eight years of experience leading regional campaigns, building institutional brands, and engaging diverse stakeholders across the Eastern Caribbean, I am confident that my background aligns closely with the Commission's mandate to advance integration, sustainable development, and community wellbeing across member states.</p><p>In my current role at the Caribbean Tourism Organisation, I have led multi-country marketing strategies, managed a team of eight, and overseen campaigns that have reached audiences across the UK, US, and Canada. I have consistently delivered results that go beyond visibility — building trust between institutions and the communities they serve. My work on Dominica's post-Hurricane Maria brand recovery campaign demonstrated my ability to develop purpose-driven communications in sensitive, high-stakes environments, earning recognition at the 2021 Dominica Chamber of Commerce Young Professional Awards.</p><p>What draws me most to the OECS is the opportunity to apply strategic communications in service of real policy outcomes — economic integration, youth development, climate resilience, and regional identity. Having previously contracted with the OECS Commission on the Youth Employment Awareness Initiative, I developed a deep appreciation for the Commission's values-led approach and its commitment to inclusive, people-centred development. I am bilingual in English and French, which I believe is a meaningful asset for engaging member states across the Francophone and Anglophone Caribbean.</p><p>I am excited by the possibility of contributing to an organisation whose work directly shapes the future of the region I call home. I would welcome the opportunity to discuss how my experience, vision, and commitment to Caribbean excellence can support the OECS Commission's communications goals.</p><p>Thank you sincerely for your time and consideration.</p><p>Warm regards,<br />Marie Andrew<br />Roseau, Commonwealth of Dominica<br />+1 (767) 555-0182 | marie.andrew@email.com</p>",
        },
      ],
    },
  ],
  metadata: {
    template: "roseau",
    layout: {
      sidebarWidth: 30,
      pages: [
        {
          fullWidth: false,
          main: ["summary", "education", "experience"],
          sidebar: ["profiles", "skills"],
        },
        {
          fullWidth: false,
          main: ["019becaf-0b87-769d-98a6-46ccf558c0e8", "awards"],
          sidebar: ["languages", "certifications", "interests", "references"],
        },
        {
          fullWidth: true,
          main: ["projects", "publications", "volunteer"],
          sidebar: [],
        },
        {
          fullWidth: true,
          main: ["019bef5b-0b3d-7e2a-8a7c-12d9e23a4f6b"],
          sidebar: [],
        },
      ],
    },
    css: {
      enabled: false,
      value: "",
    },
    page: {
      gapX: 4,
      gapY: 8,
      marginX: 16,
      marginY: 14,
      format: "a4",
      locale: "en-US",
      hideIcons: false,
    },
    design: {
      level: {
        icon: "acorn",
        type: "circle",
      },
      colors: {
        primary: "rgba(0, 132, 209, 1)",
        text: "rgba(0, 0, 0, 1)",
        background: "rgba(255, 255, 255, 1)",
      },
    },
    typography: {
      body: {
        fontFamily: "IBM Plex Serif",
        fontWeights: ["400", "600"],
        fontSize: 11,
        lineHeight: 1.5,
      },
      heading: {
        fontFamily: "Fira Sans Condensed",
        fontWeights: ["500"],
        fontSize: 18,
        lineHeight: 1.5,
      },
    },
    notes: "",
  },
};
