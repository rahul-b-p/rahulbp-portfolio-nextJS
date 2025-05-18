import { PortfolioCategories } from "@/constants/portfolio";

export interface IProject {
  id: number;
  title: string;
  category: PortfolioCategories;
  image: string;
  link: string;
}

export interface ProjectCardProps {
  project: IProject;
}


