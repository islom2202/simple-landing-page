import React from 'react'
import vase1 from "../assets/images/vase1.png"
import vase2 from "../assets/images/vase2.png"
const Section3 = () => {
  return (
    <div className="px-[6%] py-[6vw] flex flex-col gap-[15vw] md:gap-0">
      <ul className="grid sm:grid-cols-2 items-center gap-[4.5vw] w-[100%]">
        <li className="relative flex flex-col">
          <span className="bg-[#F5F5F5] h-[15.2vw] min-h-[220px] w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] "></span>
          <img src={vase1} className="self-center" />
        </li>
        <li>
          <h4>Gold & Black Pottery</h4>
          <p className="dark:text-slate-200 text-[#6C6C6C] pt-[1.7vw] pb-[2vw]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <p className="text-[1.4rem] dark:text-slate-200 text-black font-bold">
            View Details
          </p>
        </li>
      </ul>
      <ul className="grid sm:grid-cols-2 items-center gap-[4.5vw] w-[100%]">
        <li className="order-2 sm:order-1">
          <h4>Orange Ceramic</h4>
          <p className="dark:text-slate-200 text-[#6C6C6C] pt-[1.7vw] pb-[2vw]">
            Pri cu dico labores officiis, odio principes complectitur ad sea.
            Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid
            definitiones id cum, ad meliore perpetua referrentur sed. Quas
            suscipit ad mea verear vivendo tincidunt.
          </p>
          <p className="text-[1.4rem] dark:text-slate-200 text-black font-bold">
            View Details
          </p>
        </li>
        <li className="relative flex flex-col order-1 sm:order-2">
          <span className="bg-[#F5F5F5] h-[15.2vw] min-h-[220px] w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] "></span>
          <img src={vase2} className="self-center" />
        </li>
      </ul>
    </div>
  )
}

export default Section3