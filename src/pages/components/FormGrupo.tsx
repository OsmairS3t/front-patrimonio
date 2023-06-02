import React from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/axios';

interface Props {
    closeModal: () => void;
}

const createGrupoSchema = z.object({
    descricao: z.string()
        .nonempty('É necessário informar o Grupo'),
})

type createGrupoData = z.infer<typeof createGrupoSchema>

export function FormGrupo({ closeModal }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<createGrupoData>({
        resolver: zodResolver(createGrupoSchema)
    })

    async function frmCreateGrupo(data: createGrupoData) {
        const response = await api.post('grupos', data)
        window.alert('Grupo cadastrado com sucesso!')
    }

    return (
        <form onSubmit={handleSubmit(frmCreateGrupo)}
            className='flex flex-col gap-4 h-3/4 w-full justify-between pb-6 items-center bg-gray-50 border border-gray-300 shadow-xl'
        >
            <div className='flex justify-center w-full p-2 bg-gray-800 text-xl font-semibold text-gray-50'>INCLUIR SUB-GRUPO</div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='descricao' className='font-semibold'>Grupo:</label>
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
    )
}

