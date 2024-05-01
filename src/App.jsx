import { useState } from 'react'
import NavBar from './Component/NavBar'
import HeroSectoin from './Component/HeroSectoin'
import FeatureSection from './Component/FeatureSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <NavBar />

      <div className='max-w-7xl mx-auto pt-20 px-6'>
        
        
       <HeroSectoin />
       <FeatureSection />
   
      

      

        </div> 
     
    </>
  )
}

export default App
