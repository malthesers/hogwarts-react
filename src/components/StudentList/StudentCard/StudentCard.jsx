import { useState } from "react"

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <article className="relative w-full mb-4 overflow-hidden">
      <div className="absolute top-0 left-0 p-4 grid w-full h-full">
        <img src={`./images/crests/${student.house.toLowerCase()}.svg`} className="w-2/3 lg:w-1/4 m-auto opacity-20"/>
      </div>
      <div className="relative grid grid-cols-[7rem_1fr] gap-4 cursor-pointer">
        <img src={`./images/students/${student.photo}`} alt={`portrait of ${student.firstName} ${student.lastName}`} className="rounded-[26px]"/>
        <div className="text-xl flex flex-col items-start justify-between my-2 md:text-2xl sm:grid sm:grid-cols-3 sm:items-center">
          <p className="px-2">{ student.firstName }</p>
          <p className="px-2">{ student.lastName }</p>
          <p className="px-2">{ student.house }</p>
        </div>
      </div>
      <div className="relative max-h-96 text-xl overflow-hidden">
        <div className="mt-2 md:flex md:justify-between">
          <div className="text-base md:text-xl flex flex-col justify-center gap-2 col-span-3 lg:col-span-2">
            <p>Full name: { student.lastName ? `${student.lastName}, ` : '' }{ student.firstName } { student.middleName } { student.nickName }</p>
            <p>Blood status: { student.bloodStatus }</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2 justify-between col-span-3 lg:col-span-1">
            <img src={`./images/badges/cap-${student.house.toLowerCase()}.svg`} className="h-16 sm:h-20 duration-300" />
            <img src="/images/badges/prefect.svg" className="h-16 sm:h-20 duration-300" />
            <img src="/images/badges/inquisitor.svg" className="h-16 sm:h-20 duration-300" />
            <img src="/images/badges/expelled.svg" className="h-16 sm:h-20 duration-300" />
          </div>
        </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-4 duration-200">
        <button className="border-2 p-2 flex justify-between">
          <p>Prefect</p>
          <span>+</span>
        </button>
        <button className="border-2 p-2 flex justify-between">
          <p>Inquisitor</p>
          <span>+</span>
        </button>
        <button className="border-2 p-2 flex justify-between relative sm:col-span-2 md:col-span-1">
          <p>Expal Student</p>
          {/* <img src="../assets/icons/howler.svg" alt="howler expulsion icon" className="absolute w-20 rotate-[10deg] top-[-7%] right-[3%]" /> */}
        </button>
        </div>
      </div>
    </article>
  )
}