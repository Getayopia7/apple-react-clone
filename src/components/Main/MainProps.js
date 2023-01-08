import React from 'react'

function MainProps (props) {
    return (
      <>
 <section className={props.sectionClass}>
		<div className="container">
		<div className={props.classifay}></div>

			{/* <div className={alertClass}>
				{props.alert}
			</div> */}

			<div className={props.titleWrapBold}>
				{props.Brand} 
			</div> 
			<div className={props.Cardimglink}>
				<img src={props.img}/>
			</div>

			<div className={props.discriptionWrapperBlack}>
				{props.info}
			</div>
			<div className={props.priceWrapperClass}>
				{props.startingPrice}
			</div>

			<div className={props.linkWrapperClass}>
				<ul>
					<li><a href="">{props.learnVal}</a></li>
					<li><a href="">{props.BuyVal}</a></li>
				</ul> 
			</div>
		</div>
	</section>
      {/* fourth section */}

    
      </>
    )
  }

export default MainProps



