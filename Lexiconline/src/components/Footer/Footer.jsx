import style from './Footer.module.scss';

export const Footer = () => {

    return(
        <footer>
            <div>
                <li>Address</li>
                <li>Somestreet 232</li>
                <li>Luxemborg</li>
            </div>
            <div>
                <li>Contact</li>
                <li>Email: somemail@mail.com</li>
                <li>Phone: 44332243</li>
            </div>
            <div>
                <li>With special thanks to</li>
                <li>https://disctionaryapi.dev/</li>
                <li>For the awesome API</li>
            </div>
            <div>
                <li><img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/book.png" alt="book" /></li>
                <li className={style.footerLogoText}>Lexiconline</li>
            </div>
        </footer>

    )
}