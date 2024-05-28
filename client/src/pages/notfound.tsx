import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-8 text-2xl text-gray-600">존재하지 않는 페이지입니다.</p>
      <Link to="/" className="text-xl text-blue-500 hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
