import { useOptions } from "../../../context/StudentsContext"
import { useTheme } from "../../../context/ThemeContext"
import IconChevron from "../../icons/IconChevron"
import IconHat from "../../icons/IconHat"
import useToggle from "../../../hooks/useToggle"

export default function StudentFilters() {
  const [options, setOptions] = useOptions()
  const { theme } = useTheme()

  const [showSortingMethods, toggleSortingMethods] = useToggle(false)
  const sortingMethods = {
    firstName: 'First name',
    lastName: 'Last name',
    house: 'House'
  }

  function updateSorting(sorting) {
    setOptions({
      ...options,
      sorting: sorting,
      sortingOrder: (options.sorting === sorting ? options.sortingOrder *= -1 : 1)
    })
  }

  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-[auto_4rem] sm:grid-cols-[7rem_1fr]">
      <div className="cursor-pointer">
        <p onClick={toggleSortingMethods} className={`bg-${theme}-dark border-${theme}-accent` + " sm:hidden border-2 p-2 flex justify-between items-center"}>
          <span>Sort by...</span>
          <IconChevron className={(showSortingMethods ? 'rotate-180' : 'rotate-0') + ` fill-${theme}-accent` + " h-4 duration-300"} />
        </p>
          <div className={(showSortingMethods ? 'max-h-40' : 'max-h-0') + " sm:hidden overflow-hidden duration-[250ms]"}>
            { Object.keys(sortingMethods).map((method) =>
              <p
                key={method}
                onClick={() => updateSorting(method)}
                className={`bg-${theme}-dark border-${theme}-accent` + " border-2 border-t-0 p-2 flex justify-between items-center"}
              >
                <span>{ sortingMethods[method] }</span>
                <IconChevron className={(options.sortingOrder === 1 ? 'scale-y-100' : '-scale-y-100') + (options.sorting === method ? '' : ' opacity-0') + ` fill-${theme}-accent` + " h-4 duration-300"} />
              </p>
            )}
          </div>
        <div className="hidden sm:grid grid-cols-3">
            { Object.keys(sortingMethods).map((method) =>
              <p
                key={method}
                onClick={() => updateSorting(method)}
                className={`fill-${theme}-accent` + " p-2 flex justify-between items-center"}
              >
                <span>{ sortingMethods[method] }</span>
                <IconChevron className={(options.sortingOrder === 1 ? 'scale-y-100' : '-scale-y-100') + (options.sorting === method ? '' : ' opacity-0') + ` fill-${theme}-accent` + " h-3 md:h-4 duration-300"} />
              </p>
            )}
        </div>
      </div>
      <IconHat className={`fill-${theme}-accent` + " h-12 place-self-center sm:row-start-1 sm:col-start-1"} />
    </div>
  )
}