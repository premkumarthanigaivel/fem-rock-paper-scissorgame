const Page = ({ children }) => {
	return (
		<main className="relative flex h-screen w-screen flex-col items-center bg-gradient-radial md:h-screen">
			{children}
		</main>
	)
}

export default Page
