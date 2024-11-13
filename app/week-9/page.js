"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
    const router = useRouter();
    const { user, loading, error, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (err) {
            console.error("Sign-in error:", err);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (err) {
            console.error("Sign-out error:", err);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    };

    if (error) {
        return <p>Error: {error.message}</p>;
    };

    const handleContinue = () => {
        router.push('/week-9/shopping-list')
      };

    return (
        <div>
            {user ? (
                <>
                    <p>Signed in as {user.displayName} ({user.email})</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <p><button onClick={handleContinue}>Continue to your Shopping List</button></p>
                </>
            ) : (
                <button onClick={handleSignIn}>Sign in with GitHub</button>
            )
            }
        </div>
    );
};

export default UserInfo;
