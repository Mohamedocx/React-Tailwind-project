import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
import { space } from "postcss/lib/list"

const Princing = () => {
  return (
    <div className="mt-20 ">

        <h2 className="text-3x sm:text-5xl lg:text-6xl text-center my-8 tracking-wider ">Pricing</h2>
        <div className="flex flex-wrap ">

            {pricingOptions.map((item,index)=>(
                
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl hover:border-orange-500 ">
                          <p className="text-4xl mb-8"> 
                          {item.title}
                          
                          {item.title === "Pro" && (
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent 
                            bg-clip-text text-xl mb-4 ml-2" >
                                (Most poular)
                            </span>
                          )}     
                          </p>
                          <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{item.price}</span>
                            <span className="text-neutral-500">/Month</span>
                          </p>
                          <ul>
                            {item.features.map((item,index)=>(
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-2">{item}</span>
                                </li>
                            ))}
                          </ul>

                          <a href="" className="inline-flex justify-center items-center text-center w-full h-12 p-5 
                          mt-20 tracking-tight text-xl hover:bg-orange-800 border 
                          border-orange-900 rounded-lg transition duration-200 ">Subscribe</a>
                        </div>
                    </div>
                

            ))}
        </div>
    </div>

  )
}

export default Princing