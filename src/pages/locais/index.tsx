import { api } from '@/lib/axios';
import React, { useState, useEffect } from 'react';

interface Local {
    id: number;
    descricao: string;
    filial: string;
}

export default function Local() {
    const [locais, setLocais] = useState<Local[]>([]);

    async function loadLocais() {
        const response = await api.get('locais')
        setLocais(response.data);
    }

    useEffect(() => {
        loadLocais();
    }, [])

    return (
        <div className="flex grow flex-col pt-4">
            <h2>CADASTRO DE LOCAIS</h2>

            <div className="flex justify-end m-2">
                <input className="border-2 border-gray-200 rounded-lg mr-4 p-4 h-10" type="text" placeholder="Pesquisar" />
                <button className="w-32 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg font-bold text-white">+ Novo</button>
            </div>

            {locais.map(loc => (
                <div className="flex justify-between space-x-2 p-4 odd:bg-gray-100 hover:bg-blue-50" key={loc.id}>
                    <span className="flex-1">{loc.descricao}</span>
                    <span className="flex-1">{loc.filial}</span>
                    <button className="w-28 h-8 bg-green-500 hover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-red-500 hover:bg-red-400 rounded-lg text-white">Excluir</button>
                </div>
            ))}
        </div>
    )
}
