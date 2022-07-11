import React from 'react';

function App() {
  return <div><form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="text" name="email"/>
  <input type="submit" value="Submit" />
</form></div>;
}

export default App;
