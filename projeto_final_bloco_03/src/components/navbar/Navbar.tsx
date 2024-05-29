import { Link } from 'react-router-dom'
import cruz from "../../assets/cruz.png"
import { Search, ShoppingCart, UsersIcon, UsersRound } from 'lucide-react'

function Navbar() {

  return (
    <>
     <div className='flex bg-cyan-600 text-slate-100 justify-between pe-4 py-3'>
     
          <div className="flex items-center text-lg">
          <img className='object-contain h-12 w-32' src={cruz} alt="Cruz Vermelha"/>
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>
          </div>
          <div className="py-1 relative flex w-full max-w-[26rem]">
          <input
            className="w-full rounded-xl font-medium outline-none placeholder:font-medium placeholder:text-muted-foreground text-cyan-600"
            type="text"
            placeholder="Buscar Produto"
          />
          <button className="flex rounded-l text-muted-foreground outline-none">
            <Search/>
          </button>
        </div>

            <div className='flex gap-5 font-bold text-lg items-center hover:text-slate-200'>
            <Link to='/categorias' className='pe-8'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='pe-8'>Cadastrar Categoria</Link>
            <Link to={"/carrinho"} className="flex items-center justify-center gap-7 pe-5"
          > <UsersRound className="z-10 size-7"/>
            <ShoppingCart className="z-10 size-7" />
          </Link>
            </div>
     </div>
    </>
  )
}

export default Navbar 