import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-screen flex justify-center  gap-10  pt-10 h-screen bg-gray-900 text-yellow-600">
    <div className='flex flex-col gap-5 items-center'>
    <p className='text-4xl text-white ' >Cloud not found the page!</p>
      <Link
        className="px-6 py-4 rounded-lg text-xl text-white bg-yellow-500 shadow-2xl shadow-yellow-500/75"
        to="/"
      >
        Back to Home
      </Link>
    </div>
    </div>
  );
};

export default ErrorPage;
