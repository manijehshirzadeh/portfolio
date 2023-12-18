import Link from "next/link"
import Image from "next/image"
import React from "react"
import Particles from "./components/particles"

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" }
]

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map(item => (
						<Link
							key={item.href}
							href={item.href}
							className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={200}
			/>
			<Image
				style={{ borderRadius: "50%", overflow: "hidden", margin: "auto" }}
				src="/manijeh.png"
				alt="An image showing Max"
				width={300}
				height={300}
			/>
			<h1 className="z-10 text-small text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-7xl whitespace-nowrap bg-clip-text ">
				Manijeh Shirzadeh
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					I'm building full stack{" "}
					<Link
						target="_blank"
						href="https://nextjs.org/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Next.js
					</Link>{" "}
					applications.
				</h2>
			</div>
		</div>
	)
}
