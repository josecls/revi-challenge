import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/selection');
    };

    return (
        <div className="min-h-screen flex flex-col justify-between items-center bg-purple-700 text-white font-fredoka px-4 py-6">
        <div /> {/* Top spacer */}

        <main className="flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">Monster Battle</h1>

            <button className="bg-green-500 hover:bg-green-600 text-2xl font-bold py-3 px-10 rounded-xl transition-all" onClick={handleStart}>
            start
            </button>
        </main>

        <footer className="text-sm text-white/80">
            Enable full screen mode for a better experience
        </footer>
    </div>
    );
}