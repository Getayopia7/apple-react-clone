import React from 'react'
import card from "../../commonSource/img/card_logo__b0k9gna8xemu_medium.png"
import MainProps from './MainProps.js'
import Section4 from './Section4.js'
import Section56 from './Section56.js'
import Youtubeapi from '../API/Youtubeapi'
// import Randomapi from '../API/Randomapi'
function Main () {

    return (
<>

       {/* section one */}
       <MainProps
       sectionClass="first-hightlight-wrapper "
	   titleWrapBold="title-wraper bold black"
	   Brand="iPhone 14"
	   discriptionWrapperBlack="description-wrapper black"
	   info="Big and biger"
	   linkWrapperClass="links-wrapper"
	   learnVal="learn More"
	   BuyVal="Buy" />

	{/* section 2 */}

	<MainProps
       sectionClass="second-hightlight-wrapper"
	   classifay="classified-container"
	   titleWrapBold="title-wraper bold white"
	   Brand="Give WOW."
	   discriptionWrapperBlack="description-wrapper white"
	   info="This holiday season,find the perfect gift for everyone on your list."
	   linkWrapperClass="links-wrapper"
	   learnVal="Shop the gift guide"/>

{/* third section */}
<MainProps
       sectionClass="third-hightlight-wrapper"
	   Cardimglink='Card-img-title'
	   img={card}
	   titleWrapBold="title-wraper bold"
	
	   discriptionWrapperBlack="description-wrapper"
	   info="Save 5% on Apple products with a new Apple Card through December 25."
	   linkWrapperClass="links-wrapper"
	   learnVal="learn More"
	   BuyVal="Apply now" />

	   {/* fourth section */}

<section className="fourth-heghlight-wrapper">
    <div className="container-fluid">
        <div className="row">
     
     <Section4
	 directionWrapper="left-side-wrapper col-sm-12 col-md-6"
	 directionContainer="left-side-container"
	 titleWrapper="title-wraper white"
	 title="iPhone 14 Pro"
	 discriptionWrapper="description-wraper white"
	 discription="Pro.Beyond."
	 priceDiscription="price-wrapper"
	 
	 linksWrapper="links-wrapper"
	 learn="Learn more"
	 application="Buy"
	 />
    
     <Section4
	   directionWrapper="right-side-wrapper col-sm-12 col-md-6"
	   directionContainer="right-side-container"
	   titleWrapper="title-wraper black"
	   title="Lovable.Drawable.Magical"
	   linksWrapper="links-wrapper"
	   learn="Learn more"
	   application="Buy"
	   />
        </div>
   </div> 
</section> 
 {/* 56 section */}
 < Section56 />
<Youtubeapi />
{/* <Randomapi /> */}
</>
) 
 }

export default Main



