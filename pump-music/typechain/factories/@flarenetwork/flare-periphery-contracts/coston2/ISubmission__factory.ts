/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISubmission,
  ISubmissionInterface,
} from "../../../../@flarenetwork/flare-periphery-contracts/coston2/ISubmission";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "NewVotingRoundInitiated",
    type: "event",
  },
  {
    inputs: [],
    name: "getCurrentRandom",
    outputs: [
      {
        internalType: "uint256",
        name: "_randomNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentRandomWithQuality",
    outputs: [
      {
        internalType: "uint256",
        name: "_randomNumber",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isSecureRandom",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentRandomWithQualityAndTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "_randomNumber",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isSecureRandom",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_randomTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "submit1",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "submit2",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "submit3",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "submitAndPass",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "submitSignatures",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISubmission__factory {
  static readonly abi = _abi;
  static createInterface(): ISubmissionInterface {
    return new Interface(_abi) as ISubmissionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ISubmission {
    return new Contract(address, _abi, runner) as unknown as ISubmission;
  }
}
