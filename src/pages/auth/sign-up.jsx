import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ethers } from "ethers";
import { useState } from "react";

export function SignUp() {
  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount() {
    console.log("Requesting account...");

    // ❌ Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/68/Defence_Research_and_Development_Organisation_Logo.png"
            className="mx-auto mt-10 h-20 w-20"
          ></img>
          <CardBody className="flex flex-col gap-4">
            {" "}
            <div className="mx-auto flex gap-1">
              <Button variant="outlined">Creator</Button>
              <Button variant="outlined">Shipper</Button>
              <Button variant="outlined">Client</Button>
            </div>
            <Input label="Name" size="lg" />
            <Input type="email" label="Email" size="lg" />
            <Input type="password" label="Password" size="lg" />
            <Button variant="outlined" onClick={requestAccount}>
              {walletAddress
                ? `${walletAddress.slice(0, 5)}...${walletAddress.slice(5, 10)}`
                : "Connect Metamask"}
            </Button>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
