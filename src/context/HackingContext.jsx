import { HackingContext } from './'
import { useState } from 'react'
import PropTypes from 'prop-types';

HackingProvider.propTypes = {
  children: PropTypes.object
}

export function HackingProvider({ children }) {
  const [isHacked, setIsHacked] = useState(false)
  const [isCursed, setIsCursed] = useState(false)

  function hackTheSystem() {
    setIsHacked(true)
  }

  function curseHogwarts() {
    setIsCursed(true)
  }

  return (
    <HackingContext.Provider value={{isHacked, isCursed, hackTheSystem, curseHogwarts}}>
      {children}
    </HackingContext.Provider>
  )
}