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
      this.handleSlide = this.handleSlide.bind(this);
      this.state = {sliderValue: 0};
    }
    handleSlide(event: UIEvent<ChangeEvent<HTMLElement>>) {//not working
      console.log("Slider value handle side")
      this.setState({sliderValue: 55});
    }

    componentDidMount() {
      window.addEventListener('slide', this.handleSlide.bind(this))
    }
    componentWillUnmount() {
      window.removeEventListener('slide', this.handleSlide.bind(this))
    }

    handleChange(){
       console.log("handle change slider-value")
      let handleChange = (e: Event, ui: UIEvent<ChangeEvent<HTMLElement>>)=>{
        var slideEvent = new CustomEvent('slide', {
          detail: {ui: ui, jQueryEvent: e}
        })
        window.dispatchEvent(slideEvent)
        console.log(slideEvent)
      }
    }

    render() {

      $('#slider').slider({
        'change': this.handleChange.bind(this),
        'slide': this.handleChange.bind(this)
      })
      return <div className="" >
        Value: {this.state.sliderValue}
      </div>
    }
  }