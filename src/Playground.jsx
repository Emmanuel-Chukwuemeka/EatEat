import laptop_thumb_3 from "./assets/laptop_thumb_3.png"
import Header from "./playground_components/Header"
import Content from "./playground_components/Content"
import Footer from "./playground_components/Footer"
// i want to use hook useState() I need to import it from react
import {useState} from "react"


const Playground = () => {
    //we sent a request to an api and got back appname
    var appname = "Blogger";

    //var count = 0; // because count will be changing, we cannot keep it in a variable, we keep it in a state

    const [count, setCount] = useState(0)

    var fruits = ["Mango","Orange","Banana","Apple"];

    var products = [
        {
            id: 1,
            name:"Apple Cider Vinegar",
            price:2000
        },
        {
            id:2,
            name:"Yellow Garri",
            price:1000
        },
        {
            id:3,
            name:"2kg of Potatoes",
            price:4500
        }
    ];

    function sayHello(){
        alert("Hello Mr Akpan")
    }

    //state is used to keep a data that could be changing: react will update it by itself. Everywhere the state is used

    return (

        <div>
            <Header zyz={appname} abc={count}/>
            <Content count={count} fruits={fruits} products={products} updater = {setCount}/>
            <Footer/>

        {/* how to dispaly images inside a public folder */}
        <img src="/assets/img/home-bg.jpg" alt="" className="img-fluid"/>

        {/* how to dispaly images inside the src folder  */}
        <img src={laptop_thumb_3} alt="" />

        </div>

    )


}

export default Playground