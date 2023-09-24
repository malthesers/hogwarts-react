import { useRef } from "react"
import { useHacking } from "../../../context/HackingContext"
import { useOptions } from "../../../context/StudentsContext"
import { useTheme } from "../../../context/"
import IconWand from "../../icons/IconWand"

export default function StudentSearching() {
  const [options, setOptions] = useOptions()
  const { setIsHacked } = useHacking()
  const { theme } = useTheme()
  const input = useRef(null)

  function updateSearch(value) {
    setOptions({
      ...options,
      search: value.target.value
    })
  }

  function verifyHacking(e) {
    if (e.code === 'Enter' && e.target.value.toLowerCase() === 'imperio') {
      input.current.value = ''
      setIsHacked(true)
    }
  }

  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr] mb-4">
      <input
        ref={input}
        onKeyDown={(e) => verifyHacking(e)}
        onChange={(e) => updateSearch(e)}
        type="text"
        placeholder="Search..."
        className={`bg-${theme}-dark border-${theme}-accent placeholder-${theme}-accent` + ' w-full border-2 p-2 outline-none placeholder:opacity-60'}
      />
      <IconWand className={ `fill-${theme}-accent` + ' h-12 place-self-center sm:row-start-1 sm:col-start-1'} />
    </div>
  )
}