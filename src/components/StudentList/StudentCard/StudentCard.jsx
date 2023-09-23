import StudentDetails from "./StudentDetails"
import { useState } from "react"

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <article className="relative w-full mb-4 overflow-hidden">
      <div className="absolute top-0 left-0 p-4 grid w-full h-full">
        <img src={`./images/crests/${student.house.toLowerCase()}.svg`} className="w-2/3 lg:w-1/4 m-auto opacity-20"/>
      </div>
      <div onClick={() => setShowDetails(showDetails => !showDetails)} className="relative grid grid-cols-[7rem_1fr] gap-4 cursor-pointer">
        <img src={`./images/students/${student.photo}`} alt={`portrait of ${student.firstName} ${student.lastName}`} className="rounded-[26px]"/>
        <div className="text-xl flex flex-col items-start justify-between my-2 md:text-2xl sm:grid sm:grid-cols-3 sm:items-center">
          <p className="px-2">{ student.firstName }</p>
          <p className="px-2">{ student.lastName }</p>
          <p className="px-2">{ student.house }</p>
        </div>
      </div>
      <StudentDetails student={student} showDetails={showDetails} />
    </article>
  )
}