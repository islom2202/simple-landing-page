import React from 'react'
import { useState } from 'react'
import { ShoppingCartOutlined, Close} from '@mui/icons-material'
import { Button, Typography} from '@mui/material'
import { Menu } from '@mui/icons-material'
import Switcher from './Switcher'

  // "homepage": "https://islom2202.github.io/simple-landing-page",
  // scripts
    //   "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",
const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="flex items-center justify-between px-[6%] py-[34px]">
      <div className="left flex items-center gap-[3vw]">
        <Typography fontFamily="Pacifico" fontSize={"clamp(26px, 3vw, 32px)"}>
          Pompeo
        </Typography>
        <Switcher />
      </div>
      <nav>
        {/* For desktop*/}
        {/* For burger*/}
        {navbar ? (
          <ul
            className="
         fixed h-[100vh] max-w-[300px] w-[100%] right-0 top-0 shadow-2xl shadow-black flex flex-col items-center px-[30px] py-[50px] z-10 dark:bg-slate-950 bg-white
         gap-[3vw]
        "
          >
            <i className="absolute top-4 right-4" onClick={()=> setNavbar(false)}>
              <Close sx={{fontSize: '2.5rem'}}/>
            </i>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Button
                startIcon={
                  <ShoppingCartOutlined
                    style={{ fontSize: "clamp(20px, 2vw, 27px)" }}
                  />
                }
                color="inherit"
              >
                <span className="capitalize">Cart</span>
              </Button>
            </li>
          </ul>
        ) : (
          <ul
            className="
         hidden md:flex gap-[3vw] items-center
        "
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Button
                startIcon={
                  <ShoppingCartOutlined
                    style={{ fontSize: "clamp(20px, 2vw, 27px)" }}
                  />
                }
                color="inherit"
              >
                <span className="capitalize">Cart</span>
              </Button>
            </li>
          </ul>
        )}

        <i className="block md:hidden" onClick={() => setNavbar(true)}>
          <Menu style={{ fontSize: "clamp(30px, 4vw, 42px)" }} />
        </i>
      </nav>
    </header>
  )
}

export default Header