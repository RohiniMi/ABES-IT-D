const arr = [1, 2, 3, 4, 5];
//map
const mapArr = arr.map((ele) => { return ele * 4 });
console.log(mapArr);
//reduce
const sum = arr.reduce((acc, ele) => acc += ele, 0);
console.log(sum);
//filter
const filterData = arr.filter((ele) => ele % 4 === 0);
console.log(filterData);

const data = [
    {
        productID: 1,
        productName: "A",
        price: 499,
        manufacturingDate: "22-09-2025",
        color: ['R', 'B', 'Y', 'G']
    },
    {
        productID: 2,
        productName: "B",
        price: 499,
        manufacturingDate: "25-09-2025",
        color: ['B', 'W']
    },
    {
        productID: 3,
        productName: "B",
        price: 499,
        manufacturingDate: "22-09-2025",
        color: ['B', 'G', 'Y']
    },
    {
        productID: 4,
        productName: "A",
        price: 899,
        manufacturingDate: "22-09-2025",
        color: ['R', 'B']
    }
]

const mapData = data.map((product) => product.productName);
console.log(mapData);

const filterOnprice = data.filter((product) => product.price <= 600);
console.log(filterOnprice);

const filterOnPrice = data.filter((product) =>
    product.color.filter((color) => color === 'R')
);
console.log(filterOnPrice);
