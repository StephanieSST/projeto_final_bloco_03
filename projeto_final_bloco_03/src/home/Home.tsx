import images from "../assets/images.jpg"
function Home() {
    return (
        <>
        <div className="bg-slate-200 flex justify-center">
          <div className='grid-cols-2 text-cyan-700 py-48'>
             <h2 className='text-5xl font-bold py-6 ps-48'>Seja bem vinde!</h2>
              <p className='text-xl'>Aqui você encontrado os mais diversos produtos para cada uma de suas necessidades!</p>
          </div>
          <div className="py-24 ps-32">
            <img className="rounded-full object-cover h-96 w-62" src={images} alt="" />
          </div>
        </div>
    
      </>
    );
}

export default Home;