import ItemsSection from './components/ItemsSection';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="flex items-center justify-center  h-full container mx-auto p-6">
                <ItemsSection />
            </main>
        </>
    );
}
