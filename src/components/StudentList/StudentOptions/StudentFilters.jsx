import { useState } from "react"
import { useTheme } from "../../../context/ThemeContext"
import IconChevron from "../../icons/IconChevron"
import IconBadge from "../../icons/IconBadge"

export default function StudentFilters() {
  const theme = useTheme()

  const [showFilteringMethods, setShowFilteringMethods] = useState(false)
  const filteringMethods = {
    all: 'All Students',
    current: 'Current Students',
    expelled: 'Expelled Students',
    captain: 'Captains',
    prefect: 'Prefects',
    inquisitor: 'Inquisitors'
  }
  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr] mb-4">
      <div className="cursor-pointer">
        <p className={`bg-${theme}-dark border-${theme}-accent` + ' border-2 p-2 flex justify-between items-center'}>
          <span>Filter by...</span>
          <IconChevron className={`fill-${theme}-accent` + ' h-4 duration-300'}/>
        </p>
        <div className="max-h-80 overflow-hidden">
          { Object.keys(filteringMethods).map((key) => 
            <p key={key} className={`bg-${theme}-dark border-${theme}-accent` + ' border-2 border-t-0 p-2'}>
              <span>{ filteringMethods[key] }</span>
            </p>
          )}
        </div>
      </div>
      <IconBadge className={`fill-${theme}-accent` + ' h-12 place-self-center sm:row-start-1 sm:col-start-1'}/>
    </div>
  )
}