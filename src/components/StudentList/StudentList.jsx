import { useStudents } from '../../context/'
import StudentCard from './StudentCard/StudentCard'
import StudentOptions from './StudentOptions/StudentOptions'

export default function StudentList () {
  const { displayedStudents } = useStudents()

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