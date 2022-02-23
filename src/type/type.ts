export type GetProp = {
    name: string,
    id: number,
    brand: string,
    price: string,
    price_sign: string,
    image_link: string,
    product_link: string,
    rating: number | null,
    product_type: string
    product_api_link: string,
    api_featured_image: string,
    product_colours: {
        hex_value: string,
    }[]

}
export type GetCartProp = {
    name: string,
    id: number,
    brand: string,
    price: string,
    price_sign: string,
    image_link: string,
    product_link: string,
    rating: number | null,
    product_type: string
    product_api_link: string,
    api_featured_image: string,
    product_colours: {
        hex_value: string,
    }[],
    quantity: number,
    added: boolean,
    totalValue: number
}
export type GetSearchParamProps = {
    product_type: string,
    brand?: string,
    price_greater_than?: number,
    price_less_than?: number
}