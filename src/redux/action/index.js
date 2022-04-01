// To add Item to cart
export const addItem = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

// To delete Item from cart
export const delItem = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}