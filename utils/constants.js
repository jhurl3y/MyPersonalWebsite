import Python from "../static/assets/icons/python.svg";
import Ruby from "../static/assets/icons/ruby.svg";
import Javascript from "../static/assets/icons/javascript.svg";
import WebDev from "../static/assets/icons/web_dev.svg";
import Java from "../static/assets/icons/java.svg";
import Git from "../static/assets/icons/git.svg";
import Algorithms from "../static/assets/icons/algorithms.svg";
import Mobile from "../static/assets/icons/mobile.svg";
import ABTesting from "../static/assets/icons/a_b_testing.svg";
import SQL from "../static/assets/icons/sql.svg";
import SystemDesign from "../static/assets/icons/system_design.svg";
import Testing from "../static/assets/icons/testing.svg";
import { skillStrings, experienceStrings } from "./strings";

export const PAGES = ["home", "about", "experience", "contact"];

export const BACKGROUNDS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  // "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
];

export const MOBILE_BACKGROUNDS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
];

export const FIRST_IMAGE_PATH = "/static/assets/images/first_image.jpg";

export const DESKTOP_IMAGE_PATH =
  "https://hurley-site-images.s3-eu-west-1.amazonaws.com/minified_new/desktop/";

export const MOBILE_IMAGE_PATH =
  "https://hurley-site-images.s3-eu-west-1.amazonaws.com/minified_new/mobile/";

export const NUMBER_OF_IMAGES = 6;

export const LEFT_KEY = 37;

export const RIGHT_KEY = 39;

export const MAP_ZOOM = 13;

export const LOCATIONS = [
  {
    name: "galway",
    lat: 53.27,
    long: -9.057,
  },
  {
    name: "dublin",
    lat: 53.35,
    long: -6.26,
  },
];

export const EMAIL = "jhurley070@gmail.com";

export const PHONE = "+35385-242-8831";

export const MAP_STYLES = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
];

export const SKILLS = [
  {
    name: "web_development",
    title: "Web Development",
    content: skillStrings.webDevelopment,
    icon: WebDev,
  },
  {
    name: "python",
    title: "Python",
    content: skillStrings.python,
    icon: Python,
  },
  {
    name: "javascript",
    title: "Javascript",
    content: skillStrings.javascript,
    icon: Javascript,
  },
  {
    name: "ruby",
    title: "Ruby",
    content: skillStrings.ruby,
    icon: Ruby,
  },
  {
    name: "java",
    title: "Java",
    content: skillStrings.java,
    icon: Java,
  },
  {
    name: "git",
    title: "Git",
    content: skillStrings.git,
    icon: Git,
  },
  {
    name: "mobile_development",
    title: "Mobile Development",
    content: skillStrings.mobile,
    icon: Mobile,
  },
  {
    name: "algorithms",
    title: "Algorithms & Data Structures",
    content: skillStrings.algorihtms,
    icon: Algorithms,
  },
  {
    name: "a_b_testing",
    title: "A/B Testing",
    content: skillStrings.abTesting,
    icon: ABTesting,
  },
  {
    name: "sql",
    title: "SQL",
    content: skillStrings.sql,
    icon: SQL,
  },
  {
    name: "system_design",
    title: "System Design",
    content: skillStrings.systemDesign,
    icon: SystemDesign,
  },
  {
    name: "testing",
    title: "Testing",
    content: skillStrings.testing,
    icon: Testing,
  },
];

export const experience = [
  {
    color: "#00BF6F",
    type: "work",
    date: experienceStrings.surveymonkeyDate,
    title: experienceStrings.surveymonkeyTitle,
    location: experienceStrings.surveymonkeyLocation,
    tasks: experienceStrings.surveymonkeyTasks,
    skills: experienceStrings.surveymonkeySkills,
  },
  {
    color: "#daad58",
    type: "work",
    date: experienceStrings.exordoDate,
    title: experienceStrings.exordoTitle,
    location: experienceStrings.exordoLocation,
    tasks: experienceStrings.exordoTasks,
    skills: experienceStrings.exordoSkills,
  },
  {
    color: "#a34a88",
    type: "school",
    date: experienceStrings.nuigDate,
    title: experienceStrings.nuigTitle,
    location: experienceStrings.nuigLocation,
    tasks: experienceStrings.nuigTasks,
  },
  {
    color: "#253B80",
    type: "school",
    date: experienceStrings.yeatsDate,
    title: experienceStrings.yeatsTitle,
    location: experienceStrings.yeatsLocation,
    tasks: experienceStrings.yeatsTasks,
  },
];

export const fadeDuration = 500;

export const SPOTIFY_PLAYLISTS = [
  "https://open.spotify.com/embed/playlist/37i9dQZF1EpAh9wBJPJbF3",
  "https://open.spotify.com/embed/playlist/37i9dQZF1EtkB4R6IdSwy2",
  "https://open.spotify.com/embed/playlist/37i9dQZEVXcCRutUm5lf69",
];

export const WIDGET_HEIGHT = 450;

export const TRANSITION_DURATION = 300;

export const IMAGE_TRANSITION_DURATION = 0.65;

export const COLORS = {
  white: "#fff",
  black: "#000",
  blue: "#5674fe",
  purple: "#8d39ea",
  grey: "#f1f1f1",
  darkBlue: "#556cd6",
  darkGrey: "#888888",
  lightBlue: "#2194f3",
  mediumGrey: "#a5a5a5",
};

export const FORMSPREE_URL = "https://formspree.io";

export const GARMIN_API_DEV = "https://api.dev.jameshurley.ie";

export const GARMIN_API_PROD = "https://api.jameshurley.ie";
