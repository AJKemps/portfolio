import songestions from "../videos/SongestionsDemo.mp4";
import GOL from "../videos/GOLDemo.mp4";
import rekit from "../videos/RekitDemo.mp4";
import server from "../videos/ServerDemo.mp4";

const Data = [
  {
    name: "Songestions",
    tech: ["react", "redux", "node", "APIs", "react router"],
    img: songestions,
    about: "Song recommendations based on your favorites from Spotify.",
    deployed: "https://songestions.herokuapp.com/",
    github: "https://github.com/BW-Spotify-Song-Suggester-3/front-end",
    bullets: [
      "Recommendations powered by ML model",
      "Integration with Spotify API",
      "Recommendations based on mood",
    ],
  },
  {
    name: "ReKit",
    tech: ["react", "mustache", "next", "UI/UX"],
    img: rekit,
    about:
      "A React component framework aggregator and graphical user interface.",
    deployed: "https://rekit-v1-mana.vercel.app/app/uikit/button",
    github: "https://github.com/WWCHackathon/MANA",
    bullets: [
      "Winner of Austin Women Who Code Hackathon",
      "Interact with components on the fly",
      "One-click copy",
    ],
  },
  {
    name: "Songestions Backend",
    tech: ["express", "node", "APIs", "PostgreSQL", "Testing"],
    img: server,
    about: "Database and API to support Songestions frontend.",
    deployed: "https://documenter.getpostman.com/view/12196465/TVCY5XGe",
    github: "https://github.com/bw-spotify-song/backend",
    bullets: [
      "Auth and data validation middleware",
      "Unit and end-to-end testing",
      "Full CRUD functionality",
    ],
  },
  {
    name: "Conway's Game of Life",
    tech: ["react", "Algorithms", "Computer Science"],
    img: GOL,
    about:
      "An exploration of computer science concepts through cellular automation.",
    deployed: "https://ajkemps-gol.herokuapp.com/",
    github: "https://github.com/AJKemps/CS-Build-Week-1",
    bullets: [
      "Algorithm dictating cell life and death",
      "Engaging user interaction",
    ],
  },
];

export default Data;
