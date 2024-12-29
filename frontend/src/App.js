import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);  // State to hold data from backend

  useEffect(() => {
    // Fetch data from backend API
    fetch("/api/data")  // Assuming you're using the proxy from package.json
      .then(response => response.json())
      .then(data => {
        setData(data);  // Store data in state
      })
      .catch(error => console.error('Error:', error));
  }, []);  // Empty array ensures this effect runs only once when the component mounts

  return (
    <div className="App">
      <h1>Shubham</h1>
      {data ? <p>{data.message} Lokesh Chinar nhi h </p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
