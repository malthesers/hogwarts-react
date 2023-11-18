import { HackingContext } from '.'
import { ReactNode, useEffect, useState } from 'react'
import PropTypes from 'prop-types';

HackingProvider.propTypes = {
  children: PropTypes.object
}

export function HackingProvider({ children }: { children: ReactNode }) {
  const [expulsionAttempts, setExpulsionAttempts] = useState<number>(1)
  const [isHacked, setIsHacked] = useState<boolean>(false)
  const [isCursed, setIsCursed] = useState<boolean>(false)

  function incrementExpulsionAttempts(): void {
    setExpulsionAttempts(expulsionAttempts => expulsionAttempts + 1)
  }

  function hackTheSystem(): void {
    setIsHacked(true)
  }

  function curseTheSystem(): void {
    setIsCursed(true)
  }

  function curseHogwarts(): void {
    const cursedElements: NodeListOf<HTMLElement> = document.querySelectorAll('p, input, img')

    setTimeout(() => {
      cursedElements.forEach((element) => {
        element.addEventListener('click', (e) => {
          const target = (e.target as HTMLElement | null)

          if (target) {
            target.style.transitionDuration = '200ms';
            target.style.filter = 'grayscale(75%)';
            target.style.transform = ['rotate(-15deg)', 'rotate(-5deg)', 'rotate(5deg)', 'rotate(15deg)'][Math.floor(Math.random() * 4)];
            target.textContent = 'ḭ̷̺̖͎̬̇̋̑͌́͂͋̌͋̎̓̊̊̽͜͠ ̴̧͍̼̪̋͂̊̑͊̏̓̈́̃̊͂̚̚͝͠w̶̬̪̾̆͘ä̵̠͎̗́̊̓̕ŗ̴̡̡̗̭̝̲̤͍̤͕̋ń̴̫͉͖̯̣͔͈̻͚̠̯͂̐̅́̎́̒̽͊̾̓̓͝e̴̡̢̫̫̗̗͎͎̠̥̥̫͕̱̹͐̈́̂̅͌ḑ̸͇̤͓̫̬̼̻̫͎͙͕͈̒̊͊̿̽̂̐́́̃̀̐́͝ͅ ̷͖̝̦̇͒̎̈́̃͐͛́͊̓̕͜͜͝y̴̧̡͓͍̾͗̀̂͜o̶̤͕̩̟̹͛̓̎̄̓͊̎̈͘̚͜͜͝͠ů̴̗̦̭̐̒̕';
          }
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