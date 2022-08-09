import React from "react"
import {useNavigate} from "react-router-dom"
import { CABINET_ROUTE, MAIN_ROUTE, SHOP_ROUTE, SUPPORT_ROUTE, TEAM_ROUTE } from "../../utils/consts"
import "./MainNavLink.css"

const MainNavLink = () => {
    let navigator = useNavigate()
    return(
        <div className="header_onb">
                    <div className="linkDiv_onb">
                        <div className="nav_onb"
                        onClick={()=>navigator(MAIN_ROUTE)}>Главная</div>
                        <div className="nav_onb"
                        onClick={()=>navigator(TEAM_ROUTE)}>Команда</div>
                        <div className="nav_onb"
                        onClick={()=>navigator(CABINET_ROUTE)}>Кабинет</div>
                        <div className="nav_onb"
                        onClick={()=>navigator(SHOP_ROUTE)}>Возможности</div>
                        <div className="nav_onb"
                        onClick={()=>navigator(SUPPORT_ROUTE)}>Помощь</div>
                        <div className="nav_onb">Скоро</div>
                    </div>
            </div>
    )
}

export default MainNavLink