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

- View the FAQ section optimized for any device screen size
- Experience hover effects for interactive elements
- Expand questions to read the corresponding answers


### Screenshots

![faq2](https://github.com/user-attachments/assets/8aba5317-6b7a-49c8-a3de-13b320fa927f)
![faq3](https://github.com/user-attachments/assets/5307875a-2d31-4c5c-a0cd-80e396dba677)
![faqmob](https://github.com/user-attachments/assets/beae5e50-b312-4644-9839-990899d176b6)

### Links

- Challange URL : https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz/hub
- Live Site URL : https://faq-accordion-beige-tau.vercel.app


## My process

### Built with

- React
- NextJS
- CSS

### What I learned 

I practiced making active state for one or more elements.
```js
const toggleItem = (index) => {
    setActiveIndexs(
      (prevIndexs) =>
        prevIndexs.includes(index)
          ? prevIndexs.filter((i) => i !== index) // Remove index if it's already active
          : [...prevIndexs, index] // Add index if it's not active
    );
  };
```
```js
  const [activeIndex, setActiveIndexs] = useState([]);
```

### Useful resources 

- [stackoverflow.com](https://stackoverflow.com/questions/60812877/change-active-state-in-a-list-using-usestate) - This helped me for finding out how to handle more than one active indexes.

## Author

- Website - [Furkan Özbek](https://furkanozbek.dk)
- Frontend Mentor - [@FurkannOzbek](https://www.frontendmentor.io/profile/FurkannOzbek)
