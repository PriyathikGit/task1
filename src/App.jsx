import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form1 from "./components/page1/Form1"
import { useState } from "react"
import Form2 from "./components/Page2/Form2"

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    setCurrentStep((prevstate) => Math.min(prevstate + 1, 2))
  }
  const handleBack = () => {
    setCurrentStep((prevstate) => Math.max(prevstate - 1, 0))
  }
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1 handleNext={handleNext} />} />
          <Route path="/page2" element={<Form2 handleBack={handleBack} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
