'use client'

import { useState } from 'react'
import Switch from 'react-switch'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import scrollToSection from '@/utils/functions/scrollToSection'
import CircularButton from './CircularButton'
import PolishIcon from '../../public/images/polish-icon.png'
import EnglishIcon from '../../public/images/english-icon.png'
import BarsIcon from './svg/BarsIcon'
import CloseIcon from './svg/CloseIcon'
import { Translation } from '@/types/translation'

const unbounded = Unbounded({
  subsets: ['latin']
})

type NavbarProps = {
  translation: Translation
  switchChecked: boolean
  toggleSwitch: () => void
}

export default function Navbar({
  translation,
  switchChecked,
  toggleSwitch
}: NavbarProps) {
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false)

  const toggleNavigation = () => {
    setIsNavigationVisible((prevIsVisible) => !prevIsVisible)
  }

  return (
    <>
      <header className="fixed flex justify-center w-full h-[60px] lg:h-max px-[30px] py-[15px] sm:px-[60px] lg:py-[20px] lg:px-[120px] xl:py-[25px] bg-light-black/[.03] backdrop-blur z-10">
        <div className="flex justify-between items-center w-full max-w-[1440px] gap-[20px]">
          <h1
            className={`text-[18px] lg:text-[22px] ${unbounded.className} uppercase`}
          >
            Michał Bystryk
          </h1>
          <div className="flex items-center gap-[20px]">
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-[20px]">
                {translation.navigation.map((navItem, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[14px] lg:text-[18px] cursor-pointer hover:drop-shadow-blue hover:-translate-y-[px] transition-all duration-200"
                      onClick={() => scrollToSection(index)}
                    >
                      {navItem}
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="h-[30px] border-2 border-light-blue/[.50] rounded-full hover:drop-shadow-blue transition-all duration-200">
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
                icon={isNavigationVisible ? CloseIcon : BarsIcon}
              />
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`lg:hidden fixed top-[60px] ${
          isNavigationVisible ? 'left-0' : 'left-full'
        } flex items-end w-full h-dvh bg-light-black/[.03] backdrop-blur pb-[120px] pl-[30px] transition-all duration- z-10`}
      >
        <ul className="flex flex-col gap-[20px]">
          {translation.navigation.map((navItem, index) => {
            return (
              <li
                key={index}
                className="text-[36px] cursor-pointer hover:drop-shadow-blue transition-all duration-200"
                onClick={() => {
                  scrollToSection(index)
                  setIsNavigationVisible(false)
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
