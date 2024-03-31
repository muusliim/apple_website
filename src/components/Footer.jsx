import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
	return (
		<footer className="py-5 sm:px-10 px-5">
			<div className="screen-max-width">
				<div>
					<p className="font-semibold text-gray text0xd">
						More ways to shop:{" "}
						<span className="underline text-blue"> Find an Apple Store </span>
						or{" "}
						<span className="underline text-blue">
							{" "}
							visit an Apple Retail Store{" "}
						</span>
					</p>
					<p className="font-semibold text-gray text-xs">
						Also, you can call: 8800-555-35-35
					</p>
				</div>

				<div className="bg-neutral-800 my-5 h-[1px] w-full" />
				<div className="flex md:items-center flex-col justify-between">
					<p className="font-semibold text-gray text-xs">
						Copyright © 2024 Apple Inc. All rights reserved.
					</p>{" "}
					<div className="flex gap-1">
						{footerLinks.map((link, i) => (
							<p key={link} className="font-semibold text-gray text-xs ">
								{link}
                                {window.innerWidth > 600 && i !== footerLinks.length - 1 && <span className="text-gray text-xs mx-2">|</span>}
							</p>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
