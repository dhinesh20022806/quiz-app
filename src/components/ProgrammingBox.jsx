
const ProgrammingBox = ({image, title, cssClass}) => {
  return (
    <button className={` transition-all transform md:hover:scale-100 sm:hover:scale-90 xs:scale-50 xs:hover:scale-75 xxs:scale-50 xxs:hover:scale-75 xxs:w-[50rem]  md:scale-50  ${cssClass}  w-[50rem] h-[30rem]    shadow-2xl   relative rounded-2xl text-white`}>
    <p className='text-2xl uppercase font-bold text-center my-14 '>{title}</p>
    <img src={image}  className='w-60 xxs:w-48 xxs:top-[-10%] xxs:right-[-10%] absolute top-[-25%] right-[-20%]  shadow-sm shadow-gray-650' alt={title}  />
    </button>
  )
}

export default ProgrammingBox