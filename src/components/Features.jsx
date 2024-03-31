import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
	useGSAP(() => {
		animateWithGsap("#featuresTitle", {
			opacity: 1,
			y: 0,
		});
		animateWithGsap(
			".g_grow",
			{
				opacity: 1,
				scale: 1,
				rotate: 0,
				y: 0,
				x: 0,
				ease: "power2.inOut",
				stagger: 0.3,
			},
			{
				start: "top 90%",
				end: "bottom 10%",
				scrub: 4,
			}
		);
		gsap.to('.g_text', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            scrollTrigger: {
                trigger: '.g_text',
                toggleActions: "play play play reverse",
                start: 'top 90%',
                end: 'top 20%',
            }
        })
	}, []);

	const videoRef = useRef();

	return (
		<section className="common-padding h-full bg-zinc relative overflow-hidden">
			<div className="screen-max-width">
				<div className="mb-12 w-full">
					<h1 id="featuresTitle" className="section-heading">
						Explore the full story.
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center overflow-hidden">
					<div className="mt-32 mb-24 pl-24">
						<h2 className="text-5xl lg:text-7xl font-semibold">Iphone.</h2>
						<h2 className="text-5xl lg:text-7xl font-semibold">
							Forged in titanium.
						</h2>
					</div>
					<div className="flex-center flex-col sm:px-10">
						<div className="relative h-[50vh] w-full flex items-center">
							<video
								playsInline
								autoPlay
								muted
								loop
								id="exploreVideo"
								className="w-full h-full object-cover"
								src={exploreVideo}
								type="video/mp4"
								preload="none"
								ref={videoRef}
							></video>
						</div>
						<div className="flex flex-col w-full relative">
							<div className="feature-video-container">
								<div className="overflow-hidden flex-1 h-[50vh]">
									<img
										src={explore1Img}
										alt="titanium"
										className="feature-video g_grow"
									/>
								</div>
								<div className="overflow-hidden flex-1 h-[50vh]">
									<img
										src={explore2Img}
										alt="titanium 2"
										className="feature-video g_grow"
									/>
								</div>
							</div>

							<div className="feature-text-container">
								<div className="flex-1 flex-center">
									<p className="feature-text g_text">
										Iphone 15 Pro is{" "}
										<span className="text-white">
											the first Iphone to feature an aerospace-grade titanium
											design{" "}
										</span>
										using the same alloy that spacecraft use for missions to
										Mars.
									</p>
								</div>
								<div className="flex-1 flex-center">
									<p className="feature-text g_text">
										Titanium has one of the best strength-to-weight ratios of any metal, making these our{" "}
										<span className="text-white">
											lightest Pro models ever.{' '}
										</span>
										You'll notice how the phone feels.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
