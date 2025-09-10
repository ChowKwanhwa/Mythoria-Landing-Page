import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import HeroSectionFour from "@/components/layout/banner/HeroSectionFour";
import WorkTwoSection from "@/components/containers/WorkTwoSection";
import FantastySectionTwo from "@/components/containers/FantastySectionTwo";
import ChooseSection from "@/components/containers/ChooseSection";
import SelectLottery from "@/components/containers/lottery/SelectLottery";
import LotteryItems from "@/components/containers/lottery/LotteryItems";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import RecentWinners from "@/components/containers/lottery/RecentWinners";
import BlogSectionThree from "@/components/containers/blog/BlogSectionThree";
import FooterThree from "@/components/layout/footer/FooterThree";
const ClientWrapper = dynamic(
	() => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Home | Mythoria - Online Crypto Gaming",
	description:
		"Welcome to Mythoria - the ultimate crypto gaming & lottery experience.",
	keywords: ["crypto gaming", "lottery", "Mythoria", "casino", "blockchain"],
	openGraph: {
		title: "Mythoria - Crypto Gaming & Lottery",
		description: "Experience seamless blockchain - based gaming and lotteries.",
		url: "https://Mythoria.netlify.app/",
		siteName: "Mythoria",
		images: [
			{
				url: "/images/og-image.png",
				width: 1200,
				height: 630,
				alt: "Mythoria Crypto Gaming",
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
			<HeroSectionFour />
			<WorkTwoSection />
			<FantastySectionTwo />
			<ChooseSection layout="two" />
			<SelectLottery />
			<LotteryItems layout="two" showLotteryItems={false} />
			<Testimonial />
			<RecentWinners showWinners={false} />
			<BlogSectionThree />
			<FooterThree />
			<ClientWrapper />
		</div>
	);
};

export default page;
