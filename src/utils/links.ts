import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirIcon from "@mui/icons-material/Air";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BallotIcon from "@mui/icons-material/Ballot";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import EmailIcon from "@mui/icons-material/Email";
import FeedIcon from '@mui/icons-material/Feed';
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SchoolIcon from "@mui/icons-material/School";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface LinkObj {
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}

export const links: LinkObj[] = [
  {
    title: "Proton Mail",
    link: "https://mail.proton.me/",
    icon: EmailIcon,
  },
  {
    title: "Outlook Mail",
    link: "https://outlook.office.com/mail/",
    icon: AlternateEmailIcon,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: AccountCircleIcon,
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com",
    icon: YouTubeIcon,
  },
  {
    title: "Innsida NTNU",
    link: "https://innsida.ntnu.no/",
    icon: BallotIcon,
  },
  {
    title: "Blackboard",
    link: "https://ntnu.blackboard.com/",
    icon: SchoolIcon,
  },

  {
    title: "GitHub",
    link: "https://github.com",
    icon: GitHubIcon,
  },
  {
    title: "Adressa",
    link: "https://www.adressa.no",
    icon: FeedIcon,
  },
  {
    title: "NRK",
    link: "https://www.nrk.no",
    icon: NewspaperIcon,
  },
  {
    title: "Waking Up",
    link: "https://app.wakingup.com",
    icon: BrightnessMediumIcon,
  },

  {
    title: "Yr",
    link: "https://www.yr.no",
    icon: AirIcon,
  },
  {
    title: "Google Translate",
    link: "https://translate.google.no/",
    icon: GTranslateIcon,
  },
];
