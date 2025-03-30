const VideoTitle = ({title, overview}) => {
  return (
    //    w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black

    <div className="w-screen aspect-video pt-[30%] md:pt-[17%] px-7 absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
        <p className="w-1/4 hidden md:block">{overview}</p>
        <div className="flex mt-4">
            <button className="bg-white hover:bg-gray-200 text-black p-1 md:p-4 md:px-12 rounded-md mr-2  "> ▶ Play</button>
            <button className = "bg-gray-400 text-white p-2 px-4 rounded-md hidden md:block"> More Info</button>
        </div>
    </div>
  )
}
export default VideoTitle