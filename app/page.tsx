import Logo from '../components/Logo'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import MainSelector from '@/components/MainSelector'
import Header from '@/components/Header'
import { cookies } from 'next/headers'

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
    <div className='flex-1 w-full flex flex-col gap-20 items-center'>
      <nav className='w-full flex justify-center  h-16'>
        <div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
          <Logo />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className='animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3'>
        <main className='flex-1 flex flex-col gap-6'>
          <h2 className='font-bold text-6xl '>
            Make sharing content{' '}
            <span className='text-[rgb(234,198,67)]'>easy</span>
          </h2>

          <div className='text-2xl mb-4 font-light text-slate-700 dark:text-white text-center'>
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

      <footer className='w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs'>
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
