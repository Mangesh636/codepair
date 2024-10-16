import Image from "next/image"

interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({title, subtitle}) => {
    return (
        <div className="flex flex-col gap-y-12 items-center text-center">
            <Image src={"/logo.svg"} alt="logo" width={100} height={125} className="pointer-events-none" />

            <div>
                <h1 className="text-4xl mb-1">{title}</h1>
                <p className="text-muted">{subtitle}</p>
            </div>
        </div>
    )
}