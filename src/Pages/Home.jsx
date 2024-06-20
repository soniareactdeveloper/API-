const Home = () => {
  return (
    <>
    <div className="main flex justify-center  flex-wrap gap-4">
    <div className="Product flex justify-center flex-wrap gap-3">
        <div className="singleProduct w-[300px] p-3 shadow-xl bg-[#83B4FF] mt-11 rounded-md flex justify-center flex-col hover:shadow-2xl hover:bg-[#A7E6FF]">
           <div className="singleProductImg w-[250px] h-[200px] p-3 bg-white shadow-md ml-3"></div>
           <div className="content">
             <ol>
               <li className="mt-3 mb-4 text-xl text-black font-bold ">hello: </li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">bello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
             </ol>
             <button className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-[#5C2FC2] ml-6 mt-3 hover:bg-white hover:text-black active:text-white active:bg-[#5C2FC2]">Show More</button>
             <br />
             <br />
             <button className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-blue-900 ml-6 mb-4 hover:bg-white hover:text-black active:text-white active:bg-blue-900">Buy Now</button>
           </div>
        </div>
     </div>
     <div className="Product flex justify-center flex-wrap gap-3">
        <div className="singleProduct w-[300px] p-3 shadow-xl bg-[#83B4FF] mt-11 rounded-md flex justify-center flex-col hover:shadow-2xl hover:bg-[#A7E6FF]">
           <div className="singleProductImg w-[250px] h-[200px] p-3 bg-white shadow-md ml-3"></div>
           <div className="content">
             <ol>
               <li className="mt-3 mb-4 text-xl text-black font-bold ">hello: </li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">bello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
               <li className="mt-1 text-sm text-black font-normal">hello</li>
             </ol>
             <button className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-[#5C2FC2] ml-6 mt-3 hover:bg-white hover:text-black active:text-white active:bg-[#5C2FC2]">Show More</button>
             <br />
             <br />
             <button className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-blue-900 ml-6 mb-4 hover:bg-white hover:text-black active:text-white active:bg-blue-900">Buy Now</button>
           </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Home