const ProgressDisplay = ( {progress} ) => {
  return (
    <div className="progress-display flex items-center justify-center min-w-[200px] bg-gray-200 px-4">
      <div className="progress-bar w-full h-7 bg-gray-400 rounded-3xl overflow-hidden">
        <div className="progress-indicator bg-blue-400 h-full" style={{width: progress + "%"}}>
        </div>
      </div>
    </div>
  )
}

export default ProgressDisplay