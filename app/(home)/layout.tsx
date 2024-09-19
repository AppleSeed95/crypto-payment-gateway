import HomeNavbar from "../components/layout/navbar-home";
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HomeNavbar />
            {children}
        </>
    );
}
