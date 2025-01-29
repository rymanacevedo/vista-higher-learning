export default function App() {
  return (
    <>
      <h1 className="flex justify-center items-center">Say the vocabulary words</h1>
      <div className="space-x-4 flex items-center justify-center">
        <button className="inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-blue-600 text-white p-4">
          <span className="w-4 h-4 bg-white mr-2" />
          <span>Stop</span>
        </button>

        <button className="inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-red-600 text-white p-4">
          <span className="w-4 h-4 bg-white rounded-full mr-2" />
          <span>Record</span>
        </button>

        <button className="inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-green-800 text-white p-4">
          <span className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white mr-2" />
          <span>Review your recording</span>
        </button>
      </div>
    </>
  );
}
