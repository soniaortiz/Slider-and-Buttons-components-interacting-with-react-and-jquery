import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';
import { Event } from '_debugger';
import { UIEventHandler } from 'react';

interface props{
}
interface state{//to save the value of the slider in every change
    sliderValue: number
}
export class SliderButtons extends React.Component <props, state>{//Create the buttons
    constructor(props: props) {
      super(props)
      this.state = {sliderValue: 0};//initializes the state
    }
    handleSlide(event: React.MouseEvent<HTMLButtonElement>, ui: any) {//update the state
      //console.log("update value")
      this.setState({sliderValue: ui.value});
    }
    handleChange(value: number) {//updates the slider when the button is clicked
      return ()=> {
          $('#slider').slider('value', this.state.sliderValue + value)//to update the silider when the change is done through a button
          this.setState({sliderValue: this.state.sliderValue + value})//sets new value of the component
        }    
    }
    componentDidMount(){
      // console.log("did mount");            
      $('#slider').slider({//creates an slider using jquery
        'change': this.handleChange.bind(this),
        'slide': this.handleChange.bind(this)
      });
      $('#slider').on('slide', this.handleSlide.bind(this));
    }
    componentWillUnmount(){
      // console.log("will unmount");
     $('#slider').off('slide', this.handleSlide.bind(this));
    }
    render() {//creates the buttons elements
      return <div>
        <button disabled={(this.state.sliderValue<1) ? true : false}
          className="btn default-btn"
          onClick={this.handleChange(-1)}>
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