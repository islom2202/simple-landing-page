import React from 'react'
import s1bg from "../assets/images/s1bg.png"
import s1hero from "../assets/images/s1hero.png"
import iconAnd from "../assets/icons/&.png"
import { Button } from "@mui/material"
const Section1 = () => {
  return (
    <section
      className={`section1 min-h-[708px] grid lg:grid-cols-2 items-center px-[6%] py-[80px] gap-[20vw] md:gap-[10vw] lg:gap-0`}
    >
      <div className="left flex flex-col lg:items-start text-center lg:text-start gap-[14px]">
        <p className="text-[#D77474] uppercase font-bold tracking-[2px]">
          Pompeo POttery
        </p>
        <h1 className={`text-black lg:w-[422px] relative h1 `}>
          Unique Porcelain Stone Collection
        </h1>
        <p className="text-[#6C6C6C] mb-[37px]">
          Unique & modern pottery made by our master in porcelain & stones
        </p>
        <Button
          sx={{
            color: "white",
            padding: "19px 40px",
            bgcolor: "#AC1313",
            "&:hover": {
              bgcolor: "darkred",
            },
          }}
        >
          <span>Shop Collection</span>
        </Button>
      </div>
      <div className="right">
        <img src={s1hero} alt="" />
      </div>
    </section>
  )
}

export default Section1