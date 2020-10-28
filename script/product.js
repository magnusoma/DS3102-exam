
//Product class
//Product varibles: name, img source, description og id
export class Product{
	constructor(name, img, description){
		this.name = name;
		this.img = img;
		this.description = description;
		this.id = Product.getProductList().length;
		this.addProduct();
	}

	//Declaring array for objects and function to get objects from localstorage
	static productList = [];
	static getProductList = () => JSON.parse(localStorage.getItem('productList')) || [];

	//Function for storing object array in localstorage
	addProduct(){
		Product.productList = Product.getProductList();
		Product.productList.push(this);
		window.localStorage.setItem('productList', JSON.stringify(Product.productList));
	}
}

//Creating new products
/*const product = new Product("Flyfish sushi", "../images/food/flyfish-sushi.jpg", "Denne fisken kan fly!");
const product1 = new Product("Salmon maki", "../images/food/salmon-maki.jpg", "Laks!");*/

//HTML syntax for produkt element:

	/*<product-list-item
	name=""
	img="../images/food/<filnavn>"
	description=""
	></product-list-item>*/

//Custom web-component for product list element
export class ProductListElement extends HTMLElement{
	constructor(){
		super();

		//creating elements and setting attribute, content and parent element
		let name = document.createElement('h3');
		name.setAttribute('class', 'product-name');
		name.textContent = this.getAttribute('name');
		this.appendChild(name);

		let img = document.createElement('img');
		img.setAttribute('alt', 'Product image.');
		img.setAttribute('class', 'product-image');
		img.setAttribute('src', this.getAttribute('img'));
		this.appendChild(img);

		let description = document.createElement('p');
		description.setAttribute('class', 'product-description');
		description.textContent = this.getAttribute('description');
		this.appendChild(description);

		let addToCartBtn = document.createElement('button');
		addToCartBtn.setAttribute('type', 'button');
		addToCartBtn.setAttribute('class', 'add-to-cart-btn');
		addToCartBtn.textContent = "Legg til handlekurven!";
		this.appendChild(addToCartBtn);
	}
}

window.customElements.define("product-list-item", ProductListElement);