import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Home() {
    const Image= "srcComponents/Kishorekumar S  profile.jpeg";
  return (
    <div>
        <div>
            <div id='Main_Contrainer'>
      <img src={Image} alt="green iguana"/>
      <h1>hello</h1>

    </div>
    <div id='social_media'>
      {<LinkedInIcon  />}
      {<InstagramIcon />}
      {<WhatsAppIcon />}
    </div>

    <div></div>
        </div>
    </div>
  )
}

export default Home