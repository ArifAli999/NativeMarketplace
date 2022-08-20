import create from 'zustand'
import { persist } from 'zustand/middleware';
import { AsyncStorage } from 'react-native';
import omit from 'lodash/omit';

const authStore = (set) => ({
    userProfile: null,
    userDetails: null,
    userCart: null,
    cartCount: 0,
    formState: [null],
    addUserDets: (user) => set({ userDetails: user }),
    addUser: (user) => set({ userProfile: user }),
    addToCart: (cart) => set({ userCart: cart }),
    setCartCount: (count) => set({ cartCount: count }),
    deleteCart: () => set((state) => omit(state, ['cart']), true),
    //deleteFormState: () => set((state) => omit(state, ['formState']), true),
    addToForm: (data) => {
        set(state => ({
            formState: [...state.formState, data]
        }));
    }
})




const useAuthStore = create(
    persist(authStore, {
        name: 'auth',
        getStorage: () => AsyncStorage,
    })
)

export default useAuthStore;
