import React from 'react'
import CloseIcon from './svg/CloseIcon'
import { useDispatch, useSelector } from "react-redux";
import { closeSide, openSide } from "../../store/SideToggle";

export default function Sidebar() {
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
        <>
            {sideMode && <div className='sidebarWrapper'>
                <div className="sidebarmain">
                    <div className="navclose">
                        <div className="text">
                            Food-hub
                        </div>
                        <div className="icon" onClick={sideToggle}>
                            <CloseIcon />
                        </div>
                    </div>
                    <ul className="sidelist">
                        <li className="list-item">Home</li>
                    </ul>
                </div>
            </div>}
        </>
    )
}
