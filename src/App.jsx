import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import getFormattedStudents from './utils/reformatting'
import OverviewPanel from './components/OverviewPanel/OverviewPanel'
import StudentList from './components/StudentList/StudentList'
import HouseSelector from './components/HouseSelector/HouseSelector'

function App() {
  const [students, setStudents] = useState([])
  const [showHouseSelector, setShowHouseSelector] = useState(false)

  const theme = useContext(ThemeContext)

  function toggleHouseSelector() {
    setShowHouseSelector(showHouseSelector => !showHouseSelector)
  }


  useEffect(() => {
    const formattedStudents = getFormattedStudents()
    setStudents(formattedStudents)
  }, [])

  return (
    <main className={`bg-${theme}-light text-${theme}-accent ` + 'font-merinda min-h-screen pb-20'}>
      <section className='max-w-6xl mx-auto grid lg:grid-cols-[13rem_auto]'>
        <OverviewPanel students={students} />
        <StudentList students={students} />
      </section>
      <HouseSelector toggleHouseSelector={toggleHouseSelector} showHouseSelector={showHouseSelector} />
    </main>
  )
}

export default App
