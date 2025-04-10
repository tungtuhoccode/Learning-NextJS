import Link from "next/link"
import logoImg from '@/assets/logo.png'

export default function MainHeader() {
    return(
        <header>
            <Link href={"/"}>
                <img src={logoImg.src} alt="Just a logo"/>
                NextLevel Food
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/meals"> Browse Meals</Link>
                        <Link href="/community"> Foodies Communities</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
