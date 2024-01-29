// Definición de la clase ProductManager
class ProductManager {
  constructor() {
    this.products = [];
  }

  // Metodo para Agregar un producto al arreglo products
  addProduct(title, description, price, thumbnail, code, stock) {
    // tratar de cambiar a array function
    // Validación campos obligatorios. Se utiliza el metodo every() para verificar que todos los campos son true (tienen valores)
    const fields = [title, description, price, thumbnail, code, stock];
    const notEmptyFields = fields.every((fieldEmpty) => fieldEmpty);
    if (!notEmptyFields) {
      throw new Error("All fields are required");
    }

    // Validación code repetido. Se utiliza el medoto some() para verificar que al menos un campo cumple con la condición === code de lo contrario, devuelve false.
    const codeExist = this.products.some((items) => items.code === code);
    if (codeExist) {
      throw new Error("The code already exists");
    }

    this.products.push({
      id: this.products.length + 1,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    });
  }

  // Metodo para devolver todos los productos creados

  getProducts() {
    /* if (!this.products || this.products.length === 0) {
      console.log("No products available.");
      return;
    } */
    console.log(this.products);
  }

  // Método para buscar el producto que coincida con el id

  getProductById(id) {
    const findId = this.products.find((items) => items.id === id);
    if (!findId) {
      throw new Error(`Not found product ${id}`);
    }
    console.log(`El id corresponde a: \n${JSON.stringify(findId, null, 2)}`);
  }
}

// Crear la instancia de la clase ProductManager
let productList = new ProductManager();

// TESTING

// Prueba método "addProduct" agregar productos.
productList.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
productList.addProduct(
  "producto prueba2",
  "Este es un producto prueba2",
  200,
  "Sin imagen",
  "abc456",
  25
);

// Prueba validación campos obligatorios.
/* productList.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  ""
); */

// Prueba validación codigo repetido.
/* productList.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
); */

// Prueba método getProducts
productList.getProducts();

// Prueba método getProductById
/* productList.getProductById(2); */

// Prueba Id no encontrado
/* productList.getProductById(3); */
