export default function StudentCounter({ type, src }) {
  return (
    <span className="w-8 h-8 inline-grid place-content-center">
      <img src={`./images/${type}/${src}.svg`} className="w-auto h-8 grid-center opacity-50"/>
      <span className="text-2xl grid-center z-10">32</span>
    </span>
  )
}