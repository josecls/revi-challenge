// MonsterSelectionList.tsx
import { ScrollArea } from '../ui/scroll-area';

import MonsterSelectionOption from './MonsterSelectionOption';

import { type MonsterAttributes, type Monster, MonsterEntity } from '@/core/Monster';

// MonsterSelectionListProps define crucial props to be used by the MonsterSelectionList component.
interface MonsterSelectionListProps {
  monsters: MonsterAttributes[];
  selectedA: Monster | null;
  selectedB: Monster | null;
  onSelect: (monster: MonsterEntity) => void;
}

// MonsterSelectionList is responsible for listing monster options in the battlefield page, so the user can select which ones are going to fight.
const MonsterSelectionList = ({
  monsters,
  selectedA,
  selectedB,
  onSelect,
}: MonsterSelectionListProps) => {
  return (
    <div className="w-full h-full bg-gray-200 rounded shadow flex flex-col">
      <ScrollArea className="h-96 p-4 overflow-y-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {monsters.length > 0 &&
            monsters.map((monster, index) => (
              <MonsterSelectionOption
                key={index}
                monster={monster}
                isSelectedAsA={selectedA?.name === monster.name}
                isSelectedAsB={selectedB?.name === monster.name}
                onClick={() =>
                  onSelect(
                    new MonsterEntity(
                      monster.name,
                      monster.attack,
                      monster.defense,
                      monster.speed,
                      monster.hp,
                      monster.image_url,
                    ),
                  )
                }
              />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MonsterSelectionList;
