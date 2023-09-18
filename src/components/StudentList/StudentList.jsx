import { useAllStudents } from "../../context/StudentsContext"
import StudentCard from "./StudentCard/StudentCard"

export default function StudentList () {
  const students = useAllStudents()

  return (
    <section className="p-4">
      <div></div>
      <div className="relative">
        {students.map((student) =>
          <StudentCard key={student.firstName} student={student} />
        )}
      </div>
    </section>
  )
}