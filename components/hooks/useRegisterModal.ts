import {create} from 'zustand';

interface RegisterModalProps{
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=>void;
}

const useRegisterModal=create<RegisterModalProps>((set)=>({
    isOpen: false, //initial value of isOpen
    onOpen: ()=>set({isOpen: true}),
    onClose: ()=>set({isOpen: false})
}))

export default useRegisterModal;