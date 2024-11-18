import { AuthError, AuthTokenResponsePassword, Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

type AuthContextType = {
    user?: User | null;
    signIn: (email: string, password: string) => Promise<AuthTokenResponsePassword>;
    signOut: () => Promise<{ error: AuthError | null }>;
}

const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null);
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
            setSession(null);
        }
        return response;
    };

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setUser(session?.user || null);
                setLoading(false);
            }
        );
        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={{
        user,
        signIn,
        signOut
    }}>
        {loading ? <h1>loading</h1> : children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}