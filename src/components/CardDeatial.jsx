
const CardDeatial = ({ title, description, imgUrl, onClose }) => {
  return (
    <div className="overflow-hidden">
    <div className="absolute top-0 left-0 h-[100vh] w-[99vw] z-10 bg-[rgba(0,0,0,0.4)] ">
    <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl p-6 rounded-lg shadow-md bg-white">
    <p className="font-semibold text-3xl"> {title} </p>
    <p className="py-8"> {description} </p>
    <img className="rounded-lg" src={imgUrl} alt="Food" />
    <button onClick={onClose} className="bg-orange-500 text-white font-bold rounded-3xl py-2 px-10 mt-4">Close</button>
    </div>
    </div>
    </div>
  )
}

export default CardDeatial