import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

export default function MenuDashBoard() {
    return (
        <header className="bg-darkColorSecondary  sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
                <Link
                    to={"/"}
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-8 w-8 text-white" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                    to={"/"}
                    className="p-2 text-white text-lg transition-colors  hover:bg-white hover:text-black"
                >
                    Dashboard
                </Link>
                <Link
                    to={"/dashboard/jobs"}
                    className="p-2 text-white text-lg transition-colors hover:bg-white hover:text-black"
                >
                    Trabajos
                </Link>
                <Link
                    to={"/dashboard/companies"}
                    className="p-2 text-white text-lg transition-colors hover:bg-white hover:text-black"
                >
                    Empresas
                </Link>
                <Link
                    to={"/dashboard/jobs/favorites"}
                    className="p-2 text-white text-lg transition-colors hover:bg-white hover:text-black"
                >
                    Favoritos
                </Link>
                <Link
                    to="/dashboard/jobs/apply"
                    className="p-2 text-white text-lg transition-colors hover:bg-white hover:text-black"
                >
                    Postulaciones
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link to="/">
                            Dashboard
                        </Link>
                        <Link
                            to="/dashboard/jobs"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Trabajos
                        </Link>
                        <Link
                            to="/dashboard/companies"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Empresas
                        </Link>
                        <Link
                            to="/dashboard/jobs/favorites"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Favoritos
                        </Link>
                        <Link
                            to="/dashboard/jobs/apply"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Postulaciones
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Opciones</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Cerrar Session</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
