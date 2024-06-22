import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BallotIcon from "@mui/icons-material/Ballot";
import BiotechIcon from "@mui/icons-material/Biotech";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SchoolIcon from "@mui/icons-material/School";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Link {
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  activeDuringWorkHours: boolean;
}

export const links: Link[] = [
  {
    title: "Proton Mail",
    link: "https://mail.proton.me/",
    icon: EmailIcon,
    activeDuringWorkHours: false,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: AccountCircleIcon,
    activeDuringWorkHours: false,
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com",
    icon: YouTubeIcon,
    activeDuringWorkHours: false,
  },
  {
    title: "Innsida NTNU",
    link: "https://innsida.ntnu.no/",
    icon: BallotIcon,
    activeDuringWorkHours: true,
  },
  {
    title: "Blackboard",
    link: "https://ntnu.blackboard.com/",
    icon: SchoolIcon,
    activeDuringWorkHours: true,
  },
  {
    title: "Outlook NTNU",
    link: "https://outlook.office.com/mail/",
    icon: AlternateEmailIcon,
    activeDuringWorkHours: true,
  },
  {
    title: "GitHub",
    link: "https://github.com",
    icon: GitHubIcon,
    activeDuringWorkHours: true,
  },
  {
    title: "ChatGPT",
    link: "https://chat.openai.com",
    icon: ChatIcon,
    activeDuringWorkHours: true,
  },
  {
    title: "NRK",
    link: "https://www.nrk.no",
    icon: NewspaperIcon,
    activeDuringWorkHours: false,
  },
  {
    title: "ResearchGate",
    link: "https://www.researchgate.net",
    icon: BiotechIcon,
    activeDuringWorkHours: true,
  },
];
