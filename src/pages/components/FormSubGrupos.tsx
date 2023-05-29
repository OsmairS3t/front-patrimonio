import React from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
    closeModal: () => void;
}

const createSubGrupoSchema = z.object({
    idgrupo: z.string()
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

export function FormSubGrupo({ closeModal }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<createSubGrupoData>({
        resolver: zodResolver(createSubGrupoSchema)
    })

    function createSubGrupo(data: any) {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(createSubGrupo)}
            className='flex flex-col gap-4 h-3/4 w-full justify-between pb-6 items-center bg-gray-50 border border-gray-300 shadow-xl'
        >
            <div className='flex justify-center w-full p-2 bg-gray-800 text-xl font-semibold text-gray-50'>INCLUIR SUB-GRUPO</div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='idgrupo' className='font-semibold'>Grupo:</label>
                    <select
                        id='idgrupo'
                        className='border border-zinc-200 shadow-sm rounded h-10 w-72 px-3'
                        {...register('idgrupo')}
                    >
                        <option value=''>Selecione</option>
                        <option value='1'>Equipamentos Chácara</option>
                    </select>
                    {errors.idgrupo && <span className='text-red-600 italic text-sm'>{errors.idgrupo.message}</span>}
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

