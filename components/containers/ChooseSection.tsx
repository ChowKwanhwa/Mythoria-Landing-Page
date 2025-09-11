import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/winner.png";
import two from "@/public/images/light.png";
import three from "@/public/images/car.png";
import four from "@/public/images/spring.png";
import five from "@/public/images/rocket-xs.png";
import six from "@/public/images/left-th.png";
import seven from "@/public/images/trophy.png";

interface ChooseProps {
	layout?: "one" | "two";
}

const ChooseSection = ({ layout = "one" }: ChooseProps) => {
	return (
		<section
			className={`choose choose-alternate pt-120 tertiary-bg${
				layout === "two" ? " pb-120" : " pb-190"
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-5 col-xl-5">
						<div className="choose__thumb d-none d-lg-block">
							<div className="winner">
								<Image src={one} alt="Image" className="winner-img" />
								<div className="light">
									<Image src={two} alt="Image" className="light-thumb" />
								</div>
							</div>
							<div className="car">
								<Image src={three} alt="Image" />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
						<div
							className="choose__content"
							data-aos="fade-left"
							data-aos-duration="600"
						>
							<div className="section__content text-start">
								<span className="fw-6 secondary-text text-xl">
									<strong>Mythoria,</strong> Next-Generation GameFi Platform
								</span>
								<h2 className="title-animation fw-6 mt-25">
									Revolutionary <span>Web3</span> Gaming Ecosystem
								</h2>
								<p className="mt-25">
									Mythoria combines PoS staking with AI-driven economic regulation, creating a sustainable gaming ecosystem where players can earn through strategic gameplay and token economics.
								</p>
							</div>
							<div className="rating__group mt-40">
								<div className="left-group">
									<h3 className="fw-6">
										4.7<span className="secondary-text">K</span>
									</h3>
								</div>
								<div className="divider"></div>
								<div className="right-group">
									<p className="text-lg">Rating Based On 2500+ Reviews</p>
									<div className="review mt-16">
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
									</div>
								</div>
							</div>
							<ul className="list-group-row mt-40">
								<li>
									<i className="ti ti-check"></i>PoS Staking Mechanism
								</li>
								<li>
									<i className="ti ti-check"></i>AI Treasury System
								</li>
								<li>
									<i className="ti ti-check"></i>Dual-Token Economics
								</li>
								<li>
									<i className="ti ti-check"></i>Node Governance System
								</li>
							</ul>
							<div className="mt-40">
								<Link
									href="terms-conditions"
									aria-label="Read More"
									title="Read More"
									className="btn--primary"
								>
									Read More <i className="ti ti-arrow-narrow-right"></i>
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
			<div className="right-thumb">
				<Image src={six} alt="Image" />
			</div>
			<div className="trophy">
				<Image
					src={seven}
					alt="Image"
					data-aos="fade-left"
					data-aos-duration="600"
				/>
			</div>
		</section>
	);
};

export default ChooseSection;
