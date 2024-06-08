export interface Billboard {
    id: string;
    name: string;
    image_url: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    products_images: ProductImage[];
    categories: Category;
    sizes: Size[];
    colors: Color[];
}

export interface ProductImage {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}