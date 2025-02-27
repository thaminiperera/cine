import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"

export const AuthButton = () =>{
    return (
        <Button variant="ghost" className="px-4 py-2 text-sm font-medium rounded-full shadow-none text-zinc-900 hover:text-zinc-700 ">
            <UserCircleIcon/> Sign In
        </Button>
    )
}