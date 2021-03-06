import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
const DrumKeys = [
{
  keyName: 'Q',
  id: 'Q',
  class: 'drum-pad',
  display: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyName: 'W',
  id: 'W',
  class: 'drum-pad',
  display: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyName: 'E',
  id: 'E',
  class: 'drum-pad',
  display: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyName: 'A',
  id: 'A',
  class: 'drum-pad',
  display: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyName: 'S',
  id: 'S',
  class: 'drum-pad',
  display: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyName: 'D',
  id: 'D',
  class: 'drum-pad',
  display: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyName: 'Z',
  id: 'Z',
  class: 'drum-pad',
  display: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyName: 'X',
  id: 'X',
  class: 'drum-pad',
  display: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyName: 'C',
  id: 'C',
  class: 'drum-pad',
  display: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



class DrumKey extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.showPlay = this.showPlay.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  showPlay(a) {
    this.props.showPlay(a);
  }
  handleKeyPress(e) {
    if (e.key === this.props.keyName || e.key === this.props.keyName.toLowerCase()) {
      const sound = document.getElementById(this.props.id);
      sound.currentTime = 0;
      sound.play();
      this.showPlay(this.props.display);
    }
  }

  playSound(e) {
    const sound = document.getElementById(this.props.id);
    sound.currentTime = 0;
    sound.play();
    this.showPlay(this.props.display);
  }

  render() {

    return /*#__PURE__*/(
      React.createElement("button", {
        className: this.props.class,
        id: this.props.display,
        onClick: this.playSound,
        style: { color: "black" } }, /*#__PURE__*/

      React.createElement("audio", {
        className: "clip",
        id: this.props.id,
        src: this.props.url }),

      this.props.keyName));


  }}




class DrummachineExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '' };

  }
  showPlay(a) {
    let ele = document.getElementById('display');
    ele.innerHTML = a;
    this.setState({
      display: a });


  }

  render() {
    const drumArr = DrumKeys.map(item => {
      return /*#__PURE__*/(
        React.createElement(DrumKey, {
          keyName: item.keyName,
          class: item.class,
          display: item.display,
          id: item.id,
          url: item.url,
          showPlay: this.showPlay }));


    });

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement("div", { id: "drum-keys" },
    drumArr), /*#__PURE__*/

    React.createElement("button", { id: "display" }, this.state.display)));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrummachineExample, null), document.getElementById('root'));