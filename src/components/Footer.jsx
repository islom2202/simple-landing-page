import React from 'react'
import { Button, Typography } from "@mui/material"
import email from "../assets/icons/email.png"
import find from "../assets/icons/find.png"
import call from "../assets/icons/call.png"
const Footer = () => {
  return (
    <>
      <footer className="pb-[7.3vw] px-[6%] flex flex-col items-center text-center">
        <Typography fontFamily="Pacifico" fontSize={"clamp(26px, 3vw, 32px)"}>
          Pompeo
        </Typography>
        <p className="mt-[2vw]">
          I have always striven to fix beauty in wood, stone, <br />
          glass or pottery, that has been my creed.
        </p>
        <ul className="grid sm:grid-cols-3 justify-items-center w-[100%] mt-[4.9vw] gap-[20px]">
          <li className="flex flex-col  items-center">
            <img src={email} alt="" />
            <p className="font-bold tracking-[1px] mb-[20px] mt-[10px]">
              EMAIL
            </p>
            <small className="text-[#6C6C6C] dark:text-slate-200">
              pompeopotery@gmail.com
            </small>
          </li>
          <li className="flex flex-col  items-center">
            <img src={find} alt="" />
            <p className="font-bold tracking-[1px] mb-[20px] mt-[10px]">
              EMAIL
            </p>
            <small className="text-[#6C6C6C] dark:text-slate-200">
              Central Park, Manhattan <br />
              New York, 1101
            </small>
          </li>
          <li className="flex flex-col  items-center">
            <img src={call} alt="" />
            <p className="font-bold tracking-[1px] mb-[20px] mt-[10px]">
              EMAIL
            </p>
            <small className="text-[#6C6C6C] dark:text-slate-200">
              +1 292 345 678
            </small>
          </li>
        </ul>
      </footer>
      <footer className="pb-[4.3vw] px-[6%] flex flex-col items-center text-center">
        <p className="text-[#6C6C6C] dark:text-slate-200 font-medium">
          Template design by
          <span className="text-[#000] dark:text-orange-500">
            {" "}
            Dorian Hoxha - Image License Info{" "}
          </span>
          Powered by
          <span className="text-[#000] dark:text-orange-500"> Webflow</span>
        </p>
      </footer>
    </>
  )
}

export default Footer