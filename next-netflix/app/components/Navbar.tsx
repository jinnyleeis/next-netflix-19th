import { NavItemsType } from '../../types' 
import Image from 'next/image';
import Home from '../../public/icons/home.svg'
import Search from '../../public/icons/search.svg'
import CommingSoon from '../../public/icons/comming-soon.svg'
import Download from '../../public/icons/download.svg'
import Hamburger from '../../public/icons/hamburger.svg'


function Navbar() {
const NavItems:NavItemsType[] = [
    {
        id : 1,
        src : Home,
        alt : 'home',
        title : "Home",
        link : "/"
    },
    {
        id : 2,
        src : Search,
        alt : 'search',
        title : "Search",
        link : "/search"
    },
    {
        id : 3,
        src : CommingSoon,
        alt : 'comming-soon',
        title : "CommingSoon",
        link : "/commingSoon"
    },
    {
        id : 4,
        src : Download,
        alt : 'download',
        title : "Download",
        link : "/"
    },
    {
        id : 5,
        src : Hamburger,
        alt : 'menu',
        title : "Menu",
        link : "/"
    }
]

  return (
    <div>
        {NavItems.map(({ id, title, src, alt, link }) => (
                <div key={id}>
                    <Image
                     src={src}
                     alt={alt}
                     width={24}
                     height={24}/>
                    <span>{title}</span>
                </div>
            ))}
    </div>
  )
}

export default Navbar