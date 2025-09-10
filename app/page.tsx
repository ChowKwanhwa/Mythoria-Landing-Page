import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import HeroSection from "@/components/layout/banner/HeroSection";
import FantasySection from "@/components/containers/FantasySection";
import SelectLottery from "@/components/containers/lottery/SelectLottery";
import AboutTwoSection from "@/components/containers/about/AboutTwoSection";
import LotteryItems from "@/components/containers/lottery/LotteryItems";
import WorkThreeSection from "@/components/containers/WorkThreeSection";
import TestimonialTwo from "@/components/containers/testimonial/TestimonialTwo";
import BlogSection from "@/components/containers/blog/BlogSection";
import Footer from "@/components/layout/footer/Footer";

const ClientWrapper = dynamic(
	() => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Home | Mythoria - Redefining the GameFi Economic Paradigm",
	description:
		"Experience the mystical Land of Myths where ancient Mayan wisdom meets cutting-edge blockchain technology. Join the Ten-Chamber Challenge and discover a revolutionary GameFi ecosystem with AI-powered economic regulation.",
	keywords: ["GameFi", "Web3", "blockchain", "gaming", "cryptocurrency", "AI regulation", "Mayan", "Mythoria", "FUSD", "MYR", "PVP", "DeFi"],
	openGraph: {
		title: "Mythoria - Redefining the GameFi Economic Paradigm",
		description: "Experience the mystical Land of Myths where ancient Mayan wisdom meets cutting-edge blockchain technology. Revolutionary GameFi with AI-powered economics.",
		url: "https://mythoria.xyz/",
		siteName: "Mythoria",
		images: [
			{
				url: "/images/logo_en.svg",
				width: 1200,
				height: 630,
				alt: "Mythoria - The Land of Myths GameFi Platform",
			},
		],
		type: "website",
	},
	twitter: { card: "summary_large_image" },
});

const page = () => {
	return (
		<div className="page-wrapper a-cursor">
			<Header />
			<HeroSection />
			<FantasySection />
			<SelectLottery />
			<AboutTwoSection />
			<LotteryItems layout="two" showLotteryItems={false} />
			<WorkThreeSection />
			<TestimonialTwo />
			<BlogSection />
			<Footer />
			<ClientWrapper />
		</div>
	);
};

export default page;
