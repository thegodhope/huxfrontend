"use client";

import React from "react";
import Container from "./reusable-components/container";
import Label from "./reusable-components/label";
import Input from "./reusable-components/input";
import Button from "./reusable-components/button";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";
import axios from "axios";

import { baseUrl } from "../apiurl";

const LoginPage = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(e.target); // Get form data

    const userData = {
      email: formData.get("email"),
      confirm_password: formData.get("confirm_password"),
    };

    try {
      const response = await axios.post(`${baseUrl}/users/login`, userData);
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login failed");
    }
  };
  return (
    <Container className=" py-12 px-4">
      <div className="py-2"></div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className=" space-y-4 max-w-2xl mx-auto"
      >
        <Button size="sm" variant="primary" href="/">
          <MdKeyboardBackspace size={28} className=" text-white " />
        </Button>
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            inputSize="md"
            placeholder="youremail@example.com"
            className="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="confirm_password">Confirm password</Label>
          <Input
            type="text"
            name="confirm_password"
            id="confirm_password"
            inputSize="md"
            placeholder="Confirm password"
            className="w-full mt-2"
            required
          />
        </div>

        <p className="pb-4 flex justify-end">
          Don't have an account?{" "}
          <Link
            href={"/signup"}
            className=" text-gray-500 font-bold mx-1 hover:underline"
          >
            Create an account
          </Link>
        </p>
        <div className="flex justify-center">
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginPage;
