

const Buy = () => {
  return (
    
    <>
    <div className="flex justify-center items-center">
        <div className="main w-[800px] p-6 rounded-lg mt-24 bg-white flex shadow-xl gap-12 mb-8">
            <div className="productImg w-[300px] h-[200px] shadow-md mt-6"></div>
            <div className="description">
                <h2 className="text-md font-bold ">description</h2>
                <h2 className="text-md font-bold ">Ram: </h2>
                <h2 className="text-md font-bold ">Processor: </h2>
                <h2 className="text-md font-bold ">Color:</h2>
                <h2 className="text-md font-bold ">Size: </h2>
                <h2 className="text-md font-bold ">Display: </h2>
                <h2 className="text-xl font-bold mt-9 text-red-800">Price</h2>
                <button className="w-[200px] p-3 bg-blue-500 text-white mt-16 rounded-md text-lg font-semibold hover:bg-amber-300 hover:text-black active:bg-blue-500 active:text-white">Confirm</button>
            </div>
         </div>
      </div> 
    </>
  )
}

export default Buy