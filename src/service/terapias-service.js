export const listaTerapias = async() => {
    return await get('http://localhost:3000/terapias')
}