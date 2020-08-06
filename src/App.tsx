import React, { useContext } from 'react';
import { Store } from './redux/store';
import { Link } from '@reach/router';

const App = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Television</h1>
          <p>You have nice taste!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      {children}
    </>
  );
};
export default App;
