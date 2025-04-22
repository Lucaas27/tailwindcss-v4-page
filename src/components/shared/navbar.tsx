import { ThemeToggle } from "@/components/shared/theme-toggle";

const Navbar = () => {
    return (
        <nav className="py-6 flex justify-between">
            <div>Nav</div>
            <ThemeToggle/>
        </nav>
    );
};
export default Navbar;
