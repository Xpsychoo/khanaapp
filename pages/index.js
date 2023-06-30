import Navbar from "../components/Basics/Navbar";
import Sidebar from "../components/Basics/Sidebar";
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
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      <div className="flex flex-wrap py-10">

        <div className="top-btn w-full">
          {detailMode &&
            <div className="tophead flex justify-between bg-white p-5 rounded mb-5 mx-3">
              <h3 className="theme-color md:font-bold text-2xl"> {categories[currInd].category} </h3>

              <button className="common-btn"
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
