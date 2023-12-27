import AuthButton from '../components/AuthButton'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import Header from '@/components/Header'
import Logo from '../components/Logo'
import MainSelector from '@/components/MainSelector'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className='flex flex-col items-center flex-1 w-full gap-20'>
      <nav className='flex justify-center w-full h-16'>
        <div className='flex items-center justify-between w-full max-w-4xl p-3 text-sm'>
          <Logo />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className='flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in'>
        <main className='flex flex-col items-center flex-1 gap-6'>
          <h2 className='text-6xl font-bold '>
            Make sharing content{' '}
            <span className='text-[rgb(234,198,67)]'>easy</span>
          </h2>

          <div className='mb-4 text-2xl font-light text-center'>
            <span className='font-light'>
              Create short links, QR Codes, Link-in-bio pages and share them.
            </span>
            <br />
            <span>
              Have the insights of your audience and manage your links.
            </span>
          </div>
          <MainSelector />
        </main>
      </div>

      <footer className='flex justify-center w-full p-8 text-xs text-center border-t '>
        <p>
          Made by{' '}
          <a
            href='https://twitter.com/ikurotime'
            target='_blank'
            className='font-bold hover:underline'
            rel='noreferrer'
          >
            kuro
          </a>
        </p>
      </footer>
    </div>
  )
}
