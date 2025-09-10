import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/authentication/circle.png";
import two from "@/public/images/about-thumb.png";
import three from "@/public/images/authentication/numbers.png";
import four from "@/public/images/spring-two.png";
import five from "@/public/images/rocket-xs.png";

const AboutTwoSection = () => {
	return (
		<section className="about about-three about-alternate pt-120 pb-120">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-lg-5 col-xl-5">
						<div className="about-three__wrapper">
							<div
								className="authentication__thumb text-center d-none d-lg-block"
								style={{
									backgroundImage: "url(images/authentication/thumb-sm.png)",
								}}
							>
								<div className="circle-img">
									<Image src={one} alt="Image" />
								</div>
								<div className="thumb">
									<Image
										src={two}
										alt="Image"
										data-aos="zoom-in"
										data-aos-duration="600"
										data-aos-delay="200"
									/>
								</div>
								<div className="number-img">
									<Image src={three} alt="Image" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
						<div
							className="about__content"
							data-aos="fade-right"
							data-aos-duration="600"
						>
							<div className="section__content text-start">
								<span className="fw-6 secondary-text text-xl">
									<strong>Challenge,</strong> Evolve. Prosper.
								</span>
								<h2 className="title-animation fw-6 mt-25">
									Trusted by Warriors, Powered by Ancient Wisdom
								</h2>
								<p className="mt-25">
									We blend ancient Mayan mysticism with cutting-edge AI technology
									to deliver a GameFi experience that&apos;s secure, sustainable & rewarding.
								</p>
							</div>
							<div className="list-group-items mt-40">
								<div className="list-group__single">
									<div className="thumb">
										<i className="ti ti-check"></i>
									</div>
									<div className="content">
										<h6 className="fw-6">Divine Selection Ritual</h6>
										<p className="text-sm mt-10">
											Experience the mystical Ten-Chamber Challenge where 90% win rate
											design ensures positive gameplay. Even defeat transforms into MYR minting opportunities.
										</p>
									</div>
								</div>
								<div className="list-group__single">
									<div className="thumb">
										<i className="ti ti-check"></i>
									</div>
									<div className="content">
										<h6 className="fw-6">AI Treasury System</h6>
										<p className="text-sm mt-10">
											Kukulkan&apos;s Eye of Wisdom provides 24/7 intelligent economic regulation
											with atomic hedging and smootherstep algorithms for ultimate stability.
										</p>
									</div>
								</div>
								<div className="list-group__single">
									<div className="thumb">
										<i className="ti ti-check"></i>
									</div>
									<div className="content">
										<h6 className="fw-6">Dual-Token Security</h6>
										<p className="text-sm mt-10">
											FUSD stablecoin (200M supply) anchored to USDT and MYR game token
											(2T supply) with deflationary mechanics protect your digital assets.
										</p>
									</div>
								</div>
								<div className="list-group__single">
									<div className="thumb">
										<i className="ti ti-check"></i>
									</div>
									<div className="content">
										<h6 className="fw-6">Node Governance</h6>
										<p className="text-sm mt-10">
											Join 1,700 Node Guardians across 7 tiers (V1-V7). Borderless participation
											with 41-85 day ROI periods and up to 50% PVP rewards.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-40">
								<Link
									href="games"
									aria-label="Enter Sacred Temples"
									title="Enter Sacred Temples"
									className="btn--primary"
								>
									Enter Sacred Temples <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="left-thumb">
				<Image src={four} alt="Image" />
			</div>
			<div className="rocket">
				<Image src={five} alt="Image" />
			</div>
		</section>
	);
};

export default AboutTwoSection;
