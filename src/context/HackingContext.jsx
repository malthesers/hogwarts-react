import { HackingContext } from './'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

HackingProvider.propTypes = {
  children: PropTypes.object
}

export function HackingProvider({ children }) {
  const [expulsionAttempts, setExpulsionAttempts] = useState(1)
  const [isHacked, setIsHacked] = useState(false)
  const [isCursed, setIsCursed] = useState(false)

  function incrementExpulsionAttempts() {
    setExpulsionAttempts(expulsionAttempts => expulsionAttempts + 1)
  }

  function hackTheSystem() {
    setIsHacked(true)
  }

  function curseTheSystem() {
    setIsCursed(true)
  }

  function curseHogwarts() {
    setTimeout(() => {
      document.querySelectorAll('p, input, img').forEach((element) => {
        element.addEventListener('click', (e) => {
          e.target.style.transitionDuration = '200ms';
          e.target.style.filter = 'grayscale(75%)';
          e.target.style.transform = ['rotate(-15deg)', 'rotate(-5deg)', 'rotate(5deg)', 'rotate(15deg)'][Math.floor(Math.random() * 4)];
          e.target.textContent = 'ḭ̷̺̖͎̬̇̋̑͌́͂͋̌͋̎̓̊̊̽͜͠ ̴̧͍̼̪̋͂̊̑͊̏̓̈́̃̊͂̚̚͝͠w̶̬̪̾̆͘ä̵̠͎̗́̊̓̕ŗ̴̡̡̗̭̝̲̤͍̤͕̋ń̴̫͉͖̯̣͔͈̻͚̠̯͂̐̅́̎́̒̽͊̾̓̓͝e̴̡̢̫̫̗̗͎͎̠̥̥̫͕̱̹͐̈́̂̅͌ḑ̸͇̤͓̫̬̼̻̫͎͙͕͈̒̊͊̿̽̂̐́́̃̀̐́͝ͅ ̷͖̝̦̇͒̎̈́̃͐͛́͊̓̕͜͜͝y̴̧̡͓͍̾͗̀̂͜o̶̤͕̩̟̹͛̓̎̄̓͊̎̈͘̚͜͜͝͠ů̴̗̦̭̐̒̕';
        });
      });
    }, 200);
  }

  useEffect(() => {
    if (isCursed) curseHogwarts()
  }, [isCursed])

  return (
    <HackingContext.Provider value={{isHacked, hackTheSystem, isCursed, curseTheSystem, curseHogwarts, expulsionAttempts, incrementExpulsionAttempts}}>
      {children}
    </HackingContext.Provider>
  )
}