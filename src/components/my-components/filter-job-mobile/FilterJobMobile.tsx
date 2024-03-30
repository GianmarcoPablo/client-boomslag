import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import SelectJob from "../select-jobs/SelectJob"

export default function FilterJobsMobile() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="w-full bg-darkColorPrimary text-white font-semibold text-lg" variant="outline">Filtrar Trabajos</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <SelectJob />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
