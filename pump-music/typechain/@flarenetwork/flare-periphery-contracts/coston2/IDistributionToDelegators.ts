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
} from "../../../common";

export interface IDistributionToDelegatorsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "autoClaim"
      | "claim"
      | "getClaimableAmount"
      | "getClaimableAmountOf"
      | "getClaimableMonths"
      | "getCurrentMonth"
      | "getMonthToExpireNext"
      | "nextClaimableMonth"
      | "optOutOfAirdrop"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AccountClaimed"
      | "AccountOptOut"
      | "EntitlementStart"
      | "UseGoodRandomSet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "autoClaim",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableAmountOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableMonths",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentMonth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMonthToExpireNext",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextClaimableMonth",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "optOutOfAirdrop",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "autoClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableMonths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentMonth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMonthToExpireNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextClaimableMonth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optOutOfAirdrop",
    data: BytesLike
  ): Result;
}

export namespace AccountClaimedEvent {
  export type InputTuple = [
    whoClaimed: AddressLike,
    sentTo: AddressLike,
    month: BigNumberish,
    amountWei: BigNumberish
  ];
  export type OutputTuple = [
    whoClaimed: string,
    sentTo: string,
    month: bigint,
    amountWei: bigint
  ];
  export interface OutputObject {
    whoClaimed: string;
    sentTo: string;
    month: bigint;
    amountWei: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AccountOptOutEvent {
  export type InputTuple = [theAccount: AddressLike, confirmed: boolean];
  export type OutputTuple = [theAccount: string, confirmed: boolean];
  export interface OutputObject {
    theAccount: string;
    confirmed: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EntitlementStartEvent {
  export type InputTuple = [entitlementStartTs: BigNumberish];
  export type OutputTuple = [entitlementStartTs: bigint];
  export interface OutputObject {
    entitlementStartTs: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UseGoodRandomSetEvent {
  export type InputTuple = [
    useGoodRandom: boolean,
    maxWaitForGoodRandomSeconds: BigNumberish
  ];
  export type OutputTuple = [
    useGoodRandom: boolean,
    maxWaitForGoodRandomSeconds: bigint
  ];
  export interface OutputObject {
    useGoodRandom: boolean;
    maxWaitForGoodRandomSeconds: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IDistributionToDelegators extends BaseContract {
  connect(runner?: ContractRunner | null): IDistributionToDelegators;
  waitForDeployment(): Promise<this>;

  interface: IDistributionToDelegatorsInterface;

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

  autoClaim: TypedContractMethod<
    [_rewardOwners: AddressLike[], _month: BigNumberish],
    [void],
    "nonpayable"
  >;

  claim: TypedContractMethod<
    [
      _rewardOwner: AddressLike,
      _recipient: AddressLike,
      _month: BigNumberish,
      _wrap: boolean
    ],
    [bigint],
    "nonpayable"
  >;

  getClaimableAmount: TypedContractMethod<
    [_month: BigNumberish],
    [bigint],
    "view"
  >;

  getClaimableAmountOf: TypedContractMethod<
    [_account: AddressLike, _month: BigNumberish],
    [bigint],
    "view"
  >;

  getClaimableMonths: TypedContractMethod<
    [],
    [[bigint, bigint] & { _startMonth: bigint; _endMonth: bigint }],
    "view"
  >;

  getCurrentMonth: TypedContractMethod<[], [bigint], "view">;

  getMonthToExpireNext: TypedContractMethod<[], [bigint], "view">;

  nextClaimableMonth: TypedContractMethod<
    [_rewardOwner: AddressLike],
    [bigint],
    "view"
  >;

  optOutOfAirdrop: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "autoClaim"
  ): TypedContractMethod<
    [_rewardOwners: AddressLike[], _month: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [
      _rewardOwner: AddressLike,
      _recipient: AddressLike,
      _month: BigNumberish,
      _wrap: boolean
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getClaimableAmount"
  ): TypedContractMethod<[_month: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getClaimableAmountOf"
  ): TypedContractMethod<
    [_account: AddressLike, _month: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getClaimableMonths"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { _startMonth: bigint; _endMonth: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentMonth"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMonthToExpireNext"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextClaimableMonth"
  ): TypedContractMethod<[_rewardOwner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "optOutOfAirdrop"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "AccountClaimed"
  ): TypedContractEvent<
    AccountClaimedEvent.InputTuple,
    AccountClaimedEvent.OutputTuple,
    AccountClaimedEvent.OutputObject
  >;
  getEvent(
    key: "AccountOptOut"
  ): TypedContractEvent<
    AccountOptOutEvent.InputTuple,
    AccountOptOutEvent.OutputTuple,
    AccountOptOutEvent.OutputObject
  >;
  getEvent(
    key: "EntitlementStart"
  ): TypedContractEvent<
    EntitlementStartEvent.InputTuple,
    EntitlementStartEvent.OutputTuple,
    EntitlementStartEvent.OutputObject
  >;
  getEvent(
    key: "UseGoodRandomSet"
  ): TypedContractEvent<
    UseGoodRandomSetEvent.InputTuple,
    UseGoodRandomSetEvent.OutputTuple,
    UseGoodRandomSetEvent.OutputObject
  >;

  filters: {
    "AccountClaimed(address,address,uint256,uint256)": TypedContractEvent<
      AccountClaimedEvent.InputTuple,
      AccountClaimedEvent.OutputTuple,
      AccountClaimedEvent.OutputObject
    >;
    AccountClaimed: TypedContractEvent<
      AccountClaimedEvent.InputTuple,
      AccountClaimedEvent.OutputTuple,
      AccountClaimedEvent.OutputObject
    >;

    "AccountOptOut(address,bool)": TypedContractEvent<
      AccountOptOutEvent.InputTuple,
      AccountOptOutEvent.OutputTuple,
      AccountOptOutEvent.OutputObject
    >;
    AccountOptOut: TypedContractEvent<
      AccountOptOutEvent.InputTuple,
      AccountOptOutEvent.OutputTuple,
      AccountOptOutEvent.OutputObject
    >;

    "EntitlementStart(uint256)": TypedContractEvent<
      EntitlementStartEvent.InputTuple,
      EntitlementStartEvent.OutputTuple,
      EntitlementStartEvent.OutputObject
    >;
    EntitlementStart: TypedContractEvent<
      EntitlementStartEvent.InputTuple,
      EntitlementStartEvent.OutputTuple,
      EntitlementStartEvent.OutputObject
    >;

    "UseGoodRandomSet(bool,uint256)": TypedContractEvent<
      UseGoodRandomSetEvent.InputTuple,
      UseGoodRandomSetEvent.OutputTuple,
      UseGoodRandomSetEvent.OutputObject
    >;
    UseGoodRandomSet: TypedContractEvent<
      UseGoodRandomSetEvent.InputTuple,
      UseGoodRandomSetEvent.OutputTuple,
      UseGoodRandomSetEvent.OutputObject
    >;
  };
}
