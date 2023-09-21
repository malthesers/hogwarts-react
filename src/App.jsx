import { useEffect, useState } from 'react'
import { useTheme } from './context/ThemeContext'
import OverviewPanel from './components/OverviewPanel/OverviewPanel'
import StudentList from './components/StudentList/StudentList'
import HouseSelector from './components/HouseSelector/HouseSelector'
import MessagesContainer from './components/MessagesContainer/MessagesContainer'

function App() {
  const [showHouseSelector, setShowHouseSelector] = useState(true)
  const { theme } = useTheme()

  return (
    <main className={`bg-${theme}-light text-${theme}-accent ` + 'font-merinda min-h-[100dvh] pb-20'}>
      <section className='max-w-6xl mx-auto grid lg:grid-cols-[13rem_auto]'>
        <OverviewPanel />
        <StudentList />
      </section>
      <MessagesContainer />
      <HouseSelector showHouseSelector={showHouseSelector} setShowHouseSelector={setShowHouseSelector} />
    </main>
  )
}

export default App
