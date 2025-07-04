import { PlusCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

import { useMonsters } from '@/contexts/MonsterContext';

const initialMonsterState = {
  name: '',
  attack: 0,
  defense: 0,
  speed: 0,
  hp: 0,
  image_url: '',
};

const MonstersHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [monster, setMonster] = useState(initialMonsterState);

  const { addMonster } = useMonsters();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!monster.name || !monster.image_url) {
      toast.warning('Please fill in all fields.');
      return;
    }

    if (monster.attack < 0 || monster.defense < 0 || monster.speed < 0 || monster.hp < 0) {
      toast.warning('Attack, Defense, Speed, and HP must be non-negative.');
      return;
    }

    if (monster.attack === 0 || monster.defense === 0 || monster.speed === 0 || monster.hp === 0) {
      toast.warning('Monster attributes cannot be zero.');
      return;
    }

    addMonster(monster);
    event.currentTarget.reset();
    setIsOpen(false);
    setMonster(initialMonsterState); // Reset monster state after submission
    toast.success('Monster created successfully!');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonster((prevMonster) => ({
      ...prevMonster,
      [name]:
        name === 'attack' || name === 'defense' || name === 'speed' || name === 'hp'
          ? parseInt(value, 10)
          : value,
    }));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-4 md:px-12 lg:px-20 xl:px-32 mb-8 mt-50">
      <h1 className="text-4xl md:text-5xl font-extrabold font-[fredoka] text-[#674AA3] mt-10 md:mt-0">
        Monsters List
      </h1>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="flex justiy-center align-center bg-[#1EBA1E] font-[fredoka] text-white text-xl px-7 py-4 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer">
          <PlusCircleIcon className="size-6 mr-2" />
          New Monster
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader className="text-[#674AA3]">
            <DialogTitle className="text-2xl">Create a new monster</DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Tell us how your monster looks like and its attributes.
            </DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Monster Name</Label>
              <Input
                name="name"
                onChange={handleInputChange}
                placeholder="e.g. Alfred"
                type="text"
              ></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Attack</Label>
              <Input
                name="attack"
                onChange={handleInputChange}
                placeholder="e.g. 10"
                type="number"
              ></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Defense</Label>
              <Input
                name="defense"
                onChange={handleInputChange}
                placeholder="e.g. 4"
                type="number"
              ></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Speed</Label>
              <Input
                name="speed"
                onChange={handleInputChange}
                placeholder="e.g. 3"
                type="number"
              ></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">HP</Label>
              <Input
                name="hp"
                onChange={handleInputChange}
                placeholder="e.g. 50"
                type="number"
              ></Input>
            </div>
            <div className="mb-3">
              <Label className="text-sm mb-2 font-bold">Image URL</Label>
              <Input
                name="image_url"
                onChange={handleInputChange}
                placeholder="e.g. https://example.com/image.jpg"
                type="url"
              ></Input>
            </div>
            <Input
              type="submit"
              value="Create Monster"
              className="mt-4 bg-[#1EBA1E] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
            />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MonstersHeader;
