import BaseLayout from "@/components/layouts/base-layout";
import HomePage from "@/pages/home";
import { ThemeProvider } from "@/services/providers/theme-provider";

function App() {
    return (
        <ThemeProvider>
            <BaseLayout title="TailwindCSS V4">
                <HomePage/>
            </BaseLayout>
        </ThemeProvider>
    );
}

export default App;
