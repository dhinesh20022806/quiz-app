import { Link } from 'react-router-dom';
const ProgrammingBox = ({ image, title, cssClass, link }) => {
  return (
    <Link
      to={`/${link}`}
      relative='path'
      className={` transition-all transform flex flex-col justify-center xs:scale-50 xs:hover:scale-75 min-h-[300px] xxs:scale-50 xxs:hover:scale-75  md:scale-50  ${cssClass}  shadow-2xl relative rounded-2xl text-white`}
    >
      <p className="text-5xl uppercase font-bold text-center  ">
        {title}
      </p>
      <img
        src={image}
        className="w-60 xxs:w-48 xxs:top-[-10%] xxs:right-[-10%] absolute top-[-25%] right-[-20%]  "
        alt={title}
      />
    </Link>
  );
};

export default ProgrammingBox;
