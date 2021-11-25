import  { Product } from './product';

const KEY_NAME: string = 'cart';

export class CartItem {
    product: Product;
    quantity: number;

    constructor(product: Product, quantity: number = 0) {
        this.product = product;
        this.quantity = quantity;
    }
}

export class Cart {  
    products: { [code: string]: CartItem} = {};

    constructor(cartJSON: string = '{}') {
        this.products = JSON.parse(cartJSON)
    }

    clear(): void {
        this.products = {}
    }

    setQuantity(product: Product, quantity: number): void {
        if(!this.products[product.code] && quantity > 0) {
            this.products[product.code] = new CartItem(product);
        } else if (this.products[product.code] && quantity == 0) {
            this.remove(product);
        }
        if (quantity > 0) {
            this.products[product.code].quantity = quantity;
        }
    }

    add(product: Product, quantity: number = 1): boolean {     
        let added = false;   
        if(!this.products[product.code]) {
            this.products[product.code] = new CartItem(product);
        }
        if (product.stock >= this.products[product.code].quantity + quantity) {
            this.products[product.code].quantity += quantity;
            added = true;
        }        
        return added;
    }

    subtract(product: Product): void {
        if(!this.products[product.code]) {
            this.products[product.code] = new CartItem(product);
        }        
        if(this.products[product.code].quantity == 1) {
            this.remove(product);
        } else {
            this.products[product.code].quantity -= 1;
        }       
    }

    remove(product: Product): void {
        let productsWithout: { [code: string]: CartItem} = {};
        for(let code in this.products) {
            if(code != product.code) {
                productsWithout[code] = this.products[code];
            }
        }
        this.products = productsWithout;
    }

    all(): CartItem[] {
        let res: CartItem[] = [];
        for(let code in this.products) {
            res.push(this.products[code])
        }
        return res;
    }

    serialize(): string {
        return JSON.stringify(this.products)
    }

    static readFromStorage(): Cart {
        let cartJSON: string = window.localStorage.getItem(KEY_NAME) || '{}';
        return new Cart(cartJSON);
    }

    writeToStorage(): void {
        window.localStorage.setItem(KEY_NAME, this.serialize())
    }

    total(): number {
        let res = 0;
        for(let code in this.products) {
            res += this.products[code].product.price * this.products[code].quantity;
        }
        return res;
    }
}