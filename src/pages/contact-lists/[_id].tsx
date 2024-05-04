"use client";
import { useRouter } from "next/router";
import React from "react";
import { contactLists } from "../mock-data/contactlists";
import Button from "../reusable-components/button";
import { MdKeyboardBackspace } from "react-icons/md";

const ContactDetailsPage = () => {
  const router = useRouter();
  const { _id } = router.query;
  if (!router.query || !_id) {
    return null;
  }

  const getSingleContact = contactLists.find((contact) => contact?._id === _id);

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <Button size="sm" variant="primary" href="/contact-lists">
        <MdKeyboardBackspace size={28} className=" text-white " />
      </Button>
      <h1 className="text-center font-bold text-4xl">Contact details page</h1>

      <div className=" mt-8 border p-8 border-red-200 flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl">
          {getSingleContact?.firstName} {getSingleContact?.lastName}
        </p>
        <p className="">{getSingleContact?.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
