import ItemsSection from './components/ItemsSection';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
                <Navbar />
            </header>

            <main className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
                <section className="container mx-auto px-4 py-8">
                    <ItemsSection />
                </section>
            </main>
        </>
    );
}