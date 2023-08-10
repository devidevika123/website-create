import React from 'react'
import "./container.css";
import einpunk from "./assets/einpunk.png"
function Container() {
  return (
    <div className='main'>
      <div class="image">
        <img src={einpunk} alt="Einpunk" width="650" height="420"/>
      </div>
       <h2 className='text'>The World's Fastest Growing  <br/> <span>Token</span> Protocol</h2>
      <p className='col'><span>Einpunk Protocol</span> is a decentralized application platform designed to make apps usable on <br/>the web.</p>
      <p className='net'>The network runs on a Proof-of-Stake (POS) consensus mechanism called Nightsade,<br/> which aims to offer scalability and stable fees.</p>
      <p className='use'>EinpunkUSD is the native   utility token that is used for:<br/>
       Fees for processing transaction and storing data<br/>
       Running validator nodes on the network via staking EinpunkUSD token <br/>
       Used for governance votes to determine how network resources are allocated</p>
       <h5 className='add'>Einpunk Token Contract Address</h5>
       <h5 className='link'>0x89a081999249407C1153e135A2Af7d323419A66A</h5>
       <a className="btn" href="https://t.me/+cBzvl0ZWRkxjYmMx">Join our Community</a>
       
       
      </div>
  )
}
export default Container