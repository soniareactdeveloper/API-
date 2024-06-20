

const Data = () => {
  return (
      <>
     <div className="main w-[full] p-6 rounded-lg mt-24 bg-white shadow-xl gap-12 mb-2 flex">
       <div className="productImg w-[500px] h-[400px] shadow-md mt-6">immg</div>
       <div className="description mb-8">
        <h2 className="text-2xl ">description</h2>
        <h2 className="text-xl font-semibold mt-8 ">Key Features</h2>
        <h3 className="text-lg font-normal mt-3">model: </h3>
        <h3 className="text-lg font-normal mt-3">processor: </h3>
        <h3 className="text-lg font-normal mt-3">storage: </h3>
        <h3 className="text-lg font-normal mt-3">ram: </h3>
        <h3 className="text-lg font-normal mt-3">display: </h3>
        <h3 className="text-lg font-normal mt-3">screen_size: </h3>
        <h3 className="text-lg font-normal mt-3">color: </h3>
        <h2 className="text-xl font-semibold mt-8 text-red-500 hover:text-black cursor-pointer">View More Info</h2>
        <div className="text-3xl text-red-600 mt-4 font-bold">Price: </div>
       </div>
    </div>
    <div className="specification w-[900px] p-6 bg-white shadow-lg ml-12 mb-9 rounded-sm ">
      <h2 className="text-[30px] text-black font-semibold">Specification</h2>
      <h3 className="text-lg text-gray-800 mt-5">Processor: </h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">display_resolution:</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">storage: </h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity: </h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">cpu_cache: </h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">touch_screen:</h3>
      <hr />
    </div>
      </>
  )
}

export default Data