import { AvatarFallback } from '@radix-ui/react-avatar';

import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';

import { type MonsterAttributes } from '@/core/Monster';

// MonsterSelectionOptionProps define crucial props to be used by the MonsterSelectionOption component.
interface MonsterSelectionOptionProps {
  monster: MonsterAttributes;
  isSelectedAsA: boolean;
  isSelectedAsB: boolean;
  onClick: () => void;
}

// MonsterSelectionOption defines the structure responsible for rendering monster options in the battlefield page.
const MonsterSelectionOption = ({
  monster,
  isSelectedAsA,
  isSelectedAsB,
  onClick,
}: MonsterSelectionOptionProps) => {
  // regular border is gray, monster A is green and monster B is red.
  let borderColor = 'border-gray-300';
  if (isSelectedAsA) borderColor = 'border-green-400';
  else if (isSelectedAsB) borderColor = 'border-red-500';

  return (
    <Button className="mt-13 p-0 bg-transparent hover:bg-transparent" onClick={onClick}>
      <HoverCard>
        <HoverCardTrigger className="cursor-pointer">
          <Avatar
            className={`w-16 h-16 md:w-20 md:h-20 border-4 ${borderColor} flex flex-col align-center justify-center`}
          >
            <AvatarImage src={monster.image_url} alt="Monster Avatar" className="w-full h-full" />
            <AvatarFallback>{monster.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-40 p-4 bg-white shadow-md">
          <h2 className="text-lg font-bold font-[fredoka] mb-2">{monster.name}</h2>
          <p>🗡️ Attack: {monster.attack}</p>
          <p>🛡️ Defense: {monster.defense}</p>
          <p>⚡ Speed: {monster.speed}</p>
          <p>❤️ HP: {monster.hp}</p>
        </HoverCardContent>
      </HoverCard>
    </Button>
  );
};

export default MonsterSelectionOption;
