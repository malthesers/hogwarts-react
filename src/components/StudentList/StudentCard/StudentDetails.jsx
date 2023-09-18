export default function StudentDetails({ student }) {
  return (
    <div className="relative max-h-96 text-xl overflow-hidden">
      <div className="mt-2 md:flex md:justify-between">
        <div className="text-base md:text-xl flex flex-col justify-center gap-2 col-span-3 lg:col-span-2">
          <p>Full name: {student.lastName ? `${student.lastName}, ` : ''}{student.firstName} {student.middleName} {student.nickName}</p>
          <p>Blood status: {student.bloodStatus}</p>
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
          <span>{ student.prefect ? '-' : '+' }</span>
        </button>
        <button className="border-2 p-2 flex justify-between">
          <p>Inquisitor</p>
          <span>{ student.inquisitor ? '-' : '+' }</span>
        </button>
        <button className="border-2 p-2 flex justify-between relative sm:col-span-2 md:col-span-1">
          <p>{ student.expelled ? 'Expelled' : 'Expel Student' }</p>
          <img src="src/assets/icons/howler.svg" alt="howler expulsion icon" className="absolute w-20 rotate-[10deg] top-[-7%] right-[3%]" />
        </button>
      </div>
    </div>
  )
}
  