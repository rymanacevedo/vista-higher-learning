import './App.css';

function App() {
  return (
    <>
      <h1 className=''>Say the vocabulary words</h1>
      <div className="flex items-center justify-center">
        <button>
          <span className="square-symbol"></span>
          <span>Stop</span>
        </button>
        <button>
          <span className="circle-symbol"></span>
          <span>Record</span>
        </button>

        <button>
          <span className="triangle-symbol"></span>
          <span>Review your recording</span>
        </button>
      </div>
    </>
  )
}

export default App;
