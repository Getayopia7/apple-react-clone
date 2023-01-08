import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function IphoneDb() {
    let [item,setItem]=useState([])
    useEffect(()=>{
    fetch(("http://www.localhost:5000/iphones"))
    .then((res)=>res.json())
    .then((data)=>{
        setItem(data.products)
    })
    console.log(item)
},[]);
let flip= true
  return (
    <>
    <div>
        <section className="internal-page-wrapper top-100 bottom-100">
          <div className="container">
             
            {item?.map((pro)=>{
                    let id=pro.product_url;
                    let title=pro.product_name;
                    let img=pro.product_img;
                    let Brief=pro.product_brief_description;
                    let startPrice=pro.starting_price;
                    let priceRange=pro.price_range;
                    let productPage="/iphone/"+id;
                    console.log(productPage)
                    let order1=2;
                    let order2=1;
                    if(flip){
                        order1=1;
                        order2=2 ;
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
    </>
  )
}

export default IphoneDb