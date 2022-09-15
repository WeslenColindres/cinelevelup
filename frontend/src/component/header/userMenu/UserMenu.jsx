import * as React from 'react'
import './userMenu.scss';

import { HiClipboardCheck, HiOutlinePlusSm } from 'react-icons/hi';
import { MdLogout } from "react-icons/md"

import ContextCinemaHallManager from '../../contextFuncion/contectCinemaHallManager/Manager';

const UserMenu = () => {
   
    const { logout } = React.useContext(ContextCinemaHallManager);
   
  return (
    <div>
        <div className="ontainer-logout">
        <input type="checkbox" id="btn-mas" />
        <div className="btn-mas">
            <label htmlFor="btn-mas" className="fa fa-plus"><HiOutlinePlusSm size={30}/></label>
        </div>
        <div className="redes">
            <a href="#"><HiClipboardCheck size={30}/></a>
            <a href="#" onClick={()=>logout()}><MdLogout size={30}/></a>
        </div>
        
    </div>
    </div>
  )
}

export default UserMenu