import { IProject } from "@/interfaces/portfolio";

export enum PortfolioCategories {
  ALL = "All",
  NODE = "NodeJS",
  REACT = "React",
  MERN = "MERN",
  HTML = "HTML",
}

const projectSet: IProject[] = [
  {
    id: 1,
    title: "Edutrak",
    category: PortfolioCategories.MERN,
    image: "/images/portfolio/edutrak.webp",
    link: "https://edutrak-student-progress-system.vercel.app/",
  },
  {
    id: 2,
    title: "News Admin",
    category: PortfolioCategories.REACT,
    image: "/images/portfolio/newsAdmin.webp",
    link: "https://newsadmin-frontend-2x66.vercel.app/",
  },
  {
    id: 3,
    title: "Media Player",
    category: PortfolioCategories.REACT,
    image: "/images/portfolio/mediaPlayer.webp",
    link: "https://mediaplayer-9qzdfqgl3-rahul-b-ps-projects.vercel.app/",
  },
  {
    id: 4,
    title: "e-Kart",
    category: PortfolioCategories.REACT,
    image: "/images/portfolio/eKart.webp",
    link: "https://e-kart-reduxtoolkit-demo.vercel.app/",
  },
  {
    id: 5,
    title: "Travel Website",
    category: PortfolioCategories.HTML,
    image: "/images/portfolio/trektrax.webp",
    link: "https://rahul-b-p.github.io/trektrax_travel_web_application/",
  },
  {
    id: 6,
    title: "Todo App",
    category: PortfolioCategories.NODE,
    image: "/images/portfolio/todo.webp",
    link: "https://todo-app-1-0-jbpi.onrender.com/",
  },
  {
    id: 7,
    title: "Attendance Management",
    category: PortfolioCategories.NODE,
    image: "/images/portfolio/punching.webp",
    link: "https://github.com/rahul-b-p/AttendanceManagementSystem-Punching",
  },
];

export default {
  title: "PORTFOLIO",
  subTitle: "A Showcase of My Development Skills and Solutions",
  projectSet,
};
