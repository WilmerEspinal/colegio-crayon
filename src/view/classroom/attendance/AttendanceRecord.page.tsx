import Title from "@/components/ui/title"

const AttendanceRecord = () => {
    return (
        <section>
            <Title text="Asistencias" />
            <section>
                <h6 className="text-xl ml-9 mb-5">Registro de asistencia mensual</h6>
                <section className="w-full flex justify-center">
                    <div className="bg-white rounded px-9 pt-3 pb-9">
                        <table className="border border-orange-500">
                            <thead>
                                <tr>
                                    <th className="border border-orange-500 w-56 py-1">Sección</th>
                                    <th className="border border-orange-500 w-56 py-1">Código</th>
                                    <th className="border border-orange-500 w-56 py-1">Unidad Didáctica</th>
                                    <th className="border border-orange-500 w-56 py-1">N° Faltas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-orange-500">
                                    <td className="border border-orange-500 px-2 py-1 text-center">2B</td>
                                    <td className="border border-orange-500 px-3 py-1 text-center">12345678</td>
                                    <td className="border border-orange-500 px-3 py-1 text-center">Geografía</td>
                                    <td className="border border-orange-500 px-3 py-1 text-center">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </section>
        </section>
    )
}

export default AttendanceRecord