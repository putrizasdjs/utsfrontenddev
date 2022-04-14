import { useState } from 'react';

function Cart() {
    const [jumlah, totalAwal] = useState(1);
    const tambahBarang = () => {
        totalAwal(jumlah + 1);
    }
    const kurangBarang = () => {
        totalAwal(jumlah - 1);
    }
    let total = jumlah * 30000

    return (
        <>
        <div className="container">
            <img src="https://cf.shopee.co.id/file/6fe4e5026febbb5cc1350b5e0305970f" className='' alt='dress korea'></img>
            <p>DRESS KOREA TERBARU</p>
            <p>30.000</p>
        </div>
        <div className="container">
            <h3>Jumlah Beli</h3>
            <div className="container">
                <button className="keranjang" onClick={tambahBarang}>+</button>
                <h3>{jumlah}</h3>
                <button className="keranjang" onClick={kurangBarang}>-</button>
            </div>
            <h2>total barang</h2>
            <h2>{total}</h2>
        </div>
        </>
    );

}
export default Cart;