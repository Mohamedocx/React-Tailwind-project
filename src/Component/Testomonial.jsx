import { testimonials } from "../constants"


const Testomonial = () => {
  return (
    <div className="mt-10 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people Say</h2>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial,index)=>(
          <div key={index} className="w-full sm:w1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-nutral rounded-md p-6 text-md border border-nutral-800 hover:border-orange-500 
            font-thin">
              <p>
                {testimonial.text}
              </p>
              <div className="flex mt-8 items-center">
                <img className="w-12 h-12 mr-6 rounded-full border
                 border-neutral-500" src={testimonial.image} alt={testimonial.user} />

                 <div>
                 <h6>{testimonial.user}</h6>
              <span className="text-sm fontnormal italic text-neutral-600">{testimonial.company}</span>
                 </div>
              </div>
           
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Testomonial