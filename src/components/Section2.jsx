import React from 'react'
import iconAnd from "../assets/icons/&.png"
import vases from "../assets/images/vases.png"
import mugs from "../assets/images/mugs.png"
import plates from "../assets/images/plates.png"
const Section2 = () => {
  return (
    <div className="px-[6%] py-[8.3vw] flex flex-col items-center">
      <p className="text-[#D77474] uppercase font-bold tracking-[2px]">
        Pompeo POttery
      </p>
      <h2 className="flex items-center gap-[1vw] pt-[8px]">
        <span style={{ fontSize: "inherit" }}>Porcelain</span>
        <i>
          <img src={iconAnd} />
        </i>
        <span style={{ fontSize: "inherit" }}>Pottery</span>
      </h2>
      <ul className="grid sm:grid-cols-3 w-[100%] justify-items-center gap-[10.5vw] py-[77px]">
        <li>
          <img src={vases} />
        </li>
        <li>
          <img src={mugs} />
        </li>
        <li>
          <img src={plates} />
        </li>
      </ul>
      <ul className="grid sm:grid-cols-2 w-[100%] justify-items-center gap-[6vw] lg:gap-[10vw]">
        <li className="flex flex-col gap-[1.7vw]">
          <h3 className="lg:w-[279px]">Hand Grafted Pottery since 1990</h3>
          <p className="dark:text-slate-200 text-[#6C6C6C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </li>
        <li className="flex flex-col gap-[1.7vw]">
          <h3 className="lg:w-[323px]">We Provide Premium Pottery Produts</h3>
          <p className="dark:text-slate-200 text-[#6C6C6C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Section2