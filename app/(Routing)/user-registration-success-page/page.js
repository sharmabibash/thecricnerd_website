"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";

export default function UserRegisteredSuccess() {
    const router = useRouter();

    useEffect(() => {
        gsap.fromTo(
            ".success-icon",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "bounce.out" }
        );
        gsap.fromTo(
            ".success-text",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            ".back-to-login-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        );
    }, []);

    const goToLogin = () => {
        router.push("/user-login");
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center p-6 bg-gray-100">
            <div className="text-center">
                <CheckCircle
                    className="success-icon text-[#2e3192] h-20 w-20 mx-auto [#2e3192]"
                    size={80}
                />
                <h1 className="success-text text-3xl font-semibold mt-4 text-green-700">
                    Registration Successful!
                </h1>
                <p className="success-text text-lg text-gray-600 mt-2">
                    Welcome to the community. You can now log in and start exploring!
                </p>
                <Button
                    className="back-to-login-btn mt-8 bg-[#2e3192] hover:bg-green-600"
                    onClick={goToLogin}
                >
                    Go to Login
                </Button>
            </div>
        </div>
    );
}
