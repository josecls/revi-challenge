// Battlefield.tsx
import { useState } from 'react';

import MonsterCard from '@/components/sections/MonsterBattlePreview';
import { Button } from '@/components/ui/button';
import MonsterSelectionList from '@/components/sections/MonsterSelectionList';
import { MonsterEntity } from '@/core/Monster';
import { useMonsters } from '@/contexts/MonsterContext';

// const generateMonsters = () => Array.from({ length: 15 }, (_, i) => new MonsterEntity(`Monster ${i}`, 1, 2, 3, 50, 'https://avatars.githubusercontent.com/u/124599?v=4'));

const Battlefield = () => {
  const [selectedMonsterA, setSelectedMonsterA] = useState<MonsterEntity | null>(null);
  const [selectedMonsterB, setSelectedMonsterB] = useState<MonsterEntity | null>(null);

  const { monsters } = useMonsters();

  const handleMonsterSelect = (monster: MonsterEntity) => {
    if (selectedMonsterA?.name === monster.name) {
      setSelectedMonsterA(null);
    } else if (selectedMonsterB?.name === monster.name) {
      setSelectedMonsterB(null);
    } else if (!selectedMonsterA) {
      setSelectedMonsterA(monster);
    } else if (!selectedMonsterB) {
      setSelectedMonsterB(monster);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="mt-20 md:mt-40 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-[fredoka] font-bold text-purple-700 mb-20">
          Welcome to the Battlefield
        </h1>

        <div className="flex flex-wrap gap-8">
          <MonsterSelectionList
            monsters={monsters}
            selectedA={selectedMonsterA}
            selectedB={selectedMonsterB}
            onSelect={handleMonsterSelect}
          />

          {selectedMonsterA && <MonsterCard monster={selectedMonsterA} />}

          <div className="flex flex-col justify-center gap-4">
            <Button className="bg-red-700 text-white cursor-pointer">Fight</Button>
            <Button variant="outline" className="bg-blue-700 text-white cursor-pointer">
              Change Map
            </Button>
            <Button variant="destructive" className="bg-yellow-700 text-white cursor-pointer">
              Retreat
            </Button>
          </div>

          {selectedMonsterB && <MonsterCard monster={selectedMonsterB} />}

          <MonsterSelectionList
            monsters={monsters}
            selectedA={selectedMonsterA}
            selectedB={selectedMonsterB}
            onSelect={handleMonsterSelect}
          />
        </div>

        <div className="mt-10 w-full h-56 bg-gray-200 rounded shadow p-4 overflow-y-auto">
          <p className="text-sm font-mono">🔪 Battle begins...</p>
        </div>
      </main>
    </div>
  );
};

export default Battlefield;
