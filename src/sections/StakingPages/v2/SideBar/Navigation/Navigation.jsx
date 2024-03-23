import NavigationStyleWrapper from "./Navigation.style";
import menus from "assets/data/menu/dataV3"
import menuShape from "assets/images/project/menu-image.png"

const Navigation = () => {

    return (
        <NavigationStyleWrapper>
            <div className="navigation_links">
                {menus?.map((menu, i) => (
                    <a key={i} href={menu.url}>{menu.title} <img src={menuShape} alt="shape" /> </a>
                ))}
            </div>
        </NavigationStyleWrapper>
    )
}

export default Navigation;