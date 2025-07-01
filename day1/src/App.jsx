// App.js
import React from 'react';
import Students from './Students';

function App() {
  return (
    <div>
      <Students name="Tharik" age={18} isStudent={true} />
      <Students />
    </div>
  );
}

export default App;
