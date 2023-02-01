
function LanguageLogo({imgUrl, selectedNum, num, bg}) {
  return (
    <div className=' w-24 h-24 bg-white group overflow-hidden'>
      <img
        className={`w-full h-full object-cover transform transition duration-300 ease-out group-hover:scale-110 ${selectedNum == num && 'scale-110'} ${bg && bg}`}
        src={imgUrl} alt="" />
    </div>
  )
}

export default LanguageLogo