import { isBrowser } from "react-device-detect";
import { fadeDuration } from "./constants";
import shuffle from "lodash.shuffle";
import {
  BACKGROUNDS,
  MOBILE_BACKGROUNDS,
  NUMBER_OF_IMAGES,
  DESKTOP_IMAGE_PATH,
  MOBILE_IMAGE_PATH,
  SPOTIFY_PLAYLISTS,
  FORMSPREE_URL,
  GARMIN_API_DEV,
  GARMIN_API_PROD,
} from "./constants";

export const getFadeDuration = () => fadeDuration;

export const getBackground = async (backgroundUrl) => {
  const response = await fetch(backgroundUrl);
  const image = await response.blob();
  return URL.createObjectURL(image);
};

export const getSpotifyPlaylist = () => shuffle(SPOTIFY_PLAYLISTS)[0];

export const getBackgroundUrls = () =>
  isBrowser
    ? shuffle(BACKGROUNDS)
        .slice(0, NUMBER_OF_IMAGES)
        .map((background) => `${DESKTOP_IMAGE_PATH}${background}.jpg`)
    : shuffle(MOBILE_BACKGROUNDS).map(
        (background) => `${MOBILE_IMAGE_PATH}${background}.jpg`
      );

export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const getFormspreeUrl = () => {
  const tokens = process.env.FORMSPREE_TOKENS;
  const token = shuffle(tokens.split(","))[0];

  return `${FORMSPREE_URL}/${token}`;
};

export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  const m = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const fetchGarmin = async (path, params = {}) => {
  const url = new URL(
    process.env.STAGE !== "prod"
      ? `${GARMIN_API_DEV}/${path}`
      : `${GARMIN_API_PROD}/${path}`
  );
  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url);
  return await response.json();
};

export const filterObject = (data, allowList) => {
  return Object.keys(data)
    .filter((key) => allowList.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: data[key],
      };
    }, {});
};
