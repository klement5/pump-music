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

export interface IGenericRewardManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "active"
      | "allowedClaimRecipients"
      | "claim"
      | "claimExecutors"
      | "getStateOfRewards"
      | "setAllowedClaimRecipients"
      | "setClaimExecutors"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllowedClaimRecipientsChanged"
      | "ClaimExecutorsChanged"
      | "RewardClaimed"
      | "RewardManagerActivated"
      | "RewardManagerDeactivated"
      | "RewardsDistributed"
  ): EventFragment;

  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowedClaimRecipients",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "claimExecutors",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStateOfRewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowedClaimRecipients",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimExecutors",
    values: [AddressLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedClaimRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimExecutors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStateOfRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowedClaimRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimExecutors",
    data: BytesLike
  ): Result;
}

export namespace AllowedClaimRecipientsChangedEvent {
  export type InputTuple = [
    rewardOwner: AddressLike,
    recipients: AddressLike[]
  ];
  export type OutputTuple = [rewardOwner: string, recipients: string[]];
  export interface OutputObject {
    rewardOwner: string;
    recipients: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimExecutorsChangedEvent {
  export type InputTuple = [rewardOwner: AddressLike, executors: AddressLike[]];
  export type OutputTuple = [rewardOwner: string, executors: string[]];
  export interface OutputObject {
    rewardOwner: string;
    executors: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardClaimedEvent {
  export type InputTuple = [
    beneficiary: AddressLike,
    sentTo: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    beneficiary: string,
    sentTo: string,
    amount: bigint
  ];
  export interface OutputObject {
    beneficiary: string;
    sentTo: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardManagerActivatedEvent {
  export type InputTuple = [rewardManager: AddressLike];
  export type OutputTuple = [rewardManager: string];
  export interface OutputObject {
    rewardManager: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardManagerDeactivatedEvent {
  export type InputTuple = [rewardManager: AddressLike];
  export type OutputTuple = [rewardManager: string];
  export interface OutputObject {
    rewardManager: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsDistributedEvent {
  export type InputTuple = [addresses: AddressLike[], rewards: BigNumberish[]];
  export type OutputTuple = [addresses: string[], rewards: bigint[]];
  export interface OutputObject {
    addresses: string[];
    rewards: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IGenericRewardManager extends BaseContract {
  connect(runner?: ContractRunner | null): IGenericRewardManager;
  waitForDeployment(): Promise<this>;

  interface: IGenericRewardManagerInterface;

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

  active: TypedContractMethod<[], [boolean], "view">;

  allowedClaimRecipients: TypedContractMethod<
    [_rewardOwner: AddressLike],
    [string[]],
    "view"
  >;

  claim: TypedContractMethod<
    [
      _rewardOwner: AddressLike,
      _recipient: AddressLike,
      _rewardAmount: BigNumberish,
      _wrap: boolean
    ],
    [void],
    "nonpayable"
  >;

  claimExecutors: TypedContractMethod<
    [_rewardOwner: AddressLike],
    [string[]],
    "view"
  >;

  getStateOfRewards: TypedContractMethod<
    [_beneficiary: AddressLike],
    [[bigint, bigint] & { _totalReward: bigint; _claimedReward: bigint }],
    "view"
  >;

  setAllowedClaimRecipients: TypedContractMethod<
    [_recipients: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setClaimExecutors: TypedContractMethod<
    [_executors: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "active"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "allowedClaimRecipients"
  ): TypedContractMethod<[_rewardOwner: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [
      _rewardOwner: AddressLike,
      _recipient: AddressLike,
      _rewardAmount: BigNumberish,
      _wrap: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimExecutors"
  ): TypedContractMethod<[_rewardOwner: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getStateOfRewards"
  ): TypedContractMethod<
    [_beneficiary: AddressLike],
    [[bigint, bigint] & { _totalReward: bigint; _claimedReward: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "setAllowedClaimRecipients"
  ): TypedContractMethod<[_recipients: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setClaimExecutors"
  ): TypedContractMethod<[_executors: AddressLike[]], [void], "nonpayable">;

  getEvent(
    key: "AllowedClaimRecipientsChanged"
  ): TypedContractEvent<
    AllowedClaimRecipientsChangedEvent.InputTuple,
    AllowedClaimRecipientsChangedEvent.OutputTuple,
    AllowedClaimRecipientsChangedEvent.OutputObject
  >;
  getEvent(
    key: "ClaimExecutorsChanged"
  ): TypedContractEvent<
    ClaimExecutorsChangedEvent.InputTuple,
    ClaimExecutorsChangedEvent.OutputTuple,
    ClaimExecutorsChangedEvent.OutputObject
  >;
  getEvent(
    key: "RewardClaimed"
  ): TypedContractEvent<
    RewardClaimedEvent.InputTuple,
    RewardClaimedEvent.OutputTuple,
    RewardClaimedEvent.OutputObject
  >;
  getEvent(
    key: "RewardManagerActivated"
  ): TypedContractEvent<
    RewardManagerActivatedEvent.InputTuple,
    RewardManagerActivatedEvent.OutputTuple,
    RewardManagerActivatedEvent.OutputObject
  >;
  getEvent(
    key: "RewardManagerDeactivated"
  ): TypedContractEvent<
    RewardManagerDeactivatedEvent.InputTuple,
    RewardManagerDeactivatedEvent.OutputTuple,
    RewardManagerDeactivatedEvent.OutputObject
  >;
  getEvent(
    key: "RewardsDistributed"
  ): TypedContractEvent<
    RewardsDistributedEvent.InputTuple,
    RewardsDistributedEvent.OutputTuple,
    RewardsDistributedEvent.OutputObject
  >;

  filters: {
    "AllowedClaimRecipientsChanged(address,address[])": TypedContractEvent<
      AllowedClaimRecipientsChangedEvent.InputTuple,
      AllowedClaimRecipientsChangedEvent.OutputTuple,
      AllowedClaimRecipientsChangedEvent.OutputObject
    >;
    AllowedClaimRecipientsChanged: TypedContractEvent<
      AllowedClaimRecipientsChangedEvent.InputTuple,
      AllowedClaimRecipientsChangedEvent.OutputTuple,
      AllowedClaimRecipientsChangedEvent.OutputObject
    >;

    "ClaimExecutorsChanged(address,address[])": TypedContractEvent<
      ClaimExecutorsChangedEvent.InputTuple,
      ClaimExecutorsChangedEvent.OutputTuple,
      ClaimExecutorsChangedEvent.OutputObject
    >;
    ClaimExecutorsChanged: TypedContractEvent<
      ClaimExecutorsChangedEvent.InputTuple,
      ClaimExecutorsChangedEvent.OutputTuple,
      ClaimExecutorsChangedEvent.OutputObject
    >;

    "RewardClaimed(address,address,uint256)": TypedContractEvent<
      RewardClaimedEvent.InputTuple,
      RewardClaimedEvent.OutputTuple,
      RewardClaimedEvent.OutputObject
    >;
    RewardClaimed: TypedContractEvent<
      RewardClaimedEvent.InputTuple,
      RewardClaimedEvent.OutputTuple,
      RewardClaimedEvent.OutputObject
    >;

    "RewardManagerActivated(address)": TypedContractEvent<
      RewardManagerActivatedEvent.InputTuple,
      RewardManagerActivatedEvent.OutputTuple,
      RewardManagerActivatedEvent.OutputObject
    >;
    RewardManagerActivated: TypedContractEvent<
      RewardManagerActivatedEvent.InputTuple,
      RewardManagerActivatedEvent.OutputTuple,
      RewardManagerActivatedEvent.OutputObject
    >;

    "RewardManagerDeactivated(address)": TypedContractEvent<
      RewardManagerDeactivatedEvent.InputTuple,
      RewardManagerDeactivatedEvent.OutputTuple,
      RewardManagerDeactivatedEvent.OutputObject
    >;
    RewardManagerDeactivated: TypedContractEvent<
      RewardManagerDeactivatedEvent.InputTuple,
      RewardManagerDeactivatedEvent.OutputTuple,
      RewardManagerDeactivatedEvent.OutputObject
    >;

    "RewardsDistributed(address[],uint256[])": TypedContractEvent<
      RewardsDistributedEvent.InputTuple,
      RewardsDistributedEvent.OutputTuple,
      RewardsDistributedEvent.OutputObject
    >;
    RewardsDistributed: TypedContractEvent<
      RewardsDistributedEvent.InputTuple,
      RewardsDistributedEvent.OutputTuple,
      RewardsDistributedEvent.OutputObject
    >;
  };
}
