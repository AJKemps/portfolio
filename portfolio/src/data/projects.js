import songestions from '../videos/SongestionsDemo_comp.mov';
import GOL from '../videos/GOLDemo_comp.mov';
import rekit from '../videos/RekitDemo_comp.mov';
import server from '../videos/ServerDemo_comp.mov';
import ss from '../videos/StorySquad.mov';

const Data = [
  {
    key: 4,
    name: 'Story Squad',
    tech: ['react', 'recoil', 'Node', 'AWS S3', 'Multer', 'Okta'],
    img: ss,
    about:
      'Turning reluctant readers into authors and illustrators through a collaborative world-building game.',
    deployed: 'https://c.storysquad.dev/',
    github: 'https://github.com/AJKemps/story-squad-fe-c',
    bullets: [
      'UGC moderation and scoring via DS model',
      'AWS S3 Buckets for UGC storage',
      'Okta auth integration',
    ],
  },
  {
    key: 3,
    name: 'Songestions',
    tech: ['react', 'redux', 'node', 'APIs', 'react router'],
    img: songestions,
    about: 'Song recommendations based on your favorites from Spotify.',
    deployed: 'https://songestions.herokuapp.com/',
    github: 'https://github.com/BW-Spotify-Song-Suggester-3/front-end',
    bullets: [
      'Complex state management via Redux',
      'Recommendations powered by ML model',
      'Integration with Spotify API',
    ],
  },
  {
    key: 2,
    name: 'ReKit',
    tech: ['react', 'mustache', 'next', 'UI/UX'],
    img: rekit,
    about:
      'A React component framework aggregator and graphical user interface.',
    deployed: 'https://rekit-v1-mana.vercel.app/app/uikit/button',
    github: 'https://github.com/WWCHackathon/MANA',
    bullets: [
      'Winner of Austin Women Who Code Hackathon',
      'Interact with components on the fly',
      'One-click copy',
    ],
  },
  {
    key: 1,
    name: 'Songestions Backend',
    tech: ['express', 'node', 'APIs', 'PostgreSQL', 'Testing'],
    img: server,
    about: 'Database and API to support Songestions frontend.',
    deployed: 'https://documenter.getpostman.com/view/12196465/TVCY5XGe',
    github: 'https://github.com/bw-spotify-song/backend',
    bullets: [
      'Auth and data validation middleware',
      'Unit and end-to-end testing',
      'Full CRUD functionality',
    ],
  },
  {
    key: 0,
    name: "Conway's Game of Life",
    tech: ['react', 'Algorithms', 'Computer Science'],
    img: GOL,
    about:
      'An exploration of computer science concepts through cellular automation.',
    deployed: 'https://ajkemps-gol.herokuapp.com/',
    github: 'https://github.com/AJKemps/CS-Build-Week-1',
    bullets: [
      'Algorithm dictating cell life and death',
      'Engaging user interaction',
    ],
  },
];

export default Data;
