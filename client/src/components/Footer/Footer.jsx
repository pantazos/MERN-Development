import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
    {
        name: "Dashboard",
        link: "/",
    },
    {
        name: "Profile",
        link: "/profile",
    },
    {
        name: "Login",
        link: "/login",
    },
    {
        name: "Signup",
        link: "/signup",
    },
];

const Footer = () => {
    return (
        <footer className="bg-zinc-900 py-12 px-4 text-base text-white sm:px-6 md:px-8 lg:py-16 lg:px-8 lg:pb-8">
            <div className="mx-auto max-w-7xl">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Copyright © 2023 | All rights reserved
                </h3>
            </div>
        </footer>
    );
};

export default Footer;
