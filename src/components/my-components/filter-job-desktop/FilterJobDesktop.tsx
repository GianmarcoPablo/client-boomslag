import SelectJob from "../select-jobs/SelectJob"


export default function FilterJobsDesktop() {
    return (
        <div className="mx-5 ">
            <p className={`text-2xl uppercase font-bold mb-5`}>Filtrar Trabajos</p>
            <div className=" bg-gray-100 shadow-lg  p-3 rounded-md">
                <SelectJob />
            </div>
        </div>
    )
}
