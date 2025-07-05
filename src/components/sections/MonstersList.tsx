import MonsterCard from './MonsterBattlePreview';

import { useMonsters } from '@/contexts/MonsterContext';

// MonstersList defines the structure responsible for listing monsters.
const MonstersList = () => {
  const { monsters } = useMonsters();

  return (
    <div className="py-15 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-12 lg:px-20 xl:px-32">
        {monsters.map((monster, index) => (
          <div key={index} className="min-w-0 w-full flex justify-center">
            <MonsterCard monster={monster} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonstersList;
