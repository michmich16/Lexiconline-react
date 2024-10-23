import { Navigation } from "../Navigation/Navigation";
import style from './Header.module.scss'

export const Header = () =>{

    return(
        <header>
                        <Navigation/>
            <div><h1>Lexiconline</h1></div>
        </header>
    )
}