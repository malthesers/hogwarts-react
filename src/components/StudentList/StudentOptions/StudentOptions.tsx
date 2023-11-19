import StudentSearching from './StudentSearching'
import StudentFilters from './StudentFilters'
import StudentSorting from './StudentSorting'

export default function StudentOptions() {
  return (
    <div className='mb-6 text-lg md:text-2xl'>
      <StudentSearching />
      <StudentFilters />
      <StudentSorting />
    </div>
  )
}