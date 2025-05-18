import {
  Download,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export type SocialIcon =
  | typeof Twitter
  | typeof Facebook
  | typeof Instagram
  | typeof Linkedin
  | typeof Github
  | typeof Download;

export interface ISocialIcon {
  icon: SocialIcon;
  href: string;
  size?: number;
  color?: string;
}
