import { api } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { FormSubGrupo } from "../components/FormSubGrupos";

interface SubGrupoProps {
    id: number;
    codgrupo: number;
    descricao: string;
    grupo: {
        id: number;
        descricao: string;
    }
}

export default function SubGrupo() {
    const [subGrupos, setSubGrupos] = useState<SubGrupoProps[]>([]);
    const [isModalSubGruposOpen, setIsModalSubGruposOpen] = useState(false);

    function handleModal() {
        setIsModalSubGruposOpen(!isModalSubGruposOpen);
    }

    async function loadSubGrupos() {
        const response = await api.get('subgrupos');
        setSubGrupos(response.data);
    }

    useEffect(() => {
        loadSubGrupos();
    }, [isModalSubGruposOpen === false])

    return (
        <div className="flex grow flex-col pt-4">
            <h2>CADASTRO DE SUB GRUPOS</h2>
            <div className="flex justify-end m-2">
                <input className="border-2 border-gray-200 rounded-lg mr-4 p-4 h-10" type="text" placeholder="Pesquisar" />
                <button onClick={handleModal} className="w-32 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg font-bold text-white">+ Novo</button>
            </div>

            {subGrupos.map(subgrupo => (
                <div className="flex justify-between space-x-2 p-4 odd:bg-gray-100 hover:bg-blue-50" key={subgrupo.id}>
                    <span className="flex-1">{subgrupo.grupo.descricao}</span>
                    <span className="flex-1">{subgrupo.descricao}</span>
                    <button className="w-28 h-8 bg-green-500 hover:bg-green-400 rounded-lg text-white">Alterar</button>
                    <button className="w-28 h-8 bg-red-500 hover:bg-red-400 rounded-lg text-white">Excluir</button>
                </div>
            ))}

            <Modal ariaHideApp={false} isOpen={isModalSubGruposOpen} className="w-1/3 h-auto absolute left-1/4 top-1/4">
                <FormSubGrupo closeModal={handleModal} />
            </Modal>
        </div>
    )
}
