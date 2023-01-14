function create(words) {

   const content = document.getElementById('content');

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = word;
      p.style.display = 'none';
      div.addEventListener('click', showOff);
      

      /*function showOff() {
         p.style.display = '';
      }*/

      function showOff(event) {
         event.currentTarget.children[0].style.display = '';
      }

      div.appendChild(p);
      content.appendChild(div);
   }
}