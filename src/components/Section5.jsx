import React from 'react'
import { Button } from "@mui/material"
const Section5 = () => {
  return (
    <div className="min-h-[471px] mt-[9.7vw] mb-[8.5vw] py-[120px] px-[6%] flex flex-col   section5">
      <p className="text-[#D77474] uppercase font-bold tracking-[2px]">
        Our online store
      </p>
      <h2 className="mt-[7px] mb-[13px] text-black">Ready to start shopping?</h2>
      <p className="text-[#595959] font-bold sm:w-[421px]">
        Lorem ipsum dolor sit amet,
        <u className="text-[#AC1313]">consectetur adipiscing elit</u> .
        Suspendisse varius enim in eros elementum.
      </p>
      <Button
        sx={{
          bgcolor: "#AC1313",
          padding: "20px 40px",
          "&:hover": {
            bgcolor: "darkred",
          },
          marginTop: "30px"
        }}
        className='sm:self-start'
      >
        <small className="text-white">New Collection</small>
      </Button>
    </div>
  )
}

export default Section5