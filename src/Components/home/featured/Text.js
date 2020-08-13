import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import Trophy from '../../../Resources/images/trophy1.png'

class Text extends Component {

    animateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate:0
            }}
            enter={{
                opacity:[1],
                rotate:[360],
                timing:{duration: 1000, ease:easePolyOut}
            }}
        >
            {({opacity,rotate})=>{
               return(
                   <div className="featured_number"
                        style={{
                            opacity,
                            transform: `translate(260px,50px) rotateY(${rotate}deg)`
                        }}
                   >
                    11
                   </div>
               ) 
            }}
        </Animate>
    );


    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:300
            }}
            enter={{
                opacity:[1],
                x:[273],
                y:[300],
                timing:{duration: `${700}`, ease:easePolyOut}
            }}
        >
            {({opacity, x, y})=>{
            return(
                <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                >
                    IPL
                </div>
            ) 
            }}
        </Animate>
    )

    animateSecond = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
            x:503,
            y:440
        }}
        enter={{
            opacity:[1],
            x:[273],
            y:[440],
            timing:{delay:300,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity, x, y})=>{
        return(
            <div className="featured_second"
                    style={{
                        opacity,
                        transform: `translate(${x}px,${y}px)`
                    }}
            >
            TURNAMENT
            </div>
        ) 
        }}
    </Animate>
    )

    animateTrophy  = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
        }}
        enter={{
            opacity:[1],
            timing:{delay:800,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity})=>{
        return(
            <div className="featured_trophy"
                    style={{
                        opacity,
                        background: `url(${Trophy})`,
                        transform: `translate(640px,180px)`
                    }}
            >
            </div>
        ) 
        }}
    </Animate>
    )

    render() {
        return (
            <div className="featured_text">
                {this.animateTrophy()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
                
            </div>
        );
    }
}

export default Text;