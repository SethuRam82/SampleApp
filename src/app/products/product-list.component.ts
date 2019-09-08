import { Component } from '@angular/core';

@Component(
    {
        selector: 'pm-products',
        templateUrl: './product-list.component.html'
    }
)
export class ProductListComponent {
    pageTitle: String = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: String = 'cart';
    products: any[] = [
        {
            "productID": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 23.99,
            "starRating": 4.3,
            "imageUrl": "https://openclipart.org/image/300px/garden_cart.png"
        },
        {
            "productID": 5,
            "productName": "Hammer",
            "productCode": "GDN-0012",
            "releaseDate": "Apri 18, 2017",
            "description": "curved claw steel hammer",
            "price": 3.99,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/hammer.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}