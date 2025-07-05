import { FrownIcon } from 'lucide-react';

// NoMonstersFound defines a section responsible for informing users they need to add monsters to enjoy the platform.
const NoMonstersFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:mt-60">
      <FrownIcon className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold mb-4">No Monsters Created</h2>
      <p className="text-gray-600">Start adding your monsters to witness epic fights. </p>
    </div>
  );
};

export default NoMonstersFound;
