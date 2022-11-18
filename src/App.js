import jeremy from "../src/assets/jeremy.png"
import iconwork from "../src/assets/iconwork.svg"
import iconplay from "../src/assets/iconplay.svg"
import iconstudy from "../src/assets/iconstudy.svg"
import iconexercise from "../src/assets/iconexercise.svg"
import iconsocial from "../src/assets/iconsocial.svg"
import iconselfcare from "../src/assets/iconselfcare.svg"
import Datas from "../src/records/data.json"
import { useState } from 'react'
import Card from "./Card"




const newData = Datas.map((items) => {
  switch (items.title) {
    case "Work":
      return {
        ...items,
        backgroundColor: "#ff8c66",
        icon: iconwork
      }

    case "Play":
      return {
        ...items,
        backgroundColor: "#56c2e6",
        icon: iconplay
      }
    case "Study":
      return {
        ...items,
        backgroundColor: "#ff5c7c",
        icon: iconstudy
      }

    case "Exercise":
      return {
        ...items,
        backgroundColor: "#4acf81",
        icon: iconexercise
      }
    case "Social":
      return {
        ...items,
        backgroundColor: "#7536d3",
        icon: iconsocial
      }
    case "Self Care":
      return {
        ...items,
        backgroundColor: "#f1c65b",
        icon: iconselfcare
      }

    default:
      return { ...items }
  }

})





function App() {

  const [range, setRange] = useState('daily')
  const [time, setTime] = useState('Last day')

  const btnClicked = (e) => {
    document.querySelectorAll('.btn').forEach(item => item.classList.remove('activebtn'))
    if (e.target.innerText === "Daily") {
      setRange('daily')
      setTime('Last day')
      e.target.classList.add('activebtn')
    }
    if (e.target.innerText === "Weekly") {
      setRange('weekly')
      setTime('Last week')
      e.target.classList.add('activebtn')
    }
    if (e.target.innerText === "Monthly") {
      setRange('monthly')
      setTime('Last month')
      e.target.classList.add('activebtn')
    }

  }

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#0f1424]">
        <section className="grid grid-cols-[repeat(4,14rem)] grid-rows-[repeat(2,auto)] gap-x-5 gap-y-5 justify-center items-center">
          <div className="Header row-span-full flex flex-col h-full">
            <div className="flex flex-col items-start p-8 bg-[#5847eb] h-full rounded-2xl -mb-5 relative z-10">
              <img src={jeremy} alt="jeremy" className="h-24 border-2 rounded-full mb-3 " />
              <p className="text-gray-300">Report for</p>
              <h1 className="text-3xl text-white">Jeremy<br /> Robson</h1>
            </div>

            <div className="Header-two bg-[#1c1f4a] h-full pt-12 pl-8 rounded-b-2xl">
              <ul className="text-gray-400 h-full flex flex-col gap-5">
                <li className="cursor-pointer activebtn btn text-xl hover:text-white" onClick={btnClicked}>Daily</li>
                <li className="cursor-pointer btn text-xl hover:text-white" onClick={btnClicked}>Weekly</li>
                <li className="cursor-pointer btn text-xl hover:text-white" onClick={btnClicked}>Monthly</li>
              </ul>

            </div>


          </div>
          {newData.map((item, index) => {
            return (
              <Card key={index} data={item} current={item.timeframes[range].current} previous={item.timeframes[range].previous} previousTitle={time} />
            )
          })}

        </section>
      </div >
    </>
  );
}

export default App;