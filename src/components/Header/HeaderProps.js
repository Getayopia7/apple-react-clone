import React from "react";
import { Link } from "react-router-dom";
import './Headerprops.css'

function HeaderProps({urllink, link}){
    return (
      <>
        
          <li className="nav-item clscolor">
            {/* use link instead of a to stop refreshing evrery singel click , use to instead of href */}
            <Link class="nav-link js-scroll-trigger" to={urllink}>
              {link}
            </Link>
            </li>
            
      </>
    );
  
}

export default HeaderProps;



function HeaderImage({imglink, imgurl}) {
    return (
      <>

        <li className="nav-item clscolor img">
            <Link class="nav-link js-scroll-trigger headerImage" to={imgurl}>
              <img className="searchCartimg" src={imglink} />
            </Link>
            
          </li>

      </>
    )
}

export  {HeaderImage};
