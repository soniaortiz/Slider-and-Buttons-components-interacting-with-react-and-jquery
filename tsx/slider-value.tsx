import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Event } from '_debugger';
import { ButtonHTMLAttributes, UIEvent, ChangeEvent } from 'react';
import * as $ from 'jquery'
import 'jquery-ui/ui/widgets/slider';

interface props{
    sliderValue:number
}
interface state{
    sliderValue: number
}
export class SliderValue extends React.Component <props, state>{
    constructor(props: props) {
      super(props)
      this.state = {sliderValue: 0};
    }
    handleSlide(event: any) {//try to fix the type
      console.log("Slider value handle side lasdkjflkasd", event.value)
      this.setState({sliderValue: 55});
    }
    componentDidMount() {
      window.addEventListener('slide', this.handleSlide);//add event listener
    }
    componentWillUnmount() {
      window.removeEventListener('slide', this.handleSlide)
    }
    render() {
      return <div className="" >
        Value: {this.state.sliderValue}
      </div>
    }
  }