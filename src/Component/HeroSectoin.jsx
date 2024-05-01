import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSectoin = () => {
  return (
<>
<div className='flex flex-col items-center mt-6 lg:mt-20'>

    <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        virchual Buld Tools For only Smart <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "}
        Developer's and all smart people 
            </span>  
         
    </h1>
    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
    Virtual reality (VR) services have become increasingly popular as the technology continues to advance and become more accessible to consumers and businesses. VR services encompass a wide range of offerings, 
    from immersive entertainment experiences to enterprise-level applications.
        </p>
        <div className='flex justify-center my-10'>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx3 rounded-md'>
                Start Now Free
            </a>
            <a href="" className='py-3 px-4 mx-3 rounded-md border '>
                Docimantation
            </a>
        </div>
        <div className='flex mt-10 justify-center item-center'>
            <video src={video1}
            autoPlay 
            loop 
            muted 
            className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-4  my-4'>
               
                You Browser Dos't Support The Type The video
            </video>
            <video src={video1}
            autoPlay 
            loop 
            muted 
            className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-4  my-4'>
               
                You Browser Dos't Support The Type The video
            </video>
        </div>
</div>
</>
)
}

export default HeroSectoin