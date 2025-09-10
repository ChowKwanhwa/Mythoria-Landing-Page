import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import PrivacySection from "@/components/containers/PrivacySection";
import FooterTwo from "@/components/layout/footer/FooterTwo";
const ClientWrapper = dynamic(
	() => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Terms & Conditions | Mythoria - Online Crypto Gaming",
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
			<Breadcrumb title="Terms & Conditions" />
			<PrivacySection />
			<FooterTwo />
			<ClientWrapper />
		</div>
	);
};

export default page;
