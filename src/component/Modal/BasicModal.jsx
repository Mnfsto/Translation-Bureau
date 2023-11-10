"use client"
import { useRouter } from 'next/navigation'
import Modal from '@/component/Modal/Modal';

export default function BasicModal(){
    const router = useRouter()
    return(
        <Modal >
            <h1>Modal Title</h1>
            <p>Body</p>
            <button onClick={() =>  router.back()}>Close</button>
            <span onClose={() => setShowModal(flase)}>Close modal</span>
        </Modal>
    );
}