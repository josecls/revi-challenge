import MonstersList from "@/components/sections/MonstersList";
import MonstersHeader from "@/components/sections/MonstersHeader";

export default function Monsters() {
    return (
        <div className="w-full">
            <main className="w-full">
                <MonstersHeader />
                <MonstersList />
            </main>
        </div>
    );
} 