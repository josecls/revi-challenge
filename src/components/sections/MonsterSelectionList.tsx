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
    <div className="w-full h-full bg-white rounded shadow flex flex-col border border-gray-200 rounded">
      <ScrollArea className="h-96 lg:h-200 p-4 overflow-y-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {monsters.length > 0 &&
            monsters.map((monster) => (
              <MonsterSelectionOption
                key={monster.identifier}
                monster={monster}
                isSelectedAsA={selectedA?.identifier === monster.identifier}
                isSelectedAsB={selectedB?.identifier === monster.identifier}
                onClick={() =>
                  onSelect(
                    new MonsterEntity(
                      monster.identifier,
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
