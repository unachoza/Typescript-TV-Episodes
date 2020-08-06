import React, { useEffect, useContext, Suspense } from 'react';

import App from '../App';
import { Store } from '../redux/store';
import { IEpisodeProps } from '../Types/types';
import { fetchDataAction, toggleFavAction } from '../redux/actions.redux';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodeList'));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <App>
      <Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </App>
  );
};
export default HomePage;
