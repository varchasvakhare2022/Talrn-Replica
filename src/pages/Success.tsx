export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          🎉 Registration Successful!
        </h1>
        <p className="text-gray-600">
          Your email has been verified successfully.
        </p>
      </div>
    </div>
  );
}
