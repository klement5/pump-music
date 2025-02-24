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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace RewardsV2Interface {
  export type RewardClaimStruct = {
    rewardEpochId: BigNumberish;
    beneficiary: BytesLike;
    amount: BigNumberish;
    claimType: BigNumberish;
  };

  export type RewardClaimStructOutput = [
    rewardEpochId: bigint,
    beneficiary: string,
    amount: bigint,
    claimType: bigint
  ] & {
    rewardEpochId: bigint;
    beneficiary: string;
    amount: bigint;
    claimType: bigint;
  };

  export type RewardClaimWithProofStruct = {
    merkleProof: BytesLike[];
    body: RewardsV2Interface.RewardClaimStruct;
  };

  export type RewardClaimWithProofStructOutput = [
    merkleProof: string[],
    body: RewardsV2Interface.RewardClaimStructOutput
  ] & {
    merkleProof: string[];
    body: RewardsV2Interface.RewardClaimStructOutput;
  };

  export type RewardStateStruct = {
    rewardEpochId: BigNumberish;
    beneficiary: BytesLike;
    amount: BigNumberish;
    claimType: BigNumberish;
    initialised: boolean;
  };

  export type RewardStateStructOutput = [
    rewardEpochId: bigint,
    beneficiary: string,
    amount: bigint,
    claimType: bigint,
    initialised: boolean
  ] & {
    rewardEpochId: bigint;
    beneficiary: string;
    amount: bigint;
    claimType: bigint;
    initialised: boolean;
  };
}

export interface RewardsV2InterfaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "active"
      | "claim"
      | "getNextClaimableRewardEpochId"
      | "getRewardEpochIdsWithClaimableRewards"
      | "getStateOfRewards"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      boolean,
      RewardsV2Interface.RewardClaimWithProofStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextClaimableRewardEpochId",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardEpochIdsWithClaimableRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStateOfRewards",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNextClaimableRewardEpochId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardEpochIdsWithClaimableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStateOfRewards",
    data: BytesLike
  ): Result;
}

export interface RewardsV2Interface extends BaseContract {
  connect(runner?: ContractRunner | null): RewardsV2Interface;
  waitForDeployment(): Promise<this>;

  interface: RewardsV2InterfaceInterface;

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

  claim: TypedContractMethod<
    [
      _rewardOwner: AddressLike,
      _recipient: AddressLike,
      _rewardEpochId: BigNumberish,
      _wrap: boolean,
      _proofs: RewardsV2Interface.RewardClaimWithProofStruct[]
    ],
    [bigint],
    "nonpayable"
  >;

  getNextClaimableRewardEpochId: TypedContractMethod<
    [_rewardOwner: AddressLike],
    [bigint],
    "view"
  >;

  getRewardEpochIdsWithClaimableRewards: TypedContractMethod<
    [],
    [[bigint, bigint] & { _startEpochId: bigint; _endEpochId: bigint }],
    "view"
  >;

  getStateOfRewards: TypedContractMethod<
    [_rewardOwner: AddressLike],
    [RewardsV2Interface.RewardStateStructOutput[][]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "active"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [
      _rewardOwner: AddressLike,
      _recipient: AddressLike,
      _rewardEpochId: BigNumberish,
      _wrap: boolean,
      _proofs: RewardsV2Interface.RewardClaimWithProofStruct[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getNextClaimableRewardEpochId"
  ): TypedContractMethod<[_rewardOwner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRewardEpochIdsWithClaimableRewards"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { _startEpochId: bigint; _endEpochId: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getStateOfRewards"
  ): TypedContractMethod<
    [_rewardOwner: AddressLike],
    [RewardsV2Interface.RewardStateStructOutput[][]],
    "view"
  >;

  filters: {};
}
