export interface ICart{
    uid?:string,
    products?:{
        image?:string,
        quantity?:number,
        price?:number,
        name?:string,
        product_id?:string
    }[]
}