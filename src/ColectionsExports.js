import washington from "./images/Washington.png";
import sanfer from "./images/SANFERNANDO.png";
import santodom from "./images/santodomingo.png";
import ipef from "./images/IPEF.png";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";

export const pagesForNav = [
  {
    title: "Washington",
    image: washington,
    route: "/Washington",
  },
  {
    title: "SAN FERNANDO",
    image: sanfer,
    route: "/sanfer",
  },
  {
    title: "SANTO DOMINGO",
    image: santodom,
    route: "/santodom",
  },
  {
    title: "IPEF",
    image: ipef,
    route: "/Ipef",
  },
];

export const pagesForSide = [
  {
    text: "Washington",
    icon: <InboxIcon sx={{ color: "white" }}></InboxIcon>,
    route: "/Washington",
    subPages: [
      {
        text: "Washington",
        icon: <DraftsIcon sx={{ color: "white" }}></DraftsIcon>,
        route: "/Washington",
      },
      {
        text: "Washington",
        icon: <SendIcon sx={{ color: "white" }}></SendIcon>,
        route: "/Washington",
      },
    ],
  },
  {
    text: "SAN FERNANDO",
    icon: <StarBorder sx={{ color: "white" }}></StarBorder>,
    route: "/sanfer",
  },
  {
    text: "SANTO DOMINGO",
    icon: <StarBorder sx={{ color: "white" }}></StarBorder>,
    route: "/santodom",
  },
  {
    text: "IPEF",
    icon: <StarBorder sx={{ color: "white" }}></StarBorder>,
    route: "/Ipef",
  },
];

export const rightButtons = [{ text: "LOGIN" }];
