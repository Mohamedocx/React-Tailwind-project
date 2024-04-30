import logo  from '../assets/logo.png'
import { Menu,X } from 'lucide-react'

import {navItems} from "../constants/index"
import { useState } from 'react'
const NavBar = () => {

    const [mobileDrawer ,setMobileDreawer] = useState(false);

    const toggelnav = ()=>{
      setMobileDreawer(!mobileDrawer);  
    }
  return (

    
<div>
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px4 m-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} className='h-10 w-10 mr-2 ' alt="" />
                    <span className='tetx-xl tracking-tight'>Khialy-R</span>
                </div>
                <ul className='hidden lg:flex ml-40 space-x-12 '>
                   {navItems.map((item,index)=>(
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                   ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 item-center">
                    <a href=""className='py-2 px-3 border rounded-md '>
                        Sing In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 rounded-md px-3 py-2'>
                        Create An Account
                    </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggelnav}>
                        {mobileDrawer ? <X/> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawer && (
                <div className='fixed right-0 z-20 ng-neutral-900 w-full p-12 flex 
                flex-col justify-center items-center lg:hidden  '>
                    <ul>
                        {navItems.map((item,index)=>(
                            <li key={index} className='p-2 '>
                                <a href={item.href} >{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-6'>
                        <a href="" className='py-2 px-3 rounded-md bg'>
                            Sign In
                        </a>
                        <a href="" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to bg-orange-800 transition ease-in-out duration-500'>
                            Sign In
                        </a>
                       
                    </div>
                </div>
            )}
        </div>
    </div>
  
    <div></div>
</div>

)
}

export default NavBar