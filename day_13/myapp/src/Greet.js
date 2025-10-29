// const divstyle = {
//     height: '150px',
//     width: '150px',
//     backgroundColor: 'grey'
// }
const reactElement = <>
    <div className="div" style={{backgroundColor:"burlywood"}}>
        <div>
            <img alt="img-here" src="" />
            <h4>Heading</h4>
        </div>
    </div>
</>
const ReactComponent = ()=>{
    return(<>React Component</>)
}
//component composition
const Greet2 = () => {
    return (reactElement);
}
export default Greet2;