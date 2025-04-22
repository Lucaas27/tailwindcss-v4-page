import { Container } from "@/components/ui/container";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { useEffect } from "react";

interface BaseLayoutProps {
    title: string;
    children: React.ReactNode;
}

const BaseLayout = ({title, children}: BaseLayoutProps) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1 overflow-hidden ">{children}</main>
            <Footer/>
        </Container>
    );
};
export default BaseLayout;
