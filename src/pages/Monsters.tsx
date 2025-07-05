import MonstersList from '@/components/sections/MonstersList';
import MonstersHeader from '@/components/sections/MonstersHeader';
import NoMonstersFound from '@/components/sections/NoMonstersFound';
import { useMonsters } from '@/contexts/MonsterContext';

// Monsters define the Monsters listing page, where the user is able to create new monsters and see the ones he already created.
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
