// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topicList=document.querySelector('.topics');
axios.get("https://lambda-times-backend.herokuapp.com/topics").then( response => {
    // console.log(response);
    console.log(response.data.topics);
    let array=response.data.topics;
    for(let i=0; i<array.length; i++){
        let items=document.createElement('h2');
        topicList.appendChild(items);
        items.textContent=` \xa0 ${array[i]} \xa0 `;
      }
})
let tabComponents=function(){
    //creating tab
    let tab=document.createElement("div");
    //adding text
    tab.textContent=('topic here');
    //giving class
    tab.classList.add('tab');
    return tab;
}
// tabComponents.appendChild(topicList);
// document.body.appendChild(tabComponents)
