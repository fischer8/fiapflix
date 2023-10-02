"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { serverLogin } from "@/components/auth/auth";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email === "admin@fiap.com.br" && senha === "admin"){
            serverLogin(email)
            push("/")
        }else{
          alert("Login inválido")
        }
    }

    return (
        <div className="flex h-screen">
            <main className="container m-auto max-w-md p-6">
                <h1 className="text-xl font-bold">Fiap Filmes</h1>
                <form onSubmit={login} className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        className="bg-slate-600 p-1 rounded" 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <label htmlFor="senha">Senha</label>
                    <input 
                        className="bg-slate-600 p-1 rounded" 
                        type="password" 
                        id="senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="bg-pink-600 p-2 mt-2 rounded">entrar</button>

                </form>
            </main>
        </div>
    )
}
