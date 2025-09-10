import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/banner/hero-bg.png";
import heroThumb from "@/public/images/banner/hero-thumb.png";
import starImg from "@/public/images/banner/lotter-stars.png";
import ballOne from "@/public/images/banner/ball-one.png";
import ballFour from "@/public/images/banner/ball-four.png";
import ballTwo from "@/public/images/banner/ball-two.png";
import ballThree from "@/public/images/banner/ball-three.png";
import rocket from "@/public/images/rocket-two.png";
import premium from "@/public/images/premium.png";

const HeroSection = () => {
	return (
		<section
			className="hero"
			style={{
				backgroundImage: `url(${heroBg.src})`,
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-7 col-xl-7">
						<div className="hero__content">
							<span className="fw-6 secondary-text text-xl sub-title">
								<strong>Ancient Wisdom,</strong> Modern AI & Blockchain Innovation
							</span>
							<h1 className="title-animation fw-7 mt-25">
								Enter the Land of Myths, Challenge the Gods
							</h1>
							<p className="text-xl mt-25">
								Welcome to Mythoria, where ancient Mayan wisdom meets cutting-edge
								blockchain technology. Experience the revolutionary Ten-Chamber Challenge
								with AI-powered economics and sustainable GameFi innovation.
							</p>
							<div className="banner-action mt-40">
								<Link
									href="https://t.me/MythoriaMYR"
									aria-label="enter mythoria"
									title="enter mythoria"
									className="btn--primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Enter Mythoria <i className="ti ti-arrow-narrow-right"></i>
								</Link>
								<Link
									href="https://mythoria-2.gitbook.io/mythoria-docs"
									aria-label="read whitepaper"
									title="read whitepaper"
									className="btn--secondary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Read Whitepaper <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
							<div className="mt-60 hero__review">
								<p className="text-lg">Excellent</p>
								<div className="review">
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-filled"></i>
									<i className="ti ti-star-half-filled"></i>
								</div>
								<p className="text-lg">Backed by $10M BMHL Investment.</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-5 col-xl-5">
						<div className="hero__thumb-wrapper d-none d-lg-block">
							<div className="hero__thumb">
								<div className="main-img">
									<Image src={heroThumb} alt="Image" />
								</div>
							</div>
							<div className="star-img">
								<Image src={starImg} alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="ball-img-one">
				<Image src={ballOne} alt="Image" />
			</div>
			<div className="ball-img-two">
				<Image src={ballFour} alt="Image" />
			</div>
			<div className="ball-img-three">
				<Image src={ballTwo} alt="Image" />
			</div>
			<div className="ball-img-four">
				<Image src={ballThree} alt="Image" />
			</div>
			<div className="rocket">
				<Image src={rocket} alt="Image" />
			</div>
			<div className="btc d-none d-sm-block">
				<Image src={premium} alt="Image" />
			</div>
		</section>
	);
};

export default HeroSection;
