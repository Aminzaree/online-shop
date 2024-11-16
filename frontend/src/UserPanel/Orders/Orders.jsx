import { Tabs, Tab, Card, CardBody, Chip } from "@nextui-org/react";

export default function Orders() {

    const tabs = [
        {
            id: 1,
            label: "جاری",
            count: "۵",
            content: "این تب مربوط به سفارش‌های جاری است."
        },
        {
            id: 2,
            label: "تحویل شده",
            count: "۱۲",
            content: "این تب مربوط به سفارش‌های تحویل شده است."
        },
        {
            id: 3,
            label: "مرجوع شده",
            count: "۴",
            content: "این تب مربوط به سفارش‌های مرجوع شده است."
        },
        {
            id: 4,
            label: "لغو شده",
            count: "۲۱",
            content: "این تب مربوط به سفارش‌های لغو شده است."
        }
    ];

    return (
        <div className="w-full">
            <div className="flex w-full flex-col">
                <Tabs
                    aria-label="سفارش‌ها"
                    color="primary"
                    variant="underlined"
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-[#22d3ee]",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                    }}>
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            title={
                                <div className="flex items-center space-x-2">
                                    <span className="me-2">{tab.label}</span>
                                    <Chip size="sm" variant="faded" className="rounded-2xl">{tab.count}</Chip>
                                </div>
                            }
                        >
                            <Card className="shadow-none">
                                <CardBody>
                                    <p className="text-start">{tab.content}</p>
                                </CardBody>
                            </Card>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};