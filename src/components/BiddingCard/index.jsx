import React from 'react'
import './style.css'

const BiddingCard = ({children}) => {
  return (
    <div>
        <div className="bidding-card">
              {children}
        </div>
    </div>
  )
}

export default BiddingCard