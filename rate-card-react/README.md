# Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The Challange](#the-challange)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

### The Challange

Users are able to  :

- View the optimal layout for the app depending on the device screen size
- see hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![rating project1](https://github.com/user-attachments/assets/a7d3068e-39b5-48de-87a0-cb76cac15e28)
![rating project2](https://github.com/user-attachments/assets/61aa1bcc-936f-4555-b302-f4b22f44eb32)
![rating project3](https://github.com/user-attachments/assets/f1620ae8-3945-4fa4-ae3b-d24b97bdb566)

### Links

- Challange URL : https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI
- Live Site URL : https://rating-card-beta.vercel.app/

## My process

### Built with

- React
- NextJS
- CSS

### What I learned 

On top of what I already knew, I practiced passing props to the parent component in React during this challenge.
```js
export default function Rating({ onRatingSelect }) { const handleNumberClick = (value) => {
    setRating(value);
    onRatingSelect(value);
  };}
```
```js
 const [rating, setRating] = useState(0);
<Rating onRatingSelect={setRating} />
```

### Useful resources 

- [Medium.com](https://medium.com/@Vaibhavihole31/creating-a-star-rating-bar-in-reactjs-a3f66456d7bb) - This helped me for finding out how to shape my rating method.

## Author

- Website - [Furkan Özbek](https://furkanozbek.dk)
- Frontend Mentor - [@FurkannOzbek](https://www.frontendmentor.io/profile/FurkannOzbek)
