/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination

Name: Brice Amarasinghe
Expected Grade: Meets Expectations
******************************************/


// Global variables for entire list and items per page
listItems = document.querySelectorAll('li') ;
itemsPerPage = 10;

// showPage function hides the entire list and shows 10 list items per page
const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage);

   for (i = 0; i < listItems.length; i += 1){
      if ((i < endIndex) && (i >= startIndex)) {
         listItems[i].style.display = 'block';
      }  else {
         listItems[i].style.display = 'none';
      }

   }

}
// first page of the list
showPage(listItems, 1);

// appendPageLinks function 
const appendPageLinks = (list) => {
   // make the page number round upwards given a list item for the correct number of pages
   let totalPages = Math.ceil(listItems.length/itemsPerPage);
   // console test to see if the pages are providing the correct number
   console.log("Total amount of pages: ", totalPages);
   // insert selected_button as the page number for the showPage function, set to 1 for first page
   let selected_button = 1;
   // ul is all the .pagination_buttons
   let ul = document.querySelector('.pagination_buttons');
   // test to see if the ul is working properly via console
   console.log("This is the ul", ul);

   // call showPage to display pages for each button
   showPage(listItems, selected_button);

   for (i = 0; i < totalPages; i += 1) {
      console.log("building page", i);
      // dynamically add pagination links
      let li_button = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      li_button.appendChild(a);
      ul.appendChild(li_button);
      // set page number starting at 1 instead of zero
      if(i == 0) {
         // attach class name to 'a'
         a.className = 'active';
      }
      a.textContent = i + 1;
   }
   // add click handler to each button with the 'active' class
   ul.addEventListener('click', (e) => {
      let page_button = document.querySelector('.active');
      page_button.className = '';
      selected_button = e.target.textContent;
      e.target.className = 'active';
      showPage(listItems, selected_button);
   }
   )
}
// call appendPageLinks with the entire list, 'listItems'
appendPageLinks(listItems);

