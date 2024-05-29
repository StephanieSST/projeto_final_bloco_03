import { Link } from "react-router-dom";
import Categoria from "../../../model/categoria/Categoria";

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-lg overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-cyan-600 text-slate-100 font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-cyan-50 h-full'>{categoria.nome}</p>

            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-cyan-600 hover:bg-cyan-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-700 hover:bg-red-800 w-full 
		                        flex items-center justify-center '>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias