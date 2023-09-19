import { useStudents } from "../../context/StudentsContext";
import { useTheme } from "../../context/ThemeContext"
import StudentCounter from "./StudentCounter";

export default function () {
  const students = useStudents()
  const theme = useTheme()

  return (
    <aside>
      <div className="lg:fixed w-full lg:max-w-[13rem] grid grid-cols-2 lg:grid-cols-1 lg:gap-4 p-4 text-center">
        <div className="flex flex-col justify-center mb-4 col-span-2 xs:col-span-1">
          <div>
            <p className="text-3xl lg:text-4xl mb-2">Hogwarts</p>
            <p className="text-xl lg:text-2xl mb-2">Class of 1991</p>
          </div>
          <div>
            <p className="text-lg lg:text-xl mb-2">Students</p>
            <div className="flex justify-center gap-2 mb-2">
              <StudentCounter src='hogwarts' count={students.filter(student => !student.expelled).length}/>
              <StudentCounter src='expelled' type="badges" count={students.filter(student => student.expelled).length}/>
            </div>
            <div className="flex justify-center">
              <StudentCounter src='gryffindor' count={students.filter(student => student.house === 'Gryffindor').length}/>
              <StudentCounter src='slytherin' count={students.filter(student => student.house === 'Slytherin').length}/>
              <StudentCounter src='hufflepuff' count={students.filter(student => student.house === 'Hufflepuff').length}/>
              <StudentCounter src='ravenclaw' count={students.filter(student => student.house === 'Ravenclaw').length}/>
            </div>
          </div>
        </div>
        <img src={`./images/crests/${theme}.svg`} alt="Hogwarts Crest" className="w-full max-w-[12rem] mx-auto col-span-2 xs:col-span-1"/>      
        <div className="text-xl sm:text-2xl mt-4 lg:mt-0 col-span-2 lg:col-span-1 lg:row-start-2 lg:row-end-2">
          <p className="inline-block">Currently Displayed: </p>
          <span className="inline-block w-8 ml-2 text-left">{ students.length }</span>
        </div>
      </div>
    </aside>
  )
}