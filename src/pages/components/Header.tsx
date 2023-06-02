import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='flex flex-col border-b-2 border-black bg-gray-300'>
            <div className='flex justify-center items-center text-5xl text-white h-40 border-2 p-4 bg-[url("/assets/header_patrimonio.jpg")] bg-center bg-cover'>
                <h2>CONTROLE DE PATRIMÔNIO</h2>
            </div>

            <div className='flex flex-row justify-start space-x-10 items-center h-20 bg-blue-700 text-white pl-7 p-2'>

                <Link href='/' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                </Link>

                <Link href='/grupos' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    Grupos
                </Link>

                <Link href='/subgrupos' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                    </svg>
                    Sub-Grupos
                </Link>

                <Link href='/ativos' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                        <line x1="12" y1="12" x2="20" y2="7.5" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <line x1="12" y1="12" x2="4" y2="7.5" />
                    </svg>
                    Ativos
                </Link>

                <Link href='/centrocusto' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="3" x2="12" y2="7" />
                        <line x1="12" y1="21" x2="12" y2="18" />
                        <line x1="3" y1="12" x2="7" y2="12" />
                        <line x1="21" y1="12" x2="18" y2="12" />
                        <line x1="12" y1="12" x2="12" y2="12.01" />
                    </svg>
                    Centro de Custo
                </Link>

                <Link href='/marcas' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" />
                    </svg>
                    Marcas
                </Link>

                <Link href='/motivos' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    Motivos
                </Link>

                <Link href='/locais' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Locais
                </Link>

                <Link href='/usuarios' className='flex flex-col justify-center items-center text-center hover:bg-blue-500 w-32 h-20'>
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Usuários
                </Link>
            </div>
        </div>
    )
}

