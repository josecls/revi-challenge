import { Label } from '../ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { type MonsterAttributes } from '@/core/Monster';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// MonsterCardProps define crucial props to be used by the MonsterCard component
interface MonsterCardProps {
  monster: MonsterAttributes;
}

// MonsterCard defines the structure responsible for illustrating the monster attributes on both Monsters and Battlefield pages.
const MonsterCard = ({ monster }: MonsterCardProps) => {
  return (
    <Card className="w-[80%] md:w-[100%] text-black shadow-md hover:shadow-xl transition-all bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <CardHeader className="flex flex-col items-center gap-4">
        <Avatar className="w-20 h-20 border border-gray-300">
          <AvatarImage src={monster.image_url} />
          <AvatarFallback>{monster.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg font-semibold">{monster.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center text-center gap-2">
        <Label className="text-md">
          <strong>🗡️ Attack:</strong> {monster.attack}
        </Label>
        <Label className="text-md">
          <strong>🛡️ Defense:</strong> {monster.defense}
        </Label>
        <Label className="text-md">
          <strong>⚡ Speed:</strong> {monster.speed}
        </Label>
        <Label className="text-md">
          <strong>❤️ HP:</strong> {monster.hp}
        </Label>
      </CardContent>
    </Card>
  );
};

export default MonsterCard;
