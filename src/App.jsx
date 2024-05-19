import Header from "./components/Header";
import ProgrammingBox from "./components/ProgrammingBox";
const {programmingLanguages} = await import('./indexQuestion')

const App = () => {
  return (
<>
<Header/>
<div>
  <p>this is common interview question are there each language contains 60 question . let's test your level</p>
</div>
      <div className="flex justify-center ">
    <div className="grid md:grid-cols-2 lg:gird-cols-3  sm:grid-cols-1">
    {programmingLanguages.map(language =>{
      
      return <ProgrammingBox key={language.id} {...language} />
    })}

    </div>
    </div>
</>
  );
};

export default App;
