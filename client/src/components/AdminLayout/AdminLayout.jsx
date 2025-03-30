import { Link, Outlet } from "react-router";

const AdminLayout = () => {

return(
    <>
        <div>
          <img src="/img/keikoicon1.png" alt="" className="header-icon  w-20 absolute inset-x-6 top-7"/>
          <Link to="/">
            <h1 className=" bg-gray-200 p-10 text-4xl font-bold shadow-lg flex items-center justify-center">
                Administration
            </h1>
          </Link>
        </div>  

        <div className="flex min-h-screen">
        <aside className="hidden sm:block w-64 bg-gray-100 p-4 shadow-lg my-1">
          <p className="font-bold mb-2 text-2xl p-2 text-gray-500">Produkter</p>
        </aside>

        <main className="flex-1 p-6">
            <Outlet />
        </main>
        </div>    
    </>
    );
};

export default AdminLayout;