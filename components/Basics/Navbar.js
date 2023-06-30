import LocationIcon from "./svg/LocationIcon";
import ArrowDownIcon from "./svg/ArrowDownIcon";
import FilterIcon from "./svg/FilterIcon";
import SearchIcon from "./svg/SearchIcon";
import BarsIcon from "./svg/BarsIcon";
import { useDispatch, useSelector } from "react-redux";
import { closeSide, openSide } from "../../store/SideToggle";

export default function Navbar() {

  const sideMode = useSelector((state) => state.sideToggler.value);
  const dispatch = useDispatch();

  function sideToggle() {
    if (sideMode) {
      dispatch(closeSide())
    } else {
      dispatch(openSide())
    }
    console.log(sideMode);
  }
  return (
    <nav className='sticky top-0 customnavbar'>
      <div className="leftside">
        <div className="BarsIcon" onClick={sideToggle}>
          <BarsIcon />
        </div>
        <div className="location-icon">
          <LocationIcon />
        </div>
        <div className="locationBox">
          <p className="locationname">Office <ArrowDownIcon /> </p>
          <p className="locationaddress">D-113, sector 63, Noida (UP)</p>
        </div>
      </div>
      <div className="rightside">
        <div className="filter-btn">
          <FilterIcon />
        </div>
        <div className="filter-btn">
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
  
}