import { House } from "../../interfaces/House"

interface StudentCounterProps {
  src: House | 'expelled',
  type?: string,
  count: number
}

export default function StudentCounter({ src, type = 'crests', count }: StudentCounterProps) {
  return (
    <span className='w-8 h-8 inline-grid place-content-center'>
      <img src={`./images/${type}/${src}.svg`} className='w-auto h-8 grid-center opacity-50'/>
      <span className='text-2xl grid-center z-10'>{ count }</span>
    </span>
  )
}