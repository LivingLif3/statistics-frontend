import React from "react"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE, MY_TEAM_ROUTE, TEAM_ROUTE } from "../../utils/consts"
import "./TeamNavBar.css"

const TeamNavBar = () => {
    let navigator = useNavigate()
    return(
        <div className="header_nb">
                    <div className="linkDiv_nb">
                        <div className="nav_nb"
                        onClick={()=>navigator(MAIN_ROUTE)}>Главная</div>
                        <div className="nav_nb"
                        onClick={()=>navigator(MY_TEAM_ROUTE)}>Поиск</div>
                        <div className="nav_nb"
                        onClick={()=>navigator(TEAM_ROUTE)}>Команда</div>
                        <div className="nav_nb">Мои опросы</div>
                        <div className="nav_nb">Помощь</div>
                    </div>
            </div>
    )
}

export default TeamNavBar