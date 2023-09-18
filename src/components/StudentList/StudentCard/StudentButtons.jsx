export function StudentButtons({ student }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-4 duration-200">
      <button className="border-2 p-2 flex justify-between">
        <p>Prefect</p>
        <span>{student.prefect ? '-' : '+'}</span>
      </button>
      <button className="border-2 p-2 flex justify-between">
        <p>Inquisitor</p>
        <span>{student.inquisitor ? '-' : '+'}</span>
      </button>
      <button className="border-2 p-2 flex justify-between relative sm:col-span-2 md:col-span-1">
        <p>{student.expelled ? 'Expelled' : 'Expel Student'}</p>
        <img src="src/assets/icons/howler.svg" alt="howler expulsion icon" className="absolute w-20 rotate-[10deg] top-[-7%] right-[3%]" />
      </button>
    </div>
  )
}
  