import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="grid h-[500px] bg-red-500 grid-row-500">
            {isLoading && <Loader/>}
            <Header/>

            <main>
                <Outlet/>
            </main>

            <CartOverview/>
        </div>
    )
}

export default AppLayout;