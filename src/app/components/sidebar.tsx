'use client';
import { Sidebar } from 'flowbite-react';

interface SidebarProps {
    activePage: string;
}

export default function SidebarComponent(props: SidebarProps) {
    const { activePage } = props;

    const active: string = "hover:bg-blue-500 bg-blue-500 text-white font-bold";
    const nonActive: string = "hover:bg-blue-300 font-bold";
    var dashboardStyle: string = nonActive;
    var usersStyle: string = nonActive;
    var doorsStyle: string = nonActive;
    var logsStyle: string = nonActive;

    if (activePage == "dashboard") {
        dashboardStyle = active;
    } else if (activePage == "users") {
        usersStyle = active;
    } else if (activePage == "doors") {
        doorsStyle = active;
    } else if (activePage == "logs") {
        logsStyle = active;
    }

    return (
        <Sidebar aria-label="Sidebar with logo branding example" className='shadow-md'>
            <h1 className='text-2xl font-bold'>HELLODOOR</h1>
            <hr className='my-4' />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item className={dashboardStyle} href="dashboard" >
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item className={usersStyle} href="#" >
                        User
                    </Sidebar.Item>
                    <Sidebar.Item className={doorsStyle} href="doors">
                        Pintu
                    </Sidebar.Item>
                    <Sidebar.Item className={logsStyle} href="#">
                        Log
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}