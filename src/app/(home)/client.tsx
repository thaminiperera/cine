"use client"
import { trpc } from "@/trpc/client";

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Oliver"
    })
    return(
        <div className="">Page Client says : {data.greeting}</div>
    )
}