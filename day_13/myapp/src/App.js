import React from 'react'
import './App.css'
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
const Products = () => {
    return (<div className='product'>
        <img alt="prod-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg"></img>
        <h4>Tool</h4>
    </div>)
}
const Body = () => {
    return (<>
        <Search />
        <div className='prod-container'>
            <Products />
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
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