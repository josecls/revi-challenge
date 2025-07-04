import { FrownIcon } from 'lucide-react'

function NoMonstersFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full md:mt-60">
      <FrownIcon className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold mb-4">No Monsters Created</h2>
      <p className="text-gray-600">Start adding your monsters to see them here!</p>
    </div>
  );
}

export default NoMonstersFound;