import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import {STORY_ARCHIVE} from  './constants/actionTypes';
import {getReadableStories}from './selectors/story';
import { doArchiveStory } from './actions/archive';
  ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
  );
