import React from 'react'
import Image from 'next/image';
import logo from '../../public/icons/logos_netflix-icon.svg'

function Header() {
const Menu = ['Tv Shows' ,'Movies', 'My List']
  return (
    <div>
        <div>
            <Image
            src = {logo}
            alt='logo'
            width={56.67}
            height={57}
            />
        </div>
        <div>
            {
                Menu.map((menu) => {
                    return(
                        <span key={menu}>
                            {menu}
                        </span>
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default Header