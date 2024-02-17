


function allFlowerBtn(data) {
     const selectetItem = document.getElementById('selected-item');
     const flower = data.parentNode.childNodes[1].innerText;

     const li = document.createElement('li');
     li.innerText = flower;
     selectetItem.appendChild(li);

     const price = data.parentNode.childNodes[5].innerText.split(' ')[2];
     const priceValue = parseFloat(price);

     const totalPrice = document.getElementById('total-price');
     const valueString = totalPrice.innerText;
     const value = parseFloat(valueString);

     const grandTotal = document.getElementById('grand-total');
     const grandTotalString = grandTotal.innerText;
     const grandTotalValue = parseFloat(grandTotalString);


const discount = document.getElementById('code-input').value;

     const code = 'CODE10'
     if (discount == code) {

          const discountPrice = ((priceValue * 90) / 100);


          const total = value + discountPrice;
          totalPrice.innerText = total;

          const grand = grandTotalValue + discountPrice;
          grandTotal.innerText = grand;



     } else {
          
          const totalElse = value + priceValue ;
          totalPrice.innerText = totalElse;
          
        const grand = grandTotalValue + priceValue;
          grandTotal.innerText = grand;
     }



     // console.log(typeof grandTotalValue)
}


