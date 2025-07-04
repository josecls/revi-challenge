// MonsterSelectionList.tsx
import { ScrollArea } from '../ui/scroll-area';

import MonsterSelectionOption from './MonsterSelectionOption';

import { type MonsterAttributes, type Monster, MonsterEntity } from '@/core/Monster';

interface MonsterSelectionListProps {
  monsters: MonsterAttributes[];
  selectedA: Monster | null;
  selectedB: Monster | null;
  onSelect: (monster: MonsterEntity) => void;
}

const MonsterSelectionList = ({
  monsters,
  selectedA,
  selectedB,
  onSelect,
}: MonsterSelectionListProps) => {
  return (
    <div className="w-[80%] h-90 md:w-100 md:h-90 bg-gray-200 rounded shadow flex flex-col items-center">
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
