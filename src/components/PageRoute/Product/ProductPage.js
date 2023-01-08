import React, {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom'

function ProductPage() {
  let [product, setProduct]=useState()
  let [loading, setLoading]=useState(true)
  let {productID} =useParams()  
  console.log(productID)
  console.log(productID)
  useEffect(()=>{
    fetch(("http://www.localhost:5000/iphones"))
    .then((res)=>res.json())
    .then((data)=>{
        let filterProduct=data.products.filter((item)=>{
            return item.product_url===productID
        
         })
      setProduct(filterProduct) 
      setLoading(false)  
       
    })
  },[]);
 

  return (
    <>
    {loading ? (
      <h1>Loading</h1>
    ):(
    <div>
        <section className="internal-page-wrapper top-100 bottom-100">
          <div className="container">
            {product?.map((product)=>{
                    let id=product.product_url;
                    let title=product.product_name;
                    let img=product.product_img;
                    let Brief=product.product_brief_description;
                    let detail=product.product_description;;
                    let startPrice=product.starting_price;
                    let priceRange=product.price_range;

                    let productDiv=(
                        <div key={id} 
                        className="row h-100 align-items-center justify-content-center text-center">
                         <div className={`col-sm-12 col-md-6 my-auto order-1`}>
                         <div className="product-title">{title}</div>
                         <div className="product-brief">{Brief}</div>
                         <div className="starting-price">
                            {`starting at ${startPrice}`}
                         </div>
                         <div className="monthly-price">{priceRange}</div>
                         <div className="product_detail">{detail}</div>

             </div>
             <div className={`col-sm-12 col-md-6 order-2`}>
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
       )} 
    </>
  )
}

export default ProductPage