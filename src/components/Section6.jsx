import React from 'react'
import { Button } from "@mui/material"
import send from "../assets/icons/send.png"
import iconAnd from "../assets/icons/&.png"
const Section6 = () => {
  return (
    <div className=" pb-[11.6vw] px-[6%] flex flex-col items-center">
      <img src={send} alt="" />
      <p className="text-[#D77474] uppercase font-semibold tracking-[2px] mt-[2.8vw] mb-[0.8vw]">
        Latest news
      </p>
      <h2
        className="flex items-center gap-[1vw] pt-[8px]"
        style={{ fontWeight: "400" }}
      >
        <span style={{ fontSize: "inherit" }}>Latest news</span>
        <i>
          <img src={iconAnd} />
        </i>
        <span style={{ fontSize: "inherit" }}>New updates</span>
      </h2>
      <div className="textField flex flex-col md:flex-row w-[100%]  lg:w-[34.7vw] mt-[4.5vw] mb-[2.9vw]">
        <input
          type="text"
          className="md:w-[70%] py-[14px] px-[25px] border-2"
          placeholder="Enter your email"
        />
        <Button
          className="md:w-[30%]"
          sx={{
            bgcolor: "black",
            "&:hover": {
              bgcolor: "darkred",
            },
          }}
        >
          <span className="text-white">SUBSCRIBE</span>
        </Button>
      </div>
      <p className="text-[#A1A1A1] dark:text-slate-200 flex items-center gap-[10px]">
        <span className="bg-[#8534FF] w-[15px] h-[15px]"></span>
        Sign up for our newsletter
      </p>
    </div>
  )
}

export default Section6