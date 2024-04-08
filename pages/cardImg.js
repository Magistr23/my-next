import Image from "next/image";
export function CardImg() {
    return <>
        <Image
            src="/git_force.jpg"
            alt="Vercel Logo"
            width={400}
            height={400}
            priority
        />
                <Image
            src="/jobs.jpg"
            alt="Vercel Logo"
            width={400}
            height={400}
            priority
        />
                <Image
            src="/printer.jpg"
            alt="Vercel Logo"
            width={400}
            height={400}
            priority
        />
                <Image
            src="/program.jpg"
            alt="Vercel Logo"
            width={400}
            height={400}
            priority
        />
    </>
}