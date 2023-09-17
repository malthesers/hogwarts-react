import { useState } from 'react'
import OverviewPanel from './components/OverviewPanel'
import StudentList from './components/StudentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-hogwarts-dark text-hogwarts-accent font-merinda min-h-screen pb-20'>
      <section className='max-w-6xl mx-auto lg:grid-cols-[13rem_auto]'>
        <OverviewPanel />
        <StudentList />
      </section>
    </main>
  )
}

export default App
