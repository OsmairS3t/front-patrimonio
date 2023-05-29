import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
    closeModal: () => void;
}

const createProductSchema = z.object({
    foto: z.instanceof(FileList)
        .transform(list => list.item(0))
        .refine(file => file!.size <= 5 * 1024 * 1024, 'O arquivo deve conter até 5 MB'),
    produto: z.string()
        .nonempty('O produto deve ser preenchido'),
    ingredients: z.array(z.object({
        ingrediente: z.string().nonempty('O nome do ingrediente é obrigatório')
    })).min(2, 'Insira pelo menos 2 ingredientes.')
})

type createProductData = z.infer<typeof createProductSchema>

export function FormProduct({ closeModal }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<createProductData>({
        resolver: zodResolver(createProductSchema)
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients'
    })

    function createProduct(data: createProductData) {
        console.log(data.foto)
    }

    function addNewIngredient() {
        append({ ingrediente: '' })
    }

    function delIngredient(index: number) {
        remove(index)
    }

    return (
        <form onSubmit={handleSubmit(createProduct)} className='p-4 m-4 flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="foto">Foto</label>
                <input
                    type="file"
                    accept='image/*'
                    {...register('foto')}
                />
                {errors.foto && <span className='text-red-600 italic'>{errors.foto.message}</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="produto">Produto</label>
                <input
                    type="text"
                    className='border border-zinc-200 shadow-sm rounded h-10 w-72 px-3'
                    {...register('produto')}
                />
                {errors.produto && <span className='text-red-600 italic'>{errors.produto.message}</span>}
            </div>
            <div className='flex gap-8'>
                <label htmlFor="ingredients">Ingredientes:</label>
                <button type='button' className="w-24 text-blue-800 hover:text-blue-600 rounded font-bold"
                    onClick={addNewIngredient}>Adicionar
                </button>
            </div>

            {fields.map((field, index) => {
                return (
                    <div key={field.id}>
                        <input type="text"
                            className='border border-zinc-200 shadow-sm rounded h-10 w-72 px-3'
                            {...register(`ingredients.${index}.ingrediente`)}
                        />
                        <button type='button' className="w-24 hover:text-red-600 rounded font-bold text-red-800"
                            onClick={() => delIngredient(index)}>(-) Remover
                        </button>

                        {errors.ingredients?.[index]?.ingrediente && <span className='text-red-600 italic'>{errors.ingredients?.[index]?.message}</span>}
                    </div>
                )
            })}
            {errors.ingredients && <span className='text-red-600 italic'>{errors.ingredients.message}</span>}

            <div className='space-x-2 w-72'>
                <button
                    className="w-32 h-10 bg-green-600 hover:bg-green-500 rounded font-bold text-white"
                >
                    Salvar
                </button>

                <button onClick={closeModal}
                    className="w-32 h-10 bg-red-600 hover:bg-red-500 rounded font-bold text-white">
                    Fechar
                </button>
            </div>
        </form>
    )
}
