const Page = ({ children }) => {
	return (
		<main className="relative flex h-screen min-h-screen w-screen flex-col items-center bg-gradient-radial">
			{children}
		</main>
	)
}

export default Page
