import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // trigger native validation
    if (!e.target.checkValidity()) {
      e.target.reportValidity()
      return
    }

    setShowSuccess(true)

    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4  mx-auto w-[90%] py-[30px] md:py-[60px] "
    >
      {showSuccess && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
          Order placed successfully!
        </div>
      )}

      <div className="mb-5 ">
        <h3 className='text-xl font-bold mb-5'>Contact Information</h3>
        <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
        <input type="email" id="email" className="w-[50%] bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
      </div>

      <div className="mb-5 ">
        <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Full Name</label>
        <input type="text" id="name" className="w-[50%] bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
      </div>

      <div className="mb-5 ">
        <h3 className='text-xl font-bold mb-5'>Contact Information</h3>
        <label htmlFor="address" className="block mb-2.5 text-sm font-medium text-heading">Address</label>
        <input type="text" id="address" className="w-[50%] bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
      </div>

      <div className="mb-5 ">
        <label htmlFor="city" className="block mb-2.5 text-sm font-medium text-heading">City</label>
        <input type="text" id="city" className="w-[50%] bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
      </div>

      <label htmlFor="remember" className="flex items-center mb-5 ">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
        <p className="ms-2 text-sm font-medium text-heading select-none">
          I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.
        </p>
      </label>

      <button
        type="submit"
        className=" self-start w-[10%] text-white bg-blue-500 hover:bg-blue-600 border border-blue-500 focus:ring-4 focus:ring-blue-200 font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
      >
        Submit
      </button>
    </form>
  )
}