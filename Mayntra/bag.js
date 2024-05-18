let bagItemObject;
let convenience_fees = 99;

function onload()
{
  displayBagObjects();
  displayBagItems();
  bagSummary();
}
function generateHtml(bagItem)
{
  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${bagItem.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${bagItem.company}</div>
      <div class="item-name">${bagItem.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${bagItem.current_price}</span>
        <span class="original-price">Rs ${bagItem.orignal_price}</span>
        <span class="discount-percentage">(${bagItem.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${bagItem.return_time} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${bagItem.delivery_time}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick='removeToBag(${bagItem.id})'>X</div>
  </div>`
}
function displayBagItems()
{
    let displayContainerElement=document.querySelector(".bag-items-container");
    let html=''
    
    bagItemObject.forEach( bagItem=> {
      html += generateHtml(bagItem)
    });
    displayContainerElement.innerHTML= html
}
function displayBagObjects()
{
  bagItemObject= cartId.map(itemId=>{
        for(let i=0; i<items.length; i++)
        {
            if(itemId==items[i].id)
            {
                return items[i];
            }
        }
    })
}
function removeToBag(itemId)
{
  bagItemsId=cartId.filter(id=>id !==itemId);
  localStorage.setItem('bagItemsId', JSON.stringify(bagItemsId));
  displayBagIcon();
  displayBagObjects();
  displayBagItems();
  bagSummary();

}
function bagSummary()
{
  let summary=document.querySelector('.bag-summary');
  let totalPrice=0;
  let totalDiscount=0;
  bagItemObject.forEach(bagItem =>{
    totalPrice += bagItem.orignal_price;
    totalDiscount += bagItem.orignal_price-bagItem.current_price;
  });
  let finalPrice=totalPrice-totalDiscount+convenience_fees;


  summary.innerHTML= `<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${cartId.length} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹ ${totalPrice}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹ ${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹ ${convenience_fees}</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹ ${finalPrice}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>`
}