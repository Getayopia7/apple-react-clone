import React,{useState, useEffect} from 'react'
import {json, Link} from 'react-router-dom'

 function Iphone() {
    let [products,setProducts]=useState([])
  useEffect(()=>{
    fetch(("/iphones.json"))
    .then((response)=>response.json())
    .then((data)=>{
        let prodata=data.products;
         setProducts(prodata);
    })
    .catch(()=>console.log("Error:unable to fetch"));
  },[]);
  console.log(products)

// async function fetchuser(){
//   let res=await fetch("/iphones.json");
//   console.log(res)
//   let resjson=await res.json()
//   console.log(resjson)
//   setProducts(resjson);
// }
// useEffect(()=>{
//   fetchuser(products)
//   console.log(fetchuser())
// },[]);

 let flip=true
    return (
    <div>
        <section className="internal-page-wrapper top-100 bottom-100">
          <div className="container">
            
              <div className="col-12"><div className="row h-100 align-items-center justify-content-center text-center">
                <div className="title-wraper bold">
                    iPhone Page
                    </div>
              </div>
            </div> 
            {
                products?.map((product)=>{
                    let id=product.product_url;
                    let title=product.product_name;
                    let img=product.product_img;
                    let Brief=product.product_brief_description;
                    let startPrice=product.starting_price;
                    let priceRange=product.price_range;
                    let productPage="/iphone"+id;
                    let order1=1;
                    let order2=2;
                    if(flip){
                        order1=2;
                        order2=1 ;
                      flip=!flip;
                    } else{
                        flip=!flip;
                    }

                    let productDiv=(
                        <div key={id} 
                        className="row h-100 align-items-center justify-content-center text-center">
                         <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                         <div className="product-title">{title}</div>
                         <div className="product-brief">{Brief}</div>
                         <div className="starting-price">
                            {`starting at ${startPrice}`}
                         </div>
                         <div className="monthly-price">{priceRange}</div>
                         <div className="links-wrapper">
                         <ul>
                         <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>

             </div>
             <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
              );
              return productDiv
                })};



          </div>
        </section>
    </div>
  )
}
export default Iphone












// let productDiv=(
//     <div key={id} 
//     className="row h-100 align-items-center justify-content-center text-center">
//      <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//      <div className="product-title">{title}</div>
//      <div className="product-brief">{Brief}</div>
//      <div className="starting-price">
//         {`starting at ${startPrice}`}
//      </div>
//      <div className="monthly-price">{priceRange}</div>
//      <div className="links-wrapper">
//      <ul>
//      <li>
//     <Link to={productPage}>Learn more</Link>
//   </li>
// </ul>
// </div>

// </div>
// <div className={`col-sm-12 col-md-6 order-${order2}`}>
// <div className="prodict-image">
// <img src={img} alt="" />
// </div>
// </div>
// </div>
// );
// return productDiv