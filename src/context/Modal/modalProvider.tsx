import React, { createContext, useState, useContext, ReactElement } from 'react';

interface ModalContextData {
  mountedModal: boolean;
  setMountedModal: (param: boolean) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

interface IModalProviderProps {
  children: React.ReactNode
}

export function ModalProvider({ children }: IModalProviderProps) {
  const [mountedModal, setMountedModal] = useState(!false);

  return (
    <ModalContext.Provider value={{ mountedModal, setMountedModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};