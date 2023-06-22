export function getProjects() {
  return [
    {
      title: "Resize Me",
      img: "https://i.imgur.com/3cIQBir.png",
      description:
        "This web app is specifically designed for resizing multiple PNG images simultaneously. Users have the ability to upload any number of PNGs and resize them uniformly. Additionally, users can rename each image as desired before downloading a zip file containing all the resized images.",
      details:
        "This project was specifically developed for emote artists who require images in various sizes. Recognizing the popularity of content creation and the need for resizing images, I designed this website to streamline the process for artists. For instance, Twitch emotes often come in sizes ranging from 112/56/28px. Throughout this project, I gained valuable experience in image resizing, ensuring optimal quality, and creating zip files for easy distribution.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Netlify",
      demo: "https://resizeme.netlify.app/",
      github: "https://github.com/tommach591/resizeme",
    },
    {
      title: "Drewdle",
      img: "https://i.imgur.com/QCsKIeg.png",
      description:
        "A web app that merges the concepts of Wordle and Google's Quick, Draw! Users can draw the daily word using various colors and brush sizes. Once completed, drawings can be submitted for others to view. The app showcases the drawings in a gallery where people can like and appreciate them!",
      details:
        "I aimed to create a straightforward daily game and explored two concepts: drawing and sharing the drawings. This project introduced me to the HTML canvas element and allowed me to learn various aspects, including storing points drawn on the canvas, implementing undo/redo functionality, and rendering the strokes onto the canvas.",
      skills:
        "JavaScript, HTML, CSS, NodeJS, React, MongoDB, Express, Heroku, Netlify",
      demo: "https://drewdle.netlify.app/",
      github: "https://github.com/tommach591/drewdle",
    },
    {
      title: "Peepo Builder",
      img: "https://i.imgur.com/712NTEv.png",
      description:
        "This web app enables users to upload PNG images as layers. The app then merges these layers into a single PNG image. Users have the ability to organize the order of the layers by simply dragging and dropping, allowing them to create their desired picture composition.",
      details:
        "This project was a fun endeavor inspired by the game Gaia Online. Through this project, I gained experience in implementing user image upload functionality and enabling users to download their creations. To accomplish this, I utilized the node package 'mergeImages' to seamlessly merge multiple image layers into a single image.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Netlify",
      demo: "https://peepo-builder.netlify.app/",
      github: "https://github.com/tommach591/peepo-builder",
    },
    {
      title: "LoL Mastery Tracker",
      img: "https://i.imgur.com/xgNEOEJ.png",
      description:
        "A progress tracker for the online game League of Legends, this website allows users to enter their in-game name and retrieves the corresponding information from the server for display. The application is designed with a strong focus on user-friendliness.",
      details:
        'This full stack project involved utilizing Riot Games\' API to retrieve live data for the game. Through this project, I gained valuable experience in working with environmental variables and implementing secure storage of API keys. If you do not play this game, try searching my username in NA1, "tumato".',
      skills: "JavaScript, HTML, CSS, NodeJS, React, Express, Heroku, Netlify",
      demo: "https://lol-mastery-tracker.netlify.app/",
      github: "https://github.com/tommach591/lol-mastery-tracker",
    },
    {
      title: "MHW Armor Set Builder",
      img: "https://i.imgur.com/7jSwm2o.png",
      description:
        "An armor set builder for the game Monster Hunter World. Browse through weapons, armors, charms, and decorations to plan out which skills you want to incorporate into your gameplay.",
      details:
        "This project was a React web app that I built to enhance my knowledge of APIs and CSS. Upon making the API call, my aim was to present the retrieved information in a visually appealing manner, reminiscent of the actual game interface.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Netlify",
      demo: "https://mhw-armor-set-builder.netlify.app/",
      github: "https://github.com/tommach591/mhw-armor-set-builder",
    },
    {
      title: "Facebawk",
      img: "https://i.imgur.com/0QolhxG.png",
      description:
        "This is a full-stack Facebook clone where users can sign up, add friends, edit their profile, create posts, and interact with posts through likes and comments. User data, including profiles and posts, is stored in MongoDB.",
      details:
        "This was a two-week project designed to assess my knowledge after studying front-end development for 4-5 months. It was also the first project since graduating where I had to implement my own back end. Through this experience, I gained valuable insights into building and hosting my own back end, as well as deploying both the back end and front end on Heroku and Netlify.",
      skills:
        "JavaScript, HTML, CSS, NodeJS, React, MongoDB, Express, Heroku, Netlify",
      demo: "https://facebawk.netlify.app/",
      github: "https://github.com/tommach591/facebawk",
    },
    {
      title: "Tummybot",
      img: "https://i.imgur.com/UXplqqV.png",
      description:
        "A feature-rich Discord bot offering a variety of activities including minigames, fishing, gardening, pet care, and monster hunting, allowing users to collect rare equipment for upgrades.",
      details:
        "This project was a personal endeavor aimed at learning JavaScript. I delved into Discord.js and developed an interactive bot for my friends to enjoy. As my enthusiasm grew, I continuously expanded its functionality by introducing new features. Moreover, I acquired knowledge on hosting the bot on Heroku and storing player progress on AWS S3. To create a custom database, I designed my own objects and employed collections of JSON objects. Looking back, there are several aspects I would approach differently, including coding practices and the utilization of a dedicated database solution.",
      skills: "JavaScript, NodeJS, AWS S3, Heroku",
      demo: "",
      github: "https://github.com/tommach591/TummyBot",
    },
    {
      title: "LaprasBot",
      img: "https://i.imgur.com/FBJyVpj.png",
      description:
        "A simple Discord bot that generates a random Pokemon as Pokemon of the Day.",
      details:
        "This project was developed for a friend, serving as an opportunity for me to gain familiarity with various node packages and expand my skillset.",
      skills: "JavaScript, NodeJS, AWS S3, Heroku",
      demo: "",
      github: "https://github.com/tommach591/LaprasBot",
    },
    {
      title: "Wizard",
      img: "https://i.imgur.com/jLGHK94.png",
      description:
        "A platformer game created using Unity and published on itch.io. Players are challenged to navigate through each level, overcome obstacles, defeat unique bosses, and retrieve their stolen orbs.",
      details:
        "This project was the final assignment for my Intro Game Studies course. I collaborated with a team consisting of two software engineers and two artists. We held regular meetings to discuss the implementation of features and gameplay mechanics for the game. Our objective was not only to create an enjoyable gaming experience but also to showcase the artistic work.",
      skills: "C#, Unity",
      demo: "https://narwaltz.itch.io/wizard",
      github: "",
    },
    {
      title: "Board Game Notes",
      img: "https://i.imgur.com/oYLQG4N.png",
      description:
        "A note-taking web app designed specifically for the board game Awkward Guests, eliminating the need for pen and paper and allowing for more table space. The app is user-friendly and accessible, providing a seamless experience.",
      details:
        "This project served as my introduction to front-end development, where I successfully implemented requested features and resolved various issues. During this process, I familiarized myself with React by thoroughly examining the source code and experimenting with its functionalities.",
      skills: "JavaScript, NodeJS, React, HTML, CSS",
      demo: "https://boardgamenotes.web.app/",
      github: "https://github.com/mike591/board-game-notes",
    },
    {
      title: "Cluck Cluck Corn",
      img: "https://i.imgur.com/YB6BxeD.png",
      description:
        "A platformer game built on Unity and published on itch.io. Play as the chicken and collect corn! Reach the end and get rewarded with more corn!",
      details:
        "This project was completed as part of my Intro Game Studies course. The objective was to design a game that effectively incorporated concepts discussed in class, including challenges, motivation, appeal, and more.",
      skills: "C#, Unity",
      demo: "https://narwaltz.itch.io/cluck-cluck-corn-demo",
      github: "",
    },
    {
      title: "Tap Ping!",
      img: "https://i.imgur.com/DJBKFSj.png",
      description:
        "A mobile tapping game built on Unity and published on the Google Play Store. Tap Ping the Peregrine and save Ding the Duck and get yourself a new high score!",
      details:
        "This was my first major project after learning how to code. I took the initiative to self-teach myself C# and Unity because of my keen interest in game design. Through this experience, I gained valuable knowledge in developing my own game, exporting it onto mobile devices, and successfully implementing ads.",
      skills: "C#, Unity",
      demo: "https://play.google.com/store/apps/details?id=com.Narwaltz.TapPing&hl=en_US&gl=US",
      github: "",
    },
  ];
}
