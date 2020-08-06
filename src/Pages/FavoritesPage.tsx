import React, { useContext, Suspense } from 'react';

import App from '../App';
import { Store } from '../redux/store';
import { IEpisodeProps } from '../Types/types';
import { toggleFavAction } from '../redux/actions.redux';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodeList'));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };
  console.log('these are props', props);
  return (
    <App>
      <Suspense fallback={<div>loading...</div>}>
        <div className="episode-layout">
          <EpisodeList {...props} />
        </div>
      </Suspense>
    </App>
  );
}
