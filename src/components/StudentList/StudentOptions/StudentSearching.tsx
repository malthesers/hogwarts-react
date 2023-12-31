import { useRef } from 'react'
import { useHacking } from '../../../context'
import { useOptions } from '../../../context'
import { useTheme } from '../../../context'
import IconWand from '../../icons/IconWand'

export default function StudentSearching() {
  const { options, setOptions } = useOptions()
  const { hackTheSystem } = useHacking()
  const { theme } = useTheme()
  const input = useRef<HTMLInputElement>(null)

  function updateSearch(value: string) {
    setOptions({
      ...options,
      search: value
    })
  }

  function verifyHacking(e: React.KeyboardEvent<HTMLInputElement>) {
    if (input.current && e.code === 'Enter' && e.currentTarget.value.toLowerCase() === 'imperio') {
      input.current.value = ''
      hackTheSystem()
    }
  }

  return (
    <div className='grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr] mb-4'>
      <input
        ref={input}
        onKeyDown={(e) => verifyHacking(e)}
        onChange={(e) => updateSearch(e.target.value)}
        type='text'
        placeholder='Search...'
        className={`bg-${theme}-dark border-${theme}-accent placeholder-${theme}-accent` + ' w-full border-2 p-2 outline-none placeholder:opacity-60'}
      />
      <IconWand className={ `fill-${theme}-accent` + ' h-12 place-self-center sm:row-start-1 sm:col-start-1'} />
    </div>
  )
}