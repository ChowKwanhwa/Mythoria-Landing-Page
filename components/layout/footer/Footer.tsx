import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import logo from "@/public/images/logo_en.svg";
import leftThumb from "@/public/images/footer/footer-left.png";
import rightThumb from "@/public/images/footer/footer-right.png";
import arrow from "@/public/images/footer/arrow.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className="footer"
			style={{ backgroundImage: "url(images/footer/footer-bg-two.png)" }}
		>
			<div className="container">
				<Newsletter />
				<div className="row gutter-60 pt-120 pb-120">
					<div className="col-12 col-lg-6 col-xl-3">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
						>
							<div className="footer__widget-intro">
								<Link href="/" className="logo">
									<Image 
										src={logo} 
										alt="Image" 
										style={{ 
											transform: 'scale(0.8)',
											transformOrigin: 'left center'
										}} 
									/>
								</Link>
							</div>
							<div className="footer__widget-content mt-25">
								<p>
									Mythoria is an innovative Online Crypto Gaming platform
									designed for players.
								</p>
							</div>
							<div className="social mt-35">
								<Link
									href="https://x.com/MythoriaMYR"
									target="_blank"
									aria-label="follow us on twitter"
									title="twitter"
								>
									<i className="fa-brands fa-twitter"></i>
								</Link>
								<Link
									href="https://t.me/MythoriaMYR"
									target="_blank"
									aria-label="join our telegram"
									title="telegram"
								>
									<i className="fa-brands fa-telegram"></i>
								</Link>
								<Link
									href="https://mythoria.xyz"
									target="_blank"
									aria-label="visit our website"
									title="website"
								>
									<i className="fa-solid fa-globe"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-xl-2" style={{ marginLeft: '60px' }}>
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="200"
						>
							<div className="footer__widget-intro" style={{ marginTop: '80px' }}>
								<h6 className="fw-6 neutral-top">Quick Links</h6>
							</div>
							<div className="footer__widget-content mt-25">
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="about-us">About Us</Link>
									</li>
									<li>
										<Link href="games">Games</Link>
									</li>
									<li>
										<Link href="lottery">Lottery</Link>
									</li>
									<li>
										<Link href="blog">Blog</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-xl-2">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="400"
						>
							<div className="footer__widget-intro" style={{ marginTop: '80px' }}>
								<h6 className="fw-6 neutral-top">Categories</h6>
							</div>
							<div className="footer__widget-content mt-25">
								<ul>
									<li>
										<Link href="https://mythoria-2.gitbook.io/mythoria-docs/yu-que/mythoriayuque-fan-ti-wen-dang" target="_blank">One Pager</Link>
									</li>
									<li>
										<Link href="https://mythoria-2.gitbook.io/mythoria-docs" target="_blank">Whitepaper</Link>
									</li>
									<li>
										<Link href="contact-us">Contact Us</Link>
									</li>
									<li>
										<Link href="sign-up">Create Account</Link>
									</li>
									<li>
										<Link href="sign-in">Sign In</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-2">
						<div
							className="footer__widget"
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="600"
						>
							<div className="footer__widget-intro" style={{ marginTop: '80px' }}>
								<h6 className="fw-6 neutral-top">Get In Touch</h6>
							</div>
							<div className="footer__widget-content mt-25">
								<div className="footer__widget-group">
									<div className="icon">
										<i className="ti ti-phone-call"></i>
									</div>
									<div className="content">
										<p>
											<Link href="https://mythoria.xyz" target="_blank">mythoria.xyz</Link>
										</p>
									</div>
								</div>
								<div className="footer__widget-group mt-16">
									<div className="icon">
										<i className="ti ti-mail-opened"></i>
									</div>
									<div className="content">
										<p>
											<Link href="mailto:contact@mythoria.xyz">
												contact@mythoria.xyz
											</Link>
										</p>
									</div>
								</div>
								<div className="footer__widget-group mt-16">
									<div className="icon">
										<i className="ti ti-map-pin"></i>
									</div>
									<div className="content">
										<p>
											<Link href="https://t.me/MythoriaMYR" target="_blank">
												Join our Telegram Community
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="footer__copyright">
							<div className="row align-items-center gutter-20">
								<div className="col-12 col-lg-5">
									<div className="footer__copyright-content">
										<p className="text-center text-lg-start">
											Copyright &copy; <span>{currentYear}</span>{" "}
											<Link href="/">Mythoria</Link>. All rights reserved.
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-7">
									<div className="footer__copyright-list">
										<ul className="justify-content-center justify-content-lg-end">
											<li>
												<Link href="contact-us">Help & Support</Link>
											</li>
											<li>
												<span></span>
											</li>
											<li>
												<Link href="terms-conditions">Terms & Conditions</Link>
											</li>
											<li>
												<span></span>
											</li>
											<li>
												<Link href="privacy-policy">Privacy Policy</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="left-thumb" data-aos="fade-right" data-aos-duration="600">
				<Image src={leftThumb} alt="Image" />
			</div>
			<div
				className="right-thumb"
				data-aos="fade-left"
				data-aos-duration="600"
				data-aos-delay="300"
			>
				<Image src={rightThumb} alt="Image" />
			</div>
			<div className="arrow">
				<Image src={arrow} alt="Image" />
			</div>
		</footer>
	);
};

export default Footer;
