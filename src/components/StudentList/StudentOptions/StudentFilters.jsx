import { useOptions } from "../../../context/"
import { useTheme } from "../../../context/"
import IconChevron from "../../icons/IconChevron"
import IconBadge from "../../icons/IconBadge"
import useToggle from "../../../hooks/useToggle"

export default function StudentFilters() {
  const [showFilteringMethods, toggleFilteringMethods] = useToggle(false)
  const [options, setOptions] = useOptions()
  const { theme } = useTheme()

  const filteringMethods = {
    all: 'All Students',
    current: 'Current Students',
    expelled: 'Expelled Students',
    captain: 'Captains',
    prefect: 'Prefects',
    inquisitor: 'Inquisitors'
  }

  function updateFilter(filter) {
    toggleFilteringMethods(false)
    setOptions({
      ...options,
      filter: filter
    })
  }
  
  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr] mb-4">
      <div className="cursor-pointer">
        <p onClick={toggleFilteringMethods} className={`bg-${theme}-dark border-${theme}-accent` + ' border-2 p-2 flex justify-between items-center'}>
          <span>Filter by...</span>
          <IconChevron className={(showFilteringMethods ? 'rotate-180' : 'rotate-0') + ` fill-${theme}-accent` + ' h-4 duration-300'}/>
        </p>
        <div className={(showFilteringMethods ? 'max-h-80' : 'max-h-0') + " overflow-hidden duration-[250ms]"}>
          { Object.keys(filteringMethods).map((key) => 
            <p
              key={key}
              onClick={() => updateFilter(key)}
              className={`bg-${theme}-dark border-${theme}-accent` + ' border-2 border-t-0 p-2'}
            >
              <span>{ filteringMethods[key] }</span>
            </p>
          )}
        </div>
      </div>
      <IconBadge className={`fill-${theme}-accent` + ' h-12 place-self-center sm:row-start-1 sm:col-start-1'}/>
    </div>
  )
}