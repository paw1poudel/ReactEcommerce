import React from 'react'
import { useContext} from 'react'
import { ctx } from "../Context"
import StoreItems from "../components/StoreItems"
import ProductDeal from "../components/ProdcutDeal"
function Product() {
    const data = useContext(ctx);
    
    const filters = data.filters.map((elem, id) => {
        return <span className='filter-text' key={id} onClick={data.addFilters}>{elem}</span>
    })

    return (<section id="products" className='products'>
        <div className="div-container">
            <h2 className='title'>Our Products</h2>
            <div className="filters">
                {filters}
            </div>
            <StoreItems />
        </div>
        <ProductDeal />
    </section>
    )
}

export default Product