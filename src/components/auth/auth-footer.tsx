import Link from "next/link"

interface AuthFooterProps {
    message: string;
    label: string;
    href: string;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({message, label, href}) => {
    return (
        <div className="flex flex-row gap-x-4 items-center text-muted">
            <p>{message}</p>
            <Link className="text-white hover:text-blue-500 hover:underline" href={href}>{label}</Link>
        </div>
    )
}