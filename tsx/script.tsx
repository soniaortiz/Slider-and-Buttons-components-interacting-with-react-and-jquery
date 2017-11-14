import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SliderValue} from './slider-value';
import {SliderButtons} from './slider-buttons';

ReactDOM.render(
    <div>
      <SliderValue />
      <SliderButtons/>
    </div>,
    document.getElementById('content')
  )
  