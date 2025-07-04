import MonstersList from '@/components/sections/MonstersList';
import MonstersHeader from '@/components/sections/MonstersHeader';
import NoMonstersFound from '@/components/sections/NoMonstersFound';
import { useMonsters } from '@/contexts/MonsterContext';

const Monsters = () => {
  const { monsters } = useMonsters();

  return (
    <div className="w-full">
      <main className="w-full">
        <MonstersHeader />
        <MonstersList />
        {monsters.length === 0 && <NoMonstersFound />}
      </main>
    </div>
  );
};

export default Monsters;
