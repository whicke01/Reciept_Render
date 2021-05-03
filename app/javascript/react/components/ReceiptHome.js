import React from 'react'
import { Link } from 'react-router-dom'

import ReceiptLinkButton from './ReceiptLinkButton'

const ReceiptHome = (props) => {

  return(
    <div className='main_div cell small-10'>
      <div className='grid-x grid-margin-x align-spaced'>
        <div className='cell small-10 home_header'>
          <h1>Welcome to Receipt Render!</h1>
        </div>

        <ReceiptLinkButton url='/Receipt/new' text='Add a Receipt'/>
        <ReceiptLinkButton url='/' text='Check Receipt History'/>
      </div>
    </div>
  )
}

export default ReceiptHome
