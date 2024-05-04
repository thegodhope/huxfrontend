"use client";
import React, { useCallback, useState } from "react";
import Container from "./reusable-components/container";
import Label from "./reusable-components/label";
import Input from "./reusable-components/input";
import Button from "./reusable-components/button";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../apiurl";

const CreateContact = () => {
  const [getContactValues, setGetContactValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setGetContactValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/contacts`, {
        firstName: getContactValues?.firstName,
        lastName: getContactValues?.lastName,
        phoneNumber: getContactValues?.phoneNumber,
      });
      console.log(response.data);
      if (response.status === 201) {
        // Add function to get the response to state
        router.push("/contact-lists");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container className="py-12 px-4">
      <div className="py-2"></div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className=" space-y-4 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center">Create Contact</h1>
        <div>
          <Label htmlFor="first_name">First name</Label>
          <Input
            type="text"
            name="firstName"
            id="first_name"
            inputSize="md"
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="last_name">Last name</Label>
          <Input
            type="text"
            name="lastName"
            id="last_name"
            inputSize="md"
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone_number">Phone number</Label>
          <Input
            type="number"
            name="phoneNumber"
            id="phone_number"
            inputSize="md"
            onChange={handleChange}
            placeholder="+234_____"
            className="w-full mt-2"
            required
          />
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateContact;
