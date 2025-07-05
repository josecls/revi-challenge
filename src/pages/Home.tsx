import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

// Home defines the introduction page - root of the project. The entrypoint to the Monsters Battle platform.
const Home = () => {
  const navigate = useNavigate();

  // handleStart takes the user to the monsters listing page.
  const handleStart = () => {
    navigate('/monsters');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#674AA3] text-white px-4 py-8">
      <div /> {/* Top spacer */}
      <main className="flex flex-col items-center text-center gap-20">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-[fredoka] font-bold">
          Monsters Battle
        </h1>

        <Button
          className="bg-green-500 hover:bg-green-600 text-2xl font-bold py-8 px-10 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          onClick={handleStart}
        >
          explore
        </Button>
      </main>
      <footer className="text-sm text-white/80">
        Enable full screen mode for a better experience
      </footer>
    </div>
  );
};

export default Home;
