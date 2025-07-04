import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/monsters');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#674AA3] text-white px-4 py-8">
      <div /> {/* Top spacer */}
      <main className="flex flex-col items-center text-center gap-20">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-[fredoka] font-bold">
          Monster Battle
        </h1>

        <button
          className="bg-green-500 hover:bg-green-600 text-2xl font-bold py-3 px-10 rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          onClick={handleStart}
        >
          explore
        </button>
      </main>
      <footer className="text-sm text-white/80">
        Enable full screen mode for a better experience
      </footer>
    </div>
  );
};

export default Home;
