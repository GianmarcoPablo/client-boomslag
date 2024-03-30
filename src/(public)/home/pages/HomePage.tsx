import { Button } from "@/components/ui/button";
import { Sponsors } from "@/components/my-components";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24">
                <a href="/about" className="inline-flex items-center rounded-lg bg-colorSecondary text-white px-4 mb-1 py-1 text-base font-medium">
                    <span className="sm:hidden ">Descubre mas de nosotros</span>
                    <span className="hidden sm:inline ">
                        Descubre más sobre nosotros como empresa →
                    </span>
                </a>
                <h1 className={` text-colorPrimary antialiased text-center text-5xl font-bold leading-tight tracking-tighter md:text-8xl lg:leading-[1.1] `}>
                    Encuentra Tu Próximo Desafío Laboral
                </h1>
                <span
                    className="max-w-[750px] text-center text-lg  text-gray-400 sm:text-2xl"
                    style={{ display: "inline-block", verticalAlign: "block", textDecoration: "inherit", maxWidth: "570px" }}
                >Encuentra una variedad de oportunidades laborales adaptadas a tus habilidades e intereses</span>


                <div className="flex gap-4 mt-6">
                    <Button className="bg-darkColorPrimary hover:bg-darkColorPrimary text-white" asChild variant={"secondary"}>
                        <Link to="/dashboard/profile">
                            Ver mi perfil
                        </Link>
                    </Button>
                    <Button className="bg-colorSecondary hover:bg-darkColorSecondary" asChild variant={"default"}>
                        <Link to="/jobs">
                            Buscar trabajo
                        </Link>
                    </Button>
                </div>
            </section>

            <aside className="bg-darkColorPrimary mx-0">
                <div className="flex items-center justify-center">
                    <Sponsors />
                </div>
            </aside>
        </>
    );
}