import { useEffect, useState } from "react";
import { getUser } from "../api/userApi";
import type { User } from "../types";
import { useUserStore } from "../store";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setName = useUserStore((state) => state.setName);
  const setLastName = useUserStore((state) => state.setLastName);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
        setName(data.name);
        setLastName(data.lastName);
      } catch (err) {
        setError("Error fetching user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};
