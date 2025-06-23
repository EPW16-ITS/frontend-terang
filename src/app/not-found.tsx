
import Button from '@/components/Button'
import Image from 'next/image'
import Typography from '@/components/Typography'
import { FaHome } from 'react-icons/fa'
import Link from 'next/link'

export default function NotFound() {


    return (
        <div className='h-screen  w-full bg-gradient-to-r from-secondary-200 to-secondary-400'>
            <section className=' w-full flex flex-col justify-center items-center  relative z-50 top-[20%] lg:top-[10%] '>
                <Image
                    src={`/components/Frame 481672.svg`}
                    alt='404'
                    width={350}
                    height={350}
                    className='md:w-[60%] md:h-[60%] '
                />
                <Typography.Homica level={7} className='text-white text-center '>Oops, you’ve lost in space.</Typography.Homica>
                <Typography.Poppins level={7} className='text-white text-center' size='sm'>We Can’t find the page that you’re looking for</Typography.Poppins>
                <Link href={'/'}>
                    <Button.Primary prefix={<FaHome size={30} />} className='w-40 flex justify-center items-center mt-10 z-50'>Home</Button.Primary>
                </Link>
            </section>
        </div>
    )
}