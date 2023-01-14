function solve() {
   let textarea = document.getElementsByTagName('textarea');

  document.querySelector('.shopping-cart' ).addEventListener('click', onClick);
  function onClick(event) {
     if(event.target.tagName == 'BUTTON') {
        let productDetails = event.target.parentElement.parentElement.childNodes[3];
        let name = productDetails.querySelector('.product-title').textContent;
        console.log('clicked', name);

        let newLine = document.createElement('p');
        newLine.textContent = `You bought ${name} for {totalPrice}.`
       newLine.appendChild(te)
       
     }
  }
}