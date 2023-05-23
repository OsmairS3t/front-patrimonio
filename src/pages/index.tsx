import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col h-full justify-between pt-4">
      <section>
        <div className='flex-1 h-40 bg-gray-300 ml-7 mr-7 rounded-xl p-4'>
        </div>

        <div className='flex flex-1 mx-7 my-4 space-x-7'>
          <aside className='flex flex-col space-y-7 w-2/3'>
            <div className='h-72 rounded-xl bg-gray-300 p-4'></div>
            <div className='h-32 rounded-xl bg-gray-300 p-4'></div>
          </aside>
          <aside className='flex flex-col space-y-7 w-1/3'>
            <div className='h-52 rounded-xl bg-gray-300 p-4'></div>
            <div className='h-52 rounded-xl bg-gray-300 p-4'></div>
          </aside>
        </div>
      </section>
    </main>
  )
}
