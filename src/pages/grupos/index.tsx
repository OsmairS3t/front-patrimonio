import { api } from "@/lib/axios";
import React, { useEffect, useState } from "react";

interface GrupoProps {
    id: string;
    descricao: string;
}

export default function Grupo() {
    const [grupos, setGrupos] = useState<GrupoProps[]>([])

    async function loadGrupos() {
        const response = await api.get('grupos')
        setGrupos(response.data)
    }
    useEffect(() => {
        loadGrupos();
    }, []);

    return (
        <div className="container flex flex-col justify-between pt-4">
            <h2 className="flex justify-start items-center h-10 bg-blue-100 font-semibold px-4">CADASTRO DE GRUPOS</h2>

            <div className="flex justify-end m-2">
                <input className="border-2 border-gray-200 rounded-lg mr-4 p-4 h-10" type="text" placeholder="Pesquisar" />
                <button className="w-32 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg font-bold text-white">+ Novo</button>
            </div>

            {grupos.map(grupo => (
                <div className="flex justify-between space-x-2 p-4 odd:bg-gray-100 hover:bg-blue-50" key={grupo.id}>
                    <span className="flex-1">{grupo.descricao}</span>
                    <button className="w-28 h-8 bg-green-500 hover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-red-500 hover:bg-red-400 rounded-lg text-white">Excluir</button>
                </div>
            ))}
        </div>
    )
}
