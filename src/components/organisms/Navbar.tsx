'use client'

import { useEffect, useState, useCallback } from 'react'
import Switch from 'react-switch'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import scrollToSection from '@/utils/functions/scrollToSection'
import CircularButton from '../molecules/CircularButton'
import PolishIcon from '../../../public/images/polish-icon.png'
import EnglishIcon from '../../../public/images/english-icon.png'
import BarsIcon from '../atoms/BarsIcon'
import CloseIcon from '../atoms/CloseIcon'
import { Translation } from '@/types/translation'
import Link from 'next/link'
import { Language } from '@/hooks/useLanguageSwitch'

const unbounded = Unbounded({
  subsets: ['latin']
})

type NavbarProps = {
  translation: Translation
  switchChecked: boolean
  toggleSwitch: () => void
  language: Language
}

export default function Navbar({
  translation,
  switchChecked,
  toggleSwitch,
  language
}: NavbarProps) {
  const [isMobileNavigationVisible, setIsMobileNavigationVisible] =
    useState<boolean>(false)

  const toggleNavigation = () => {
    setIsMobileNavigationVisible((prevIsVisible) => !prevIsVisible)
  }

  let lastScrollY = window.scrollY
  let totalScrolled = 0
  let scrollingDown = false

  const handleScroll = useCallback(() => {
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
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <header
        id="navbar"
        className="fixed flex justify-center w-full h-[60px] lg:h-max px-[30px] py-[15px] sm:px-[60px] lg:py-[20px] lg:px-[120px] xl:py-[25px] bg-light-black/[.03] backdrop-blur z-10 animate-slideDown transition-all duration-700"
      >
        <div className="flex justify-between items-center w-full max-w-[1440px] gap-[20px]">
          <h1
            className={`text-[18px] lg:text-[22px] ${unbounded.className} uppercase cursor-pointer`}
            onClick={() => {
              scrollToSection(0)
              setIsMobileNavigationVisible(false)
            }}
          >
            Michał Bystryk
          </h1>
          <div className="flex items-center gap-[20px]">
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-[20px]">
                {translation.navigation.map((navItem, index) => {
                  const isBlogItem = navItem === 'Blog'

                  return (
                    <li
                      key={index}
                      className="text-[14px] lg:text-[18px] cursor-pointer hover:drop-shadow-blue hover:-translate-y-[2px] transition-all duration-200"
                      onClick={() =>
                        isBlogItem ? undefined : scrollToSection(index + 1)
                      }
                    >
                      {isBlogItem ? (
                        <Link href={`/${language}/blog`}>{navItem}</Link>
                      ) : (
                        navItem
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="h-[30px] border-2 border-light-blue/[.50] rounded-full sm:hover:drop-shadow-blue transition-all duration-200">
              <Switch
                checked={switchChecked}
                onChange={toggleSwitch}
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
                      src={EnglishIcon}
                      alt="English flag"
                      quality={100}
                      width={20}
                      height={20}
                    />
                  </div>
                }
                checkedIcon={
                  <div className="w-full h-full flex justify-start items-center pl-1">
                    <Image
                      src={PolishIcon}
                      alt="Polish flag"
                      quality={100}
                      width={20}
                      height={20}
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
          {translation.navigation.map((navItem, index) => {
            return (
              <li
                key={index}
                className="text-[36px] cursor-pointer"
                onClick={() => {
                  scrollToSection(index + 1)
                  setIsMobileNavigationVisible(false)
                }}
              >
                {navItem}
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
