// add to curt

export const addCart = (Product) =>{
    return{
        type: "ADDITEM",
        payload: Product,

    };
};

// remove from curt

export const delCart = (Product) =>{
    return{
        type: "ADDITEM",
        payload: Product,

    };
};