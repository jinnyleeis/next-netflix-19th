import Image from 'next/image';
import Top10 from '../../public/icons/top10.svg'
import Plus from '../../public/icons/plus.svg'
import Info from '../../public/icons/info.svg'
import Play from '../../public/icons/play.svg'


function Controller() {
  return (
    <div>
        <div className='flex-row'>
            <Image
             src={Top10} 
             alt='top10'
             width={15}
             height={15}/>
            <span>#2 in Nigeria Today</span>
        </div>
        <div>
            <button>
                <Image 
                src={Plus}
                alt='plus'
                width={24}
                height={24}/>
                <span>My List</span>
            </button>
            <button>
                <Image
                src={Play}
                alt='play'
                width={18}
                height={21.6}/>
                <span>Play</span>
            </button>
            <button>
                <Image 
                src={Info} 
                alt='info'
                width={24}
                height={24}/>
                <span>Info</span>
            </button>
        </div>
    </div>
  )
}

export default Controller