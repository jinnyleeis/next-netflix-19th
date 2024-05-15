import { NavItemsType } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import Home from '../../public/icons/home.svg';
import Search from '../../public/icons/search.svg';
import CommingSoon from '../../public/icons/commingSoon.svg';
import Download from '../../public/icons/download.svg';
import Menu from '../../public/icons/menu.svg';
import HomeIndicator from '../../public/icons/homeIndicator.svg';

function Navbar() {
  const NavItems: NavItemsType[] = [
    {
      id: 1,
      src: Home,
      alt: 'home',
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      src: Search,
      alt: 'search',
      title: 'Search',
      link: '/search',
    },
    {
      id: 3,
      src: CommingSoon,
      alt: 'comming-soon',
      title: 'Comming Soon',
      link: '/commingSoon',
    },
    {
      id: 4,
      src: Download,
      alt: 'download',
      title: 'Download',
      link: '/download',
    },
    {
      id: 5,
      src: Menu,
      alt: 'menu',
      title: 'Menu',
      link: '/menu',
    },
  ];

  return (
    <div className="fixed bottom-0">
      <div className="mb-0 flex h-[44px] w-[375px] items-center justify-center space-x-[46px] bg-[#121212]">
        {NavItems.map(({ id, title, src, alt, link }) => (
          <Link href={link} key={id} className="flex flex-col items-center">
            <Image src={src} alt={alt} width={20} height={20} />
            <span className="text-nb font-medium text-grey">{title}</span>
          </Link>
        ))}
      </div>
      <div className="mt-0">
        <Image src={HomeIndicator} alt="homeIndicator" width={375} height={31.7} />
      </div>
    </div>
  );
}

export default Navbar;
