import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios';
import { describe } from 'node:test';

interface Props {
    closeModal: () => void;
}

const createSubGrupoSchema = z.object({
    codgrupo: z.string()
        .nonempty('Favor informe o grupo'),
    descricao: z.string()
        .nonempty('A descrição do sub grupo é obrigatória.')
        .transform(descricao => {
            return descricao.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        })
})

type createSubGrupoData = z.infer<typeof createSubGrupoSchema>
type GrupoProps = {
    id: number;
    descricao: string;
}

export function FormSubGrupo({ closeModal }: Props) {
    const [grupos, setGrupos] = useState<GrupoProps[]>([])
    const { register, handleSubmit, formState: { errors } } = useForm<createSubGrupoData>({
        resolver: zodResolver(createSubGrupoSchema)
    })

    // async function updateSubGrupo(data: any) {
    //     const dataUpdate = {
    //         id: Number(data.id),
    //         codgrupo: Number(data.codgrupo),
    //         descricao: data.descricao
    //     }
    //     try {
    //         const response = await api.put('subgrupos', dataUpdate)
    //         window.alert(`Subgrupo alterado com sucesso!`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async function createSubGrupo(data: createSubGrupoData) {
        const dataInclude = {
            codgrupo: Number(data.codgrupo),
            descricao: data.descricao
        }
        try {
            const response: createSubGrupoData = await api.post('subgrupos', dataInclude)
            window.alert(`Subgrupo criado com sucesso!`)

        } catch (error) {
            console.log(error)
        }
    }

    async function loadGrupos() {
        const response = await api.get('grupos')
        setGrupos(response.data)
    }

    useEffect(() => {
        loadGrupos();
    }, [])

    return (
        <form
            onSubmit={handleSubmit(createSubGrupo)}
            className='flex flex-col gap-4 h-3/4 w-full justify-between pb-6 items-center bg-gray-50 border border-gray-300 shadow-xl'
        >
            <div className='flex justify-center w-full p-2 bg-gray-800 text-xl font-semibold text-gray-50'>INCLUIR SUB-GRUPO</div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='codgrupo' className='font-semibold'>Grupo:</label>
                    <select
                        id='codgrupo'
                        className='border border-zinc-200 shadow-sm rounded h-10 w-72 px-3'
                        {...register('codgrupo')}
                    >
                        <option value=''>Selecione</option>
                        {grupos.map(grupo => {
                            return (
                                <option key={grupo.id} value={grupo.id}>{grupo.descricao}</option>
                            )
                        })}
                    </select>
                    {errors.codgrupo && <span className='text-red-600 italic text-sm'>{errors.codgrupo.message}</span>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='descricao' className='font-semibold'>Descrição:</label>
                    <input
                        id='descricao'
                        type="text"
                        className='border border-zinc-200 shadow-sm rounded h-10 w-72 px-3'
                        {...register('descricao')}
                    />
                    {errors.descricao && <span className='text-red-600 italic text-sm'>{errors.descricao.message}</span>}
                </div>
            </div>
            <div className='space-x-2 w-72'>
                <button
                    type='submit'
                    className="w-32 h-10 bg-green-600 hover:bg-green-500 rounded font-bold text-white"
                >
                    Salvar
                </button>
                <button
                    onClick={closeModal}
                    className="w-32 h-10 bg-red-600 hover:bg-red-500 rounded font-bold text-white">
                    Fechar
                </button>
            </div>
        </form>
    );
}

