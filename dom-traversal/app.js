// // our new js
// console.log('it is work');

// //select the h1
// const heading = document.querySelector('h1');
// console.log(heading);

// //select the paragraph
// const paragraph = document.querySelector('p');
// console.log(paragraph);

// //select the image with a class selector
// const image =document.querySelector('.bill');
// console.log(image);

// const firstListItem = document.querySelector('li');
// const secondListItem = document.querySelector('li#second');
// console.log(firstListItem, secondListItem);


// const allListItem = document.querySelectorAll('li');
// console.log(allListItem);

// console.log('starting loop ....')
// for(let i =0; i < allListItem.length; i++){
//     const currentListItem = allListItem[i];
//     console.log(currentListItem);
// }
// console.log('Ending loop ....');


// const allPargraph = document.querySelectorAll('p');
// console.log(allPargraph);

// console.log('start loop');
// for(let j=0; j< allPargraph.length; j++){
//     const current = allPargraph[j];
//     console.log(current);
// }
// console.log('ending looping ....');
// Console.clear();

//elm.getAttribute(ATTRIBUTE NAME);
// const img = document.querySelector('img');
// const src = img.getAttribute('src');
// console.log(src);

// const alt = img.getAttribute('alt');
// console.log(alt);


// //find the 'a' tag, and log out the 'href' attribute

// const a = document.querySelector('a');
// const href = a.getAttribute('href');
// console.log(a);
// console.log(href);


//elm.setattribute ('ATTRIBUTE NAME', 'DESIRED VALUSE')

// const img = document.querySelector('img');
// const oldSrc = img.getAttribute('src');
// img.setAttribute('src', 'https://www.placecage.com/400/400');

//find the 'a' tag 
// const aTag = document.querySelector('a');


// // change the href to https://dockduckgo.com
// aTag.setAttribute('href', 'https://start.duckduckgo.com');


// //print the new href
// const newHref = aTag.getAttribute('href');
// console.log(newHref);

// //try setting the target attribute to be '~_blank'
// aTag.setAttribute('target', '_blank');

// //find the h1
// const heading = document.querySelector('h1');
// //print the current text of h1
// console.log(heading.innerText);

// //change the h1's text tpo "change by JS"

// heading.innerText = "Change By JS";

// //Append "!!!" to the h1
// heading.innerText += "!!!";

// aTag.innerHTML = 'this is a <h2>Link</h2>';
// console.log(aTag.innerText);


// const input = document.querySelector('input');
// const currentValue =  input.value;
// console.log(currentValue);
// input.value = 'With love from JS';

//this is only form from-realted data
//input, textarea, dropdown, checkboxs


// const heading = document.querySelector('h1');
// heading.style.color = "hotpink";
// heading.style.fontSize = '100px';
// heading.style.background = 'pink';
// console.log(heading.style.color);


// const img = document.querySelector('img');
// img.style.width = '200px';
// img.style.border = '50px solid pink';

/*creating Elements
1.create the element and Store 
it in a JS  variable
2. change it (using things like ...innerText, .style, setAttr) 
3. put it on the page.

*/

const newHeading = document.querySelector('h1');
newHeading.innerText = 'created by JS '; 
const targetDiv = document.querySelector('div.dynamic');
targetDiv.appendChild(newHeading);


const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://www.placecage.com/300/300');
newImg.style.border = '4px dashed purple';
//add tp page
document.body.appendChild(newImg);

const tweet = 'This is a tweet!';
const author = 'Osama';
const content = tweet + ', post by ' + author;

const newParagraph= document.createElement('p');
newParagraph.innerText = content;

newParagraph.style.color = 'blue';
const newTeetDiv = document.querySelector('.newTweets');
newTeetDiv.appendChild(newParagraph);






















































