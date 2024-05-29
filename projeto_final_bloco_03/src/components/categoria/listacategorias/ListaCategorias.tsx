import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../model/categoria/Categoria";
import { buscar } from "../../../service/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import { DNA } from "react-loader-spinner";

function ListaCategorias() {
    const navigate = useNavigate()

    const [categorias, setCategorias] = useState<Categoria[]>([])
   
    async function buscarCategorias() {
        try {
            await buscar(`/categorias`, setCategorias, {
        
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
               
            }
        }
    }
    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="bg-slate-200 py-20">
            
            <div className=" flex justify-center ">
                <div className=" container flex-row">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategorias key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default ListaCategorias;