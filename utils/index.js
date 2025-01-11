import { ethers } from "ethers";
import Legit from "./Legit.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xd067Fa9D9Ebe40e78Ab0B91d85bc4976f6448908",
      Legit.abi,
      signer
    );

    return contractReader;
  }
};