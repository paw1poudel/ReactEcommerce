import React from 'react'


function Collection() {
    const collection = [
        {
            id: 1,
            category: "women's clothing",
            image: "https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 2,
            category: "jewelery",
            image: "https://images.unsplash.com/photo-1571859939884-50b51d4cbc90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 3,
            category: "men's clothing",
            image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },

    ]
    const element = collection.map(elem => {
        return <div key={elem.id} className='collection-div'>
            <img src={elem.image} alt="product" />
            <a href='#products' className="category-name">{elem.category}</a>
        </div>
    })
    return (<section className='collection' id="collection">
        <div className="div-container">
            <div className="title">

                <h2>New Collection</h2>
                <p>Here are the new and popular  collection of product</p>
            </div>
            <div className="wrap-collection">
                {
                    element
                }
            </div>
           
        </div>
        <div className="collection-two">
                <div className="div-container">
                    <img src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                    <div className="collection-two-info">
                        <h2>
                            Best Services <br />Since 2018
                        </h2>
                        <p>It has been year of providing the best services to our customer at cheapest price.
                        We are adding new items day by day according to our customer demand and wish.
                        </p>
                        <div className="collection-review">
                        <div>
                            <h3>2018</h3>
                            <span>NILESTORE founded</span>
                        </div>
                        <div>
                            <h3>4900+</h3>
                            <span>Product Sold</span>
                        </div>
                        <div>
                            <h3>3150+</h3>
                            <span>Best Review</span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
    </section>
    )
}

export default Collection