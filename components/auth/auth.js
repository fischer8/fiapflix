"use server"

import { cookies } from 'next/headers'

export async function serverLogin(email){
    cookies().set("user_email", email, {
        maxAge: 60 * 60 * 24 * 7
    })
}

export async function serverLogout(){
    cookies().delete("user_email")
}
