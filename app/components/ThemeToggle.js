'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-md text-sm font-medium transition hover:bg-gray-200 dark:hover:bg-gray-700"
        >
            {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
}