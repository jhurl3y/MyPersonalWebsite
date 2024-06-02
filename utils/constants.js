import Python from "../public/static/assets/icons/python.svg";
import Ruby from "../public/static/assets/icons/ruby.svg";
import Javascript from "../public/static/assets/icons/javascript.svg";
import WebDev from "../public/static/assets/icons/web_dev.svg";
import Java from "../public/static/assets/icons/java.svg";
import Git from "../public/static/assets/icons/git.svg";
import Algorithms from "../public/static/assets/icons/algorithms.svg";
import Mobile from "../public/static/assets/icons/mobile.svg";
import ABTesting from "../public/static/assets/icons/a_b_testing.svg";
import SQL from "../public/static/assets/icons/sql.svg";
import SystemDesign from "../public/static/assets/icons/system_design.svg";
import Testing from "../public/static/assets/icons/testing.svg";
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
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
];

export const MOBILE_BACKGROUNDS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
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

export const MAP_ZOOM_GARMIN = 14;

export const LOCATIONS = [
  {
    name: "galway",
    lat: 53.27,
    lng: -9.057,
  },
  {
    name: "dublin",
    lat: 53.35,
    lng: -6.26,
  },
  {
    name: "sf",
    lat: 37.8,
    lng: -122.42,
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
    color: "#ffe11b",
    type: "work",
    date: experienceStrings.surveymonkeyMLDate,
    title: experienceStrings.surveymonkeyMLTitle,
    location: experienceStrings.surveymonkeyMLLocation,
    tasks: experienceStrings.surveymonkeyMLTasks,
    skills: experienceStrings.surveymonkeyMLSkills,
  },
  {
    color: "#00BF6F",
    type: "work",
    date: experienceStrings.surveymonkeyGrowthDate,
    title: experienceStrings.surveymonkeyGrowthTitle,
    location: experienceStrings.surveymonkeyGrowthLocation,
    tasks: experienceStrings.surveymonkeyGrowthTasks,
    skills: experienceStrings.surveymonkeyGrowthSkills,
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

export const fadeDuration = 300;

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
  red: "#d92e3c",
  orange: "#eb9a0e",
  green: "#29941f",
  polyline: "#ff2527",
};

export const POLYLINE_OPACITY = 0.75;

export const POLYLINE_WEIGHT = 2;

export const FORMSPREE_URL = "https://formspree.io";

export const GARMIN_API_DEV = "https://api.dev.jameshurley.ie";
// export const GARMIN_API_DEV = "http://127.0.0.1:8000";

export const GARMIN_API_PROD = "https://api.jameshurley.ie";

export const ALLOWED_SUMMARY_STATS = [
  "totalKilocalories",
  "totalSteps",
  "totalDistanceMeters",
  "floorsAscended",
  "floorsDescended",
  "minHeartRate",
  "maxHeartRate",
  "restingHeartRate",
  "lastSevenDaysAvgRestingHeartRate",
];

export const ALLOWED_ACTIVITY_STATS = [
  "activityName",
  "startTimeGMT",
  "distance",
  "duration",
  "averageSpeed",
  "maxSpeed",
  "startLatitude",
  "startLongitude",
  "calories",
  "averageHR",
  "maxHR",
  "steps",
  "avgStrideLength",
  "minElevation",
  "maxElevation",
];

export const SUMMARY_PIE_POSITION = 70;

export const SUMMARY_PIE_ANGLE = 18;

export const SUMMARY_PIE_LINE_WIDTH = 20;

export const SUMMARY_PIE_RADIUS = 30;
