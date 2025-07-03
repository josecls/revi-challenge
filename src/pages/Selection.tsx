import { useNavigate } from "react-router-dom";

export default function Selection() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-9xl font-[Fredoka]">Select Your Monster</h1>
            <button
                onClick={() => navigate('/battle')}
                className="bg-gray-800 text-white text-2xl font-bold py-3 px-8 rounded-2xl hover:scale-105 transition-transform"
            >
                Start Battle
            </button>
        </div>
    );
} 