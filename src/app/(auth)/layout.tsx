export default function AuthLayout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#09111f] select-none">{children}</div>
    )
}