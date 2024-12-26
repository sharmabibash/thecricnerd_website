"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserRegisteredSuccess() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        setUserEmail(storedEmail);
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
        gsap.fromTo(
            ".verify-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5 }
        );
        gsap.fromTo(
            ".resend-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 2 }
        );
    }, []);

    const goToLogin = () => {
        router.push("/user-login");
    };

    const handleResendLink = async () => {
        if (!userEmail) {
            setError("Email not found. Please try again later.");
            toast.error("Email not found. Please try again later.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://admin.thecricnerd.com/app_api/Post/resend_link.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: userEmail,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Verification link has been resent to your email.");
            } else {
                setError("Failed to resend the verification link. Please try again.");
                toast.error("Failed to resend the verification link. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
                <CheckCircle
                    className="success-icon text-[#2e3192] h-16 w-16 mx-auto"
                    size={64}
                />
                <h1 className="success-text text-2xl font-semibold mt-4 text-green-700">
                    Registration Successful!
                </h1>
                <p className="success-text text-base text-gray-600 mt-2">
                    Please check your email and verify your account by clicking on the "Verify" button.
                </p>
                <p className="success-text text-base text-gray-600 mt-2 font-bold">
                    {userEmail}
                </p>
                <p className="success-text text-base text-gray-600 mt-2">
                    Please also check your spam folder if the email is not in your inbox.
                </p>
                {error && <p className="text-red-600 mt-2">{error}</p>}
                <div className="mt-6 space-y-4">
                    <Button
                        className="w-full bg-[#2e3192] hover:bg-green-600"
                        onClick={goToLogin}
                    >
                        Go to Login
                    </Button>

                    <Button
                        className="w-full bg-[#2e3192] hover:bg-green-600"
                        onClick={handleResendLink}
                        disabled={loading}
                    >
                        {loading ? "Resending..." : "Resend Verification Link"}
                    </Button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
