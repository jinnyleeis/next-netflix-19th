import Image from 'next/image';
import Top10 from '../../public/icons/top10.svg'
import Plus from '../../public/icons/plus.svg'
import Info from '../../public/icons/info.svg'
import Play from '../../public/icons/play.svg'


function Controller() {
  return (
    <div className= 'flex flex-col w-[375px] items-center'>
        <div className='flex space-x-[5px] mb-[11px]'>
            <Image
             src={Top10} 
             alt='top10'
             width={15}
             height={15}/>
            <span className='font-bold text-cont1'>#2 in Nigeria Today</span>
        </div>
        <div className='flex space-x-[42px]'>
            <button className='flex flex-col items-center'>
                <Image 
                src={Plus}
                alt='plus'
                width={24}
                height={24}/>
                <span className='font-normal text-cont2'>My List</span>
            </button>
            <button className='flex items-center justify-center bg-[#C4C4C4] rounded-md w-28 h-11 gap-2.5 cursor-pointer border-none'>
                <Image
                src={Play}
                alt='play'
                width={18}
                height={21.6}/>
                <span className='font-semibold text-[#000000] text-play'>Play</span>
            </button>
            <button className='flex flex-col items-center'>
                <Image 
                src={Info} 
                alt='info'
                width={24}
                height={24}/>
                <span className='font-normal text-cont2'>Info</span>
            </button>
        </div>
    </div>
  )
}

export default Controller