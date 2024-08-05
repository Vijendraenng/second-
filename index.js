let bagItem;
onLoad();
function onLoad(){
  let bagItemstr=localStorage.getItem(`bagitems`)
  bagItem=bagItemstr? JSON.parse(bagItemstr):[];

  displayBagItems();
  dispalyItemOnHomePage();
  
}
function addToBag(item){
  bagItem.push(item);
  localStorage.setItem(`bagitems`, JSON.stringify(bagItem));
  displayBagItems();
}
function displayBagItems(){
  let bagItemCount=document.querySelector(`.bag_item_count`);
  if (bagItem.length>0) {
    bagItemCount.style.visibility=`visible`;
    bagItemCount.innerText=bagItem.length;
  }else{
    bagItemCount.style.visibility=`hidden`;

  }  
}
  
 

function dispalyItemOnHomePage(){


let itemsContainerElement= document.querySelector(`.items_container`)
if(!itemsContainerElement){
  return;
}
 let innerHTML=``;
 items.forEach(items=>{
  innerHTML+=`<div class="item_container">
       <img class="item_image"src="${items.image}" alt="imge">
         <div class="Rating">
           ${items.Rating.star}⭐ | ${items.Rating.ratingCount}
         </div>A
         <div class="Company_name">${items.company}</div>
         <div class="item_name">${items.itemName}</div>
         <div class="pricing">
           <span class="current_price">Rs ${items.currentPrice}</span>
           <span class="original_price">Rs ${items.originalPrice}</span>
           <span class="discount">(${items.discount}% OFF)</span>
         </div>
         <button class="btn_add_bag" onclick="addToBag(${items.id})">
           Add to Bag
         </button>

      </div>`;
 })


itemsContainerElement.innerHTML=innerHTML;
}