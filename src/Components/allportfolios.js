import port1 from "../img/portImages/VHIapp.jpg";
import port2 from "../img/portImages/force2.png";
import port3 from "../img/portImages/maps.jpg";
import port4 from "../img/portImages/gword.png";
import port6 from "../img/portImages/portfolio.jpg";
import port7 from "../img/portImages/Home.JPG";
import port8 from "../img/portImages/Photon.jpg";

const portfolios = [
  {
    id: 1,
    category: "React Native+ Node Js",
    link1: "https://github.com/Barrylimarti/VHIapp",
    icon1: "GitHub",
    image: port1,
    title: "VHIapp",
    para: "A react-native application that stores image and documents with Login/Signup facilities. Backend is configured with Node.js and MongoDB.",
  },
  {
    id: 2,
    category: "Python/Flask",
    link1: "https://github.com/Barrylimarti/WebCrawler",
    icon1: "GitHub",
    image: port2,
    title: "Page Rank Visualization",
    para: "This is a set of programs that emulate some of the functions of a search engine. They store their data in a SQLITE3 database named 'spider.sqlite'. This file can be removed at any time to restart the process.",
  },
  {
    id: 3,
    category: "React Native",
    link1: "https://github.com/Barrylimarti/ReactNativeMapsScreen",
    icon1: "GitHub",
    image: port3,
    title: "Google Map Integration",
    para: "A react native screen made with react-native-maps to show a prototype for a real-estate application.",
  },
  {
    id: 4,
    category: "Python/Flask",
    link1: "https://github.com/Barrylimarti/BlockchainWithPython",
    icon1: "GitHub",
    image: port8,
    title: "Blockchain & Cryptocurrency Implementation",
    para: "An implementation of blockchain and cryptocurrency with the help of flask, HTML, CSS and JavaScript.",
  },
  {
    id: 5,
    category: "React Js",
    link1: "",
    icon1: "GitHub",
    image: port6,
    title: "Personal Portfolio",
    para: "The one where you are now. Made with ReactJS.",
  },
  {
    id: 6,
    category: "React Js+Node Js",
    link1: "https://github.com/Barrylimarti/MERN_auth_app",
    icon1: "GitHub",
    image: port7,
    title: "Basic Authentication App(Redux)",
    para: "Minimal full-stack MERN app with authentication using passport and JWTs.",
  },
  {
    id: 7,
    category: "Python/Flask",
    link1: "https://github.com/Barrylimarti/WebCrawler",
    icon1: "GitHub",
    image: port4,
    title: "Gmane Email Archive Visualization",
    para: "Mining the Gmane archive to visualize the authorization sending the mail.",
  },
];

export default portfolios;
