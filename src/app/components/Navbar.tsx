import { NavItemsType } from '../../types' 
import Image from 'next/image';
import Home from '../../public/icons/home.svg'
import Search from '../../public/icons/search.svg'
import CommingSoon from '../../public/icons/commingSoon.svg'
import Download from '../../public/icons/download.svg'
import Menu from '../../public/icons/menu.svg'
import HomeIndicator from '../../public/icons/homeIndicator.svg'


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
        title : "Comming Soon",
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
        src : Menu,
        alt : 'menu',
        title : "Menu",
        link : "/"
    }
]

  return (
    <div className='fixed bottom-0'>
    <div className='w-[375px] h-[48px] space-x-[46px] mb-0 flex items-center justify-center bg-[#121212]'>
        {NavItems.map(({ id, title, src, alt, link }) => (
                <div className='flex flex-col items-center' key={id}>
                    <Image
                     src={src}
                     alt={alt}
                     width={20}
                     height={20}/>
                    <span className='font-medium text-nb text-grey'>{title}</span>
                </div>
            ))}
    </div>
    <div className='mt-0'><Image src={HomeIndicator} alt='homeIndicator' width={375} height={31.7}/></div>
    </div>
  )
}

export default Navbar