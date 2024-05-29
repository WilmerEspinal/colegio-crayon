import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useState } from 'react'
//hooks
import { useNavigate } from 'react-router-dom'
import { validateLogin } from "./login"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (event: FormEvent) => {
        event.preventDefault()
        if (validateLogin(email, password)) {
            navigate('/crayon');
        }
    };
    return (
        <>
            <section className="w-screen h-screen flex justify-center items-center">
                <form className="grid w-full max-w-sm items-center gap-2" action="">
                    <Label htmlFor="user">User</Label>
                    <Input type="text" id="user" placeholder="Ingrese su usuario" required autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Ingrese su contraseña" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" onClick={handleLogin} className="mt-4">Ingresar</Button>
                </form>
            </section>
        </>
    )
}
export default Login