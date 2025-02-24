/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface IIVPContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchVotePowerOfAt"
      | "cleanupBlockNumber"
      | "delegate"
      | "delegateExplicit"
      | "delegatesOf"
      | "delegatesOfAt"
      | "delegationModeOf"
      | "isReplacement"
      | "ownerToken"
      | "revokeDelegationAt"
      | "setCleanerContract"
      | "setCleanupBlockNumber"
      | "undelegateAll"
      | "undelegateAllExplicit"
      | "undelegatedVotePowerOf"
      | "undelegatedVotePowerOfAt"
      | "updateAtTokenTransfer"
      | "votePowerFromTo"
      | "votePowerFromToAt"
      | "votePowerOf"
      | "votePowerOfAt"
      | "votePowerOfAtCached"
      | "votePowerOfAtIgnoringRevocation"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Delegate" | "Revoke"): EventFragment;

  encodeFunctionData(
    functionFragment: "batchVotePowerOfAt",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cleanupBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegate",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateExplicit",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delegatesOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegatesOfAt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delegationModeOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReplacement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeDelegationAt",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCleanerContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCleanupBlockNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "undelegateAll",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "undelegateAllExplicit",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "undelegatedVotePowerOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "undelegatedVotePowerOfAt",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAtTokenTransfer",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votePowerFromTo",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votePowerFromToAt",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votePowerOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "votePowerOfAt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votePowerOfAtCached",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votePowerOfAtIgnoringRevocation",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchVotePowerOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cleanupBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateExplicit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegatesOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegatesOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationModeOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReplacement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeDelegationAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCleanerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCleanupBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "undelegateAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "undelegateAllExplicit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "undelegatedVotePowerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "undelegatedVotePowerOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAtTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votePowerFromTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votePowerFromToAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votePowerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votePowerOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votePowerOfAtCached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votePowerOfAtIgnoringRevocation",
    data: BytesLike
  ): Result;
}

export namespace DelegateEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    priorVotePower: BigNumberish,
    newVotePower: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    priorVotePower: bigint,
    newVotePower: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    priorVotePower: bigint;
    newVotePower: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevokeEvent {
  export type InputTuple = [
    delegator: AddressLike,
    delegatee: AddressLike,
    votePower: BigNumberish,
    blockNumber: BigNumberish
  ];
  export type OutputTuple = [
    delegator: string,
    delegatee: string,
    votePower: bigint,
    blockNumber: bigint
  ];
  export interface OutputObject {
    delegator: string;
    delegatee: string;
    votePower: bigint;
    blockNumber: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IIVPContract extends BaseContract {
  connect(runner?: ContractRunner | null): IIVPContract;
  waitForDeployment(): Promise<this>;

  interface: IIVPContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  batchVotePowerOfAt: TypedContractMethod<
    [_owners: AddressLike[], _blockNumber: BigNumberish],
    [bigint[]],
    "view"
  >;

  cleanupBlockNumber: TypedContractMethod<[], [bigint], "view">;

  delegate: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _balance: BigNumberish,
      _bips: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  delegateExplicit: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _balance: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  delegatesOf: TypedContractMethod<
    [_owner: AddressLike],
    [
      [string[], bigint[], bigint, bigint] & {
        _delegateAddresses: string[];
        _bips: bigint[];
        _count: bigint;
        _delegationMode: bigint;
      }
    ],
    "view"
  >;

  delegatesOfAt: TypedContractMethod<
    [_owner: AddressLike, _blockNumber: BigNumberish],
    [
      [string[], bigint[], bigint, bigint] & {
        _delegateAddresses: string[];
        _bips: bigint[];
        _count: bigint;
        _delegationMode: bigint;
      }
    ],
    "view"
  >;

  delegationModeOf: TypedContractMethod<[_who: AddressLike], [bigint], "view">;

  isReplacement: TypedContractMethod<[], [boolean], "view">;

  ownerToken: TypedContractMethod<[], [string], "view">;

  revokeDelegationAt: TypedContractMethod<
    [
      _from: AddressLike,
      _who: AddressLike,
      _balance: BigNumberish,
      _blockNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setCleanerContract: TypedContractMethod<
    [_cleanerContract: AddressLike],
    [void],
    "nonpayable"
  >;

  setCleanupBlockNumber: TypedContractMethod<
    [_blockNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  undelegateAll: TypedContractMethod<
    [_from: AddressLike, _balance: BigNumberish],
    [void],
    "nonpayable"
  >;

  undelegateAllExplicit: TypedContractMethod<
    [_from: AddressLike, _delegateAddresses: AddressLike[]],
    [bigint],
    "nonpayable"
  >;

  undelegatedVotePowerOf: TypedContractMethod<
    [_owner: AddressLike, _balance: BigNumberish],
    [bigint],
    "view"
  >;

  undelegatedVotePowerOfAt: TypedContractMethod<
    [_owner: AddressLike, _balance: BigNumberish, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  updateAtTokenTransfer: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _fromBalance: BigNumberish,
      _toBalance: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  votePowerFromTo: TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _balance: BigNumberish],
    [bigint],
    "view"
  >;

  votePowerFromToAt: TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _balance: BigNumberish,
      _blockNumber: BigNumberish
    ],
    [bigint],
    "view"
  >;

  votePowerOf: TypedContractMethod<[_who: AddressLike], [bigint], "view">;

  votePowerOfAt: TypedContractMethod<
    [_who: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  votePowerOfAtCached: TypedContractMethod<
    [_who: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  votePowerOfAtIgnoringRevocation: TypedContractMethod<
    [_who: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchVotePowerOfAt"
  ): TypedContractMethod<
    [_owners: AddressLike[], _blockNumber: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "cleanupBlockNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "delegate"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _balance: BigNumberish,
      _bips: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delegateExplicit"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _balance: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delegatesOf"
  ): TypedContractMethod<
    [_owner: AddressLike],
    [
      [string[], bigint[], bigint, bigint] & {
        _delegateAddresses: string[];
        _bips: bigint[];
        _count: bigint;
        _delegationMode: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "delegatesOfAt"
  ): TypedContractMethod<
    [_owner: AddressLike, _blockNumber: BigNumberish],
    [
      [string[], bigint[], bigint, bigint] & {
        _delegateAddresses: string[];
        _bips: bigint[];
        _count: bigint;
        _delegationMode: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "delegationModeOf"
  ): TypedContractMethod<[_who: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "isReplacement"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "ownerToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "revokeDelegationAt"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _who: AddressLike,
      _balance: BigNumberish,
      _blockNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCleanerContract"
  ): TypedContractMethod<[_cleanerContract: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCleanupBlockNumber"
  ): TypedContractMethod<[_blockNumber: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "undelegateAll"
  ): TypedContractMethod<
    [_from: AddressLike, _balance: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "undelegateAllExplicit"
  ): TypedContractMethod<
    [_from: AddressLike, _delegateAddresses: AddressLike[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "undelegatedVotePowerOf"
  ): TypedContractMethod<
    [_owner: AddressLike, _balance: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "undelegatedVotePowerOfAt"
  ): TypedContractMethod<
    [_owner: AddressLike, _balance: BigNumberish, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "updateAtTokenTransfer"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _fromBalance: BigNumberish,
      _toBalance: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "votePowerFromTo"
  ): TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _balance: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "votePowerFromToAt"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _to: AddressLike,
      _balance: BigNumberish,
      _blockNumber: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "votePowerOf"
  ): TypedContractMethod<[_who: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "votePowerOfAt"
  ): TypedContractMethod<
    [_who: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "votePowerOfAtCached"
  ): TypedContractMethod<
    [_who: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "votePowerOfAtIgnoringRevocation"
  ): TypedContractMethod<
    [_who: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  getEvent(
    key: "Delegate"
  ): TypedContractEvent<
    DelegateEvent.InputTuple,
    DelegateEvent.OutputTuple,
    DelegateEvent.OutputObject
  >;
  getEvent(
    key: "Revoke"
  ): TypedContractEvent<
    RevokeEvent.InputTuple,
    RevokeEvent.OutputTuple,
    RevokeEvent.OutputObject
  >;

  filters: {
    "Delegate(address,address,uint256,uint256)": TypedContractEvent<
      DelegateEvent.InputTuple,
      DelegateEvent.OutputTuple,
      DelegateEvent.OutputObject
    >;
    Delegate: TypedContractEvent<
      DelegateEvent.InputTuple,
      DelegateEvent.OutputTuple,
      DelegateEvent.OutputObject
    >;

    "Revoke(address,address,uint256,uint256)": TypedContractEvent<
      RevokeEvent.InputTuple,
      RevokeEvent.OutputTuple,
      RevokeEvent.OutputObject
    >;
    Revoke: TypedContractEvent<
      RevokeEvent.InputTuple,
      RevokeEvent.OutputTuple,
      RevokeEvent.OutputObject
    >;
  };
}
