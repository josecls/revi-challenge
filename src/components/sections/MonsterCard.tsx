import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

type Monster = {
  name: string;
  image_url: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
};

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard = ({ monster }: MonsterCardProps) => {
  return (
    <Card className="w-60 p-4 flex flex-col items-center text-center shadow-md transition-transform hover:scale-105 hover:shadow-xl rounded-xl bg-white">
      <img
        src={monster.image_url}
        alt={monster.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h2 className="text-xl font-bold font-[fredoka] mb-2">{monster.name}</h2>

      <div className="text-sm text-left w-full space-y-1 font-mono">
        <p>🗡️ Attack: {monster.attack}</p>
        <p>🛡️ Defense: {monster.defense}</p>
        <p>⚡ Speed: {monster.speed}</p>
        <p>❤️ HP: {monster.hp}</p>
      </div>

      <Progress value={monster.hp} max={300} className="w-full mt-3 h-2 bg-green-200" />
    </Card>
  );
}

export default MonsterCard;