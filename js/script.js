/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

listItems = document.querySelectorAll('li') ;
itemsPerPage = 10;

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
showPage(listItems, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


const appendPageLinks = (list) => {
   let totalPages = Math.ceil(listItems.length/itemsPerPage);
   console.log("Total amount of pages: ", totalPages);
   let totalStudents = listItems.length;
   let selected_button = 1;
   let ul = document.querySelector('.pagination_buttons');
   console.log("This is the ul", ul);

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
         a.className = 'active';
      }
      a.textContent = i + 1;
   }
   // add click handler to each button using
   ul.addEventListener('click', (e) => {
      let previous_button = document.querySelector('.active');
      previous_button.className = '';
      selected_button = e.target.textContent;
      e.target.className = 'active';
      showPage(listItems, selected_button);
   }
   )
}
appendPageLinks(listItems);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
