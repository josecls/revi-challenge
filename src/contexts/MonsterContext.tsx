import { createContext, useContext, useState, type ReactNode } from "react";

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

  const addMonster = (monster: Monster) => setMonsters(prev => [...prev, monster]);

  return (
    <MonsterContext.Provider value={{ monsters, addMonster }}>
      {children}
    </MonsterContext.Provider>
  );
};

export const useMonsters = () => {
  const context = useContext(MonsterContext);
  if (!context) throw new Error("useMonsters must be used within a MonsterProvider");
  return context;
};
