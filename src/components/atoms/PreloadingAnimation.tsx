'use client'

import { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import mobileRibbonAnimation from '../../lotties/ribbon-mobile.json'
import desktopRibbonAnimation from '../../lotties/ribbon-desktop.json'

export const PreloadingAnimation = () => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>()

  useEffect(() => {
    const isMobile =
      /Mobi|Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    setIsMobileDevice(isMobile)
  }, [])

  const defaultLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: isMobileDevice
      ? mobileRibbonAnimation
      : desktopRibbonAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="w-full absolute mt-[26svh] lg:mt-[20vh]">
      <Lottie options={defaultLottieOptions} />
    </div>
  )
}
