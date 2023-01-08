import React from 'react'
import Apple from '../../commonSource/img/apple_logo__e1nxe52505iu_medium.jpg'
import Watchaltra from '../../commonSource/img/promo_logo_apple_watch_ultra__ebzaahharnue_medium.png'
import WatchSeries from '../../commonSource/img/promo_logo_apple_watch_series_8__ee6riplsucuq_small.png'
import AM2 from '../../commonSource/img/promo_m2_chip__enw2kz91lsuq_small.png'


function Section56(props) {

    return (
      <div>

     
{/* fifth section */}

<section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={Apple}/>
							</div>
						</div>
						<div className="title-wraper black">
							AirPods 
						</div> 
						<div className="price-wrapper">
							Share the joy

						</div>
						<div className="links-wrapper">
							<ul>
							<li><a href="">Shop</a></li>
							</ul> 
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={Watchaltra}/>
							</div>
						</div>
						<div className="description-wraper">
							Adventure awaites.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>

{/* sixth section */}

<section className="sixth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={WatchSeries}/>
							</div>
						</div>
						<div className="description-wraper white">
							A healthy leap a head.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn More</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>						
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="title-wraper white">
							iPad Pro
						</div> 
						<div className="logo-wrapper white">
							<span className="super">Supercharded by</span><img src={AM2}/>
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>



      </div>
    )
  }

export default Section56