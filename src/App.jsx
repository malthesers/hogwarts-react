import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import OverviewPanel from './components/OverviewPanel/OverviewPanel'
import StudentList from './components/StudentList/StudentList'
import HouseSelector from './components/HouseSelector/HouseSelector'

function App() {
  const [showHouseSelector, setShowHouseSelector] = useState(false)
  
  const { theme } = useTheme()

  function toggleHouseSelector() {
    setShowHouseSelector(showHouseSelector => !showHouseSelector)
  }

  return (
    <main className={`bg-${theme}-light text-${theme}-accent ` + 'font-merinda min-h-screen pb-20'}>
      <section className='max-w-6xl mx-auto grid lg:grid-cols-[13rem_auto]'>
        <OverviewPanel />
        <StudentList />
      </section>
      <HouseSelector toggleHouseSelector={toggleHouseSelector} showHouseSelector={showHouseSelector} />
    </main>
  )
}

export default App
