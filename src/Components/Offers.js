import React from 'react'
import './Offers.scss'
import offersPhoto from '../assets/offers.jpg'
const Offers = () => {
  return (
      <section className='offers-section'>

    <div className="offers-div">

        <img src={offersPhoto}/>
        <ul> 
        <li> <ion-icon name="checkmark-outline"></ion-icon>
 არქიტექტურული პროექტი</li>
        <li>
        <ion-icon name="checkmark-outline"></ion-icon>
            ტოპოგრაფიული გეგმა</li>
        <li>
        <ion-icon name="checkmark-outline"></ion-icon>
            გეოლოგია ექსპერტიზით</li>
        <li>
        <ion-icon name="checkmark-outline"></ion-icon>
            სრული მშენებლობა</li>
        <li>
        <ion-icon name="checkmark-outline"></ion-icon>
            კონსტრუქციული ნახაზი ექსპერტიზით</li>
        <li>
        <ion-icon name="checkmark-outline"></ion-icon>
             მერიასთან შეთანხმება</li>
        </ul>

        <a href='tel:+995591605600'> <ion-icon name="call-outline"></ion-icon> დარეკეთ ნომერზე</a>
        
    </div>
    </section>

  )
}

export default Offers;