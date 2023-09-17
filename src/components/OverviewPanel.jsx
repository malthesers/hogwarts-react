import CrestCounter from "./OverviewPanel/StudentCounter";

export default function ({ theme }) {
  const houseCounters = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'].map((house) => 
    <CrestCounter type="crests" src={house} key={house} />
  )

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
              <CrestCounter type="crests" src='hogwarts'/>
              <CrestCounter type="badges" src='expelled'/>
            </div>
            <div className="flex justify-center">
              { houseCounters }
            </div>
          </div>
        </div>
        <img src={`./images/crests/${theme}.svg`} alt="Hogwarts Crest" className="w-full max-w-[12rem] mx-auto col-span-2 xs:col-span-1"/>      
        <div className="text-xl sm:text-2xl mt-4 lg:mt-0 col-span-2 lg:col-span-1 lg:row-start-2 lg:row-end-2">
          <p className="inline-block">Currently Displayed: </p>
          <span className="inline-block w-8 ml-2 text-left">32</span>
        </div>
      </div>
    </aside>
  )
}