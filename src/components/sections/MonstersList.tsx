
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";

function MonstersList() {
    const monstersMock = [
    {
        name: "Goblin",
        attack: 5,
        defense: 2,
        speed: 3,
        hp: 10,
        image_url: "https://d23.com/app/uploads/2021/07/780w-463h_070721_Meet-the-Monsters_1.jpg"
    },
    {
        name: "Orc",
        attack: 7,
        defense: 4,
        speed: 2,
        hp: 15,
        image_url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/nosferatu-xenomorph-from-alien-and-leatherback-from-pacific-rim.jpg"
    },
    {
        name: "Dragon",
        attack: 15,
        defense: 10,
        speed: 5,
        hp: 30,
        image_url: "https://www.amestrib.com/gcdn/authoring/2012/10/11/NATR/ghows-IA-3595d9c0-3f6f-4aba-9eb2-e544b787b2a6-f2320d61.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
    },
    {
        name: "Goblin",
        attack: 5,
        defense: 2,
        speed: 3,
        hp: 10,
        image_url: "https://d23.com/app/uploads/2021/07/780w-463h_070721_Meet-the-Monsters_1.jpg"
    },
    {
        name: "Orc",
        attack: 7,
        defense: 4,
        speed: 2,
        hp: 15,
        image_url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/nosferatu-xenomorph-from-alien-and-leatherback-from-pacific-rim.jpg"
    },
    {
        name: "Dragon",
        attack: 15,
        defense: 10,
        speed: 5,
        hp: 30,
        image_url: "https://www.amestrib.com/gcdn/authoring/2012/10/11/NATR/ghows-IA-3595d9c0-3f6f-4aba-9eb2-e544b787b2a6-f2320d61.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
    },
    {
        name: "Goblin",
        attack: 5,
        defense: 2,
        speed: 3,
        hp: 10,
        image_url: "https://d23.com/app/uploads/2021/07/780w-463h_070721_Meet-the-Monsters_1.jpg"
    },
    {
        name: "Orc",
        attack: 7,
        defense: 4,
        speed: 2,
        hp: 15,
        image_url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/nosferatu-xenomorph-from-alien-and-leatherback-from-pacific-rim.jpg"
    },
    {
        name: "Dragon",
        attack: 15,
        defense: 10,
        speed: 5,
        hp: 30,
        image_url: "https://www.amestrib.com/gcdn/authoring/2012/10/11/NATR/ghows-IA-3595d9c0-3f6f-4aba-9eb2-e544b787b2a6-f2320d61.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
    },
    {
        name: "Goblin",
        attack: 5,
        defense: 2,
        speed: 3,
        hp: 10,
        image_url: "https://d23.com/app/uploads/2021/07/780w-463h_070721_Meet-the-Monsters_1.jpg"
    },
    {
        name: "Orc",
        attack: 7,
        defense: 4,
        speed: 2,
        hp: 15,
        image_url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/nosferatu-xenomorph-from-alien-and-leatherback-from-pacific-rim.jpg"
    },
    {
        name: "Dragon",
        attack: 15,
        defense: 10,
        speed: 5,
        hp: 30,
        image_url: "https://www.amestrib.com/gcdn/authoring/2012/10/11/NATR/ghows-IA-3595d9c0-3f6f-4aba-9eb2-e544b787b2a6-f2320d61.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
    },
    {
        name: "Goblin",
        attack: 5,
        defense: 2,
        speed: 3,
        hp: 10,
        image_url: "https://d23.com/app/uploads/2021/07/780w-463h_070721_Meet-the-Monsters_1.jpg"
    },
    {
        name: "Orc",
        attack: 7,
        defense: 4,
        speed: 2,
        hp: 15,
        image_url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/nosferatu-xenomorph-from-alien-and-leatherback-from-pacific-rim.jpg"
    },
    {
        name: "Dragon",
        attack: 15,
        defense: 10,
        speed: 5,
        hp: 30,
        image_url: "https://www.amestrib.com/gcdn/authoring/2012/10/11/NATR/ghows-IA-3595d9c0-3f6f-4aba-9eb2-e544b787b2a6-f2320d61.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
    }
];


  return (
    <div className="min-h-screen py-10 bg-white text-[#674AA3] flex flex-col justify-evenly">
    <div className="flex flex-row justify-center md:justify-between items-center px-4 md:px-12 lg:px-20 xl:px-32 mb-8">
      <h1 className="hidden md:block text-3xl md:text-5xl font-extrabold font-[fredoka]">Monsters you created</h1>
      <Button
        variant="outline"
        size="default"
        className="bg-[#1EBA1E] font-[fredoka] text-white text-2xl px-10 py-6 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      >
        <PlusCircleIcon className="size-6 mr-2" />
        Add new monster
      </Button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-12 lg:px-20 xl:px-32">
      {monstersMock.map((monster, index) => (
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
            <Label>Attack <strong>{monster.attack}</strong></Label>
            <Label>Defense <strong>{monster.defense}</strong></Label>
            <Label>Speed <strong>{monster.speed}</strong></Label>
            <Label>HP <strong>{monster.hp}</strong></Label>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  );
}

export default MonstersList
