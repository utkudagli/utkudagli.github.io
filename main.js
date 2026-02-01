// Portfolio Data - Replace with your actual data
const portfolioData = {
  name: "Utku Dagli",
  title: "Game Designer",
  logo: "logo.png", 
  description: [
    "Welcome, weary traveller, to my portfolio. My name is Utku! I am a multidisciplinary individual with a core focus on game design, an interest in user experience, and experience as a designer and developer. Currently working at Axiosys on Mawforged.<br><br> Below, you'll find more information about my portfolio, skills and myself.",
  ],
  email: "utkudagli@gmail.com",
  social: {
    github: "https://www.github.com/utkudagli",
    linkedin: "https://www.linkedin.com/in/utkudagli",
    youtube: "https://www.youtube.com/@UtkuLudens"
  },
  resumePdf: "Documents/UtkuDagliCV.pdf"
};

const projects = [
  {
    id: 1,
    title: "Mawforged",
    company: "Axiosys",
    banner: "Projects/Mawforged/Personal_Profile_Banner.jpg",
    role: "Game Designer",
    description: [
      "To be released on Steam",
      "",
      "Developed using Unreal Engine 5",
      "",
      "First-Person survival RPG set in a Dark-Fantasy setting. While exploring this dark and layered world, you also need to survive in this harsh world.",
      "",
    ],
    responsibilities: [
      "Using Unreal Engine 5 to design and prototype the mechanics.",
      "Taking charge of design of AI, in game progression, exploration and traversal mechanics.",
      "Colaborated closely with other disciplines to design, and mantain sustainable, scalable gameplay systems, and workflows that align with team's standards.",
      "Creating documentation for mechanics that I am responsible for.", 
    ],
    links: [
      { type: "steam", url: "https://store.steampowered.com/app/3373310/Mawforged/" },
      { type: "website", url: "https://mawforged.com/" }
    ],
    gallery: [
      { type: "youtube", videoId: "08VWrf6QJd4" },
      { type: "image", url: "Projects/Mawforged/ss_92d93e83d195df786a3256aab4a0e940604c0216.1920x1080.jpg" },
    ]
  },
  {
    id: 2,
    title: "Heretic",
    company: "Personal Project",
    banner: "Projects/Heretic/Screenshot 2022-11-15 131111.png",
    role: "Game Designer & Developer",
    description: [
      "Released on itch.io",
      "",
      "Developed using Unreal Engine 5",
      "",
      "Rogue-like fantasy game set in fantasy world.",
      "",
      "This game has been designed and developed for the master's thesis, 'Punishment Mechanics in Video Games: Effects on Player Experience and Flow', to explore how players react to punishment mechanics and what motivates them to continue playing despite challenges. Published as a prototype.",
      "",  
      "To read the master's thesis paper: <a href=https://resolver.obvsg.at/urn:nbn:at:at-ubk:1-54367>https://resolver.obvsg.at/urn:nbn:at:at-ubk:1-54367</a>"
    ],
    responsibilities: [
      "Worked on design and development",
      "Balancing the mechanics and stats of the game.",
      "Designed the game, level, AI behaviours and attack patterns.",
      "Implemented the game mechanics into the game. ",
    ],
    links: [
      { type: "itchio", url: "https://utkudagli.itch.io/heretic" },
    ],
    gallery: [
      { type: "youtube", videoId: "_HDmKe5yUdA" },
      { type: "image", url: "Projects/Heretic/Screenshot 2024-12-06 161059.png" },
    ]
  },
  {
    id: 3,
    title: "Sabotaj",
    company: "HES Games",
    banner: "Projects/Sabotaj/header.jpg",
    role: "Game Designer & Developer",
    description: [
      "Released on Steam for PC.",
      "",
      "Developed using Unreal Engine 4.",
      "",
      "Sabotaj is a Competitive FPS game. Two teams are fighting with each other to eliminate each other."
    ],
    responsibilities: [
      "Worked on designing and developing additional game modes.",
      "Designed and implemented gameplay and UI elements.",
      "Worked on development, UI/UX and gameplay design.",
    ],
    links: [
      { type: "steam", url: "https://store.steampowered.com/app/1436900/Sabotaj/" },
    ],
    gallery: [
      { type: "youtube", videoId: "ndArnK68q9Q" },
      { type: "image", url: "Projects/Sabotaj/ss_1dd5b8571e289d90807d737abd019ee10e3ace51.600x338.jpg" },
      { type: "image", url: "Projects/Sabotaj/ss_61b2afcc9d7b927d7bc4dbf8e38e57c06be51ca8.600x338.jpg" },
      { type: "image", url: "Projects/Sabotaj/ss_a16e0e3ad2befb796716b995dc1cc6176ff493ec.600x338.jpg" },
      { type: "image", url: "Projects/Sabotaj/ss_adf7c4b50f7654a1b47f91f57a1a44cfc958753a.600x338.jpg" },
    ]
  },
  {
    id: 4,
    title: "Atlas Space",
    company: "GarageAtlas",
    banner: "Projects/AtlasSpace/garageatlas_cover.jpeg",
    role: "Game Developer",
    description: [
      "Released for VR and PC platforms.",
      "",
      "Developed using Unreal Engine 4.",
      "",
      "AtlasSpace is the foundation for the future of Metaverse infrastructure-as-a-service, providing a platform where diverse individuals, communities and brands can connect and create value. We are dedicated to crafting shared experiences for a true decentralized lifestyle."
    ],
    responsibilities: [
      "Worked on the early prototype phase.",
      "Implemented the interaction mechanics for the early phase.",
      "Developed the multiplayer infrastructure.",
    ],
    links: [
      { type: "website", url: "https://atlas.space/" },
    ],
    gallery: [
      { type: "youtube", videoId: "h-P568tjTuw" },
    ]
  },
  {
    id: 5,
    title: "Atlas Home",
    company: "GarageAtlas",
    banner: "Projects/AtlasSpace/garageatlas_cover.jpeg",
    role: "Game Developer",
    description: [
      "Released for VR platforms.",
      "",
      "Developed using Unreal Engine 4.",
      "",
      "AtlasHome is a custom Virtual Reality simulation created for editing, displaying, promoting and marketing a property yet to be built."
    ],
    responsibilities: [
      "Worked to port this project to standalone headsets",
    ],
    links: [
      { type: "website", url: "https://www.garageatlas.com/products-atlashome" },
    ],
    gallery: [
      { type: "youtube", videoId: "ayiL9AgDLqY" },
    ]
  },
];

const certificates = [
  { id: 1, name: "Google UX Design", pdfUrl: "Documents/Coursera 6RYKVJ62CSCG.pdf" },
];

const blogPosts = [
  {
    id: 1,
    title: "Embarking on a New Game Development Journey",
    body: "Creating a survival game requires balancing tension with player agency. The key is to make every decision feel meaningful while ensuring players never feel completely helpless. In this post, I share my experience designing the first hour of gameplay for my dark fantasy survival project.",
    date: "January 15, 2026",
  },
  {
    id: 2,
    title: "WordPress Custom Development: Beyond Plugins",
    body: "While plugins are convenient, custom code solutions often provide better performance and exactly what you need. I discuss my approach to building custom headers, contact forms, and room showcase features without relying on heavy plugin ecosystems.",
    date: "January 8, 2026",
  },
  {
    id: 3,
    title: "Automating Video Production with n8n",
    body: "Content creation at scale requires smart automation. Here's how I built a video production pipeline using n8n.cloud, the challenges I faced with API costs, and how I optimized the workflow for my YouTube gaming channel.",
    date: "December 28, 2025",
  }
];

// Background Data
const backgroundData = {
  playerCharacter: {
    title: "Player Character",
    paragraphs: [
      "Utku Dagli is a <strong>Designer</strong> specialised in <strong>Game, Technical and UI/UX Design</strong>. He has been <strong>designing games</strong> for the last fours years and has <strong>developed games</strong> for over seven years. He has worked on several projects, from <strong>computer games to VR/AR</strong>. He worked on one <strong>published game</strong> and <strong>several VR/AR projects</strong>. He has experience with <strong>Unreal Engine 4 and 5</strong> for over seven years and has experience with <strong>Unity</strong> for over four years.",
      "He is experienced with <strong>C#, C++ and Blueprint of Unreal Engine</strong> and has worked as a game developer for over one year in companies and currently working as a game designer more than 6 months working with various platforms. His degree in engineering improved his skills in <strong>analysing and problem-solving</strong>. His degree in the master program improved his perspectives on games and inspired him to work and study <strong>user experience</strong>. His interest in <strong>user experience prompted him to take</strong> a certificate program in User Experience. He worked as a <strong>Tutor</strong> at the university. He found a chance to work with colleagues and professors from different backgrounds and disciplines. While a tutor, he <strong>helped, guided,</strong> and had sessions with fellow students to discuss and analyse games under the Klagenfurt Game Lab. Also, he has been a <strong>member</strong> of the Klagenfurt Game Jam Organisation Team for the last five game jams."
    ]
  },
  characterSkills: {
    title: "Character Skills",
    categories: [
      {
        name: "Design Skills",
        items: ["Game Design", "Gamification", "UI/UX Design", "Technical Design", "Level Design", "Design Documentation"]
      },
      {
        name: "Developer Skills",
        items: ["C++, C#, Unreal Blueprints", "Unreal Engine", "Unity Engine", "Java", "JavaScript, TypeScript, HTML, CSS", "Lua, Python"]
      },
      {
        name: "Software Skills",
        items: ["Visual Studio, CLion, Visual Code", "WebStorm, Sublime, IntelliJIdea", "Blender", "Adobe XD, Figma", "Adobe Photoshop, Gimp", "Microsoft Office, Google Docs, Microsoft 365", "Perforce, SVN, Git", "Jira, Confluence, Trello", "Slack, Discord"]
      },
      {
        name: "Language Skills",
        items: ["Native Turkish speaker", "Professional-level English speaker", "Beginner-level German speaker"]
      }
    ]
  },
  background: {
    title: "Background",
    education: {
      title: "Education",
      items: [
        { degree: "Game Studies and Engineering, MSc", institution: "Universität Klagenfurt - Klagenfurt" },
        { degree: "Computer Engineering, BSc", institution: "Kadir Has University - Istanbul" }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        "Game Designer - Axiosys",
        "Tutor - Universität Klagenfurt",
        "Frontend Developer - Adesso Turkey",
        "Gameplay Developer - HES Games",
        "Game Developer - GarageAtlas"
      ]
    }
  },
  publications: {
    title: "Publications",
    items: [
      { type: "Master's Thesis", title: "Punishment Mechanics in Video Games: Effects on Player Experience and Flow", link: "https://resolver.obvsg.at/urn:nbn:at:at-ubk:1-54367" },
      { type: "Article", title: "The Difficulty of Videogames and Intelligence of AI", link: "https://doi.org/10.48415/001.2022.02.5" }
    ]
  }
};

// SVG Icons
const icons = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  steam: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>`,
  website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  itchio: `<svg xmlns="https://www.w3.org/2000/svg" height="235.452" width="261.728" viewBox="0 0 245.371 220.736"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08C57.534 94.073 72.867 94.073 76.7 94.073zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="#000"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`
};

// Get icon by link type
function getLinkIcon(type) {
  const iconMap = {
    github: icons.github,
    steam: icons.steam,
    youtube: icons.youtube,
    website: icons.website,
    itchio: icons.itchio,
    linkedin: icons.linkedin,
    twitter: icons.twitter
  };
  return iconMap[type] || icons.externalLink;
}

// Utility Functions
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('');
}

function formatNumber(num) {
  return num.toLocaleString();
}

// Render Header
function renderHeader(activePage) {
  const header = document.getElementById('header');
  if (!header) return;
  
  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="header-brand">
        <div class="header-name">${portfolioData.name}</div>
        <div class="header-title">${portfolioData.title}</div>
      </a>
      <nav class="header-nav">
        <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="resume.html" class="${activePage === 'resume' ? 'active' : ''}">Resume</a>
        <a href="certificates.html" class="${activePage === 'certificates' ? 'active' : ''}">Certificates</a>
      </nav>
    </div>
  `;
}

// Render Footer
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="footer-inner">
      <a href="mailto:${portfolioData.email}" class="footer-email">
        ${icons.mail}
        ${portfolioData.email}
      </a>
      <div class="footer-social">
        <a href="${portfolioData.social.github}" aria-label="GitHub">${icons.github}</a>
        <a href="${portfolioData.social.linkedin}" aria-label="LinkedIn">${icons.linkedin}</a>
        <a href="${portfolioData.social.youtube}" aria-label="Youtube">${icons.youtube}</a>
      </div>
      <p class="footer-copy">© 2026</p>
    </div>
  `;
}

// Render Gallery Slide
function renderGallerySlide(item, index, isActive) {
  const activeClass = isActive ? 'active' : '';
  if (item.type === 'youtube') {
    return `
      <div class="gallery-slide ${activeClass}" data-index="${index}">
        <iframe 
          src="https://www.youtube.com/embed/${item.videoId}" 
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    `;
  }
  return `
    <div class="gallery-slide ${activeClass}" data-index="${index}">
      <img src="${item.url}" alt="Gallery image" loading="lazy">
    </div>
  `;
}

// Initialize Gallery Sliders
function initGallerySliders() {
  const sliders = document.querySelectorAll('.gallery-slider');
  
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.gallery-slide');
    const dots = slider.querySelectorAll('.gallery-dot');
    const prevBtn = slider.querySelector('.gallery-arrow.prev');
    const nextBtn = slider.querySelector('.gallery-arrow.next');
    let currentIndex = 0;
    
    function goToSlide(index) {
      // Handle wrapping
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      currentIndex = index;
      
      // Update slides
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });
      
      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
    
    // Arrow click events
    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }
    
    // Dot click events
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });
  });
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects');
  if (!container) return;
  
  container.innerHTML = projects.map(project => `
    <div class="project">
      <!-- Banner -->
      <div class="project-banner">
        <img src="${project.banner}" alt="${project.title} banner" loading="lazy">
      </div>
      
      <!-- Header -->
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-company">${project.company} - ${project.role}</p>
      </div>
      
      <!-- Description & Responsibilities -->
      <div class="project-details">
        <div class="project-detail-section">
          <h4>Project Description</h4>
            ${project.description.map(item => `${item}<br>`).join('')}
        </div>
        <div class="project-detail-section">
          <h4>Responsibilities</h4>
          <ul>
            ${project.responsibilities.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <!-- Link Buttons -->
      <div class="project-links">
        ${project.links.map(link => `
          <a href="${link.url}" class="project-link-btn" aria-label="${link.type}" target="_blank" rel="noopener noreferrer">
            ${getLinkIcon(link.type)}
          </a>
        `).join('')}
      </div>
      
      <!-- Gallery Slider -->
      <div class="project-gallery-section">
        <h4>Gallery</h4>
        <div class="gallery-slider">
          <div class="gallery-viewport">
            ${project.gallery.map((item, index) => renderGallerySlide(item, index, index === 0)).join('')}
          </div>
          <button class="gallery-arrow prev" aria-label="Previous slide">${icons.chevronLeft}</button>
          <button class="gallery-arrow next" aria-label="Next slide">${icons.chevronRight}</button>
          <div class="gallery-dots">
            ${project.gallery.map((_, index) => `
              <button class="gallery-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Initialize all gallery sliders
  initGallerySliders();
}

// Render Hero
function renderHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  hero.innerHTML = `
    <p class="hero-text">${portfolioData.description.map(item => `${item}<br>`)}</p>
  `;
}

// Render Certificates List
function renderCertificates() {
  const list = document.getElementById('certificate-list');
  const viewer = document.getElementById('certificate-viewer');
  if (!list || !viewer) return;
  
  let selectedId = certificates[0].id;
  
  function render() {
    const selected = certificates.find(c => c.id === selectedId);
    
    list.innerHTML = certificates.map(cert => `
      <button class="certificate-item ${cert.id === selectedId ? 'active' : ''}" data-id="${cert.id}">
        ${cert.name}
      </button>
    `).join('');
    
    viewer.innerHTML = `
      <div class="certificate-header">
        <h3 class="certificate-name">${selected.name}</h3>
        <div class="page-actions">
          <a href="${selected.pdfUrl}" target="_blank" class="btn btn-outline">
            ${icons.externalLink}
            Open
          </a>
          <a href="${selected.pdfUrl}" download class="btn btn-primary">
            ${icons.download}
            Download
          </a>
        </div>
      </div>
      <div class="pdf-viewer">
        <iframe src="Documents/Coursera 6RYKVJ62CSCG.pdf" width="100%" height="100%" style="border:none;"></iframe>
        </div>
      </div>
    `;
    
    // Bind click events
    list.querySelectorAll('.certificate-item').forEach(item => {
      item.addEventListener('click', () => {
        selectedId = parseInt(item.dataset.id);
        render();
      });
    });
  }
  
  render();
}

// Render Blog Posts
function renderBlogPosts() {
  const container = document.getElementById('blog-posts');
  if (!container) return;
  
  const likedPosts = new Set(JSON.parse(localStorage.getItem('likedPosts') || '[]'));
  
  function render() {
    container.innerHTML = blogPosts.map(post => `
      <article class="blog-post">
        <div class="blog-author">
          <div class="blog-avatar">${getInitials(portfolioData.name)}</div>
          <span class="blog-author-name">${portfolioData.name}</span>
          <span class="blog-author-sep">·</span>
          <span class="blog-date">${post.date}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-body">${post.body}</p>
        <div class="blog-stats">
          <div class="blog-views">
            ${icons.eye}
            <span>${formatNumber(post.views)}</span>
          </div>
          <button class="blog-likes ${likedPosts.has(post.id) ? 'liked' : ''}" data-id="${post.id}">
            ${icons.heart}
            <span>${formatNumber(post.likes + (likedPosts.has(post.id) ? 1 : 0))}</span>
          </button>
        </div>
      </article>
    `).join('');
    
    // Bind like buttons
    container.querySelectorAll('.blog-likes').forEach(btn => {
      btn.addEventListener('click', () => {
        const postId = parseInt(btn.dataset.id);
        if (likedPosts.has(postId)) {
          likedPosts.delete(postId);
        } else {
          likedPosts.add(postId);
        }
        localStorage.setItem('likedPosts', JSON.stringify([...likedPosts]));
        render();
      });
    });
  }
  
  render();
}

// Initialize page
function initPage(pageName) {
  renderHeader(pageName);
  renderFooter();
}

// Render Background Section
function renderBackground() {
  const container = document.getElementById('background');
  if (!container) return;
  
  const data = backgroundData;
  
  // Split skills into left (Design, Developer) and right (Software, Language) columns
  const leftSkills = data.characterSkills.categories.slice(0, 2);
  const rightSkills = data.characterSkills.categories.slice(2, 4);
  
  container.innerHTML = `
    <!-- Player Character -->
    <div class="background-section">
      <h2 class="background-title">${data.playerCharacter.title}</h2>
      <div class="background-content">
        ${data.playerCharacter.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
    </div>
    
    <!-- Character Skills -->
    <div class="background-section">
      <h2 class="background-title">${data.characterSkills.title}</h2>
      <div class="skills-grid">
        <div class="skills-column">
          ${leftSkills.map(cat => `
            <div class="skill-category">
              <h4 class="skill-category-title">${cat.name}</h4>
              <ul class="skill-list">
                ${cat.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div class="skills-column">
          ${rightSkills.map(cat => `
            <div class="skill-category">
              <h4 class="skill-category-title">${cat.name}</h4>
              <ul class="skill-list">
                ${cat.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <!-- Background -->
    <div class="background-section">
      <h2 class="background-title">${data.background.title}</h2>
      <div class="background-grid">
        <div class="background-column">
          <h4 class="background-subtitle">${data.background.education.title}</h4>
          ${data.background.education.items.map(item => `
            <div class="education-item">
              <p class="education-degree">${item.degree}</p>
              <p class="education-institution">${item.institution}</p>
            </div>
          `).join('')}
        </div>
        <div class="background-column">
          <h4 class="background-subtitle">${data.background.experience.title}</h4>
          ${data.background.experience.items.map(item => `
            <p class="experience-item">${item}</p>
          `).join('')}
        </div>
      </div>
      
      <!-- Publications below Education and Experience -->
      <div class="publications-section">
        <h4 class="background-subtitle">${data.publications.title}</h4>
        <div class="publications-list">
          ${data.publications.items.map(pub => `
            <div class="publication-item">
              <p>${pub.type} - ${pub.title}</p>
              <a href="${pub.link}" target="_blank" rel="noopener noreferrer">Link: ${pub.link}</a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
