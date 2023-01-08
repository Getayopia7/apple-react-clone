import React from 'react'

function Section4(props) {
    return (
      <>
 
        <div className={props.directionWrapper}>
            <div className={props.directionContainer}>
                <div className={props.titleWrapper}>
                    {props.title} 
                </div> 
                <div className={props.discriptionWrapper}>
                    {props.discription}
                </div>
                <div className={props.priceDiscription}>
                    {props.price}<sup>{props.sup}</sup>
                </div>

                <div className={props.linksWrapper}>
                    <ul>
                        <li><a href="">{props.learn}</a></li>
                        <li><a href="">{props.application}</a></li>
                    </ul> 
                </div>
            </div>
        </div>
    					
   


      </>
    )
  }


export default Section4