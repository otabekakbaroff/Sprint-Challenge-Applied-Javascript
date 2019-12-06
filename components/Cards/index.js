// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let createCard=function(headLine, author_image, authorName){
    //    creating elements
       let card=document.createElement('div');
       let head_line=document.createElement('div');
       let author=document.createElement('div');
       let img_container=document.createElement('div');
       let authorimage=document.createElement('img');
       let author_Name=document.createElement('span');
       // adding classes to the elements 
       card.classList.add('card');
       head_line.classList.add('headline');
       author.classList.add('author');
       img_container.classList.add('img-container');
       //appending elements/ creating structure
       card.appendChild(head_line);
       card.appendChild(author);
       author.appendChild(img_container);
       author.appendChild(author_Name);
       img_container.appendChild(authorimage);
       // adding text to the element
       head_line.textContent=headLine;
       authorimage.setAttribute("src",author_image);
       author_Name.textContent=authorName;
       //returning function
       return card;
   }
   axios.get("https://lambda-times-backend.herokuapp.com/articles").then( response => {
       for(let item in response.data.articles){  
        //    console.log(item);
           for(let i=0; i<response.data.articles[item].length; i++){
            //    console.log(response.data.articles[item]);
               document.querySelector('.cards-container').appendChild(createCard(response.data.articles[item][i].headline, response.data.articles[item][i].authorPhoto, response.data.articles[item][i].authorName));
       }
       }
   })
   
   