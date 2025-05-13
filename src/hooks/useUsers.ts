import { useEffect, useState } from "react";
import { getUser } from "../api/userApi";
import { useUserStore } from "../store";

export const useUser = () => {
  const [error, setError] = useState<string | null>(null);

  const loading = useUserStore((state) => state.isLoadingUser);
  const setLoading = useUserStore((state) => state.setIsLoadingUser);
  const setName = useUserStore((state) => state.setName);
  const setLastName = useUserStore((state) => state.setLastName);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
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
