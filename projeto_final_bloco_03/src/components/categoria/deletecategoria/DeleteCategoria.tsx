import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../model/categoria/Categoria";

function DeletarCategoria() {

    const navigate = useNavigate()
    
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/categorias')
    }

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
            })
            alert('Categoria apagada com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('401')) {
            }else{
                alert('Erro ao Excluir a Categoria!')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto py-16 text-slate-700'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4 py-4'>
                Realmente deseja excluir essa categoria?</p>
            <div className='border flex flex-col rounded-lg overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-cyan-600 text-slate-100 font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-cyan-50 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-700 hover:bg-red-800 w-full py-2'
                        onClick={retornar}
                        >
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-cyan-600 
                                   hover:bg-cyan-600 flex items-center justify-center'
                        onClick={deletarCategoria}
                        >
                        {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>Sim</span>
                    }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria