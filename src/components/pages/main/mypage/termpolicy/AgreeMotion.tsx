'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

function AgreeMotion({
  agree,
  handleToggle,
}: {
  agree: boolean;
  handleToggle: () => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = () => {
    if (agree) {
      setIsModalOpen(true);
    } else {
      handleToggle();
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    handleToggle();
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleModal}
        className={`flex h-7 w-12 rounded-full ${!agree ? 'justify-start bg-slate-200' : 'justify-end bg-starbucks-green'} p-1`}
      >
        <motion.p
          className={'h-5 w-5 rounded-full bg-white'}
          layout
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 100,
          }}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default AgreeMotion;
