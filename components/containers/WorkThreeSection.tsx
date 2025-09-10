import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/arrow.png";
import two from "@/public/images/spring.png";
import three from "@/public/images/left-th.png";

const WorkThreeSection = () => {
	return (
		<section className="work work-two work-alter pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-xl-9">
						<div
							className="section__header text-center mb-55"
							data-aos="fade-up"
							data-aos-duration="600"
						>
							<span className="fw-6 secondary-text text-xl">
								<strong>Node,</strong> Governance System
							</span>
							<h2 className="title-animation fw-6 mt-25">How Nodes Generate Profit</h2>
							<p className="mt-16">
								Join Mythoria&apos;s decentralized governance network with 1,700 total nodes across 
								V1-V7 tiers. Earn passive income through our innovative node system with guaranteed 
								41-85 day ROI and 10% Swap2 trading fee distribution
							</p>
						</div>
					</div>
				</div>
				<div className="row gutter-60">
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="work__single text-center"
							data-aos="fade-up"
							data-aos-duration="600"
						>
							<div className="thumb">
								<i className="ti ti-user"></i>
							</div>
							<div className="content mt-30">
								<p className="text-lg fw-5">
									Step_<span className="secondary-text">01</span>
								</p>
								<h6 className="fw-6 mt-16">Purchase Node Rights</h6>
								<p className="text-sm mt-16">
									Choose from V1-V7 node tiers (1,700 total available) to gain 
									governance rights and exclusive revenue sharing in Mythoria ecosystem
								</p>
							</div>
							<Image
								src={one}
								alt="Image"
								className="ar-img d-none d-xl-block"
							/>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="work__single text-center"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="200"
						>
							<div className="thumb">
								<i className="ti ti-pig"></i>
							</div>
							<div className="content mt-30">
								<p className="text-lg fw-5">
									Step_<span className="secondary-text">02</span>
								</p>
								<h6 className="fw-6 mt-16">Earn Trading Fees</h6>
								<p className="text-sm mt-16">
									Automatically receive 10% of all Swap2 trading fees distributed 
									among node holders with guaranteed 41-85 day ROI period
								</p>
							</div>
							<Image
								src={one}
								alt="Image"
								className="ar-img d-none d-xl-block"
							/>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="work__single text-center"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="400"
						>
							<div className="thumb">
								<i className="ti ti-trophy"></i>
							</div>
							<div className="content mt-30">
								<p className="text-lg fw-5">
									Step_<span className="secondary-text">03</span>
								</p>
								<h6 className="fw-6 mt-16">Passive Income Stream</h6>
								<p className="text-sm mt-16">
									Receive continuous MYR token dividends, participate in ecosystem 
									governance, and benefit from deflationary tokenomics driving long-term value
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-xl-8">
						<div className="work-two__cta mt-60">
							<div className="work-two__cta-left">
								<p className="text-xl fw-5 secondary-text">
									<i className="ti ti-trophy"></i> Ready to become a node guardian? 
									Join the governance network.
								</p>
							</div>
							<div className="work-two__cta-right">
								<Link
									href="sign-up"
									aria-label="Become Node Guardian"
									title="Become Node Guardian"
									className="btn--primary"
								>
									Become Node Guardian
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="left-thumb">
				<Image src={two} alt="Image" />
			</div>
			<div className="right-thumb">
				<Image src={three} alt="Image" />
			</div>
		</section>
	);
};

export default WorkThreeSection;
