import React from 'react'
import HeaderProps, { HeaderImage } from './HeaderProps'
import Search from '../../commonSource/img/search-icon.png'
import Cart from '../../commonSource/img/globalnav_bag_image__yzte50i47ciu_large.svg'
import Logo from '../../commonSource/img/globalnav_apple_image__b5er5ngrzxqq_large.svg'
// import HeaderRouting from '../Routing/MyRouting'

 function Header() {
    return (
      <>
        <div class="nav-wrapper fixed-top">
		<div class="container">
			<nav class="navbar navbar-toggleable-sm navbar-expand-md">
			    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
			        ☰
			    </button>
			    <a class="navbar-brand mx-auto" href="/"><img src={Logo} /></a>
			    <div class="navbar-collapse collapse">
			        <ul class="navbar-nav nav-justified w-100 nav-fill">
						<HeaderProps urllink='/store' link="Store" />
						<HeaderProps urllink='/mac' link="Mac" />
                        <HeaderProps urllink='/ipad' link="ipad" />
                        <HeaderProps urllink='/iphone' link="iphone" />
                        <HeaderProps urllink='/watch' link="watch" />
						<HeaderProps urllink='/airPods' link="AirPods" />
                        <HeaderProps urllink='/tv' link="tv" />
                        <HeaderProps urllink='/music' link="music" />
						<HeaderProps urllink='/appleOnly' link="OnlyApple" />
						<HeaderProps urllink='/accessories' link="Accessories" />
                        <HeaderProps urllink='/support' link="support" />
			        </ul>
					<HeaderImage  urllink='/image1' imglink={Search} />
                        <HeaderImage urllink='/image' imglink={Cart} />
			    </div>
			</nav>
		</div>
	</div>
  {/* <HeaderRouting /> */}

      </>
    )
}

export default Header