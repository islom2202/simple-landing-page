import React from 'react'
import { Button } from "@mui/material"
import s4img1 from "../assets/images/s4img1.png"
import s4img2 from "../assets/images/s4img2.png"
import s4img3 from "../assets/images/s4img3.png"
import s4img4 from "../assets/images/s4img4.png"
import s4img5 from "../assets/images/s4img5.png"
import s4img6 from "../assets/images/s4img6.png"
const Section4 = () => {
  return (
    <div className="px-[6%] flex flex-col items-center">
      <p className="text-[#D77474] uppercase font-bold tracking-[2px]">
        Our online store
      </p>
      <h2 className="mt-[17px] mb-[4.5vw]">Pottery Collection</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-[1.4vw] w-[100%] mb-[4.2vw]">
        <li className="dark:border-slate-700 border-b-2 pb-[15px]">
          <img src={s4img1} className="w-[100%]" />
          <p className="dark:text-slate-200 text-[#6C6C6C]  font-semibold mt-[1.3vw]">
            Decor Plate
          </p>
          <small className="font-semibold mb-[1.1vw]">$ 65.00 USD</small>
        </li>
        <li className="dark:border-slate-700  border-b-2 pb-[15px]">
          <img src={s4img2} className="w-[100%]" />
          <p className="dark:text-slate-200 text-[#6C6C6C]  font-semibold mt-[1.3vw]">
            Decor Plate
          </p>
          <small className="font-semibold mb-[1.1vw]">$ 65.00 USD</small>
        </li>
        <li className="dark:border-slate-700  border-b-2 pb-[15px]">
          <img src={s4img3} className="w-[100%]" />
          <p className="dark:text-slate-200 text-[#6C6C6C]  font-semibold mt-[1.3vw]">
            Decor Plate
          </p>
          <small className="font-semibold mb-[1.1vw]">$ 65.00 USD</small>
        </li>
        <li className="dark:border-slate-700  border-b-2 pb-[15px]">
          <img src={s4img4} className="w-[100%]" />
          <p className="dark:text-slate-200 text-[#6C6C6C]  font-semibold mt-[1.3vw]">
            Decor Plate
          </p>
          <small className="font-semibold mb-[1.1vw]">$ 65.00 USD</small>
        </li>
        <li className="dark:border-slate-700  border-b-2 pb-[15px]">
          <img src={s4img5} className="w-[100%]" />
          <p className="dark:text-slate-200 text-[#6C6C6C]  font-semibold mt-[1.3vw]">
            Decor Plate
          </p>
          <small className="font-semibold mb-[1.1vw]">$ 65.00 USD</small>
        </li>
        <li className="dark:border-slate-700  border-b-2 pb-[15px]">
          <img src={s4img6} className="w-[100%]" />
          <p className="dark:text-slate-200 text-[#6C6C6C]  font-semibold mt-[1.3vw]">
            Decor Plate
          </p>
          <small className="font-semibold mb-[1.1vw]">$ 65.00 USD</small>
        </li>
      </ul>
      <Button sx={{ bgcolor: "#AC1313", padding: '20px 40px', '&:hover': {
        bgcolor: 'darkred'
      } }}>
        <small className="text-white">View All Products</small>
      </Button>
    </div>
  )
}

export default Section4