import React from 'react'
import './App.css'
import products from './products.json';
const Header = () => {
    return (
        <div className='header'>
            <img className='header-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20250504041148" alt="img-here" />
            <ul className='nav-items'>
                <li>Home</li>
                <li>Cart</li>
                <li>About</li>
            </ul>

        </div>
    )
}
const Search = () => {
    return (<div className='search-bar'>
        <input type="text" name="search-bar" id="search-bar" />
        <input type="button" value="search"></input>
    </div>)
}
const Products = ({product}) => {
    console.log(product);
    
    return (<div className='product'>
        <img alt="prod-img" src={product.img}></img>
        <h4>{product.title}</h4>
    </div>)
}
const Body = () => {
    return (<>
        <Search />
        <div className='prod-container'>
           {products.map((product)=><Products product={product}/>)}
        </div>
    </>)
}
const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

export default App