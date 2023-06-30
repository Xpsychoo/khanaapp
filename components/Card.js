import Image from 'next/image';
import React from 'react'

function Card({ item, price, ind, viewMenu, type }) {

  const imageurl = `https://source.unsplash.com/random/?${item}`

  return (
    <div className=" md:w-1/4 w-full">
      <div className="card bg-white p-5 mx-3 mb-5 shadow-sm rounded">
        <div className="image text-center">
          <Image
            className="navbarBrand mx-auto"
            src={imageurl}
            alt="Food-Gram"
            height={200}
            width={300}
          />
        </div>
        <div className="textsec p-3">
          <h3 className="title flex justify-between items-center">
            <div className="title text-2xl font-semibold">{item}</div>
            {price && <div className="price">{price}</div>}
          </h3>
        </div>
        <div className="footer mt-4">
          {type == 'main' ?
            <button className="common-btn"
              onClick={() => viewMenu(ind)}> View Menu </button> :
            <div className='count-Box text-right'>
              <button className="common-btn"> Add to Cart</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Card