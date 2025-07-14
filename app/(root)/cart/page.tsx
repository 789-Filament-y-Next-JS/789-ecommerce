import { CartList } from "@/modules/cart/components/CartList";

export default function CartPage() {
    return (
        <>

            <header className="pt-8">
                <div className="container">
                    <h1>Tu carrito de compras</h1>
                </div>
            </header>

            <CartList/>

        </>
    );
}