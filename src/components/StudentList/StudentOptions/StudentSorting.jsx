import { useTheme } from "../../../context/ThemeContext"
import IconChevron from "../../icons/IconChevron"
import IconHat from "../../icons/IconHat"

export default function StudentFilters() {
  const theme = useTheme()

  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr]">
      <div className="cursor-pointer">
        <p className={`bg-${theme}-dark border-${theme}-accent` + " sm:hidden border-2 p-2 flex justify-between items-center"}>
          <span>Sort by...</span>
          <IconChevron className={`fill-${theme}-accent` + " h-4 duration-300"} />
        </p>
          <div className="sm:hidden max-h-40 overflow-hidden">
            {/* <p v-for="(name, method) in sortingMethods" :key="method" @click="updateSorting(method)" :className="`bg-${theme}-dark border-${theme}-accent`" className="border-2 border-t-0 p-2 flex justify-between items-center">
              <span>{{ name }}</span>
              <IconChevron :className="[ `fill-${theme}-accent`, sortingOrder === 1 ? 'scale-y-100' : '-scale-y-100', sorting === method ? '' : 'scale-y-0 opacity-0' ]" className="h-4 duration-300"/>
            </p> */}
          </div>
        <div className="hidden sm:grid grid-cols-3">
          {/* <p v-for="(name, method) in sortingMethods" :key="method" @click="updateSorting(method)" className="p-2 flex justify-between items-center">
            <span>{{ name }}</span>
            <IconChevron :className="[ `fill-${theme}-accent`, sortingOrder === 1 ? 'scale-y-100' : '-scale-y-100', sorting === method ? '' : 'scale-y-0 opacity-0' ]" className="h-3 md:h-4 duration-300"/>
          </p> */}
        </div>
      </div>
      <IconHat className={`fill-${theme}-accent` + " h-12 place-self-center sm:row-start-1 sm:col-start-1"} />
    </div>
  )
}