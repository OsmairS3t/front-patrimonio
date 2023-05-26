import { api } from "@/lib/axios";
import React, { useState, useEffect } from "react";

interface AtivoProps {
    id: number;
    codigo: number;
    status: string;
    descricao: string
    aquisicao?: Date;
    valor_aquisicao?: number;
    valor_atual?: number;
    depreciacao?: number;
    codsubgrupo: number;
    codcentrocusto: number;
    codmarca: number;
}

export default function Ativos() {
    const [ativos, setAtivos] = useState<AtivoProps[]>([])

    async function loadAtivos() {
        const response = await api.get('ativos');
        setAtivos(response.data);
    }

    useEffect(() => {
        loadAtivos();
    }, []);

    return (
        <section className='flex-grow bg-gray-100'>
            <h2>CADASTRO DE ATIVOS</h2>
            <div className="flex justify-end m-2">
                <input className="border-2 border-gray-200 rounded-lg mr-4 p-4 h-10" type="text" placeholder="Pesquisar" />
                <button className="w-32 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg font-bold text-white">+ Novo</button>
            </div>

            {ativos.map(ativo => (
                <div className="flex justify-between space-x-2 p-4 odd:bg-gray-100 hover:bg-blue-50" key={ativo.id}>
                    <span className="flex-1">{ativo.descricao}</span>
                    <span className="flex-1">{ativo.status}</span>
                    <span className="flex-1">{ativo.codsubgrupo}</span>
                    <span className="flex-1">{ativo.codmarca}</span>
                    <span className="flex-1">{ativo.codcentrocusto}</span>
                    <button className="w-28 h-8 bg-green-500 aquisicaohover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-green-500 codsubgrupohover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-green-500 codmarcahover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-green-500 codcentrocustohover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-red-500 hover:bg-red-400 rounded-lg text-white">Excluir</button>
                </div>
            ))}
        </section>
    )
}