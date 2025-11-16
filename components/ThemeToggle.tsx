import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'light'
            ? 'bg-white dark:bg-black shadow-md text-primary-500'
            : 'text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title="Light mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'system'
            ? 'bg-white dark:bg-black shadow-md text-primary-500'
            : 'text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title="System mode"
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-white dark:bg-black shadow-md text-primary-500'
            : 'text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title="Dark mode"
      >
        <Moon size={16} />
      </button>
    </div>
  )
}