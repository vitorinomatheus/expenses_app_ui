'use client'

import { createContext, useContext, ReactNode, useState } from 'react';
import PageProviderProps from '../types/componentsType/pageProviderProps';
import PageContextType from '../types/componentsType/pageContextType';

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children, initialPageName = 'INÍCIO' }: PageProviderProps) {
  const [pageName, setPageName] = useState(initialPageName);

  return (
    <PageContext.Provider value={{ pageName, setPageName }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
}