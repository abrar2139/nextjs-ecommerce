import React from 'react'

export default function page() {
  return (
    <>
    <form >

    <section className="text-gray-600 body-font relative">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-col w-1/2 mx-auto mb-12">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Forget password</h1>
</div>
<div className="lg:w-1/2 md:w-2/3 mx-auto">
  <div className="flex flex-wrap -m-2">
   <div className="fields w-full">

    <div className="w-full ">
      <div className="relative">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    
        </div>
  
    <div className="mt-4 w-full ">
      <button className="w-full flex justify-center mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    </div>

  </div>
</div>
</div>
</section>
    </form>

    </>
  )
}
