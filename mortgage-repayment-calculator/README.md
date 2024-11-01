# Mortgage Calculator 
This is a solution to the [Mortgage repayment calculator on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73/hub).

## Table of contents

- [Overview](#overview)
  - [The Challange](#the-challange)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The Challange

Users are able to  :

- Input the mortgage amount, interest rate, term, and type (repayment or interest-only).
- Calculate their monthly repayments by clicking the "calculate repayments" button.
- View the results immediately after inputting their data.


### Screenshots
![mortgage1](https://github.com/user-attachments/assets/0d2f984b-79ad-40d6-b0e6-a6f7f9e9be8c)
![mortgage2](https://github.com/user-attachments/assets/66a2db4f-8da1-476e-acb9-8fa440f61ce3)
![mortgage3](https://github.com/user-attachments/assets/fd56ee25-3727-4e27-9de6-d43b5c57a230)
![mortgage4](https://github.com/user-attachments/assets/e30908b1-6323-4c85-b5d1-a2b2a43bfeca)



### Links

- Challange URL : https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73/hub
- Live Site URL : https://react-snack-apps.vercel.app/

## My process

### Built with

- React
- NextJS
- CSS

### What I learned 

On top of what I already knew, I figured out easy way to handle seperating thousands with comas and 2 digit after the dot.
```js
 setResultTotalPayment(
        // For the format seperating thousands with comas and after dot only 2 digits
        totalRepayment.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
```




## Author

- Website - [Furkan Özbek](https://furkanozbek.dk)
- Frontend Mentor - [@FurkannOzbek](https://www.frontendmentor.io/profile/FurkannOzbek)
