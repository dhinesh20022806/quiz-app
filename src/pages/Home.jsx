import Footer from '../components/Footer';
import ProgrammingBox from '../components/ProgrammingBox';

import { programmingLanguages } from '../languageData';

const HomePage = () => {
  return (
    <>
      <div className="text-center ">
        <p className='w-[80%] text-3xl mx-auto overflow-hidden '>
        All Question And Answer taken From ChatGPT, It May Be Incorrect. But It's Boost Your Knowledge
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  xxs:grid-cols-1  ">
        {programmingLanguages.map(language => {
          return (
            <ProgrammingBox key={language.id} {...language} />
          );
        })}
      </div>
      
    </>
  );
};

export default HomePage;
