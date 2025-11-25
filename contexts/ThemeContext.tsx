import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  effectiveTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const updateEffectiveTheme = () => {
      if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setEffectiveTheme(systemPrefersDark ? 'dark' : 'light')
      } else {
        setEffectiveTheme(theme)
      }
    }

    updateEffectiveTheme()

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', updateEffectiveTheme)
      return () => mediaQuery.removeEventListener('change', updateEffectiveTheme)
    }
  }, [theme])

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(effectiveTheme)
    
    // Save theme preference
    localStorage.setItem('theme', theme)
  }, [theme, effectiveTheme])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}