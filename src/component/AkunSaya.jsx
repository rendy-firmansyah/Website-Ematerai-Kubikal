import React from 'react'
import { FaUser } from 'react-icons/fa'

const AkunSaya = () => {
  return (
    <div className="flex flex-col md:w-3/4 space-y-4 ">
          <div className="flex items-center gap-2 text-lg font-medium">
            <FaUser />
            <span>Account</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="username"
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <button className="gap-2 bg-[#7C7CFC] px-6 py-2 w-1/4 text-white font-bold rounded-[4px] mt-4">
            Update Profile
          </button>
        </div>
  )
}

export default AkunSaya