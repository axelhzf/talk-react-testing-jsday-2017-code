import React from 'react';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import axios from 'axios';

function gifReducer(state = { state: undefined }, action) {
  switch (action.type) {
    case 'FETCH_GIF':
      return { state: 'loading' };
    case 'FETCH_GIF_SUCCESS':
      return { state: 'success', url: action.url };
    case 'FETCH_GIF_ERROR':
      return { state: 'error' };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  gif: gifReducer
});

const fetchGif = () => async dispatch => {
  dispatch({ type: 'FETCH_GIF' });
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://www.graphqlhub.com/graphql',
      data: { query: getRandomGifQuery }
    });
    const url = response.data.data.giphy.random.images.original.url;
    dispatch({ type: 'FETCH_GIF_SUCCESS', url });
  } catch (e) {
    dispatch({ type: 'FETCH_GIF_ERROR' });
  }
};

export const createDefaultStore = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: 'redux-async'
        })
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(reducer, enhancer);
  return store;
};

class RandomGif extends React.Component {
  componentDidMount() {
    this.props.fetchGif();
  }

  render() {
    const { gif, fetchGif } = this.props;
    if (gif.state === undefined) return null;
    if (gif.state === 'loading') return <div>Loading...</div>;
    if (gif.state === 'error') return <div>Error</div>;
    return (
      <div>
        <img src={gif.url} />
        <button onClick={fetchGif}>Random</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gif: state.gif
});

export const RandomGifContainer = connect(mapStateToProps, { fetchGif })(
  RandomGif
);

const getRandomGifQuery = `
{
  giphy {
    random(tag: "cool") {
      images {
        original {
          url
        }
      }
    }
  }
}
`;
