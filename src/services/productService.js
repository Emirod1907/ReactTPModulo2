const getProducts = async () =>{
    try {
        const response = await fetch(
            'http://localhost:5173/api/productos.json',
            {
                method:'GET'
            }        
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}
export default getProducts

export const getProductById = async({product_id})=>{
    const products =  await getProducts()
    return products.find(product => product.id == product_id)
}