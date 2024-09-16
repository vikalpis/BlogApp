import React  from 'react'
// import ShimmerButton from "@/component/magicui/shimmer-button";


function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-900',
    textColor = 'text-white',
    className = '',
    ...props 
} ){
    
  return (
  
   <button className= {`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-blue-600 rounded-full shadow-md group hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 ${bgColor} ${textColor} ${className}`}{...props}>
    {/* <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 translate-y-0 bg-blue-500 group-hover:-translate-x-full group-hover:-translate-y-full"></span> */}
  <span className="absolute inset-0 w-full h-full border-2 border-white rounded-full"></span>
  <span className="relative"></span>{children}
   </button> 
  )
}

export default Button