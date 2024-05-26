import Title from "@/components/ui/title"

const Schedule = () => {
    return (
        <section>
            <Title text="Horario de Clases Período 2024" />
            <section className="w-full flex justify-center">
                <div className="bg-white rounded px-9 pt-3 pb-9">
                    <table className="border border-orange-500">
                        <caption className=" text-lg">
                            Horario de 3ro grado
                        </caption>
                        <thead>
                            <tr className="border border-orange-500">
                                <th className="border border-orange-500">Hora</th>
                                <th className="border border-orange-500">Lunes</th>
                                <th className="border border-orange-500">Martes</th>
                                <th className="border border-orange-500">Miércoles</th>
                                <th className="border border-orange-500">Jueves</th>
                                <th className="border border-orange-500">Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-orange-500">
                                <td className="border border-orange-500 px-3 py-2">8:00 AM</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Matemática</td>
                                <td className="border border-orange-500 px-3 py-2">Ciencias sociales</td>
                                <td className="border border-orange-500 px-3 py-2">Educación física</td>
                                <td className="border border-orange-500 px-3 py-2">Historia</td>
                            </tr>
                            <tr className="border border-orange-500">
                                <td className="border border-orange-500 px-3 py-2">9:30 AM</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Matemática</td>
                                <td className="border border-orange-500 px-3 py-2">Ciencias sociales</td>
                                <td className="border border-orange-500 px-3 py-2">Educación física</td>
                                <td className="border border-orange-500 px-3 py-2">Historia</td>
                            </tr>
                            <tr className="border border-orange-500">
                                <td className="border border-orange-500 px-3 py-2">9:30</td>
                                <td className="border border-orange-500 px-3 py-2">Arte</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                            </tr>
                            <tr className="border border-orange-500">
                                <td className="border border-orange-500 px-3 py-2">10:30</td>
                                <td className="border border-orange-500 px-3 py-2">Arte</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                                <td className="border border-orange-500 px-3 py-2">Comunicación</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </section>
    )
}
export default Schedule