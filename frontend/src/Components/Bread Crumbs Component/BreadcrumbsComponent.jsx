import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbComponent() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const translations = {
        profile: "پروفایل",
        addresses: "آدرس‌ها",
        orders: "سفارش‌ها",
    };

    return (
        <div className="w-full flex justify-between items-center bg-white dark:bg-[#18181B] py-4 px-6 rounded-3xl mb-2 text-sm text-red-500">
            <Breadcrumbs
                className="rtl-breadcrumbs"
                separator=">"
            >
                <BreadcrumbItem>
                    <Link to="/">خانه</Link>
                </BreadcrumbItem>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const translatedValue = translations[value] || value; // ترجمه یا استفاده از مقدار اصلی
                    return (
                        <BreadcrumbItem key={to}>
                            <Link to={to}>{translatedValue}</Link>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
}
