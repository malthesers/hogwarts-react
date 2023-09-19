import InquisitorButton from "./InquisitorButton"
import PrefectButton from "./PrefectButton"
import ExpelButton from "./ExpelButton"

export function StudentButtons({ student }) {
  return (
    <div className={(student.expelled ? 'opacity-30' : '') + ' grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-4 duration-200'}>
      <PrefectButton student={student} />
      <InquisitorButton student={student} />
      <ExpelButton student={student} />
    </div>
  )
}
  