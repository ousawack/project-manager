const PriorityDisplay = ( {priority} ) => {
  return (
    <div className="priority-display px-24 flex items-center justify-center bg-gray-200 mx-2">
      <div className="star-container flex space-x-1.5 text-xl">
        <h2 style={{ color: priority >= 1 ? 'rgb(246,190,0)' : '' }}>★</h2>
        <h2 style={{ color: priority >= 2 ? 'rgb(246,190,0)' : '' }}>★</h2>
        <h2 style={{ color: priority >= 3 ? 'rgb(246,190,0)' : '' }}>★</h2>
        <h2 style={{ color: priority >= 4 ? 'rgb(246,190,0)' : '' }}>★</h2>
        <h2 style={{ color: priority >= 5 ? 'rgb(246,190,0)' : '' }}>★</h2>
      </div>
    </div>
  )
}

export default PriorityDisplay