"use client";
import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import Button from "../reusable-components/button";
import EditContactForm from "../editContactForm";
import Modal from "../reusable-components/modal";
import { contactLists } from "../mock-data/contactlists";
import Link from "next/link";

export type ContactProps = {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const ContactLists = () => {
  const [contacts, setContacts] = useState<ContactProps[]>(contactLists);
  const [getContact, setGetContact] = useState<ContactProps | undefined>();
  const [showModal, setShowModal] = useState<boolean>(false);

  // Function to delete a contact from the contactList
  const handleDelete = (_id: string) => {
    const removeList = contacts.filter((item) => item._id !== _id);
    setContacts(removeList);
  };

  //   Function to edit uploaded contact
  const handleEditContact = (_id: string) => {
    const editContact = contacts.find((item) => item._id === _id);
    setGetContact(editContact);
    setShowModal(!showModal);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-center font-bold text-4xl">Contact Lists</h1>
      <div className="mt-5 flex justify-end">
        <Button size="md" variant="primary" href="/create-contact">
          Create contact
        </Button>
      </div>
      <ul className="mt-5 space-y-4">
        {/* dynamically rendering all contact lists */}
        {contacts.map((list, index) => (
          <li
            key={index}
            className="flex justify-between border border-red-200 rounded-xl p-4 md:p-6"
          >
            <div>
              <p className="font-semibold text-xl hover:underline">
                <Link href={`/contact-lists/${list?._id}`}>
                  {list?.firstName} {list?.lastName}
                </Link>
              </p>
              <p className="">{list?.phoneNumber}</p>
            </div>
            <div className="flex items-center gap-6">
              <RiDeleteBin7Line
                size={24}
                className="text-red-800 cursor-pointer"
                onClick={() => handleDelete(String(list?._id))}
              />
              <FiEdit3
                size={24}
                className=" cursor-pointer"
                onClick={() => handleEditContact(String(list?._id))}
              />
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal isOpen={showModal} dismissModal={() => setShowModal(false)}>
          <EditContactForm
            phoneNumber={getContact?.phoneNumber}
            firstName={getContact?.firstName}
            lastName={getContact?.lastName}
          />
        </Modal>
      )}
    </div>
  );
};

export default ContactLists;
