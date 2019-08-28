import React from 'react'
import './App.css';
import idea from './images/idea.png'
import noIdea from './images/no-idea.png'
import badIdea from './images/bad-idea.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';
import SideBar from './sidebar'
import icon from './images/bar-icon.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: noIdea,
      btnText: 'Idea',
      value: '-410px',
    }
  }
  changeHandle(id) {
    id === 1
      ? this.setState({
        btnText: this.state.btnText === 'Idea' ? 'No Idea' : 'Idea',
        img: this.state.img === noIdea || this.state.img === badIdea ? idea : noIdea,
      })
      : this.setState({
        btnText: 'Idea',
        img: this.state.img === noIdea || this.state.img === idea ? badIdea : noIdea,
      })
  }

  showSidbar(a) {
    this.setState({ value: a })
  }

  render() {
    return (
      <div className="App">
        <Image
          src={icon} alt="bar-icon"
          className="position-fixed"
          style={{ right: '20px', top: '15px', zIndex: '0' }}
          onMouseOver={() => this.setState({ value: '0px' })}/>
        <SideBar value={this.state.value} />
        <div
          className="App d-flex flex-column justify-content-center align-items-center bg-dark"
          onMouseOver={() => this.setState({ value: '-410px' })}>
          <Image src={this.state.img} className='mb-2 col-12 col-md-8 col-lg-6 col-xl-5' />
          <div className='btn-group-lg text-center w-100 px-2' >
            <Button
              variant='outline-warning mt-2 col-md-3 mx-1 col-lg-2'
              onClick={() => this.changeHandle(1)}
            >{this.state.btnText}</Button>
            <Button
              variant='outline-danger mt-2 col-md-3 mx-1 col-lg-2'
              onClick={() => this.changeHandle()}
            >Bad Idea</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;