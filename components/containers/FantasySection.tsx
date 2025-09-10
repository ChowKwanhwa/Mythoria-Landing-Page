import Link from "next/link";
import Image from "next/image";
import icOne from "@/public/images/fantasy/ic-one.png";
import icTwo from "@/public/images/fantasy/ic-two.png";
import icThree from "@/public/images/fantasy/ic-three.png";
import icSix from "@/public/images/fantasy/ic-six.png";
import imgTwo from "@/public/images/fantasy/two.png";
import imgFour from "@/public/images/fantasy/four.png";
import imgFive from "@/public/images/fantasy/five.png";
import imgSix from "@/public/images/fantasy/six.png";
import imgLong from "@/public/images/fantasy/long.png";
import bottomThumb from "@/public/images/fantasy/bottom-thumb.png";
import rightThumb from "@/public/images/fantasy/right-thumb.png";
import btc from "@/public/images/fantasy/btc.png";

const FantasySection = () => {
	return (
		<section className="fantasy pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-xl-9">
						<div
							className="section__header text-center mb-55"
							data-aos="fade-up"
							data-aos-duration="600"
						>
							<span className="fw-6 secondary-text text-xl">
								<strong>Discover,</strong> The Sacred Temples
							</span>
							<h2 className="title-animation fw-6 mt-20">
								Mythoria GameFi Ecosystem
							</h2>
							<p className="mt-16">
								Explore the seven sacred temples of Mythoria, each offering unique
								GameFi experiences powered by AI regulation and sustainable economics.
								Every challenge brings rewards, even in defeat.
							</p>
						</div>
					</div>
				</div>

				<div className="row gutter-24">
					<div
						className="col-12 col-md-6 col-xl-4"
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="400"
					>
						<div className="fantasy__single tilt">
							<div className="intro">
								<h5 className="neutral-top fw-6 text-uppercase">
									<Image src={icTwo} alt="Image" /> TEN-CHAMBER
								</h5>
							</div>
							<div className="content mt-120">
								<p className="mb-15">
									Dive into our in-house games, live casino and slots
								</p>
								<Link
									href="https://mythoria-2.gitbook.io/mythoria-docs/readme/02_core_gameplay_mechanics"
									aria-label="learn more"
									title="learn more"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn More <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
							<div className="thumb">
								<Image src={imgFive} alt="Image" />
							</div>
						</div>

						<div className="fantasy__single fantasy__single-alt tilt mt-24">
							<div className="intro">
								<h5 className="neutral-top fw-6 text-uppercase">
									<Image src={icOne} alt="Image" /> AI TREASURY
								</h5>
							</div>
							<div className="content mt-120">
								<p className="mb-15">
									Dive into our in-house games, live casino and slots
								</p>
								<Link
									href="https://mythoria-2.gitbook.io/mythoria-docs"
									aria-label="learn more"
									title="learn more"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn More <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
							<div className="thumb">
								<Image src={imgSix} alt="Image" />
							</div>
						</div>
					</div>

					<div
						className="col-12 col-md-6 col-xl-4"
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="200"
					>
						<div className="fantasy__single single-two tilt fantasy__single-long">
							<div className="intro">
								<h5 className="neutral-top fw-6 text-uppercase">
									<Image src={icTwo} alt="Image" /> DUAL TOKENS
								</h5>
							</div>
							<div className="content mt-40">
								<div className="dual-token-info mb-20">
									<div className="token-details mb-15">
										<div className="fusd-info mb-10">
											<h6 className="text-white mb-5">FUSD Stablecoin</h6>
											<p className="small-text mb-5">• Total Supply: 200M FUSD</p>
											<p className="small-text mb-5">• 1:1 USDT Peg via AI Treasury</p>
											<p className="small-text">• Entry token for all PVP challenges</p>
										</div>
										<div className="myr-info">
											<h6 className="text-white mb-5">MYR Game Token</h6>
											<p className="small-text mb-5">• Total Supply: 2T MYR</p>
											<p className="small-text mb-5">• Deflationary with daily burns</p>
											<p className="small-text">• Node rewards & PVP dividends</p>
										</div>
									</div>
									<div className="swap-mechanism mb-15">
										<h6 className="text-white mb-5">Dual Swap Pools</h6>
										<p className="small-text mb-5">• Swap1: FUSD/USDT (40M/2M USDT)</p>
										<p className="small-text">• Swap2: FUSD/MYR (40M/2T MYR)</p>
									</div>
								</div>
								<Link
									href="https://mythoria-2.gitbook.io/mythoria-docs"
									aria-label="learn more"
									title="learn more"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn More <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
							<div className="thumb">
								<Image src={imgLong} alt="Image" />
							</div>
						</div>
					</div>

					<div
						className="col-12 col-md-6 col-xl-4"
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="100"
					>
						<div className="fantasy__single fantasy__single-alt single-three tilt">
							<div className="intro">
								<h5 className="neutral-top fw-6 text-uppercase">
									<Image src={icThree} alt="Image" /> NODE SYSTEM
								</h5>
							</div>
							<div className="content mt-120">
								<p className="mb-15">
									Dive into our in-house games, live casino and slots
								</p>
								<Link
									href="https://mythoria-2.gitbook.io/mythoria-docs/readme/04_pvp_battle_and_distribution_mechanisms"
									aria-label="learn more"
									title="learn more"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn More <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
							<div className="thumb">
								<Image src={imgFour} alt="Image" />
							</div>
						</div>

						<div className="fantasy__single single-four tilt mt-24">
							<div className="intro">
								<h5 className="neutral-top fw-6 text-uppercase">
									<Image src={icSix} alt="Image" /> STAR SYSTEM
								</h5>
							</div>
							<div className="content mt-120">
								<p className="mb-15">
									10-star community growth system with up to 50% PVP rewards
								</p>
								<Link
									href="https://mythoria-2.gitbook.io/mythoria-docs/readme/04_pvp_battle_and_distribution_mechanisms"
									aria-label="learn more"
									title="learn more"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn More <i className="ti ti-arrow-narrow-right"></i>
								</Link>
							</div>
							<div className="thumb">
								<Image src={imgTwo} alt="Image" />
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="mt-40 text-center">
							<Link
								href="https://mythoria-2.gitbook.io/mythoria-docs"
								aria-label="explore ecosystem"
								title="explore ecosystem"
								className="btn--secondary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Explore Ecosystem <i className="ti ti-arrow-narrow-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="left-thumb">
				<Image src={bottomThumb} alt="Image" />
			</div>
			<div className="rocket">
				<Image src={rightThumb} alt="Image" />
			</div>
			<div className="right-thumb">
				<Image src={btc} alt="Image" />
			</div>
		</section>
	);
};

export default FantasySection;
