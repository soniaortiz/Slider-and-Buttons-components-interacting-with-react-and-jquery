import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Event } from '_debugger';
import { ButtonHTMLAttributes, UIEvent, ChangeEvent } from 'react';
import * as $ from 'jquery'
import 'jquery-ui/ui/widgets/slider';

interface props{
    sliderValue?:number
}
interface state{
    sliderValue: number
}
export class SliderValue extends React.Component <props, state>{
    constructor(props: props) {
      super(props)
      this.state = {sliderValue: 0};
      this.handleSlide =  this.handleSlide.bind(this);
    }
    handleSlide(event: JQuery.Event, {value= 0}: JQueryUI.SliderUIParams) {//try to fix the type
      console.log("Slider value handle side lasdkjflkasd", event)
      this.setState({sliderValue: value});
    }
    componentDidMount() {
      $('#slider').on('slide', this.handleSlide) 
    }
    componentWillUnmount() {
      $('#slider').off('slide', this.handleSlide)
    }
     render() {
      return <div className="" >
        Value: {this.state.sliderValue}
      </div>
    }
  }