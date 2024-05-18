let bagItemsId=[];
onload();
function onload()
{
    let bagItemsStr=localStorage.getItem('bagItemsId');
    cartItemsId=bagItemsStr ? JSON.parse(bagItemsStr) : [];
    console.log(cartItemsId);
    displayItem();
    displayBagIcon();

}
//function for storing product id into bagitems array
function addToBag(itemId)
{
    bagItemsId.push(itemId);
    localStorage.setItem('bagItemsId', JSON.stringify(bagItemsId));
    displayBagIcon();
}
//function for displaying product in bag
function displayBagIcon()
{
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItemsId.length>0)
    {
        bagItemCountElement.innerText=bagItemsId.length;
        bagItemCountElement.style.visibility ="visible";
    }
    else
    {
        bagItemCountElement.style.visibility ="hidden";
    }
}
//function which display product details dynamically
function displayItem()
{
    let items_container=document.querySelector(".items-container");
    if(!items_container)
    {
        return;
    }
    let displayContent='';
    items.forEach((item)=>{
        displayContent+=`
        <div class="item-container">
            <img src="${item.image}" alt="" class="item-image">
            <div class="rating"> ${item.rating.stars} | ${item.rating.count} </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <Span class="current-price">Rs ${item.current_price}</Span>
                <Span class="orignal-price">Rs ${item.orignal_price}</Span>
                <Span class="discount">(${item.discount}% OFF)</Span>
            </div>
        <button class="btn-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`
    });
    items_container.innerHTML=displayContent;
}