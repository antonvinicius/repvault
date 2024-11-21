import { AuthError, AuthTokenResponsePassword, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Loading } from "../components/Loading";

type AuthContextType = {
    user?: User | null;
    signIn: (email: string, password: string) => Promise<AuthTokenResponsePassword>;
    signOut: () => Promise<{ error: AuthError | null }>;
    uploadProfilePicture: (file: File) => Promise<string>;
    userPicture: string | null
}

const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null)
    const [userPicture, setUserPicture] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    const signIn = async (email: string, password: string) => {
        const response = await supabase.auth.signInWithPassword({
            email,
            password
        });

        return response;
    };

    const signOut = async () => {
        const response = await supabase.auth.signOut();
        if (!response.error) {
            setUser(null);
            setUserPicture(null)
        }
        return response;
    };

    const uploadProfilePicture = async (file: File) => {
        await supabase.storage
            .from("usersbucket")
            .upload(`profile_pictures/${user?.id}.png`, file, { upsert: true })

        const { data: publicUrlData } = supabase.storage
            .from("usersbucket")
            .getPublicUrl(`profile_pictures/${user?.id}.png`);

        setUserPicture(`${publicUrlData.publicUrl}?timestamp=${new Date().getTime()}`)

        return publicUrlData.publicUrl
    }

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user || null);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        );
        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    async function loadProfilePicture() {
        const { data: publicUrlData } = supabase.storage
            .from("usersbucket")
            .getPublicUrl(`profile_pictures/${user?.id}.png`);

        console.log(publicUrlData.publicUrl)

        setUserPicture(`${publicUrlData.publicUrl}?timestamp=${new Date().getTime()}`)
    }

    useEffect(() => {
        if (user) {
            loadProfilePicture()
        }
    }, [user])

    return <AuthContext.Provider value={{
        user,
        signIn,
        signOut,
        uploadProfilePicture,
        userPicture
    }}>
        {loading ? <Loading /> : children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}