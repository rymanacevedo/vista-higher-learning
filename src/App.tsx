import { useState } from 'react';
import Button from './components/Button';

type RecordingStates = 'idle' | 'recording' | 'reviewing';

export default function App() {
  const [finalAnswer, setFinalAnswer] = useState('');
  const [recordingState, setRecordingState] = useState<RecordingStates>('idle');

  const handleStop = () => {
    if (recordingState === 'recording') {
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.focus();
      }
    }
    setRecordingState('idle');
  };

  const handleRecord = () => {
    setRecordingState(recordingState === 'recording' ? 'idle' : 'recording');
  };

  const handleReview = () => {
    setRecordingState(recordingState === 'reviewing' ? 'idle' : 'reviewing');
  };

  return (
    <>
      <h1 className="flex justify-center items-center text-2xl mb-2">
        Say the vocabulary words
      </h1>
      <div className="space-x-4 space-y-0 flex items-center justify-center max-[350px]:flex-col max-[350px]:space-x-0 max-[350px]:space-y-4">
        <Button
          callback={handleStop}
          text="Stop"
          shape="w-4 h-4 bg-white mr-2"
          bgColor="blue"
          isDisabled={recordingState === 'idle'}
        />

        <Button
          callback={handleRecord}
          bgColor="red"
          shape="w-4 h-4 bg-white rounded-full mr-2"
          text="Record"
          isActive={recordingState === 'recording'}
        />

        <Button
          text="Review your recording"
          bgColor="green"
          shape="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white mr-2"
          callback={handleReview}
          isActive={recordingState === 'reviewing'}
        />
      </div>

      <div className="w-full max-w-2xl mx-auto mt-6">
        <textarea className="w-full p-3 border rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="w-full max-w-2xl mx-auto mt-4 space-y-4">
        <div className="flex items-center space-x-4">
          <p>Is this your final answer?</p>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="finalAnswer"
                onChange={(e) => setFinalAnswer(e.target.value)}
                value="true"
                className="form-radio"
              />
              <span className="ml-2">True</span>
            </label>
            <label className="inline-flex items-center">
              <input
                onChange={(e) => setFinalAnswer(e.target.value)}
                type="radio"
                name="finalAnswer"
                value="false"
                className="form-radio"
              />
              <span className="ml-2">False</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          disabled={finalAnswer !== 'true'}
        >
          Submit
        </button>
      </div>
    </>
  );
}
