import {
  faInstagram,
  faFacebookSquare,
  faYoutube,
  faVimeo,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export interface SocialsListInterface {
  name: string;
  link: string;
  iconName: IconDefinition;
}

export interface NavigationIntrface {
  url: string;
  name: string;
}

export const socials: SocialsListInterface[] = [
  {
    name: "instagram",
    link: "https://www.instagram.com/robraudsepp/",
    iconName: faInstagram,
  },
  {
    name: "facebook",
    link: "https://www.instagram.com/robraudsepp/",
    iconName: faFacebookSquare,
  },
  {
    name: "youtube",
    link: "https://www.instagram.com/robraudsepp/",
    iconName: faYoutube,
  },
  {
    name: "vimeo",
    link: "https://www.instagram.com/robraudsepp/",
    iconName: faVimeo,
  },
];

export const navigation: NavigationIntrface[] = [
  { url: "/", name: "Home" },
  { url: "/contacts", name: "Contacts" },
  { url: "/about", name: "About" },
  { url: "/works", name: "Works" },
];
