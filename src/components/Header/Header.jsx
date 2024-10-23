import { Navigation } from "../Navigation/Navigation";
import style from './Header.module.scss'

export const Header = () => {

    return (
        <header className={style.headerStyle}>
            <Navigation />
            <div className={style.headerLogoStyle}><h1 className={style.headerName}>Lexiconline</h1></div>
        </header>
    )
}