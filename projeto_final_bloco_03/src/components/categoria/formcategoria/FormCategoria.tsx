import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../model/categoria/Categoria";

function FormCategoria() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/categorias')
    }

    async function cadastrarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                });
                alert('Categoria atualizada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                } else {
                    alert('Erro ao atualizar a categoria!')
                }
            }

        } else {

            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                });
                alert('Categoria cadastrada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                } else {
                    alert('Erro ao cadastrar a categoria!')
                }
            }

        }

        setIsLoading(false)
        retornar()
    }

    console.log(JSON.stringify(categoria))

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-slate-700">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4"
                onSubmit={cadastrarCategoria}
            >
                <div className="flex flex-col gap-3 text-slate-700">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Digite sua categoria"
                        name='nome'
                        className="border-2 border-slate-700  text-slate-800 rounded-br-2xl"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 text-lg font-bold bg-cyan-600 hover:bg-cyan-700 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"> 

                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
            </form>
        </div>
    );
}

export default FormCategoria;