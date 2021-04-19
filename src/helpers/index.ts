import {
  faInstagram,
  faFacebookSquare,
  faYoutube,
  faVimeo,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import work_1 from "assets/images/preview_works/work_1.jpg";
import work_2 from "assets/images/preview_works/work_2.jpg";
import work_3 from "assets/images/preview_works/work_3.jpg";
import work_4 from "assets/images/preview_works/work_4.jpg";
import work_5 from "assets/images/preview_works/work_4.jpg";

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

export const Portfolio = [
  {
    id: 1,
    name: "Canada",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: work_1,
  },
  {
    id: 2,
    name: "Frince",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: work_2,
  },
  {
    id: 3,
    name: "Italy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: work_3,
  },
  {
    id: 4,
    name: "Russia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: work_4,
  },
  {
    id: 5,
    name: "Germany",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: work_4,
  },
];
