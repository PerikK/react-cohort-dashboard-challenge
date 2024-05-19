import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import useUsers from "../hooks/useUsers"
import Avatar from "./Avatar"

export default function UserProfilePage() {
	const { currentUser, setCurrentUser } = useUsers()
	const { id } = useParams()
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		email: "",
		jobTitle: "",
		street: "",
		city: "",
		favouriteColour: "",
		profileImage: "",
	})

	useEffect(() => {
		fetch(`https://boolean-api-server.fly.dev/PerikK/contact/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(
					data || {
						firstName: "",
						lastName: "",
						gender: "",
						email: "",
						jobTitle: "",
						street: "",
						city: "",
						favouriteColour: "",
						profileImage: "",
					}
				)
			})
			.catch((error) => {
				console.error("Error fetching user data:", error)
			})
	}, [id])

	const handleChange = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	console.log(user);

	const handleSubmit = (e) => {
		e.preventDefault()
			fetch(`https://boolean-api-server.fly.dev/PerikK/contact/1`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			})
				.then((response) => response.json())
				.then((updatedUser)=>{
				// setCurrentUser(updatedUser)
				setUser(updatedUser)
	})
	
}

	return (
		<div className='bg-[#F0F5FA]'>
			<h1 className='text-3xl font-semibold py-5 px-10'>Profile</h1>
			<div className='bg-[#fff] mx-5 py-5 px-5'>
				<div className='my-5 flex items-centertext-3xl font-semibold'>
					<Avatar />
					<div>
						<p className='text-2xl font-semibold'>{`${user.firstName} ${user.lastName} `}</p>
						{/* <p className='text-2xl font-semibold'>{`${currentUser.firstName} ${currentUser.lastName} `}</p> */}
					</div>
				</div>
				<hr className='h-px text-stone-50 m-5 ' />
				<div className='container mx-auto p bg-white'>
					<form className='grid grid-cols-2 gap-8 mx-5' onSubmit={handleSubmit}>
						{/* Personal Info */}
						<div className='-100 p-4 rounded-lg'>
							<h2 className='text-xl font-semibold mb-4'>Personal Info</h2>
							<div className='grid grid-cols-1 gap-4'>
								<label>
									First Name:
									<input
										type='text'
										name='firstName'
										value={user.firstName || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									Last Name:
									<input
										type='text'
										name='lastName'
										value={user.lastName || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									Username:
									<input
										type='text'
										name='username'
										value={`${user.firstName[0]}${user.lastName}` || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									Gender:
									<input
										type='text'
										name='gender'
										value={user.gender || ""}
										onChange={handleChange}
										className='mt-1 block w-full bg-[#e6ebf5] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
							</div>
						</div>

						{/* Address */}
						<div className=' p-4 rounded-lg'>
							<h2 className='text-xl font-semibold mb-4'>Address</h2>
							<div className='grid grid-cols-1 gap-4'>
								<label>
									Street:
									<input
										type='text'
										name='street'
										value={user.street || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									City:
									<input
										type='text'
										name='city'
										value={user.city || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									Latitude:
									<input
										type='text'
										name='latitude'
										value={user.latitude || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									Longitude:
									<input
										type='text'
										name='longitude'
										value={user.longitude || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
							</div>
						</div>

						{/* Contact Info */}
						<div className='p-4 rounded-lg'>
							<h2 className='text-xl font-semibold mb-4'>Contact Info</h2>
							<div className='grid grid-cols-1 gap-4'>
								<label>
									Email:
									<input
										type='email'
										name='email'
										value={user.email || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
							</div>
						</div>

						{/* Company Info */}
						<div className='p-4 rounded-lg'>
							<h2 className='text-xl font-semibold mb-4'>Company Info</h2>
							<div className='grid grid-cols-1 gap-4'>
								<label>
									Job Title:
									<input
										type='text'
										name='jobTitle'
										value={user.jobTitle || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
								<label>
									Favourite Colour:
									<input
										type='text'
										name='favouriteColour'
										value={user.favouriteColour || ""}
										onChange={handleChange}
										className='mt-1 block w-full px-3 py-2 bg-[#e6ebf5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
									/>
								</label>
							</div>
						</div>

						<div className=' flex justify-end col-span-2 mt-1'>
							<button
								type='submit'
								className='inline-flex justify-center py-3 px-14 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#000046] hover:bg-[#64dc78] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#64dc78'
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}