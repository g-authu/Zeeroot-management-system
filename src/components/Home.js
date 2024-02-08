import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import "../components/Home.css"
import "../components/Footer.css";



function Home() {
  return (
    <div className='home' style={ {backgroundImage : `url(${'https://img.freepik.com/premium-photo/email-user-icon-sign-symbol-marketing-newsletter-concept-diagram-sending-email-bulk-mail-email-sms-marketing-concept-scheme-direct-sales-business-list-clients-mailing_150455-10441.jpg?size=626&ext=jpg&ga=GA1.1.2100980944.1648884630&semt=ais'})` }}>
        <div className='headerContainer' >
        <h1>User Management System</h1> <br/>
        <Link to="/UserDataTable">
        <button>CLICK NOW</button>

        </Link>
        </div>
    </div>
  )
}

export default Home