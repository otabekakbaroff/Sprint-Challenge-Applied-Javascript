// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
function Header() {
    // CREATING ELEMENTS
    let header=document.createElement('div');
    let date=document.createElement('span');
    let h1=document.createElement('h1');
    let temp=document.createElement('span');
    //GIVING CLASSES
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //Creating Structure / Appending
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);
    //adding content
    date.textContent="SMARCH 28, 2019"
    h1.textContent="Lambda Times";
    temp.textContent="98°"
    //returning
    return header;
}
let header_container=document.querySelector('.header-container');
header_container.appendChild(Header());
