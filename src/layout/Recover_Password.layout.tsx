import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RecoverPassword = () => {
    return (
        <>
            <section className="w-screen h-screen flex justify-center items-center">
                <form className="grid w-full max-w-sm items-center gap-2" action="">
                    <Label htmlFor="numberDNI">DNI:</Label>
                    <Input type="text" id="numberDNI" placeholder="Ingrese su numero de DNI" />
                    <Button className="mt-4">Recuperar</Button>
                </form>
            </section>
        </>
    )
}
export default RecoverPassword