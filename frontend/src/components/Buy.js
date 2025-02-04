import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Buy = () => {
const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {

    getBuy();
  }, [])

  const getBuy = async () => {
    
    console.log(params)
    let result = await fetch(`http://localhost:5000/buy/${params.id}`)
    result = await result.json();
    setProducts(result)
    console.log(result)
   
  }
  

  const handleBtn = () => {

    alert("Thank you for watching This Web site")
    navigate('/course')

  }

  return (
    < >

    {products?
      <div className='mr-10'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
          <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-20'>
            <div className='space-y-12'>
              <h1 className='text-4xl font-bold'> Book Name :  <span className='text-pink-500'>{products.name}  !!!</span>
              </h1>
              <p className='text-xl '>{products.discription}!
              </p>
              <h1 className='text-xl font-bold'>Prise :  <span className='text-pink-500'>{products.prise}</span></h1>

            </div>
            <button onClick={handleBtn} className=" mt-16 px-6 py-1 mr-28 text-white font-semibold  bg-pink-500">buy Now</button>

            <Link to={"/course"} className=" mt-6 px-5 py-[5.5px] text-white font-semibold bg-pink-500">Back Now</Link>
          </div>
          <div className=' order-1 w-full md:w-1/2 '>
            <img src={products.img}
              className='w-92 h-92 ' alt='banner' />
          </div>
        </div>
      </div> : 

<div className="flex w-52 flex-col gap-4">
<div className="skeleton h-32 w-full"></div>
<div className="skeleton h-4 w-28"></div>
<div className="skeleton h-4 w-full"></div>
<div className="skeleton h-4 w-full"></div>
</div>}

    </>
  )
}

export default Buy