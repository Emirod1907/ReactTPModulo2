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