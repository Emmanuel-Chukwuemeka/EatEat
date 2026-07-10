

function Header(props){
    console.log(props)
    return (
        <div className="row">
            <h1 className="text-center">  Welcome to {props.zyz} </h1>
            <h1 className="text-center">  Count : {props.abc} </h1>
        </div>
    )
}

export default Header