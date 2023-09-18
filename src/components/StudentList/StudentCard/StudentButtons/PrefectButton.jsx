export default function PrefectButton({ student }) {
  function togglePrefect() {
    if (student.prefect) {
      student.prefect = false
    } else if (housePrefects.value.length === 2) {
      prefectButton.value.classList.add('shake')
      // addToMessages('house', student.house, isCursed)
    } else if (housePrefects.value.some(student => student.gender === student.gender)) {
      prefectButton.value.classList.add('shake')
      // addToMessages('house', student.house, isCursed)
    } else {
      student.prefect = true
    }
  }

  return (
    <button className="border-2 p-2 flex justify-between">
      <p>Prefect</p>
      <span>{student.prefect ? '-' : '+'}</span>
    </button>
  )
}