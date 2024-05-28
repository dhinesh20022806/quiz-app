import { Link } from "react-router-dom";
const ProgrammingBox = ({ image, title, cssClass , link}) => {
  return (
    <Link to={`/${link}/quiz`}
      className={` transition-all transform flex flex-col justify-center    xs:scale-50 xs:hover:scale-75 xxs:scale-50  md:scale-50  ${cssClass}  h-[40vh] shadow-2xl relative rounded-2xl text-white`}
    >
      <p className="text-2xl uppercase font-bold text-center  ">{title}</p>
      <img
        src={image}
        className="w-60 xxs:w-48 xxs:top-[-10%] xxs:right-[-10%] absolute top-[-25%] right-[-20%]  "
        alt={title}
      />
    </Link>
  );
};

export default ProgrammingBox;
