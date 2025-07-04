import { FrownIcon } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center flex flex-col items-center">
        <FrownIcon className="w-16 h-16 text-gray-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
