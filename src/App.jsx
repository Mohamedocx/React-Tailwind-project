import { useState } from 'react'
import NavBar from './Component/NavBar'
import HeroSectoin from './Component/HeroSectoin'
import FeatureSection from './Component/FeatureSection'
import WorkFlow from './Component/WorkFlow'
import Princing from './Component/Princing'
import Testomonial from './Component/Testomonial'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <NavBar />

      <div className='max-w-7xl mx-auto pt-20 px-6'>
        
        
       <HeroSectoin />
       <FeatureSection />
       <WorkFlow />
        <Princing />
        <Testomonial />
        

      

        </div> 
     
    </>
  )
}

export default App
