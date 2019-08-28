import React from 'react'
import './App.css'
class sidebar extends React.Component {
    render() {
        return (
            <aside className='col-9 col-md-5 col-lg-4 col-xl-3 p-0 border-left position-fixed bg-white text-center d-flex flex-column justify-content-between h-100'
                style={{ right: this.props.value }}>
                <div className='bg-dark text-white py-3'>
                    <h4 className='font-weight-bold'>About</h4>
                </div>
                <div className='d-flex flex-column justify-content-between h-50 px-1'>
                    <h3 className='font-weight-bold'>Fancy Bulb</h3>
                    <p>A simple web-app, Bulb with turn on and off functionality.</p>
                    <h3 className='font-weight-bold'>Developer Info</h3>
                    <p>Name: Muhammad Zubair Moosani</p>
                    <i className="far fa-envelope fa-2x"></i>
                    <a href="mailto:muhammadzubairmoosani@gmail.com">muhammadzubairmoosani@gmail.com</a>
                    <h4>Visit Link:</h4>
                    <i className="fab fa-github fa-2x"></i>
                    <a href="https://www.github.com/muhammadzubairmoosani" target="_blank">GitHub</a>
                    <p></p>
                </div>
                <footer className='bg-dark text-white py-2'>
                    <span className='font-weight-bold'>W3C Validate</span>
                </footer>
            </aside>
        );
    }
}
export default sidebar;