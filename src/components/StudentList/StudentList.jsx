import { useStudentList } from "../../context/StudentsContext"
import StudentCard from "./StudentCard/StudentCard"

export default function StudentList () {
  const students = useStudentList()

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