import logo from '../Assets/Logo.svg'
import search from '../Assets/Search.svg'
import user from '../Assets/User.svg'
import './Header.scss'


export default function Header(){
    return (
        <div className={"Header"} alt-text={'Header'}>
            <div className={"Logo-and-Title"}>
                <img className={'logo'} src={logo} alt={'logo'}/>
                <p>Bible Insights</p>
            </div>

            <div className={"Header-Page-Links"} alt-text={'Page Links'}>
                <p alt-text={'Track'}>Track</p>
                <p alt-text={'Memorize'}>Memorize</p>
                <p alt-text={'Find Songs'}>Find Songs</p>
            </div>

            <div className={"Search-and-User"}>
                <img className={'search vertical-line'} src={search} alt={'search'} />
                <img className={'user'} src={user} alt={'user'}/>
            </div>
        </div>
    )
}