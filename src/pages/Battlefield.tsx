// Battlefield.tsx
import { toast } from 'sonner';
import { useState, useEffect, useRef } from 'react';

import MonsterCard from '@/components/sections/MonsterBattlePreview';
import { Button } from '@/components/ui/button';
import MonsterSelectionList from '@/components/sections/MonsterSelectionList';
import { MonsterEntity } from '@/core/Monster';
import { BattlefieldEntity } from '@/core/Battlefield';
import { useMonsters } from '@/contexts/MonsterContext';

const Battlefield = () => {
  const [selectedMonsterA, setSelectedMonsterA] = useState<MonsterEntity | null>(null);
  const [selectedMonsterB, setSelectedMonsterB] = useState<MonsterEntity | null>(null);
  const [fightLogs, setFightLogs] = useState<string[]>([]);

  const { monsters } = useMonsters();

  const handleFight = async () => {
    if (!selectedMonsterA || !selectedMonsterB) return;

    setFightLogs([]);

    const logger = (msg: string) => {
      setFightLogs((previousLogs) => [...previousLogs, msg]);
    };

    const battlefield = new BattlefieldEntity(selectedMonsterA, selectedMonsterB, logger);
    await battlefield.startBattle();

    const winner = battlefield.determineWinner();
    if (winner) {
      toast.info(`The battle has ended. The winner is ${winner.name}! 🏆`);
    }
    return;
  };

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

  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fightLogs]);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="mt-20 md:mt-40 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[fredoka] font-bold text-purple-700 mb-10 text-center">
          Welcome to the Battlefield
        </h1>

        <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center w-full">
          <MonsterSelectionList
            monsters={monsters}
            selectedA={selectedMonsterA}
            selectedB={selectedMonsterB}
            onSelect={handleMonsterSelect}
          />

          {selectedMonsterA && <MonsterCard monster={selectedMonsterA} />}

          <div className="flex flex-col justify-center gap-4">
            <Button className="bg-red-700 text-white cursor-pointer" onClick={handleFight}>
              Fight
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

        <div className="mt-10 w-full max-w-5xl h-96 sm:h-140 bg-gray-200 rounded shadow p-4 overflow-y-auto">
          <p className="text-sm font-mono">🔪 Battle is about to start...</p>
          {fightLogs.map((log, index) => (
            <p key={index} className="text-sm font-mono">
              {log}
            </p>
          ))}
          <div ref={bottomRef} />
        </div>
      </main>
    </div>
  );
};

export default Battlefield;
