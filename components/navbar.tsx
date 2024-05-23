import React from 'react'
import Link from 'next/link'

import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import NavbarActions from '@/components/navbar-actions';

import { Category } from '@/types';

export default function Navbar() {
    const categories: Category[] = [
        {
            id: '1',
            name: 'Clothing',
            billboard: {
                id: '1',
                imageUrl: 'https://source.unsplash.com/featured/?clothing',
                name: 'Clothing'
            }
        }
    ];

    return (
        <div className='border-b'>
            <Container>
                <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                    <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
                        <p className='text-xl font-bold'>
                            BSales
                        </p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}
