/* eslint-disable react-refresh/only-export-components */
// Ignoring this react-refresh rule because it only affects the development environment
// Ideally we would separate the components into their own files
// But for now, we will keep them together for simplicity (and having in mind that this project is not going to be maintained)

import { createContext, useContext, useState, type ReactNode } from 'react';

export interface Monster {
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  image_url: string;
}

type MonsterContextType = {
  monsters: Monster[];
  addMonster: (monster: Monster) => void;
};

const MonsterContext = createContext<MonsterContextType | undefined>(undefined);

export const MonsterProvider = ({ children }: { children: ReactNode }) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  const addMonster = (monster: Monster) => setMonsters((prev) => [...prev, monster]);

  return (
    <MonsterContext.Provider value={{ monsters, addMonster }}>{children}</MonsterContext.Provider>
  );
};

export const useMonsters = () => {
  const context = useContext(MonsterContext);
  if (!context) throw new Error('useMonsters must be used within a MonsterProvider');
  return context;
};
