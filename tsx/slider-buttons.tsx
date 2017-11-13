import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';
import { Event } from '_debugger';
import { SliderValue } from './slider-value';
import { UIEventHandler } from 'react';

interface props{
}
interface state{
    sliderValue: number
}
export class SliderButtons extends React.Component <props, state>{//Create the buttons
    constructor(props: props) {
      super(props)
      this.state = {sliderValue: 0};
      this.handleSlide = this.handleSlide.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSlide(event: React.MouseEvent<HTMLButtonElement>, ui: UIEventHandler<HTMLSpanElement>) {//update the state
     
      console.log("handle slide" ,ui);//.value
      this.setState({sliderValue: 0});
    }
    handleChange(value: number) {//updates the slider when the button is clicked
      //console.log("Handle change");
      return ()=> {
          console.log("sets new value");
          $('#slider').slider('value', this.state.sliderValue + value)
          this.setState({sliderValue: this.state.sliderValue + value})//sets new value
        }//for every click in the buttons or in the slide will be executed
      
    }
    componentDidMount() {
      // console.log("did mount");
      $('#slider').on('slide', this.handleSlide.bind(this));
    }
    componentWillUnmount() {
      // console.log("will unmount");
     $('#slider').off('slide', this.handleSlide.bind(this))
    }
    render() {//creates the buttons elements
      return <div>
        <button disabled={(this.state.sliderValue<1) ? true : false}
          className="btn default-btn"
          onClick={this.handleChange(0)}>
            1 Less ({this.state.sliderValue - 1})
        </button>
        <button disabled={(this.state.sliderValue>99) ? true : false}
          className="btn default-btn"
          onClick={this.handleChange(1)}>
            1 More ({this.state.sliderValue + 1})
        </button>
      </div>
    }
  }