/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServicesService {

  constructor() { }

  Slider = [
    { image: 'assets/cards/offer1.jpg', title: 'Fitness with friends', TnC: 'A suprising offer to join fitness with your fitness love friends. Lets give a fit shot together', color: '#d44c79' },
    { image: 'assets/cards/offer2.jpg', title: 'Fitness with family', TnC: 'A wonderful offer to join fitness with your family member. Lets give a fit gift to your family', color: '#fecf01' },
    { image: 'assets/cards/offer1.jpg', title: 'Fitness with friends', TnC: 'A suprising offer to join fitness with your fitness love friends. Lets give a fit shot together', color: '#318be8' },
    { image: 'assets/cards/offer2.jpg', title: 'Fitness with family', TnC: 'A wonderful offer to join fitness with your family member. Lets give a fit gift to your family', color: '#e85f11' },
    { image: 'assets/cards/offer1.jpg', title: 'Fitness with friends', TnC: 'A suprising offer to join fitness with your fitness love friends. Lets give a fit shot together', color: '#09ece5' },
    { image: 'assets/cards/offer2.jpg', title: 'Fitness with family', TnC: 'A wonderful offer to join fitness with your family member. Lets give a fit gift to your family', color: '#d44c79' },
  ];



  allothers = [
    {
      title: 'Events',
      data: [
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/events4.jpg', largeimage: 'assets/cards/events5.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/events5.jpg', largeimage: 'assets/cards/events2.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/events2.jpg', largeimage: 'assets/cards/events1.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/events3.jpg', largeimage: 'assets/cards/events3.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/events4.jpg', largeimage: 'assets/cards/events5.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/events5.jpg', largeimage: 'assets/cards/events2.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] }
      ]
    },
    {
      title: 'Plays',
      data: [
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/cards/plays1.jpg', largeimage: 'assets/events.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/plays2.jpg', largeimage: 'assets/plays2.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/plays3.jpg', largeimage: 'assets/plays4.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/plays4.jpg', largeimage: 'assets/plays3.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/plays5.jpg', largeimage: 'assets/plays1.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] }
      ]
    },
    {
      title: 'Sports',
      data: [
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/sports.jpg', largeimage: 'assets/events.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/sports2.jpg', largeimage: 'assets/events1.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/sports4.jpg', largeimage: 'assets/events2.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/sports5.jpg', largeimage: 'assets/events5.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] },
        { name: 'Sunburn Arena with Nucleya - Jaipur', image: 'assets/sports8.jpg', largeimage: 'assets/events4.jpg', type: 'Comedy', lang: 'Hindi', duration: '1hr 30mins', age: '15+', fulldate: 'Sat 22 Dec - Sun 27 Jan', month: 'DEC', date: '16', day: 'SUN', price: '250', venues: 'Jaipur | Mumbai | Chennai', crew: { type: 'Artist(s)', people: [{ name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }, { name: 'Kishore Dayani', image: '//in.bmscdn.com/Artist/1057438.jpg' }] }, content: ['Kishore Dayani comes from Bihar. He is a mix of various cultures, which kind of makes him a confused mix of ethnicities.  He is cynical about things which are happening in the society. He at large talks about what has been happening in his life and how day to day things effect him. How being a Bihari, he was a misfit in the fast-paced life of Delhi and how he coped with that.  Watch his as he adds a pinch of sarcasm and a dash of satire in everything that he says and does.  He has recently turned down marriage proposals from Priyanka Chopra and Katrina Kaif. Ungli Mat Kar is something which he says at the end of every conversation.', 'This stand-up special is going to be a great experience.'], list: [{ title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }, { title: 'Terms & Conditions', content: ['Age Limit: 15+', 'Internet handling fee per ticket may be levied. Please check your total amount before payment.', 'Tickets once booked cannot be exchanged or refunded.', 'We recommend that you arrive at least 20 minutes prior at the venue to pick up your physical tickets.'] }] }
      ]
    }
  ];


  topSaversproduct = [{
    headingLeft: 'Top Savers Today', headingRight: 'See all',
    products: [
      { id: 0, off: '22% off', name: 'Banana', image: 'assets/cards/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 1, off: '40% off', name: 'Apples', image: 'assets/cards/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 2, off: '12% off', name: 'Tomatoes', image: 'assets/cards/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
      { id: 3, off: '27% off', name: 'Carrots ', image: 'assets/cards/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 4, off: '22% off', name: 'Banana', image: 'assets/cards/apple.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 5, off: '40% off', name: 'Apples', image: 'assets/cards/Banana.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 6, off: '12% off', name: 'Tomatoes', image: 'assets/cards/t2.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
      { id: 7, off: '27% off', name: 'Apples', image: 'assets/cards/apple.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 8, off: '22% off', name: 'Banana', image: 'assets/cards/Banana.png', qty: '200g+200g+200g', regularPrice: 1018, salePrice: '₹789', price: 789, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 9, off: '40% off', name: 'Apples', image: 'assets/cards/apple.png', qty: '200g+200g+200g', regularPrice: 10, salePrice: '₹6', price: 6, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },
      { id: 10, off: '12% off', name: 'Tomatoes', image: 'assets/cards/tomatoes.png', qty: '200g+200g+200g', regularPrice: 449, salePrice: '₹392', price: 392, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Processing', deliveryCharge: '₹6' },
      { id: 11, off: '27% off', name: 'Carrots', image: 'assets/cards/carrot.png', qty: '200g+200g+200g', regularPrice: 435, salePrice: '₹315', price: 315, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', units: 0, status: 'Delivered', deliveryCharge: '₹6' },

    ]
  }]

  public cardData: any = [
    {
      name: '1BHK',
      data: [
        {
          'name': '1BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/e.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart-outline',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/e.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '1BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/f7.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/f7.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '1BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/f4.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/f4.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f1.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '1BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/sas.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/sas.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/sa.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '1BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/f4a.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/f4a.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        },
        {
          'name': '1BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/a1.jpg',
          'price': '12,5000',
          'clicked': 'ios-heart',

          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/a1.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }
      ]
    },
    {
      name: '2BHK',
      data: [
        {
          'name': '2BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/cc.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/cc.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/aa.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '2BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/e.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/e.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '2BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/g.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/g.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '2BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/3.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/3.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '2BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/4.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/4.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        },
        {
          'name': '2BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/5.jpg',
          'price': '12,5000',
          'clicked': 'ios-heart',

          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/5.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }
      ]
    },
    {
      name: '3BHK',
      data: [
        {
          'name': '3BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/d.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/d.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '3BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/xx.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/xx.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '3BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/f6.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',

            }],
          image:
            [
              {
                'slide': 'assets/cards/f6.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '3BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/aa.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/aa.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }, {
          'name': '3BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/aaa.jpg',
          'price': '13,5000',
          'clicked': 'ios-heart',
          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/aaa.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        },
        {
          'name': '3BHK 2baths Residentils',
          'status': 'Apartments for Rent',
          'url': 'assets/cards/a1.jpg',
          'price': '12,5000',
          'clicked': 'ios-heart',

          data: [
            {
              'type': 'Configuration',
              'specification': '2 bedrooms , 2 bathrooms ,1 balcony',
              'icon': 'assets/icon/house.png',
            },
            {
              'type': 'Rental Details',
              'specification': 'Rs 13,500(Negotiable) ,',
              'details': 'Maintenance Rs1,500/-(Monthly)',
              'icon': 'assets/icon/price.png',
            },
            {
              'type': 'Avilable From',
              'specification': 'Immediate',
              'icon': 'assets/icon/brief.png',
            },
            {
              'type': 'Available For',
              'specification': 'Family / bachelor',
              'icon': 'assets/icon/people.png',
            },
            {
              'type': 'Furnishing',
              'specification': 'Semifurnished',
              'icon': 'assets/icon/qualit.png',
            },
            {
              'type': 'Address',
              'specification': 'Arsur Avantika',
              'icon': 'assets/icon/note.png',
              'more': 'Pallikaranai,Chennai South',
            }],
          image:
            [
              {
                'slide': 'assets/cards/a1.jpg',
              },
              {
                'slide': 'assets/cards/f2.jpg',
              },
              {
                'slide': 'assets/cards/f8.jpg',
              },
              {
                'slide': 'assets/cards/f4.jpg',
              }, {
                'slide': 'assets/cards/f5.jpg',
              }]
        }
      ]
    }
  ]
}
