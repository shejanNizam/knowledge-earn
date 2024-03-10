// use local storage to manage cart data
const addToDb = (_id) => {
  let bookMarkCart = getBookMarkCart();
  // add quantity
  const quantity = bookMarkCart[_id];
  if (!quantity) {
    bookMarkCart[_id] = 1;
  } else {
    const newQuantity = quantity + 1;
    bookMarkCart[_id] = newQuantity;
  }
  localStorage.setItem("bookMarked", JSON.stringify(bookMarkCart));
};

const removeFromDb = (_id) => {
  const shoppingCart = getBookMarkCart();
  if (_id in shoppingCart) {
    delete shoppingCart[_id];
    localStorage.setItem("bookMarked", JSON.stringify(shoppingCart));
  }
};

const getBookMarkCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("bookMarked");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("bookMarked");
};

export { addToDb, deleteShoppingCart, getBookMarkCart, removeFromDb };
