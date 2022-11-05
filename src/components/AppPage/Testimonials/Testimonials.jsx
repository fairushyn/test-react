import React from 'react'
import './Testimonials.css'
import img1 from '../../../assets/img1.jpg'

const testimonials =[
    {
        id:1,
        img:img1,
        name:'Samuel Louis',
        designation:'Some designation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a porta turpis, vitae sodales ipsum. Aliquam malesuada luctus urna, sed luctus ligula tempor vitae.Cras eu quam neque.'
    },
    {
        id: 2,
        img: img1,
        name: 'Samuel Louis',
        designation: 'Some designation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a porta turpis, vitae sodales ipsum. Aliquam malesuada luctus urna, sed luctus ligula tempor vitae.Cras eu quam neque.'
    },
    {
        id: 3,
        img: img1,
        name: 'Samuel Louis',
        designation: 'Some designation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a porta turpis, vitae sodales ipsum. Aliquam malesuada luctus urna, sed luctus ligula tempor vitae.Cras eu quam neque.'
    },
    {
        id: 4 ,
        img: img1,
        name: 'Samuel Louis',
        designation: 'Some designation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a porta turpis, vitae sodales ipsum. Aliquam malesuada luctus urna, sed luctus ligula tempor vitae.Cras eu quam neque.'
    },
    {
        id: 5,
        img: img1,
        name: 'Samuel Louis',
        designation: 'Some designation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a porta turpis, vitae sodales ipsum. Aliquam malesuada luctus urna, sed luctus ligula tempor vitae.Cras eu quam neque.'
    },
    {
        id: 6,
        img: img1,
        name: 'Samuel Louis',
        designation: 'Some designation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a porta turpis, vitae sodales ipsum. Aliquam malesuada luctus urna, sed luctus ligula tempor vitae.Cras eu quam neque.'
    },
];

const TestimonialsCards = testimonials.map((card) => {
    return(
        <div className="landinpageCard">
            <div className="header">
                <div className="img">
                    <img src={card.img} alt="" />
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="headingtext">
                        <h5>{card.name}</h5>
                        <h6>{card.designation}</h6>
                    </div>
                </div>
            </div>
            <div className="cardBody">
                <p>{card.text}</p>
            </div>
        </div>
    );
}) 

function Testimonials() {
    return (
        <div className="testimonials">
            <h1>Let’s hear it from our users:</h1>
            <div className="t_container" style={{scrollDirection:'horizontal'}}>
                {TestimonialsCards}
            </div>
        </div>
    )
}

export default Testimonials
