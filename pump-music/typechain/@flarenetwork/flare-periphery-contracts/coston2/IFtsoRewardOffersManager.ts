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

export declare namespace IFtsoRewardOffersManager {
  export type OfferStruct = {
    amount: BigNumberish;
    feedId: BytesLike;
    minRewardedTurnoutBIPS: BigNumberish;
    primaryBandRewardSharePPM: BigNumberish;
    secondaryBandWidthPPM: BigNumberish;
    claimBackAddress: AddressLike;
  };

  export type OfferStructOutput = [
    amount: bigint,
    feedId: string,
    minRewardedTurnoutBIPS: bigint,
    primaryBandRewardSharePPM: bigint,
    secondaryBandWidthPPM: bigint,
    claimBackAddress: string
  ] & {
    amount: bigint;
    feedId: string;
    minRewardedTurnoutBIPS: bigint;
    primaryBandRewardSharePPM: bigint;
    secondaryBandWidthPPM: bigint;
    claimBackAddress: string;
  };
}

export interface IFtsoRewardOffersManagerInterface extends Interface {
  getFunction(
    nameOrSignature: "minimalRewardsOfferValueWei" | "offerRewards"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "InflationRewardsOffered"
      | "MinimalRewardsOfferValueSet"
      | "RewardsOffered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "minimalRewardsOfferValueWei",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerRewards",
    values: [BigNumberish, IFtsoRewardOffersManager.OfferStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "minimalRewardsOfferValueWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerRewards",
    data: BytesLike
  ): Result;
}

export namespace InflationRewardsOfferedEvent {
  export type InputTuple = [
    rewardEpochId: BigNumberish,
    feedIds: BytesLike,
    decimals: BytesLike,
    amount: BigNumberish,
    minRewardedTurnoutBIPS: BigNumberish,
    primaryBandRewardSharePPM: BigNumberish,
    secondaryBandWidthPPMs: BytesLike,
    mode: BigNumberish
  ];
  export type OutputTuple = [
    rewardEpochId: bigint,
    feedIds: string,
    decimals: string,
    amount: bigint,
    minRewardedTurnoutBIPS: bigint,
    primaryBandRewardSharePPM: bigint,
    secondaryBandWidthPPMs: string,
    mode: bigint
  ];
  export interface OutputObject {
    rewardEpochId: bigint;
    feedIds: string;
    decimals: string;
    amount: bigint;
    minRewardedTurnoutBIPS: bigint;
    primaryBandRewardSharePPM: bigint;
    secondaryBandWidthPPMs: string;
    mode: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinimalRewardsOfferValueSetEvent {
  export type InputTuple = [valueWei: BigNumberish];
  export type OutputTuple = [valueWei: bigint];
  export interface OutputObject {
    valueWei: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsOfferedEvent {
  export type InputTuple = [
    rewardEpochId: BigNumberish,
    feedId: BytesLike,
    decimals: BigNumberish,
    amount: BigNumberish,
    minRewardedTurnoutBIPS: BigNumberish,
    primaryBandRewardSharePPM: BigNumberish,
    secondaryBandWidthPPM: BigNumberish,
    claimBackAddress: AddressLike
  ];
  export type OutputTuple = [
    rewardEpochId: bigint,
    feedId: string,
    decimals: bigint,
    amount: bigint,
    minRewardedTurnoutBIPS: bigint,
    primaryBandRewardSharePPM: bigint,
    secondaryBandWidthPPM: bigint,
    claimBackAddress: string
  ];
  export interface OutputObject {
    rewardEpochId: bigint;
    feedId: string;
    decimals: bigint;
    amount: bigint;
    minRewardedTurnoutBIPS: bigint;
    primaryBandRewardSharePPM: bigint;
    secondaryBandWidthPPM: bigint;
    claimBackAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IFtsoRewardOffersManager extends BaseContract {
  connect(runner?: ContractRunner | null): IFtsoRewardOffersManager;
  waitForDeployment(): Promise<this>;

  interface: IFtsoRewardOffersManagerInterface;

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

  minimalRewardsOfferValueWei: TypedContractMethod<[], [bigint], "view">;

  offerRewards: TypedContractMethod<
    [
      _nextRewardEpochId: BigNumberish,
      _offers: IFtsoRewardOffersManager.OfferStruct[]
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "minimalRewardsOfferValueWei"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "offerRewards"
  ): TypedContractMethod<
    [
      _nextRewardEpochId: BigNumberish,
      _offers: IFtsoRewardOffersManager.OfferStruct[]
    ],
    [void],
    "payable"
  >;

  getEvent(
    key: "InflationRewardsOffered"
  ): TypedContractEvent<
    InflationRewardsOfferedEvent.InputTuple,
    InflationRewardsOfferedEvent.OutputTuple,
    InflationRewardsOfferedEvent.OutputObject
  >;
  getEvent(
    key: "MinimalRewardsOfferValueSet"
  ): TypedContractEvent<
    MinimalRewardsOfferValueSetEvent.InputTuple,
    MinimalRewardsOfferValueSetEvent.OutputTuple,
    MinimalRewardsOfferValueSetEvent.OutputObject
  >;
  getEvent(
    key: "RewardsOffered"
  ): TypedContractEvent<
    RewardsOfferedEvent.InputTuple,
    RewardsOfferedEvent.OutputTuple,
    RewardsOfferedEvent.OutputObject
  >;

  filters: {
    "InflationRewardsOffered(uint24,bytes,bytes,uint256,uint16,uint24,bytes,uint16)": TypedContractEvent<
      InflationRewardsOfferedEvent.InputTuple,
      InflationRewardsOfferedEvent.OutputTuple,
      InflationRewardsOfferedEvent.OutputObject
    >;
    InflationRewardsOffered: TypedContractEvent<
      InflationRewardsOfferedEvent.InputTuple,
      InflationRewardsOfferedEvent.OutputTuple,
      InflationRewardsOfferedEvent.OutputObject
    >;

    "MinimalRewardsOfferValueSet(uint256)": TypedContractEvent<
      MinimalRewardsOfferValueSetEvent.InputTuple,
      MinimalRewardsOfferValueSetEvent.OutputTuple,
      MinimalRewardsOfferValueSetEvent.OutputObject
    >;
    MinimalRewardsOfferValueSet: TypedContractEvent<
      MinimalRewardsOfferValueSetEvent.InputTuple,
      MinimalRewardsOfferValueSetEvent.OutputTuple,
      MinimalRewardsOfferValueSetEvent.OutputObject
    >;

    "RewardsOffered(uint24,bytes21,int8,uint256,uint16,uint24,uint24,address)": TypedContractEvent<
      RewardsOfferedEvent.InputTuple,
      RewardsOfferedEvent.OutputTuple,
      RewardsOfferedEvent.OutputObject
    >;
    RewardsOffered: TypedContractEvent<
      RewardsOfferedEvent.InputTuple,
      RewardsOfferedEvent.OutputTuple,
      RewardsOfferedEvent.OutputObject
    >;
  };
}
