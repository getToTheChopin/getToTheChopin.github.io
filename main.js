const projects = [
    {
        title: "Am I A Banana?",
        image: "/assets/banana.webp",
        description: "Real-time banana detection; a computer vision game",
        url: "https://amiabanana.netlify.app"
    },
    {
        title: "Red Panda Vibes",
        image: "/assets/red-panda-vibes.gif",
        description: "Panda exploration web game, built for #vibejam 2025",
        url: "https://collidingscopes.github.io/red-panda-vibes"
    },
    {
        title: "Acrobatic Arcade",
        image: "/assets/acrobatic-arcade.png",
        description: "Free Web games using computer vision and hand-tracking tech",
        url: "https://collidingscopes.github.io/acrobatic-arcade"
    },
    {
      title: "Liquid Shape Distortions",
      image: "/assets/LSD.gif",
      description: "Psychedelic animation generator; (p)art of your next trip",
      url: "https://collidingscopes.github.io/liquid-shape-distortions"
    },
    {
      title: "Liquid Logo",
      image: "/assets/liquidLogo.gif",
      description: "Turn logos into liquid metal animations",
      url: "https://collidingscopes.github.io/liquid-logo"
    },
    {
        title: "Particular Drift",
        image: "/assets/particularDrift.gif",
        description: "Turn photos into flowing particle animations",
        url: "https://collidingscopes.github.io/particular-drift"
    },
    {
        title: "Video-to-ASCII",
        image: "/assets/ascii.gif",
        description: "Turn videos into ASCII pixel art",
        url: "https://collidingscopes.github.io/ascii/"
    },
    {
        title: "Shape Shimmer",
        image: "/assets/shapeShimmer.gif",
        description: "Turn photos into funky wave animations",
        url: "https://collidingscopes.github.io/shimmer/"
    },
    {
        title: "The Measure of a Plan",
        image: "/assets/TMOAP.gif",
        description: "Free resources and tools for personal finance, visited by hundreds of thousands of people around the world",
        url: "https://themeasureofaplan.com/"
    },
    {
        title: "Image Mage",
        image: "/assets/imageMage.png",
        description: "Remix and reimagine your photos",
        url: "https://imagemageage.github.io"
    },
    {
        title: "Stereo Drift",
        image: "/assets/sieve.png",
        description: "Music visualization tool for creating animated music videos",
        url: "https://stereodrift.github.io"
    },
    {
        title: "Colliding Scopes",
        image: "/assets/collidingScopes.gif",
        description: "Turn photos into kaleidoscope animations",
        url: "https://collidingscopes.github.io"
    },
    {
        title: "Video-to-Pixel-Art",
        image: "/assets/pixelRain.gif",
        description: "Turn videos into pixel art animations",
        url: "https://collidingscopes.github.io/video-to-pixel-art"
    },
    {
        title: "Shades Drawn",
        image: "/assets/shadesDrawn.png",
        description: "Music inspired by the sounds of Hong Kong",
        url: "https://www.youtube.com/@shades-drawn"
    },
];

const fragment = document.createDocumentFragment();
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <a href="${project.url}" class="project-link" rel="noopener" target="_blank">VIEW PROJECT ></a>
    `;
    fragment.appendChild(card);
});
document.querySelector('.projects-grid').appendChild(fragment);