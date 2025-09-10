import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderThree from "@/components/layout/header/HeaderThree";
import FooterFour from "@/components/layout/footer/FooterFour";

const CreateAccount = dynamic(
	() => import("@/components/containers/CreateAccount")
);
const ClientWrapper = dynamic(
	() => import("@/components/widgets/ClientWrapper")
);

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Sign Up | Mythoria - Online Crypto Gaming",
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
		<div
			className="page-wrapper a-cursor authentication-bg"
			style={{ backgroundImage: "url(images/error-bg.jpg)" }}
		>
			<HeaderThree />
			<CreateAccount />
			<FooterFour />
			<ClientWrapper />
		</div>
	);
};

export default page;
