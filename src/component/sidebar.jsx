import {Link} from "react-router-dom"

const Sidebar =()=>{

    return(
        <>
        <aside className="font-montserrat w-48 border-r-[1px] border-solid border-white">
            <div>
                <h2 className="font-bold text-blue-600 text-center text-2xl">LOGO</h2>
            </div>

            <div className=" text-white mt-32 ml-9">
            <Link to="/" className="block mb-3 hover:text-blue-600"><i class="fa-solid fa-server mr-2"></i>Dashboard</Link>
            <Link to="/exchanges" className="block hover:text-blue-600"><i class="fa-solid fa-chart-line mr-2"></i>  Exchanges</Link> 
            </div>
           
        </aside>
        </>
    )

}

export default Sidebar