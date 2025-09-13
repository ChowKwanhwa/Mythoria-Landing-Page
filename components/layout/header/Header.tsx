import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";
import logo from "@/public/images/logo_en.svg";
import TopGames from "./TopGames";
const HeaderClient = dynamic(() => import("./HeaderClient"));
const SearchTrigger = dynamic(() => import("./SearchTrigger"));
const OffcanvasTrigger = dynamic(() => import("./OffcanvasTrigger"));
const LanguageSelector = dynamic(
	() => import("@/components/layout/header/LanguageSelector")
);

interface HeaderProps {
	showTopGames?: boolean;
}

const Header = ({ showTopGames = true }: HeaderProps) => {
	return (
		<HeaderClient>
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="main-header__menu-box">
								<nav className="navbar p-0">
									<div className="navbar__intro">
										<div className="navbar-logo">
											<Link href="/">
												<Image 
													src={logo} 
													alt="Image" 
													className="navbar-logo-img"
												/>
											</Link>
										</div>
										{showTopGames && <TopGames />}
									</div>

									<div className="navbar__menu d-none d-xl-block">
										<ul className="navbar__list">
											{NavbarData.map((item, index) =>
												item.submenu ? (
													<li
														className="navbar__item navbar__item--has-children nav-fade"
														key={index}
													>
														<a
															className="navbar__dropdown-label dropdown-label-alter"
															aria-label="dropdown menu"
														>
															{item.title}
														</a>
														<ul className="navbar__sub-menu">
															{item.submenu.map((sub, i) => (
																<li key={i}>
																	<Link href={sub.path}>{sub.title}</Link>
																</li>
															))}
														</ul>
													</li>
												) : (
													<li className="navbar__item nav-fade" key={index}>
														<Link href={item.path}>{item.title}</Link>
													</li>
												)
											)}
										</ul>
									</div>

									<div className="navbar__options">
										<OffcanvasTrigger />
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</HeaderClient>
	);
};

export default Header;
