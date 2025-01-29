import { useState } from "react";

export default function App() {
  const [finalAnswer, setFinalAnswer] = useState('');
  return (
    <>
      <h1 className="flex justify-center items-center">Say the vocabulary words</h1>
      <div className="space-x-4 space-y-0 flex items-center justify-center max-[350px]:flex-col max-[350px]:space-x-0 max-[350px]:space-y-4">
        <button className="inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-blue-600 text-white p-4 hover:ring-[0.75em] hover:ring-blue-200 focus:ring-[0.75em] focus:ring-blue-200 transition-all">
          <span className="w-4 h-4 bg-white mr-2" />
          <span>Stop</span>
        </button>

        <button className="inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-red-600 text-white p-4 hover:ring-[0.75em] hover:ring-red-200 focus:ring-[0.75em] focus:ring-red-200 transition-all">
          <span className="w-4 h-4 bg-white rounded-full mr-2" />
          <span>Record</span>
        </button>

        <button className="inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-green-800 text-white p-4 hover:ring-[0.75em] hover:ring-green-200 focus:ring-[0.75em] focus:ring-green-200 transition-all">
          <span className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white mr-2" />
          <span>Review your recording</span>
        </button>
      </div>

      <div className="w-full max-w-2xl mx-auto mt-6">
        <textarea
          className="w-full p-3 border rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your answer based on the reading material"
        />
      </div>

      <div className="w-full max-w-2xl mx-auto mt-4 space-y-4">
        <div className="flex items-center space-x-4">
          <p>Is this your final answer?</p>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="finalAnswer"
                onChange={(e) => setFinalAnswer(e.target.value)}
                value="true" className="form-radio" />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center">
              <input onChange={(e) => setFinalAnswer(e.target.value)} type="radio" name="finalAnswer" value="false" className="form-radio" />
              <span className="ml-2">False</span>
            </label>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled={finalAnswer !== 'true'}>
          Submit
        </button>
      </div>
    </>
  );
}
