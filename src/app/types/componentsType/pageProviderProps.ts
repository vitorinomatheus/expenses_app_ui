import { ReactNode } from "react";

export default interface PageProviderProps {
    children: ReactNode;
    initialPageName?: string;
  }