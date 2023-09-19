import { useTheme } from "../../../context/ThemeContext"

export default function StudentSearching() {
  const theme = useTheme()

  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr] mb-4">
      <input
        placeholder="Search..."
        className={`bg-${theme}-dark border-${theme}-accent placeholder-${theme}-accent` + ' w-full border-2 p-2 outline-none placeholder:opacity-60'}
      />
      {/* <IconWand :className="`fill-${theme}-accent`" class="h-12 place-self-center sm:row-start-1 sm:col-start-1"/> */}
    </div>
  )
}