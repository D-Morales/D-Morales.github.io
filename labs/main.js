
function unsure(statement, unknown){
  var end = statement + unknown;

  console.log(end);
}

unsure("I did this correctly", "...I think")

function til(learned, aThing){
    var learn = learned + " " + aThing;

    console.log(learn);
}
til("TIL", "Pluto is brown.")

function buying(item1, item2, tax, coupon){
  var subtotal = item1 + item2;
  var Tax = subtotal * tax;
  var subtax = subtotal - Tax;
  var couponAmount = subtax * coupon;
  var total = subtax - couponAmount;

  console.log(total);
}

buying(13, 37, .095, .5);
