import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
	useGSAP(() => {
		gsap.to("#title", {
			scrollTrigger: {
				trigger: "#title",
				start: "top 90%",
				end: "top 20%",
			},
			opacity: 1,
			y: 0,
			duration: 1,
		});
		gsap.to(".link", {
			scrollTrigger: {
				trigger: "#title",
				start: "top 90%",
				end: "top 20%",
			},
			opacity: 1,
			y: 0,
			duration: 1,
			stagger: 0.25,
		});
	}, []);
	return (
		<section
			id="highlights"
			className="w-screen overflow-hidden h-full common-padding bg-zinc"
		>
			<div className="screen-max-width">
				<div className="mb-12 w-full md:flex items-end justify-between">
					<h1 id="title" className="section-heading">
						Get the highlights.
					</h1>

					<div className="flex flex-wrap  items-end gap-5">
						<p className="link">
							Watch the film <img src={watchImg} alt="watch" className="ml-2" />
						</p>
						<p className="link">
							Watch the event <img src={rightImg} alt="rightArrow" className="ml-2" />
						</p>
					</div>
				</div>
				<VideoCarousel />
			</div>
		</section>
	);
};

export default Highlights;
