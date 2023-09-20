import { useStudents } from "../../context/StudentsContext"
import StudentCard from "./StudentCard/StudentCard"
import StudentOptions from "./StudentOptions/StudentOptions"

export default function StudentList () {
  const {students, dispatch, displayedStudents} = useStudents()

  return (
    <section className="p-4">
      <StudentOptions />
      <div className="relative">
        {displayedStudents.map((student) =>
          <StudentCard key={student.firstName} student={student} />
        )}
      </div>
    </section>
  )
}