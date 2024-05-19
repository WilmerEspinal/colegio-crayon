import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const Login = () => {
    return (
        <>
            <section className="w-screen h-screen flex justify-center items-center">
                <form className="grid w-full max-w-sm items-center gap-1.5 gap-2" action="">
                    <Label htmlFor="user">User</Label>
                    <Input type="text" id="user" placeholder="Ingrese su usuario" />

                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Ingrese su contraseña" />
                    <Button className="mt-4">Ingresar</Button>
                </form>
            </section>
        </>
    )
}
export default Login