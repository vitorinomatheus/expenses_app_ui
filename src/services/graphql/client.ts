'use client'

import { getCookie } from 'cookies-next'
import { cacheExchange, createClient, fetchExchange } from "urql";

const serverUrl: string | undefined = process.env.BACKEND_URL;

export const client = createClient({
    url: serverUrl!,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        const token = getCookie('jwt')
        return { 
            headers: { authorization: token ? `Bearer ${token}` : ''}
        }
    }
})