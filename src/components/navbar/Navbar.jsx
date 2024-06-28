import { Logo } from "./Logo";
import { SearchTab } from "./SearchTab";
import { ReturnsOrders } from "./ReturnsOrders";
import { CategorySection } from "./CategorySection";
import "./navbar.css";


export const Navbar = ()=>{
    return(
        <>
            <nav className="container-fluid amazon-nav py-2 px-3">
                <div className="d-flex align-items-center justify-content-between">
                    <Logo />
                    <SearchTab />
                    <ReturnsOrders />
                </div>
            </nav>
            <main className="amazon-category-section container-fluid py-2 text-white"><CategorySection /></main>
        </>
    )
}
