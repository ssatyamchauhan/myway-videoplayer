import React from 'react';
import YouTube from 'react-youtube';
import './App.css'
import TextField from '@material-ui/core/TextField';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      listOfLink: ["hiu9WSl4OKg"],
      link: null,
      videoId: null,
    }
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  componentDidMount() {
    if (this.state.listOfLink.length) {
      this.setState({
        videoId: this.state.listOfLink[0],
      })
    }
  }


  onEnd = () => {
    if (this.state.listOfLink.length) {
      let newlist = this.state.listOfLink.slice(1,this.state.listOfLink.length)
      this.setState({
        listOfLink: newlist,
        videoId: newlist[0],
      })
    }
  }

  onError = () => {
    console.log('this is not a valid Url')
    if (this.state.listOfLink.length) {
      let newlist = this.state.listOfLink.slice(1,this.state.listOfLink.length)
      this.setState({
        listOfLink: newlist,
        videoId: newlist[0],
      })
    }
  }

  addLink = (event) => {

    if ((event.key === 'Enter' || event.target.id === 'Enter') && this.state.link !== null) {
      let r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
      r = this.state.link.match(rx);
      let list = this.state.listOfLink;
      list.push(r[1])
      this.setState({
        listOfLink: list,
        link: ''
      }, () => console.log(this.state.listOfLink))
    }
  }



  render() {
    const opts = {
      marginTop: '100',
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    let linkJSX = (
      this.state.listOfLink.map((e, i) => {
        return (
          <li key={i}>{"Link" + (i + 1)}</li>
        )
      })
    )
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <i id="Enter" className="material-icons prefix add-button" onClick={this.addLink}>queue</i>
            <TextField
              onKeyPress={this.addLink}
              style={{ width: "500px", float: "right" }}
              onChange={(event) => this.setState({
                link: event.target.value
              })}
              value={this.state.link}
              required
              id="standard-required"
            />

          </div>
        </nav>
        <div className="main">
          <div className="video-player">
            <YouTube
              className="youtube"
              videoId={this.state.videoId}
              opts={opts}
              onEnd={this.onEnd}
              onError={this.onError} 
              onReady={this._onReady}
            />
          </div>
          <div className="listoflink">
            <ul>
              {linkJSX}
            </ul>
          </div>
        </div>

      </div>

    );
  }


}
export default App;
