'use client'

import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client'
import { SectionId } from '@/types/SectionId'
import { scrollToSection } from '@/utils/scrollToSection'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Switch from 'react-switch'
import BarsIcon from '../atoms/BarsIcon'
import CloseIcon from '../atoms/CloseIcon'
import CircularButton from '../molecules/CircularButton'

const unbounded = Unbounded({
  subsets: ['latin']
})

export const Navbar = () => {
  const t = useI18n()
  const locale = useCurrentLocale()

  const changeLocale = useChangeLocale({ preserveSearchParams: true })

  const [isMobileNavigationVisible, setIsMobileNavigationVisible] =
    useState<boolean>(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let totalScrolled = 0
    let scrollingDown = false

    const handleScroll = () => {
      const navbarElement = document.getElementById('navbar')

      if (!isMobileNavigationVisible) {
        const currentScrollingDown = window.scrollY > lastScrollY
        if (currentScrollingDown !== scrollingDown) {
          totalScrolled = 0
        } else {
          totalScrolled += Math.abs(window.scrollY - lastScrollY)
        }

        if (totalScrolled > 100) {
          if (currentScrollingDown && window.scrollY > 100) {
            navbarElement?.classList.add('-translate-y-full')
          } else {
            navbarElement?.classList.remove('-translate-y-full')
          }
        }

        scrollingDown = currentScrollingDown
      }

      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileNavigationVisible])

  const toggleNavigation = () => {
    setIsMobileNavigationVisible((prevIsVisible) => !prevIsVisible)
  }

  const toggleLanguage = () => {
    if (locale === 'en') {
      changeLocale('pl')
    } else {
      changeLocale('en')
    }
  }

  const navigationItems: { id: SectionId; label: string }[] = [
    {
      id: 'about',
      label: t('common.navigation.about')
    },
    {
      id: 'offer',
      label: t('common.navigation.offer')
    },
    {
      id: 'experience',
      label: t('common.navigation.experience')
    },
    {
      id: 'projects',
      label: t('common.navigation.projects')
    },
    {
      id: 'contact',
      label: t('common.navigation.contact')
    }
  ]

  const switchChecked = locale === 'en'

  return (
    <>
      <header
        id="navbar"
        className="fixed flex justify-center w-full h-[60px] lg:h-max px-[30px] py-[15px] sm:px-[60px] lg:py-[20px] lg:px-[120px] xl:py-[25px] bg-light-black/[.03] backdrop-blur z-10"
      >
        <div className="flex justify-between items-center w-full max-w-[1440px] gap-[20px]">
          <h1
            className={`text-[18px] lg:text-[22px] ${unbounded.className} uppercase cursor-pointer`}
            onClick={() => {
              scrollToSection('hero')
            }}
          >
            Michał Bystryk
          </h1>
          <div className="flex items-center gap-[20px]">
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-[20px]">
                {navigationItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-[14px] lg:text-[18px] cursor-pointer hover:drop-shadow-blue hover:-translate-y-[2px] transition-all duration-200"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </li>
                ))}

                {/* <li className="text-[14px] lg:text-[18px] cursor-pointer hover:drop-shadow-blue hover:-translate-y-[2px] transition-all duration-200">
                  <Link href="/blog">{t('common.navigation.blog')}</Link>
                </li> */}
              </ul>
            </nav>
            <div className="h-[30px] border-2 border-light-blue/[.50] rounded-full sm:hover:drop-shadow-blue transition-all duration-200">
              <Switch
                name="language-switch"
                aria-label="Language switch"
                checked={switchChecked}
                onChange={toggleLanguage}
                offColor="#1B1B1B"
                onColor="#1B1B1B"
                offHandleColor="#2960F8"
                onHandleColor="#2960F8"
                handleDiameter={20}
                width={60}
                height={26}
                activeBoxShadow="0 0 2px 3px #5035DA"
                uncheckedIcon={
                  <div className="w-full h-full flex justify-end items-center pr-1">
                    <Image
                      src="/images/english-icon.webp"
                      alt="English flag"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                }
                checkedIcon={
                  <div className="w-full h-full flex justify-start items-center pl-1">
                    <Image
                      src="/images/polish-icon.webp"
                      alt="Polish flag"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                }
              />
            </div>
            <div className="sm:hidden">
              <CircularButton
                handleClick={toggleNavigation}
                icon={isMobileNavigationVisible ? CloseIcon : BarsIcon}
              />
            </div>
          </div>
        </div>
      </header>

      <nav
        className={`lg:hidden fixed top-[60px] ${
          isMobileNavigationVisible ? 'left-0' : 'left-full'
        } flex items-end w-full h-dvh bg-light-black/[.03] backdrop-blur pb-[100px] pl-[30px] transition-all duration-200 z-10`}
      >
        <ul className="flex flex-col gap-[20px]">
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className="text-[36px] cursor-pointer"
              onClick={() => {
                scrollToSection(item.id)
                setIsMobileNavigationVisible(false)
              }}
            >
              {item.label}
            </li>
          ))}

          {/* <li className="text-[36px] cursor-pointer">
            <Link href="/blog">{t('common.navigation.blog')}</Link>
          </li> */}
        </ul>
      </nav>
    </>
  )
}
