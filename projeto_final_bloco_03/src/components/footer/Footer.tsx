import { InstagramLogo, FacebookLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
let data = new Date().getFullYear()  

  return (
    <>
        <div className="flex justify-center bg-cyan-600 text-slate-100 py-2">
          <div className="container flex flex-col items-center">
            <p className='text-xl font-bold'>Farmácia  | Copyright: {data} </p>
            <p className='text-lg'>Conecte-se Conosco:</p>
            <div className='flex gap-2'>
              <a href="https://www.linkedin.com/in/stephanie-steuernagel-tavares/" target="_blank">
              <LinkedinLogo size={46} weight='bold' />
              </a>
              <a href="https://www.instagram.com/stephanie.steuernagel/" target="_blank">
              <InstagramLogo size={46} weight='bold' />
              </a>
              <a href="https://www.facebook.com/stephanie.steuernagel" target="_blank">
              <FacebookLogo size={46} weight='bold' />
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer