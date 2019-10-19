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

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// ***FUNCTION appendPageLinks*** - This function is supposed to create buttons for each page (NOT FINISHED) 
const appendPageLinks = (list) => {
   // total amount of students in the list
   let totalStudents = listItems.length
   // Ceil the amount of list items to find the amount of pages needed   
   let totalPages = Math.ceil(listItems.length/itemsPerPage);
   // Select page number to pass through showPage function to select page number
   let selectedButton = 1;

   showPage(list, selectedButton)

   // create button for pages

}
appendPageLinks(listItems);
