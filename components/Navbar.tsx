import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {

    const sessions = await auth()

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>

            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />

                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {sessions && sessions.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Crear</span>
                            </Link>

                            <form action={async () => {
                            'use server';
                                await signOut();
                            }}>
                                <button type="submit"> Cerrar sesión</button>
                            </form>

                            <Link href={`/user/${sessions?.user?.id}`}>
                                <span>{sessions?.user?.name}</span>
                            </Link>
                        </>

                    ) : <>
                        <form action={async () =>  {
                            'use server';
                            await signIn("github");
                        }}>
                            <button type="submit">Iniciar sesión</button>
                        </form>
                    </>

                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

