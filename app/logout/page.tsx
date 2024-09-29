// app/logout/page.tsx
"use client"; // Make sure this is at the top of the file

import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Logout: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const logoutUser = async () => {
            const session = localStorage.getItem('userSession');
            if (!session) {
                router.push('/'); // Redirect to home if no session found
                return;
            }

            const { session_id } = JSON.parse(session);

            try {
                const response = await axios.post("http://localhost:5000/logout", { session_id });

                // On successful logout, remove user session from local storage
                localStorage.removeItem('userSession');
                localStorage.clear();
                console.log(response.data.message); // Show logout message
                router.push('/'); // Redirect to home
            } catch (error) {
                console.log("Error logging out. Please try again."); // Handle error
            }
        };

        logoutUser();
    }, [router]);

    return (
        <div className="flex justify-center items-center h-1/2">
            <h1 className="text-2xl">Logging out...</h1>
        </div>
    );
};

export default Logout;
