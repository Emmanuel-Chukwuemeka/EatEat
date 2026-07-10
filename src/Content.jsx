import test from './assets/test.jpg'

function Content(){
    let myStyle = {color:'purple', backgroundColor:'Grey'}
    return <>
        <div className="col-md-6">
            <img src={test} alt=""  className='img-fluid rounded'/>
        </div>
        <div className="col-md-6 p-4" style={{backgroundColor:'Grey'}}>
            <h3 className='mt-5' style={{color:'yellow',}}> Blog Section</h3>
            <p style={myStyle}> This is our blog section </p>
            <button onClick={function(){alert("Welcome to the home page")}} type='button' className='btn btn-dark'> Learn More </button>
        </div>
    
    </>

}

export default Content