function search() {
   const list = document.getElementsByTagName('li');
   const resultElement = document.getElementById('result');
   const searchFor = document.getElementById('searchText').value;
   let matches = 0;

     
   for ( let el of list) {
      let text = el.textContent;

      el.style.fontWeight = 'normal';
      el.style.textDecoration = ''

      if(text.includes(searchFor)) {
         matches++; 
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
   }

   resultElement.textContent = `${matches} matches found`

}
