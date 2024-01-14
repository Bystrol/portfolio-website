/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import translation from '../utils/data/translations.json'

enum Languages {
  Polish = 'pl',
  English = 'en'
}

export default function useLanguageSwitch() {
  const [language, setLanguage] = useState<string>(Languages.Polish)
  const switchChecked = language === Languages.English

  useEffect(() => {
    setLanguage(
      localStorage.getItem('language') ??
        (navigator.language.includes(Languages.Polish)
          ? Languages.Polish
          : Languages.English)
    )
  }, [])

  const toggleSwitch = () => {
    if (switchChecked) {
      setLanguage(Languages.Polish)
      localStorage.setItem('language', Languages.Polish)
    } else {
      setLanguage(Languages.English)
      localStorage.setItem('language', Languages.English)
    }
  }

  return {
    translation:
      language === Languages.Polish ? translation.pl : translation.en,
    switchChecked,
    toggleSwitch
  }
}
