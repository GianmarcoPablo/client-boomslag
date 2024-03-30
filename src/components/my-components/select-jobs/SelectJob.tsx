
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SelectJob() {
    return (
        <>
            <div className="xl:mb-4">
                <Select>
                    <span className="text-lg font-semibold xl:block">Filtrar por fecha</span>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Fecha de Publicación" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Filtra por fecha</SelectLabel>
                            <SelectItem value="1">Hoy</SelectItem>
                            <SelectItem value="2">Menor a 2 dias</SelectItem>
                            <SelectItem value="3">Menor a 3 dias</SelectItem>
                            <SelectItem value="4">PMenor a 4 dias</SelectItem>
                            <SelectItem value="5">Menor a 5 dias</SelectItem>
                            <SelectItem value="5">Menor a 6 dias</SelectItem>
                            <SelectItem value="7">Menor a 1 semana</SelectItem>
                            <SelectItem value="15">Menor a 15 semana</SelectItem>
                            <SelectItem value="30">Menor a 1 mes</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="xl:mb-4">
                <Select>
                    <span className="text-lg font-semibold xl:block">Filtrar por Área</span>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Área" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Filtra por Área</SelectLabel>
                            <SelectItem value="1">Desarrollo</SelectItem>
                            <SelectItem value="2">Diseño</SelectItem>
                            <SelectItem value="3">Marketing</SelectItem>
                            <SelectItem value="4">Ventas</SelectItem>
                            <SelectItem value="5">Administración</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="xl:mb-4">
                <Select>
                    <span className="text-lg font-semibold xl:block">Filtrar por Nivel Laboral</span>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Nivel Laboral" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Filtra por Nivel Laboral</SelectLabel>
                            <SelectItem value="1">Trainee</SelectItem>
                            <SelectItem value="2">Practicante</SelectItem>
                            <SelectItem value="3">Junior</SelectItem>
                            <SelectItem value="4">Semi Senior</SelectItem>
                            <SelectItem value="5">Senior</SelectItem>
                            <SelectItem value="6">Jefe</SelectItem>
                            <SelectItem value="7">Gerente</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="xl:mb-4">
                <Select>
                    <span className="text-lg font-semibold xl:block">Filtrar por Modalidad</span>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Modalidad de Trabajo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Filtra por Modalidad</SelectLabel>
                            <SelectItem value="1">Presencial</SelectItem>
                            <SelectItem value="2">Remoto</SelectItem>
                            <SelectItem value="3">Semi Remoto</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="xl:mb-4">
                <Select>
                    <span className="text-lg font-semibold xl:block">Filtrar por Carga Horaria</span>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Carga Horaria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Filtra por carga horaria</SelectLabel>
                            <SelectItem value="1">Part Time</SelectItem>
                            <SelectItem value="2">Full Time</SelectItem>
                            <SelectItem value="3">Por Horas</SelectItem>
                            <SelectItem value="4">Pasantia</SelectItem>
                            <SelectItem value="5">Por contrato</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}
