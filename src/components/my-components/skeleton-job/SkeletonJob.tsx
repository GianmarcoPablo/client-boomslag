


export default function SkeletonJob() {
    return (
        <div className="border  shadow rounded-md p-2 mb-6  w-full ">
            <div className="animate-pulse flex flex-col space-y-3">
                <div className="rounded-full bg-gray-300 h-3 w-full"></div>
                <div className="rounded-full bg-gray-300 h-3 w-1/2"></div>
                <div className="rounded-full bg-gray-300 h-3 w-full"></div>
                <div className="rounded-full bg-gray-300 h-3 w-1/2"></div>
                <div className="rounded-full bg-gray-300 h-3 w-full"></div>
            </div>
        </div>
    )
}
