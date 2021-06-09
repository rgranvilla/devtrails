import { createContext, ReactNode, useContext, useState } from 'react';

type BurgerContextInterface = {
  isOpen: boolean;
  handleSwitch: () => void;
};

type BurgerContextProviderProps = {
  children: ReactNode;
};

export const BurgerContext = createContext({} as BurgerContextInterface);

export function BurgerContextProvider({
  children
}: BurgerContextProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function handleSwitch() {
    setIsOpen(!isOpen);
  }

  return (
    <BurgerContext.Provider
      value={{
        isOpen,
        handleSwitch
      }}
    >
      {children}
    </BurgerContext.Provider>
  );
}

export const useBurger = (): BurgerContextInterface => {
  return useContext(BurgerContext);
};
