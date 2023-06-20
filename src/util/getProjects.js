export function getProjects() {
  return [
    {
      title: "Resize Me",
      img: "https://i.imgur.com/3cIQBir.png",
      description:
        "A web app designed to resize multiple PNG images. Users can upload as much PNGs as they want and resize them all to the same size. User can also rename each image before downloading a zip of all the resized images.",
      details:
        "This project was developed for emote artists. Content creation is very popular and everyone needs images in a variety of sizes. I designed this website to make it easier for artists to resize their work. For example, Twitch emote sizes ranges from 112/56/28px. This project taught me how to resize images, maintain quality, and create zip files.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Netlify",
      demo: "https://resizeme.netlify.app/",
      github: "https://github.com/tommach591/resizeme",
    },
    {
      title: "Drewdle",
      img: "https://i.imgur.com/QCsKIeg.png",
      description:
        "A web app combining the concepts of Wordle and Google's Quick, Draw! Draw the daily word using different colors and brush sizes. Once you are done, you can submit your drawing for other people to see. Drawings are displayed as a gallery for people to like and enjoy!",
      details:
        "I wanted to develop a simple daily game. I came up with two ideas for this game: drawing and sharing the drawing. This project introduced the HTML canvas element to me. I learned how to store strokes of points drawn on canvas, implement undo/redo functions, and draw the strokes onto canvas.",
      skills:
        "JavaScript, HTML, CSS, NodeJS, React, MongoDB, Express, Heroku, Netlify",
      demo: "https://drewdle.netlify.app/",
      github: "https://github.com/tommach591/drewdle",
    },
    {
      title: "Peepo Builder",
      img: "https://i.imgur.com/712NTEv.png",
      description:
        "A web app that allows users to upload PNG's as layers. The web app takes these layers and combines them into a single PNG. Users can also organize the layer's order by dragging and dropping allowing them to create the ideal picture.",
      details:
        "This project was built for fun, inspired by the game, Gaia Online. I learned how to allow users to upload their own images and download their creation. This project uses the node package mergeImages to combine multiple layers of images into a single image.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Netlify",
      demo: "https://peepo-builder.netlify.app/",
      github: "https://github.com/tommach591/peepo-builder",
    },
    {
      title: "LoL Mastery Tracker",
      img: "https://i.imgur.com/xgNEOEJ.png",
      description:
        "A progress tracker for the online game, League of Legends. Users type in their in-game name and the website retrieves the information from the server and displays it. Built to be extremely user friendly.",
      details:
        "This was a full stack project where I used Riot Games' API. I had to use their API in order to get live data for the game. This project taught me more about environmental variables and how to properly store API keys.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Express, Heroku, Netlify",
      demo: "https://lol-mastery-tracker.netlify.app/",
      github: "https://github.com/tommach591/lol-mastery-tracker",
    },
    {
      title: "MHW Armor Set Builder",
      img: "https://i.imgur.com/7jSwm2o.png",
      description:
        "An armor set builder for the game Monster Hunter World. Browse through weapons, armors, charms, and decorations and plan out which skills you want to bring into your game.",
      details:
        "This was a React web app project I built to learn more about APIs and CSS. After making the API call, I wanted to present all the information in a presentable way similar to the actual game itself.",
      skills: "JavaScript, HTML, CSS, NodeJS, React, Netlify",
      demo: "https://mhw-armor-set-builder.netlify.app/",
      github: "https://github.com/tommach591/mhw-armor-set-builder",
    },
    {
      title: "Facebawk",
      img: "https://i.imgur.com/0QolhxG.png",
      description:
        "A full stack Facebook clone. Users can sign up, add friends, edit profile, make posts, like and comment. User data, such as profile and posts are stored in MongoDB.",
      details:
        "This was a two week project to test what I have learned over 4-5 months of studying front end development. This was also the first project since graduating where I had to implement my own back end. I learned how to not only build my own back end, but also to host both my back end and front end on Heroku and Netlify.",
      skills:
        "JavaScript, HTML, CSS, NodeJS, React, MongoDB, Express, Heroku, Netlify",
      demo: "https://facebawk.netlify.app/",
      github: "https://github.com/tommach591/facebawk",
    },
    {
      title: "Tummybot",
      img: "https://i.imgur.com/UXplqqV.png",
      description:
        "A Discord bot filled with multiple features, such as minigames, fishing, gardening, and pet care. You can also hunt cool monsters and get rare equipment to upgrade.",
      details:
        "This was a passion project to learn JavaScript. I learned how to use Discord.js and created an interactive bot for my friends to play with. I got really invested in it and continued adding in new features. Eventually, I learned how to host the bot on Heroku and store player progress on AWS S3. I designed my own objects and made my own database using collections of JSON objects. Now that I have finished, there are many things I would do differently, such as how I would code it and using an actual database.",
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
        "This project was built for a friend. Not only that, it was to get comfortable with learning how to use different node packages.",
      skills: "JavaScript, NodeJS, AWS S3, Heroku",
      demo: "",
      github: "https://github.com/tommach591/LaprasBot",
    },
    {
      title: "Wizard",
      img: "https://i.imgur.com/jLGHK94.png",
      description:
        "A platformer game built on Unity and published on itch.io. Player must progress though each level, defeat each boss, and retrieve their stolen orbs.",
      details:
        "This project was the finals for my Intro Game Studies course at San Jose State University. I worked with a team of two software engineers and two artists. We would meet regularly to discuss features and gameplay mechanics to add to the game. The goal was not only to design an enjoyable game, but to also showcase the artist's work.",
      skills: "C#, Unity",
      demo: "https://narwaltz.itch.io/wizard",
      github: "",
    },
    {
      title: "Board Game Notes",
      img: "https://i.imgur.com/oYLQG4N.png",
      description:
        "A note taking web app for the board game, Awkward Guests. Removes the need of pencil and paper, providing more table space. Designed to be user friendly and accessible.",
      details:
        "This project introduced me to front end development. I implemented new features requested by the project owner and resolved issues. I learned a bit of React by reading the source code and playing around with it.",
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
        "This was a project for my Intro Game Studies course at San Jose State University. This game was designed to implement concepts discussed in class, such as challenges, motivation, appeal, etc.",
      skills: "C#, Unity",
      demo: "https://narwaltz.itch.io/cluck-cluck-corn-demo",
      github: "",
    },
    {
      title: "Tap Ping!",
      img: "https://i.imgur.com/DJBKFSj.png",
      description:
        "A mobile tapping game built on Unity and published on the Google Play Store. Tap Ping the Peregrine and save Ding the Duck! Get yourself a new high score!",
      details:
        "First project using Unity and C#. Learned how to create my own game, export onto mobile devices, and even implement ads.",
      skills: "C#, Unity",
      demo: "https://play.google.com/store/apps/details?id=com.Narwaltz.TapPing&hl=en_US&gl=US",
      github: "",
    },
  ];
}
