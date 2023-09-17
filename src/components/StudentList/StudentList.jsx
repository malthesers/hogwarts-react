import StudentCard from "./StudentCard/StudentCard"

export default function StudentList ({ students }) {
  const studentList = students.map(student =>
    <StudentCard key={student.firstName} student={student} />
  )

  return (
    <section className="p-4">
      <div></div>
      <div>
        {studentList}
      </div>
    </section>
  )
}