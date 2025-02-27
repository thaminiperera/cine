import { SearchIcon } from "lucide-react"

export const SearchInput = () => {
    return (
        <form action="" className="flex w-full max-w-[600px]">
            <div className="relative w-full">
                <input type="text" placeholder="Search" className="w-full pl-4 py-2 rounded-l-full border focus:outline-none focus:border-orange-400 "/>

            </div>
            <button type="submit" className="pl-3 pr-5 py-2 bg-gray-100 brder border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"><SearchIcon className="size-5"/></button>
        </form>
    )
}