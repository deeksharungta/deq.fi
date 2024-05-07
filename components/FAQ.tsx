import Image from "next/image";
import { useEffect, useState } from "react";
import { Manrope } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const manrope = Manrope({ subsets: ["latin"] });

const faqs = [
	{
		question: "What Is Deq?",
		answer:
			"Deq is a native liquid staking platform for Avail tokens on Ethereum.",
	},
	{
		question: "What is stAVAIL?",
		answer:
			"stAVAIL is an ERC20 token on Ethereum that represents your staked Avail tokens. It accrues value over time based on staking rewards distributed on the Avail network. Since it is not a rebasing token (i.e. your balance does not change over time), it can easily be integrated in most of DeFi protocols.",
	},
	{
		question: "How do I withdraw stAVAIL?",
		answer:
			"Currently it takes 28 days to redeem stAVAIL. Rewards are automatically redeemed when stAVAIL is withdrawn (in AVAIL). This is based on the unbonding period of the Avail blockchain. If you want a faster withdrawal period, you can always exit via liquidity pools on DEXes. Keep in mind that based on slippage and liquidity pool fees, you might not receive the exact amount that you would get when exiting via the protocol directly, keep in mind that we do not charge any withdrawal fees but the minimum amount to be eligible for protocol withdrawal is 1 stAVAIL.",
	},
	{
		question: "How does Deq guarantee the best rates for swaps?",
		answer:
			"Our swap feature is powered by the 0x API, which acts as a liquidity aggregator and routes your swap to the liquidity provider (such as Uniswap or Sushiswap) with the best rates. We do not charge any additional fees and the service is provided as-is, keep in mind that network fees still apply.",
	},
	{
		question: "How do I earn Deq points?",
		answer:
			"Deq points are earned based on the time you have held stAVAIL in your wallet as well the amount held. There will also be more pathways to earn Deq points in the future.",
	},
	{
		question: "What is the reward fee?",
		answer:
			"Currently the Deq protocol charges a flat 10% fee on rewards earned (in AVAIL). This value has been chosen carefully based on a long-term intention of running a sustainable protocol that rewards all validators and users effectively. This value can also be updated once the protocol fully decentralizes and a full governance mechanism is established.",
	},
];

export default function FAQ() {
	const [openStates, setOpenStates] = useState(
		Array(faqs.length).fill(false)
	);

	useEffect(() => {
		AOS.init();
	}, []);

	const toggleQuestion = (index: number) => {
		const newOpenStates = [...openStates];
		newOpenStates[index] = !newOpenStates[index];
		setOpenStates(newOpenStates);
	};
	return (
		<div className='flex lg:flex-row flex-col w-full mt-44 sm:px-10 px-4 gap-4'>
			<p
				data-aos='fade-up'
				className='lg:w-1/2 w-full font-bold sm:text-[42px] text-2xl leading-normal'>
				Frequently <br className='hidden lg:block' />
				asked questions
			</p>
			<div className='flex flex-col gap-4 lg:w-1/2 w-full'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						data-aos='fade-up'
						className='p-6 bg-dark-gray rounded-md cursor-pointer hover:bg-gray'
						onClick={() => toggleQuestion(index)}>
						<p className='flex justify-between text-normal font-bold'>
							{faq.question}
							<Image
								src={`chevron_down.svg`}
								width={16}
								height={16}
								alt='chevron-down-icon'
								className={`transition-all durration-600 ${
									openStates[index]
										? "rotate-180"
										: "rotate-0"
								}`}
							/>
						</p>

						<p
							className={`${
								manrope.className
							} text-sm font-medium text-white/75 leading-[150%] mt-2 w-4/5 transition-all duration-600 ${
								openStates[index]
									? " opacity-100 h-full"
									: " opacity-0 h-0"
							}`}>
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
