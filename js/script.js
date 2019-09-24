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
      }  else {
         listItems[i].style.display = 'none';
      }

   }

}
showPage(listItems, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


const appendPageLinks = (list) => {
   totalPages = Math.ceil(listItems.length/itemsPerPage);
   console.log(totalPages);

   paginationDiv = document.createElement('div');
   paginationDiv.className = ('pagination');
   page = document.querySelector('.page');
   page.appendChild(paginationDiv);
   ul = document.createElement('ul');
   paginationDiv.appendChild(ul);

   for (i = 0; i < page.length; i += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
   }
}
appendPageLinks(listItems);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
