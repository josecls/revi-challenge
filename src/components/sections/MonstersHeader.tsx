import { PlusCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

import { useMonsters } from '@/contexts/MonsterContext';
import { MonsterEntity } from '@/core/Monster';

const initialMonsterState = new MonsterEntity('', 0, 0, 0, 0, '');

const MonstersHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [monster, setMonster] = useState<MonsterEntity>(initialMonsterState);

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
    setMonster(initialMonsterState);
    setIsOpen(false);
    toast.success('Monster created successfully!');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updated = new MonsterEntity(
      monster.name,
      monster.attack,
      monster.defense,
      monster.speed,
      monster.hp,
      monster.image_url,
    );

    switch (name) {
      case 'name':
        updated.name = value;
        break;
      case 'image_url':
        updated.image_url = value;
        break;
      case 'attack':
        updated.attack = parseInt(value, 10) || 0;
        break;
      case 'defense':
        updated.defense = parseInt(value, 10) || 0;
        break;
      case 'speed':
        updated.speed = parseInt(value, 10) || 0;
        break;
      case 'hp':
        updated.hp = parseInt(value, 10) || 0;
        break;
    }

    setMonster(updated);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-4 md:px-12 lg:px-20 xl:px-32 mb-8 mt-50">
      <h1 className="text-4xl md:text-5xl font-extrabold font-[fredoka] text-[#674AA3] mt-10 md:mt-0">
        Monsters List
      </h1>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="flex justify-center items-center bg-[#1EBA1E] font-[fredoka] text-white text-xl px-7 py-4 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer">
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
            {[
              { label: 'Monster Name', name: 'name', type: 'text', placeholder: 'e.g. Alfred' },
              { label: 'Attack', name: 'attack', type: 'number', placeholder: 'e.g. 10' },
              { label: 'Defense', name: 'defense', type: 'number', placeholder: 'e.g. 4' },
              { label: 'Speed', name: 'speed', type: 'number', placeholder: 'e.g. 3' },
              { label: 'HP', name: 'hp', type: 'number', placeholder: 'e.g. 50' },
              {
                label: 'Image URL',
                name: 'image_url',
                type: 'url',
                placeholder: 'e.g. https://...',
              },
            ].map((field) => (
              <div className="mb-3" key={field.name}>
                <Label className="text-sm mb-2 font-bold">{field.label}</Label>
                <Input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={handleInputChange}
                />
              </div>
            ))}

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
