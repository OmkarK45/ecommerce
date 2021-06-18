import { Link } from 'react-router-dom'

export default function AuthContainer({ title, children }) {
	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<Link to="/">
					<img
						className="w-auto h-12 mx-auto"
						src="../assets/icons/logo.png"
						alt="Workflow"
					/>
				</Link>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
					<h1 className="mb-5 text-4xl italic font-bold tracking-tight ">
						{title}
					</h1>
					{children}
				</div>
			</div>
		</div>
	)
}
