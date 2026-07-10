import Header from "./Header"
import Banner from "./Banner"
import Content from "./Content"
import Table from "./Table"

function Layout(){
    return <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <Header/>
            </div>
        </div>
        <div className="col-12">
            <Banner/>
        </div>
        <div className="row">
            <Content/>
        </div>
        <div className="col-12">
            <Table/>
        </div>
    </div>
}

export default Layout