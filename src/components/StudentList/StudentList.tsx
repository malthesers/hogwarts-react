import { useEffect } from 'react'
import { useHacking, useStudents } from '../../context'
import StudentOptions from './StudentOptions/StudentOptions'
import StudentCard from './StudentCard/StudentCard'

export default function StudentList () {
  const { displayedStudents } = useStudents()
  const { isCursed, curseHogwarts } = useHacking()

  useEffect(() => {
    if (isCursed) curseHogwarts()
  }, [displayedStudents])

  return (
    <section className='p-4'>
      <StudentOptions />
      <div className='relative'>
        {displayedStudents.map((student) =>
          <StudentCard key={student.firstName} student={student} />
        )}
      </div>
    </section>
  )
}