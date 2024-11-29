import Link from "next/link"

export default function Footer() {
    return (
        <footer className="md:px-[10px] border border-gray-50 rounded-lg px-[40px] md:py-12 w-full grid place-items-center bg-[#2e3192]">
            <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-start">
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                        <img
                            src="/Images/Logo/The Cricket Nerd.png"
                            alt="Logo"
                            width={75}
                            height={75}
                            className="bg-white rounded-[50%]"
                        />
                        <span className="text-xl font-bold text-white">The Cricket Nerd</span>
                    </Link>
                    <p className="text-muted-foreground text-white mt-2">
                        A one place digital destination for everything related to Nepal Cricket.
                        NEWS || INSIGHT || ANALYSIS
                    </p>
                </div>
                <nav className="grid gap-2">
                    <h4 className="text-lg font-semibold text-white">Navigation</h4>
                    <Link href="/about-us" className="text-muted-foreground hover:underline text-white" prefetch={false}>
                        About Us
                    </Link>
                    <Link href="/contact-us" className="text-muted-foreground hover:underline text-white" prefetch={false}>
                        Contact Us
                    </Link>
                    <Link href="/privacy-policy" className="text-muted-foreground hover:underline text-white" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms-and-conditions" className="text-muted-foreground hover:underline text-white" prefetch={false}>
                        Terms & Conditions
                    </Link>
                </nav>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Social</h4>
                    <div className="flex gap-2">
                        <Link href="https://m.me/j/AbbAlJ2aLbmgcVxE/" className="text-muted-foreground hover:text-primary text-white" prefetch={false}>
                            <i className='bx bxl-messenger text-3xl text-white'></i>
                        </Link>
                        <Link href="https://www.facebook.com/thecricketnerd01?mibextid=ZbWKwL" className="text-muted-foreground hover:text-primary" prefetch={false}>
                            <i className='bx bxl-facebook text-3xl text-white' ></i>
                        </Link>
                        <Link href="https://www.instagram.com/thecricketnerd17?igsh=dzlmaXV1N2VuMGw=" className="text-muted-foreground hover:text-primary" prefetch={false}>
                            <i className='bx bxl-instagram text-3xl text-white' ></i>
                        </Link>
                        <Link href="https://youtube.com/@thecricketnerd17?si=u-Q-1rcOjpY8EAb6" className="text-muted-foreground hover:text-primary" prefetch={false}>
                            <i className='bx bxl-youtube text-3xl text-white' ></i>
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
                    <p className="text-muted-foreground text-white">
                        Phone: +9779827304128
                        <br />
                        Email: info@thecricnerd.com
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center text-muted-foreground text-sm text-white">
                &copy; 2024 Cricket Nerd. All rights reserved.
            </div>
        </footer>
    )
}
