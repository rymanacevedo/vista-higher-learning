
function App() {
  return (
    <>
      <h1 className=''>Say the vocabulary words</h1>
      <div className="flex eitems-center justify-items-center">
        <button className='inline-flex justify-center rounded-md border border-transparent cursor-pointer bg-blue-600 text-white'>
          <span className="square-symbol"></span>
          <span>Stop</span>
        </button>
        <button className="inline-flex justify-center rounded-md border border-transparent cursor-pointer bg-red-600">
          <span className="circle-symbol"></span>
          <span>Record</span>
        </button>

        <button className="inline-flex justify-center rounded-md border border-transparent cursor-pointer bg-green-800">
          <span className="triangle-symbol"></span>
          <span>Review your recording</span>
        </button>
      </div>
    </>
  )
}

export default App;
