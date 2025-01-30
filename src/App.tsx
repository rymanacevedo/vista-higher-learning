import { useState, useRef } from 'react';
import Button from './components/Button';
import { useInterval } from './hooks/useInterval';

type RecordingStates = 'idle' | 'recording' | 'reviewing';

const sampleTexts = `The quick brown fox jumps over the lazy dog.
Hello this is a sample recording text.
Today is a beautiful day for practicing vocabulary.
Learning new words helps expand your knowledge.
Practice makes perfect when learning a new language.`;

export default function App() {
  const [finalAnswer, setFinalAnswer] = useState('');
  const [recordingState, setRecordingState] = useState<RecordingStates>('idle');
  const [currentText, setCurrentText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const wordsRef = useRef<string[]>([]);
  const currentLineRef = useRef<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleStop = () => {
    setRecordingState('idle');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useInterval(
    () => {
      const lines = sampleTexts
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      const currentLine = lines[currentLineRef.current];
      wordsRef.current = currentLine.split(' ');
      if (currentWordIndex < wordsRef.current.length) {
        setCurrentText((prev) =>
          prev === ''
            ? wordsRef.current[currentWordIndex]
            : `${prev} ${wordsRef.current[currentWordIndex]}`,
        );
        setCurrentWordIndex((prev) => prev + 1);
      } else {
        currentLineRef.current++;
        setCurrentWordIndex(0);
        setRecordingState('idle');
      }
    },
    1000,
    recordingState === 'recording',
  );

  const handleRecord = () => {
    setRecordingState('recording');
    setCurrentText('');
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
        <textarea
          ref={textareaRef}
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          className="w-full p-3 border rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
