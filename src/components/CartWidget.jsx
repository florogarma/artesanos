import cart from "../assets/carro.png"

export const CartWidget = () => {

    return(
    <>
        <img src={cart} alt="Carro de compras" width={30} />
        <span>8</span>
    </>
    )
}