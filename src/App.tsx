import React from 'react';
import { Store } from './redux/store';

const App = (): JSX.Element => {
  const store = React.useContext(Store);
  console.log(store);
  return (
    <>
      <h1>Television</h1>
      <p>your taste</p>
    </>
  );
};

export default App;
