import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

export default function DarkModeToggle() {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        };
    };

    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode === "enabled") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, [])

    return (
        <Button
            onClick={() => toggleDarkMode()}
            isIconOnly
            color="transparent"
            radius="sm"
        >
            {darkMode ? <FaRegSun size={25} /> : <FaRegMoon size={25} />}
        </Button>
    );
};