import { useEffect, useState } from 'react'
import OverviewPanel from './components/OverviewPanel/OverviewPanel'
import StudentList from './components/StudentList'
import getFormattedStudents from './utils/reformatting'

function App() {
  const [theme, setTheme] = useState('hogwarts')
  const [students, setStudents] = useState([])


  useEffect(() => {
    const formattedStudents = getFormattedStudents()
    setStudents(formattedStudents)
  }, [])

  return (
    <main className='bg-hogwarts-dark text-hogwarts-accent font-merinda min-h-screen pb-20'>
      <section className='max-w-6xl mx-auto lg:grid-cols-[13rem_auto]'>
        <OverviewPanel theme={theme} />
        <StudentList />
      </section>
    </main>
  )
}

export default App
