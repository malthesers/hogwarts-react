import { StudentButtons } from './StudentButtons/StudentButtons';
import PropTypes from 'prop-types';

StudentDetails.propTypes = {
  student: PropTypes.object,
  showDetails: PropTypes.bool
}

export default function StudentDetails({ student, showDetails }) {
  return (
    <div className={(showDetails ? 'max-h-96' : 'max-h-0') + ' relative text-xl overflow-hidden duration-[400ms] ease-linear'}>
      <div className='mt-2 md:flex md:justify-between'>
        <div className='text-base md:text-xl flex flex-col justify-center gap-2 col-span-3 lg:col-span-2'>
          <p>Full name: {student.lastName ? `${student.lastName}, ` : ''}{student.firstName} {student.middleName} {student.nickName}</p>
          <p>Blood status: {student.bloodStatus}</p>
        </div>
        <div className='mt-4 md:mt-0 flex gap-2 justify-between col-span-3 lg:col-span-1'>
          <img src={`./images/badges/cap-${student.house.toLowerCase()}.svg`} className={ (student.captain ? 'opacity-100' : 'opacity-50') + " h-16 sm:h-20 duration-300" } />
          <img src='/images/badges/prefect.svg' className={ (student.prefect ? 'opacity-100' : 'opacity-50') + " h-16 sm:h-20 duration-300" } />
          <img src='/images/badges/inquisitor.svg' className={ (student.inquisitor ? 'opacity-100' : 'opacity-50') + " h-16 sm:h-20 duration-300" } />
          <img src='/images/badges/expelled.svg' className={ (student.expelled ? 'opacity-100' : 'opacity-50') + " h-16 sm:h-20 duration-300" } />
        </div>
      </div>
      <StudentButtons student={student} />
    </div>
  )
}
  