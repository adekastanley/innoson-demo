import {
	Carousel,
	CarouselContent,
	CarouselNavigation,
	CarouselItem,
} from "../../components/motion-primitives/carousel";

const blogs = [
	{
		image: "assets/blogs/b1.png",
		title: "All new electric",
	},
	{
		image: "assets/blogs/b1.png",
		title: "All new electric",
	},
	{
		image: "assets/blogs/b1.png",
		title: "All new electric",
	},
	{
		image: "assets/blogs/b1.png",
		title: "All new electric",
	},
];
export function Blog() {
	return (
		<>
			<div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center mb-8">
				<h2 className="text-balance text-4xl font-semibold lg:text-6xl">
					Latest from Innoson
				</h2>
				<p>
					Stay updated with our latest news, product launches, behind-the-scenes
					stories, and insights from the road.
				</p>
			</div>
			<div className="relative flex justify-between px-10 sm:px-40  ">
				<Carousel>
					<CarouselContent className="">
						{blogs.map((blog, index) => (
							<CarouselItem key={index} className="basis-1/3">
								<div className="flex flex-col relative  aspect-square items-center justify-center border-b border-l border-t border-zinc-200 dark:border-zinc-800">
									<div className="w-full">
										<img
											className="w-full aspect-square"
											src={blog.image}
											alt="image of blog"
										/>
									</div>
									<div className="w-full block lg:absolute left-5 bottom-10  text-xs sm:text-base ">
										<h2>{blog.title}</h2>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNavigation />
				</Carousel>
			</div>
		</>
	);
}
