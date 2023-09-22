import { useEffect, useState } from 'react'
import { useHacking } from './context/HackingContext'
import { useTheme } from './context/ThemeContext'
import MessagesContainer from './components/MessagesContainer/MessagesContainer'
import OverviewPanel from './components/OverviewPanel/OverviewPanel'
import HouseSelector from './components/HouseSelector/HouseSelector'
import StudentList from './components/StudentList/StudentList'

function App() {
  const [showHouseSelector, setShowHouseSelector] = useState(true)
  const { isHacked } = useHacking()
  const { theme } = useTheme()

  useEffect(() => {
    if (isHacked) {
      // setShowHouseSelector(true)
    }
  }, [isHacked])

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
