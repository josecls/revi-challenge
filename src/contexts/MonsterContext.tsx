/* eslint-disable react-refresh/only-export-components */
// Ignoring this react-refresh rule because it only affects the development environment
// Ideally we would separate the components into their own files
// But for now, we will keep them together for simplicity (and having in mind that this project is not going to be maintained)

import { createContext, useContext, useState, type ReactNode } from 'react';

import { MonsterEntity, type MonsterAttributes } from '@/core/Monster';

// MonsterContextType defines the structure of the monster context.
type MonsterContextType = {
  monsters: MonsterEntity[];
  addMonster: (monster: MonsterAttributes) => void;
};

const MonsterContext = createContext<MonsterContextType | undefined>(undefined);

// MonsterProvider defines the monster provider wrapper.
export const MonsterProvider = ({ children }: { children: ReactNode }) => {
  const [monsters, setMonsters] = useState<MonsterEntity[]>([]);

  // addMonster uses monster attributes to create a monster entity
  const addMonster = (monster: MonsterAttributes) => {
    const newMonster = new MonsterEntity(
      monster.identifier,
      monster.name,
      monster.attack,
      monster.defense,
      monster.speed,
      monster.hp,
      monster.image_url,
    );

    setMonsters((prev) => [...prev, newMonster]);
  };

  return (
    <MonsterContext.Provider value={{ monsters, addMonster }}>{children}</MonsterContext.Provider>
  );
};

// useMonsters defines the hook used all across the platform to access the monsters data.
export const useMonsters = () => {
  const context = useContext(MonsterContext);
  if (!context) throw new Error('useMonsters must be used within a MonsterProvider');
  return context;
};
