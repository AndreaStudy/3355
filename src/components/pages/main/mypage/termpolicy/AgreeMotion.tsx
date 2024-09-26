'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Modal from './Modal';

function AgreeMotion({ agree }: { agree: boolean }) {
  const [toggle, setToggle] = useState<boolean>(agree);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setToggle(agree);
  }, [agree]);

  const handleToggle = () => {
    if (toggle) {
      setIsModalOpen(true);
    } else {
      setToggle(true);
    }
  };

  const handleConfirm = () => {
    setToggle(false);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className={`flex h-7 w-12 rounded-full ${!toggle ? 'justify-start bg-slate-200' : 'justify-end bg-starbucks-green'} p-1`}
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
