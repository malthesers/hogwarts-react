import { useDisplayedStudents } from "../../context/StudentsContext"
import StudentCard from "./StudentCard/StudentCard"

export default function StudentList () {
  const displayedStudents = useDisplayedStudents()

  console.log(displayedStudents)

  return (
    <section className="p-4">
      <div></div>
      <div className="relative">
        {displayedStudents.map((student) =>
          <StudentCard key={student.firstName} student={student} />
        )}
      </div>
    </section>
  )
}