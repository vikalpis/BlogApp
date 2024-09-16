import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col justify-between">
                        <div className="mb-4">
                            <Logo width="100px" />
                        </div>
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Affiliate Program
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Legals</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base hover:text-gray-400 transition" to="/">
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
