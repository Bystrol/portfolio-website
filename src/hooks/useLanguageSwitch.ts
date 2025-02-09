import { useEffect, useState } from 'react'
import translation from '../utils/data/translations.json'

export enum Language {
  Polish = 'pl',
  English = 'en'
}

export default function useLanguageSwitch() {
  const [language, setLanguage] = useState<Language>(Language.English)
  const switchChecked = language === Language.English

  useEffect(() => {
    setLanguage(
      (localStorage.getItem('language') as Language) ??
        (navigator.language.includes(Language.Polish)
          ? Language.Polish
          : Language.English)
    )
  }, [])

  const toggleSwitch = () => {
    if (switchChecked) {
      setLanguage(Language.Polish)
      localStorage.setItem('language', Language.Polish)
    } else {
      setLanguage(Language.English)
      localStorage.setItem('language', Language.English)
    }
  }

  return {
    translation: language === Language.Polish ? translation.pl : translation.en,
    language,
    switchChecked,
    toggleSwitch
  }
}
