import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import Nav from './Nav'
import './voice.css'


class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <Nav></Nav>
        <div className="voice-container">
            <span className="voice-title">PROXIMAMTENTE</span>
            <button onClick={resetTranscript}>Reset</button>
            <span>{transcript}</span>
        </div>
      </div>
    )
  }
}


export default SpeechRecognition(Dictaphone)