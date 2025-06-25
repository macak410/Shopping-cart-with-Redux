import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from './ClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Shopping Cart',
    description: 'Shopping cart to learn Redux',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientProvider>{children}</ClientProvider>
            </body>
        </html>
    );
}
