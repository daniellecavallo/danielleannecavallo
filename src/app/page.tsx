// @ts-nocheck
'use client'

import { useEffect, useState } from "react";
import netlifyAuth from "./netlifyAuth";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { redirect } from "react-router-dom";

export default function Login() {


    const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
    const [user, setUser] = useState(null)

    useEffect(() => {
        netlifyAuth.initialize((user: any) => {
            setLoggedIn(!!user)
            setUser(user)
        })

        if (loggedIn) {
            redirect("/home")
        }
    })

    const login = () => {
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user)
            setUser(user)
            netlifyAuth.closeModal()
            redirect("/home")
        })
    }

    const logout = () => {
        netlifyAuth.signout(() => {
            setLoggedIn(false)
            setUser(null)
        })
    }

    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Please Log In
                    </h1>
                    <Button onClick={login}> Login </Button>
                </div>
            </Container>
        </>
    )
}