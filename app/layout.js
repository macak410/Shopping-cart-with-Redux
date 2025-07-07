import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from './ClientProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
    title: 'Shopping Cart',
    description: 'Shopping cart to learn Redux',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
                <ClientProvider>{children}</ClientProvider>
            </body>
        </html>
    );
}