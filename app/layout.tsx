import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/icons/css/all.min.css";
import "@/public/icons/css/tabler-icons.min.css";
import "@/public/scss/app.scss";

const chakraPetch = Chakra_Petch({
	variable: "--chakra",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://mythoria.xyz"),

	title: {
		default: "Mythoria | Redefining the GameFi Economic Paradigm",
		template: "%s | Mythoria",
	},

	description:
		"Mythoria merges ancient Mayan wisdom with modern blockchain technology to create a revolutionary GameFi ecosystem. Experience the mystical Ten-Chamber Challenge in the Land of Myths, featuring AI-powered economic regulation, dual-token synergy, and sustainable Web3 gaming economics.",
	keywords: ["GameFi", "Web3", "blockchain", "gaming", "cryptocurrency", "AI regulation", "Mayan", "Mythoria", "FUSD", "MYR", "PVP", "DeFi"],

	authors: [
		{
			name: "Mythoria Team",
			url: "https://mythoria.xyz",
		},
	],

	icons: { icon: "/images/logo_en.svg" },

	alternates: { canonical: "https://mythoria.xyz/" },

	openGraph: {
		url: "https://mythoria.xyz/",
		siteName: "Mythoria",
		title: "Mythoria - Redefining the GameFi Economic Paradigm",
		description: "Experience the mystical Land of Myths where ancient Mayan wisdom meets cutting-edge blockchain technology. Join the Ten-Chamber Challenge and discover a revolutionary GameFi ecosystem with AI-powered economic regulation.",
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

	twitter: {
		card: "summary_large_image",
		title: "Mythoria - Redefining the GameFi Economic Paradigm",
		description: "Experience the mystical Land of Myths where ancient Mayan wisdom meets cutting-edge blockchain technology. Revolutionary GameFi with AI-powered economics.",
		images: ["/images/logo_en.svg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${chakraPetch.variable}`}>{children}</body>
		</html>
	);
}
