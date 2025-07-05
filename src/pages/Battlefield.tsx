import { toast } from 'sonner';
import { useState, useEffect, useRef } from 'react';

import { BattlefieldEntity } from '@/core/Battlefield';
import MonsterCard from '@/components/sections/MonsterCard';
import { Button } from '@/components/ui/button';
import MonsterSelectionList from '@/components/sections/MonsterSelectionList';
import { useMonsters } from '@/contexts/MonsterContext';
import { MonsterEntity } from '@/core/Monster';
import NoMonstersFound from '@/components/sections/NoMonstersFound';

// Battlefield defines the page where the action happens, i.e. the page where users can create and watch monsters battle.
const Battlefield = () => {
  const [selectedMonsterA, setSelectedMonsterA] = useState<MonsterEntity | null>(null);
  const [selectedMonsterB, setSelectedMonsterB] = useState<MonsterEntity | null>(null);
  const [fightLogs, setFightLogs] = useState<string[]>([]);
  const [isFightOnGoing, setIsFightOnGoing] = useState(false);

  const { monsters } = useMonsters();

  // handleFight is responsible for triggering and managing the monsters fight.
  const handleFight = async () => {
    if (!selectedMonsterA || !selectedMonsterB) return;

    setFightLogs([]);

    const logger = (msg: string) => {
      setFightLogs((previousLogs) => [...previousLogs, msg]);
    };

    // set the fight as ongoing and create the battlefield
    setIsFightOnGoing(true);
    const battlefield = new BattlefieldEntity(selectedMonsterA, selectedMonsterB, logger);
    await battlefield.startBattle();

    const winner = battlefield.determineWinner();
    if (winner) {
      toast.info(`The battle has ended. The winner is ${winner.name}! 🏆`);
    }
    setIsFightOnGoing(false);
    return;
  };

  // handleMonsterSelect is responsible for managing the selection of monsters.
  const handleMonsterSelect = (monster: MonsterEntity) => {
    if (isFightOnGoing) {
      toast.info('A fight is currently in progress. Please wait until it finishes.');
      return;
    }

    if (selectedMonsterA?.identifier === monster.identifier) {
      setSelectedMonsterA(null);
    } else if (selectedMonsterB?.identifier === monster.identifier) {
      setSelectedMonsterB(null);
    } else if (!selectedMonsterA) {
      setSelectedMonsterA(monster);
    } else if (!selectedMonsterB) {
      setSelectedMonsterB(monster);
    }
  };

  // manages the automatic scroll whenever the fight starts
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fightLogs]);

  return (
    <>
      {monsters.length > 0 ? (
        <main className="mt-20 md:mt-40 px-4 sm:px-6 lg:px-8 flex flex-col w-full">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold font-[fredoka] text-[#674AA3] md:text-left mb-20">
            Welcome to the Battlefield
          </h1>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* LEFT SIDE - Monster Selection */}
            <div className="flex flex-col justify-start">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Monsters selection</h2>
              <h4 className="text-sm text-gray-700 mb-8">
                Hover over the monster's avatar to see its attributes
              </h4>
              <MonsterSelectionList
                monsters={monsters}
                selectedA={selectedMonsterA}
                selectedB={selectedMonsterB}
                onSelect={handleMonsterSelect}
              />
            </div>

            {/* RIGHT SIDE - Selected Cards + Logs */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-gray-700">Summary</h2>
              <h4 className="text-sm text-gray-700">
                See attribute changes in real time during the fight
              </h4>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white shadow p-5 w-full h-full border border-gray-200 rounded">
                {selectedMonsterA && <MonsterCard monster={selectedMonsterA} />}
                <div className="flex flex-col justify-center gap-4">
                  {selectedMonsterA && selectedMonsterB && (
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-2xl font-bold py-3 px-8 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                      onClick={handleFight}
                    >
                      Fight!
                    </Button>
                  )}
                </div>
                {selectedMonsterB && <MonsterCard monster={selectedMonsterB} />}
              </div>

              <h2 className="text-xl font-semibold text-gray-700">Battle Logs</h2>
              <h4 className="text-sm text-gray-700">Get track of every single thing</h4>
              <div className="w-full h-150 sm:h-200 bg-white rounded shadow p-4 overflow-y-auto border border-gray-200 rounded">
                <p className="text-sm font-mono">🔪 Battle is about to start...</p>
                {fightLogs.map((log, index) => (
                  <p key={index} className="text-sm font-mono">
                    {log}
                  </p>
                ))}
                <div ref={bottomRef} />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <NoMonstersFound />
      )}
    </>
  );
};

export default Battlefield;
