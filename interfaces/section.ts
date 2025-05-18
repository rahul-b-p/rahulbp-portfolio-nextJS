import type { ReactNode } from "react";

export interface SectionProps {
  id: string;
  title: string;
  subTitle?: string;
  children: ReactNode;
  className?: string;
}
