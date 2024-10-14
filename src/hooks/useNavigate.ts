import { usePathname, useRouter } from "next/navigation";

export default function Navigate(path: string, fromCurrentPath: boolean) {
    const router = useRouter()
    const currentPath = usePathname()

    if(fromCurrentPath) {
        router.push(`${currentPath}/${path}`)
    }

    router.push(`${path}`)
}