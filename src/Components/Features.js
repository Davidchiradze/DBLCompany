import React from 'react'
import './Features.scss'

import { Typography, AppBar, Card,CardActions, CardContent,CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'

const Features = () => {
  return (
    <section className='features'>
      <div>
        <h2 className='features-h2' >ჩვენი კომპანია გთავაზობთ</h2>
        <span className='after'></span>
        <p className='long-copy'>ჩვენთან მშენებლობის შემთხვევაში სრული არქიტექტურული მომსახურება საჩუქრად. ჩვენ დაგეხმარებიტ თქვენს სურვილებზე მორგებული ინდივიდუალური სახლების, აგარაკების და კომერციული ფართების პროექტირებასა და მშენებლობაში</p>
      </div>
    </section>
  )
}

export default Features;