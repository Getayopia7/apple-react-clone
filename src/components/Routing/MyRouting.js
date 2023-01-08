import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Main from '../Main/Main'
import Cart from '../PageRoute/Cart'
import Four04 from '../PageRoute/Four04'
import Ipad from '../PageRoute/Ipad'
import Iphone from '../PageRoute/Iphone'
// import IphoneDb from '../PageRoute/IphoneDb'
import Mac from '../PageRoute/Mac'
import Music from '../PageRoute/Music'
import ProductPage from '../PageRoute/Product/ProductPage'
import Search from '../PageRoute/Search'
import Support from '../PageRoute/Support'
import Tv from '../PageRoute/Tv'
import Watch from '../PageRoute/Watch'
import AirPods from '../PageRoute/AirPods'
import OnlyApple from'../PageRoute/OnlyApple'
import Accessories from '../PageRoute/Accessories'
import Store from '../PageRoute/Store'
function HeaderRouting() {
  return (
    <>
    <br />
  <br />
  <br />
  <br />
   <Routes>
        
        <Route path="/" element={<Main/>} />
        <Route path="/store" element={<Store/>} />
        <Route path='/Mac' element={<Mac/>} />
        <Route path='/ipad' element={<Ipad/>} />
        {/* iphone from local json documetn */}
        <Route path='/iphone' element={<Iphone />} />
        {/* iphone data from database  */}
        {/* <Route path='/iphone' element={<IphoneDb />} /> */}
        <Route path='/watch' element={<Watch />} />
        <Route path='/airpods' element={<AirPods />} />
        <Route path='/tv' element={<Tv/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/appleonly' element={<OnlyApple />} />
        <Route path='/accessories' element={<Accessories/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/search' element={<Search/>} />
        <Route path="*" element={<Four04 />} />
        <Route path="/iphone/:productID" element={<ProductPage/>}/>
      </Routes>
    </>
  )
}
export default HeaderRouting