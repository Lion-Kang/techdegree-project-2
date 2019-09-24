/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

listItems = document.querySelectorAll('li') ;
itemsPerPage = 10;

const showPage = (list, page) => {
   startIndex = (page * itemsPerPage) - itemsPerPage;
   endIndex = (page * itemsPerPage);

   for (i = 0; i < listItems.length; i += 1){
      if ((i < endIndex) && (i >= startIndex)) {
         listItems[i].style.display = 'block';

         paginationDiv = document.createElement('div');
         paginationDiv.innerHTML = listItems[i];
         document.body.appendChild(paginationDiv);
         
      }  else {
         listItems[i].style.display = 'none';
      }

   }

}
showPage('',1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   totalPages = Math.ceil(listItems.length/itemsPerPage);
   console.log(totalPages);
}
appendPageLinks();


// Remember to delete the comments that came with this file, and replace them with your own code comments.
