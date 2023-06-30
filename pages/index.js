import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { categories } from "../utils/categories";
import { useState } from "react";

export default function Home() {
  const [detailMode, setDetailMode] = useState(false);
  const [currInd, setcurrInd] = useState(0);

  function viewMenu(id) {
    setDetailMode(true);
    setcurrInd(id)
  }

  return (
    <div className="p-5 xl:px-20 bg-purple-300 min-h-screen">
      <Navbar />
      <div className="flex flex-wrap py-10">

      <div className="top-btn w-full">
          {detailMode &&
            <div className="tophead flex justify-between bg-white p-5 rounded mb-5 mx-3">
               <h3 className="text-purple-500 md:font-bold text-2xl"> {categories[currInd].category} </h3>
               
              <button className="btn bg-purple-500
           text-white py-1 px-4 rounded"
                onClick={() => setDetailMode(!detailMode)}>
                Main Menu
              </button>
             
            </div>}
        </div>


        {detailMode ? <> {categories[currInd].items?.map((item, i) => {
          return <Card item={item.item}
            price={item.price}
            ind={i}
            key={i}
            type='detail'
          />
        })}</> :
          <> {categories?.map((item, i) => {
            return <Card item={item.category}
              price={item.price}
              ind={i} viewMenu={viewMenu}
              type='main'
              key={i} />
          })}</>}
      </div>
    </div>
  );
}
