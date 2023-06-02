import { api } from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

interface CentroCustoProps {
    id: number;
    descricao: string;
}

export default function CentroCusto() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [centrocusto, setCentroCusto] = useState<CentroCustoProps[]>([])

    function handleModal() {
        setIsModalOpen(!isModalOpen)
    }

    function handleDeleteCentroCusto(id: any) {
        console.log(id)
    }

    async function loadCentroCusto() {
        const response = await api.get('centrocusto')
        setCentroCusto(response.data)
    }

    useEffect(() => {
        loadCentroCusto()
    }, [isModalOpen])

    return (
        <div className="flex grow flex-col pt-4">
            <h2 className="flex justify-start items-center h-10 bg-blue-100 font-semibold px-4">CADASTRO DE CENTRO DE CUSTO</h2>

            <div className="flex justify-end m-2">
                <input className="border-2 border-gray-200 rounded-lg mr-4 p-4 h-10" type="text" placeholder="Pesquisar" />
                <button onClick={handleModal} className="w-32 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg font-bold text-white">+ Novo</button>
            </div>

            {centrocusto.map(item => (
                <div className="flex justify-between space-x-2 p-4 odd:bg-gray-100 hover:bg-blue-50" key={item.id}>
                    <span className="flex-1">{item.descricao}</span>
                    <button className="w-28 h-8 bg-green-500 hover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button onClick={() => handleDeleteCentroCusto(item.id)} className="w-28 h-8 bg-red-500 hover:bg-red-400 rounded-lg text-white">Excluir</button>
                </div>
            ))}

            <Modal ariaHideApp={false} isOpen={isModalOpen} className="w-1/3 h-auto absolute left-1/4 top-1/4">
                <div>FORMULARIO CentroCustoS</div>
            </Modal>
        </div>
    )
}
