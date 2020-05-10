import { isMobile } from "react-device-detect";
import { fadeDuration } from "./constants";
import { isBrowser } from "react-device-detect";
import shuffle from "lodash.shuffle";
import {
  BACKGROUNDS,
  MOBILE_BACKGROUNDS,
  NUMBER_OF_IMAGES,
  DESKTOP_IMAGE_PATH,
  MOBILE_IMAGE_PATH,
  SPOTIFY_PLAYLISTS,
  FORMSPREE_URL,
} from "./constants";

export const getFadeDuration = () => (isMobile ? 0 : fadeDuration);

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
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
