import { useState } from 'react'
import OverviewPanel from './components/OverviewPanel'
import StudentList from './components/StudentList'

function App() {
  const [theme, setTheme] = useState('hogwarts')

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
