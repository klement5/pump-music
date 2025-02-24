/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAddressValidityVerification,
  IAddressValidityVerificationInterface,
} from "../../../../@flarenetwork/flare-periphery-contracts/coston2/IAddressValidityVerification";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "merkleProof",
            type: "bytes32[]",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "attestationType",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "sourceId",
                type: "bytes32",
              },
              {
                internalType: "uint64",
                name: "votingRound",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "lowestUsedTimestamp",
                type: "uint64",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "addressStr",
                    type: "string",
                  },
                ],
                internalType: "struct IAddressValidity.RequestBody",
                name: "requestBody",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "isValid",
                    type: "bool",
                  },
                  {
                    internalType: "string",
                    name: "standardAddress",
                    type: "string",
                  },
                  {
                    internalType: "bytes32",
                    name: "standardAddressHash",
                    type: "bytes32",
                  },
                ],
                internalType: "struct IAddressValidity.ResponseBody",
                name: "responseBody",
                type: "tuple",
              },
            ],
            internalType: "struct IAddressValidity.Response",
            name: "data",
            type: "tuple",
          },
        ],
        internalType: "struct IAddressValidity.Proof",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "verifyAddressValidity",
    outputs: [
      {
        internalType: "bool",
        name: "_proved",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAddressValidityVerification__factory {
  static readonly abi = _abi;
  static createInterface(): IAddressValidityVerificationInterface {
    return new Interface(_abi) as IAddressValidityVerificationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAddressValidityVerification {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IAddressValidityVerification;
  }
}
