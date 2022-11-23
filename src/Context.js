import React, { createContext, useState, useEffect } from 'react'

const ctx = createContext()

function Context(props) {
    const [actualData, setActualData] = useState([])
    const [items, setItems] = useState([])
    const [filters, setFilters] = useState([])
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems"))||[])
    const [loading,setLoading]=useState(true)
    async function fetchUser() {
        const data = await fetch("https://fakestoreapi.com/products")
        const res = await data.json()
        setActualData(res)
        setItems(res)
        setFilters(
            ["All", ...new Set(res.map(elem => {
                return elem.category
            }))
            ])
            setLoading(false)
    }

    useEffect(() => {
        fetchUser()
    }, [])
function addStyle(e){
  e.target.style.borderBottom="2px solid var(--text-color)"
    
}
    function addFilters(e) {
        let elem = document.querySelectorAll(".filter-text");
        elem.forEach(el=>{
    el.style.borderBottom="0"
})
addStyle(e)
        let value = e.target.innerHTML;
        setItems(
            value === "All" ? actualData : actualData.filter(elem => {
                return value === elem.category
            })
        )
    }
    function addToCart(data) {
      let found = cartItems.some(elem=>{
        if(elem.id===data.id){
            return true
        }
        else{
            return false
        }
      })
      if(!found){
        setCartItems(prev=>([...prev,data]))
      }else{
        removeFromCart(data)
      }
       
    }
 
 function removeFromCart(data){
    
    const newArray = cartItems.filter(elem=>{
        return elem.id!==data.id
    })
    setCartItems(newArray)
 }
function clearCart(){
    setCartItems([])
}
useEffect(()=>{
    cartItems.length===0?document.title="Buy Things Online-NILESTORE":document.title=`Buy Things Online-NILESTORE (${cartItems.length})`
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
},[cartItems])
    return (
        <>
            <ctx.Provider value={{ filters, addFilters, items, addToCart, cartItems,clearCart,removeFromCart,loading }}>
                {props.children}
            </ctx.Provider>
        </>
    )
}

export { ctx }
export default Context