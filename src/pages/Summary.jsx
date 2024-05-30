import { Link, useRouteLoaderData } from 'react-router-dom'
import Summary from '../components/Summary'

const SummaryPage = () => {
  const questions = useRouteLoaderData('question-programmingLanguage');
  console.log(questions);
  return (
   <Summary questions={questions}/>
  )
}

export default SummaryPage