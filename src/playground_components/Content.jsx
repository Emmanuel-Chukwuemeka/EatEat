

function Main ({count, fruits, products, updater}){
    // count = 25 //props must not be mutated by the child
    // a function that handles click of decrease button
    function handle_decrease(){
        updater(count-1)
        console.log(count);
    }
    function handle_increase(){
        updater(count+1)
        console.log(count);
    }

    return (
        <div>
            
            <h2>Count : {count}</h2>
            {/* loop through array fruits .map() */}
             <button className="btn btn-danger" onClick={ handle_increase }> Increase </button>
            {/* calling a function that respond to an event */}
            <button className="btn btn-primary" onClick={ handle_decrease }> Decrease </button>
            <h3>Available Fruits</h3>
            <ul>
            {
                fruits.map(function(fruit,index){
                    return <li key={index}> {fruit} </li>

                })
            }
            </ul>
            <p>Available Products</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th><th>Product</th><th>Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(function(pro,id){
                            return (
                                <tr key={pro.id}>
                                    <td>{pro.id}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
           
        </div>
    )
}

export default Main 