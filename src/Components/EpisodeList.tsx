import React from 'react';
import { IEpisode, Dispatch, IState, FavAction } from '../Types/types';

interface IProps {
  episodes: Array<IEpisode>;
  toggleFavAction: FavAction;
  favorites: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
}

export default function EpisodesList(props: IProps): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={!!episode.image ? episode.image.medium : ''} alt={`Girls ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
}
