import { AppBar } from "@/components/app-bar/app-bar";
import { Footer } from "@/components/footer";

interface Props {
    children: React.ReactNode;
}


export default function RootLayout({ children }: Props) {

    return (
        <>
            {/* App Bar  */}
            <AppBar/>

            {/* Main Content */}
            <main>
                { children }
            </main>

            {/* Footer */}
            <Footer/>
        </>
    );
}