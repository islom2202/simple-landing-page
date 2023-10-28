//Other
import { useState } from "react"
import './index.css'
import "./App.css"
// Components
import Header from "./components/header"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import Footer from "./components/Footer"
// MUI
import { makeStyles, ThemeProvider, createTheme } from "@mui/material"
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "clamp(1.4rem, 2vw, 1.7rem)",
        },
      },
    },
  },
})

function App() {
  const [count, setCount] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <div className="dark:bg-slate-950 dark:text-slate-200">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
