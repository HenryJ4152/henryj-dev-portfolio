
function Language({ name, selectedNum, num }) {
  return (
    <p className={`hover:text-blue-500 select-none ${selectedNum == num && "text-blue-500"}`}>{name}</p>
  )
}

export default Language