let bagItemsobject;

onLoad();
function onLoad() {
  loadBagItemObject();
  showBagItem();
  bagSummary();
  bagSummaryremove();
  
}
function bagSummaryremove(){
  let bagSummaryElement=document.querySelector(`.bag-summary`)
  if(bagItemsobject.length==0){
    bagSummaryElement.style.visibility=`hidden`;
  }
}
function bagSummary(){
  
  let bagSummaryElement=document.querySelector(`.bag-summary`)
  let bagItem=bagItemsobject.length;
  let totalMrp=4;
  let discountMrp=0;
  let couponDiscount=0;
  let platformFee=25;
  let shippingFee=10;
  bagItemsobject.forEach(bagItem=>{
    totalMrp+=bagItem.originalPrice;
    discountMrp+=bagItem.originalPrice-bagItem.currentPrice;
    couponDiscount+=bagItem.coupon;
  })
  
  let totalBill=totalMrp-(discountMrp+couponDiscount)+platformFee+shippingFee;

  bagSummaryElement.innerHTML=`
        <div class="price_detail">PRICE DETAILS( ${bagItem} Items)</div>
        <div class="total_mrp">
          <span>Total MRP </span><span>${totalMrp}</span>
        </div>
        <div class="total_mrp">
          <span>Discount of MRP </span><span>${discountMrp}</span>
        </div>
        <div class="total_mrp">
          <span>Coupon Discount</span><span>${couponDiscount}</span>
        </div>
        <div class="total_mrp">
          <span>Platefrm Fee</span><span>${platformFee}</span>
        </div>
        <div class="total_mrp shipping_fee">
          <span>Shipping Fee</span><span>${shippingFee}</span>
        </div>
        <div class="total_mrp total_amount">
          <span>Total Amount</span><span>${totalBill}</span>
        </div>
        <button class="order_btn">PLACE ORDER</button>`
}




function loadBagItemObject() {
  bagItemsobject = bagItem.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
}

function showBagItem() {
  let bag_items_containerElement =
    document.querySelector(`.bag_items_container`);
    let innerHTML=``;
    bagItemsobject.forEach(bagitem => {
      innerHTML+=genrateItemHtml(bagitem)
    });
 bag_items_containerElement.innerHTML = innerHTML;
}

function removeBagItem(itemId){
  bagItem= bagItem.filter(bagItemId=>bagItemId!=itemId);
  localStorage.setItem(`bagitems`, JSON.stringify(bagItem));
  loadBagItemObject();
  showBagItem() ;
  displayBagItems();
  bagSummary();
  bagSummaryremove()
  

}
function genrateItemHtml(item) {
  return` <div class="bag_item_container">
  <div class="item_left_part">
          <img src="${item.image}" alt="image">
        </div>
        <div class="item_right_part">
          <div class="Company_name"> ${item.company}</div>
          <div class="item_name"> ${item.itemName}</div>
          <div class="item_seller"> ${item.seller_name}</div>
          
          <div class="pricing">
            <span class="current_price">Rs ${item.currentPrice}</span>
            <span class="original_price">Rs ${item.originalPrice}</span>
            <span class="discount">(% ${item.discount}OFF)</span>
          </div>
          <div class="coupon">Coupon Discount:${item.coupon}₹</div>
          <div class="return">
            <span class="material-symbols-outlined">
              keyboard_return
              </span>
            <span>${item.delivery_time} days return avilable</span>
          </div>
        </div>
        <div class="delete_item" onclick="removeBagItem(${item.id})">X</div>
        </div>`;
}
