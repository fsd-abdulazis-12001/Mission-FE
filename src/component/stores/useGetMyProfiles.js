import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGetMyProfilesStore = create(
  persist(
    (set) => ({
      profiles: {
        id: 0, 
        email: "", 
        name: "",
        profileImage: "",
      },
      setProfiles: ( data) =>
        set((state) => ({
          profiles: { ...state.profiles, ...data},
        })),
    }),
    {
      name: 'profile-storage', 
      getStorage: () => localStorage,
    }
  )
);

export default useGetMyProfilesStore;
