'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { Language, Messages } from '@/lib/i18n'
import { DEFAULT_LANGUAGE, getMessages } from '@/lib/i18n'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  messages: Messages
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
const STORAGE_KEY = 'tlcc-language'

const isLanguage = (value: string | null): value is Language => {
  return value === 'en' || value === 'fr' || value === 'es'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [messages, setMessages] = useState<Messages>(() => getMessages(DEFAULT_LANGUAGE))

  const updateLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    setMessages(getMessages(nextLanguage))

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextLanguage)
      document.documentElement.lang = nextLanguage
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const storedLanguage = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(storedLanguage)) {
      updateLanguage(storedLanguage)
      return
    }

    const browserLanguage = navigator.language?.slice(0, 2)
    if (isLanguage(browserLanguage)) {
      updateLanguage(browserLanguage)
    }
  }, [updateLanguage])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage: updateLanguage, messages }),
    [language, updateLanguage, messages]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
