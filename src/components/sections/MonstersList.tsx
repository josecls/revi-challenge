
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlusCircleIcon } from "lucide-react";
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { useMonsters } from "@/contexts/MonsterContext";
import { useEffect, useState } from "react";

function MonstersList() {
  const [monster, setMonster] = useState({
    name: '',
    attack: 0,
    defense: 0,
    speed: 0,
    hp: 0,
    image_url: '',
  });
  const { monsters, addMonster } = useMonsters();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log(monster)
    if (!monster.name || !monster.image_url) {
      toast("Please fill in all fields.");
      return;
    }

    if (monster.attack < 0 || monster.defense < 0 || monster.speed < 0 || monster.hp < 0) {
      toast("Attack, Defense, Speed, and HP must be non-negative.");
      return;
    }

    if (monster.attack === 0 && monster.defense === 0 && monster.speed === 0 && monster.hp === 0) {
      toast("Monster attributes cannot all be zero.");
      return;
    }

    addMonster(monster);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonster((prevMonster) => ({
      ...prevMonster,
      [name]: name === 'attack' || name === 'defense' || name === 'speed' || name === 'hp' ? parseInt(value, 10) : value,
    }));
  }

  useEffect(() => {
    console.log(monsters)
  }, [monsters]);

  return (
    <div className="min-h-screen py-10 bg-white text-[#674AA3] flex flex-col justify-evenly">
    <div className="flex flex-row justify-center md:justify-between items-center px-4 md:px-12 lg:px-20 xl:px-32 mb-8">
      <h1 className="hidden md:block text-3xl md:text-5xl font-extrabold font-[fredoka]">Monsters you created</h1>
      <Dialog>
        <DialogTrigger className="flex justiy-center align-center bg-[#1EBA1E] font-[fredoka] text-white text-xl px-7 py-4 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <PlusCircleIcon className="size-6 mr-2" />
            New Monster
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader className="text-[#674AA3]">
            <DialogTitle className="text-2xl">Create a new monster</DialogTitle>
          </DialogHeader>
          <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Monster Name</Label>
              <Input name="name" onChange={handleInputChange} placeholder="e.g. Alfred" type="text"></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Attack</Label>
              <Input name="attack" onChange={handleInputChange} placeholder="e.g. 10" type="number"></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Defense</Label>
              <Input name="defense" onChange={handleInputChange} placeholder="e.g. 4" type="number"></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Speed</Label>
              <Input name="speed" onChange={handleInputChange} placeholder="e.g. 3" type="number"></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">HP</Label>
              <Input name="hp" onChange={handleInputChange} placeholder="e.g. 50" type="number"></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Image URL</Label>
              <Input name="image_url" onChange={handleInputChange} placeholder="e.g. https://example.com/image.jpg" type="url"></Input>
            </div>
            <Input type="submit" value="Create Monster" className="mt-4 bg-[#1EBA1E] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-300" />
          </form>
        </DialogContent>
      </Dialog>
    </div>
    

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