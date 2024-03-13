import React from 'react'
import './hero.css'
import waving from '../assets/waving_hand.png'


export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h3>NEW ARRIVALS ONLY</h3>
                <div>
                    <div className='hand-icon'>
                        <p>new</p>
                        <img src={waving} alt='' />
                    </div>
                    <p>collections</p>
                    <p style={{ marginTop: '5px' }}>for everyone</p>

                    <button>Latest Collection</button>
                </div>
                
            </div>

            <div className='hero-right'>
                
            </div>

        </div>
    )
}
