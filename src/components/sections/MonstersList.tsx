
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMonsters } from "@/contexts/MonsterContext";
import { useEffect } from "react";

function MonstersList() {
  const { monsters } = useMonsters();

  useEffect(() => {
    console.log(monsters)
  }, [monsters]);

  return (
    <div className="py-15 bg-white flex flex-col justify-evenly">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-12 lg:px-20 xl:px-32">
        {monsters.map((monster, index) => (
          <Card key={index} className="w-full text-black shadow-md hover:shadow-xl transition-all bg-gray-100 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <CardHeader className="flex flex-col items-center gap-4">
              <Avatar className="w-20 h-20 border border-gray-300">
                <AvatarImage src={monster.image_url} />
                <AvatarFallback>{monster.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg font-semibold">
                {monster.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center text-center gap-2">
              <Label className="text-md"><strong>Attack</strong> {monster.attack}</Label>
              <Label className="text-md"><strong>Defense</strong> {monster.defense}</Label>
              <Label className="text-md"><strong>Speed</strong> {monster.speed}</Label>
              <Label className="text-md"><strong>HP</strong> {monster.hp}</Label>
            </CardContent>
          </Card>
        ))}
      </div>
  </div>
  );
}

export default MonstersList;