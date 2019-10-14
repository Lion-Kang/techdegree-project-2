/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Global Variables
listItems = document.querySelectorAll('li') ;
itemsPerPage = 10;

// ***FUNCTION showPage*** - This function shows and hides sets of 10 students in the list
const showPage = (list, page) => {
   startIndex = (page * itemsPerPage) - itemsPerPage;
   endIndex = (page * itemsPerPage);

// Loop through the list items to display 10 on each page
   for (i = 0; i < listItems.length; i += 1){
      if ((i < endIndex) && (i >= startIndex)) {
         listItems[i].style.display = 'block';
      }  else {
         listItems[i].style.display = 'none';
      }

   }

}
showPage(listItems, 2);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// ***FUNCTION appendPageLinks*** - This function is supposed to create buttons for each page (NOT FINISHED) 
const appendPageLinks = (list) => {
   // Ceil the amount of list items to find the amount of pages needed   
   totalPages = Math.ceil(listItems.length/itemsPerPage);
   //console.log(totalPages);
   
   // Create button 
   nextButton = document.createElement('nextButton');
   
   // ??? Set page to button ???
   nextButton.innerHTML = page;
   const button = document.getElementsByTagName('button')[0];
   // Set listener on button 
   nextButton.addEventListener ('click', function() {
      showPage(listItems, page)
   })

   // Create HTML elements for pagination links
   paginationDiv = document.createElement('div');
   paginationDiv.className = ('pagination');
   page = document.querySelector('.page');
   page.appendChild(paginationDiv);
   ul = document.createElement('ul');
   paginationDiv.appendChild(ul);

   // add 'li' and 'a' to all pagination elements
   for (i = 0; i < page.length; i += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#'; 
   }
}
appendPageLinks(listItems);
