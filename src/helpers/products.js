import localforage from "localforage";

export async function getProducts() {
  let currentProducts = await localforage.getItem("products");
  if (!currentProducts) {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setProducts(products);
    if (!response.ok) {
      throw new Error(`HTTP Error ~ Response Status: ${response.status}`);
    }

    return products;
  }
  return currentProducts;
}

export async function getProduct(id) {
  let products = await localforage.getItem("products");
  let product = products.find((product) => product.id === id);
  return product ?? null;
}

export async function getProductsInCart() {
  let products = [];
  products = await localforage.getItem("inCart");
  return products ? products : [];
}

export async function setProductsInCart(products) {
  return localforage.setItem("inCart", products);
}

export async function setProducts(products) {
  return localforage.setItem("products", products);
}

export async function deleteProductInCart(id) {
  let products = await localforage.getItem("products");
  let index = products.find((product) => product.id == id);
  if (index > -1) {
    products.splice(index, 1);
    await setProductsInCart(products);
    return true;
  }
  return false;
}

export async function updateProductInCart(id, newQuantity) {
  //console.log(id);
  let productsInCart = await getProductsInCart();
  //console.log(productsInCart);
  if (!productsInCart) throw new Error("no products in cart");

  let product = productsInCart.find((product) => product.id == id);
  if (!product) {
    product = await getProduct(id);
    productsInCart.unshift(product);
  }

  if (newQuantity == 0) deleteProductInCart(id);

  product.quantity = newQuantity;
  await setProductsInCart(productsInCart);
  return productsInCart;
}

export async function clearData() {
  return localforage
    .clear()
    .then(() => {
      console.log("data cleared");
    })
    .catch((error) => {
      console.log(error);
    });
}
