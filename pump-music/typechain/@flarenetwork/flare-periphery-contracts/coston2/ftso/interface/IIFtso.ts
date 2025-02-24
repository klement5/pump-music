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

export interface IIFtsoInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activateFtso"
      | "active"
      | "configureEpochs"
      | "deactivateFtso"
      | "epochsConfiguration"
      | "fallbackFinalizePriceEpoch"
      | "finalizePriceEpoch"
      | "forceFinalizePriceEpoch"
      | "ftsoManager"
      | "getAsset"
      | "getAssetFtsos"
      | "getCurrentEpochId"
      | "getCurrentPrice"
      | "getCurrentPriceDetails"
      | "getCurrentPriceFromTrustedProviders"
      | "getCurrentPriceWithDecimals"
      | "getCurrentPriceWithDecimalsFromTrustedProviders"
      | "getCurrentRandom"
      | "getEpochId"
      | "getEpochPrice"
      | "getEpochPriceForVoter"
      | "getPriceEpochConfiguration"
      | "getPriceEpochData"
      | "getRandom"
      | "getVoteWeightingParameters"
      | "initializeCurrentEpochStateForReveal"
      | "revealPriceSubmitter"
      | "setAsset"
      | "setAssetFtsos"
      | "setVotePowerBlock"
      | "symbol"
      | "updateInitialPrice"
      | "wNat"
      | "wNatVotePowerCached"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "LowTurnout"
      | "PriceEpochInitializedOnFtso"
      | "PriceFinalized"
      | "PriceRevealed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activateFtso",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "active", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "configureEpochs",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateFtso",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochsConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fallbackFinalizePriceEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizePriceEpoch",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "forceFinalizePriceEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ftsoManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getAsset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAssetFtsos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentEpochId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceFromTrustedProviders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceWithDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceWithDecimalsFromTrustedProviders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentRandom",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEpochId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEpochPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEpochPriceForVoter",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceEpochConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceEpochData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRandom",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteWeightingParameters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeCurrentEpochStateForReveal",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "revealPriceSubmitter",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAsset",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetFtsos",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotePowerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateInitialPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "wNat", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wNatVotePowerCached",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateFtso",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "configureEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateFtso",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochsConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fallbackFinalizePriceEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizePriceEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceFinalizePriceEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ftsoManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAssetFtsos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentEpochId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceFromTrustedProviders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceWithDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceWithDecimalsFromTrustedProviders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRandom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEpochId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEpochPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEpochPriceForVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceEpochConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceEpochData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRandom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVoteWeightingParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeCurrentEpochStateForReveal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revealPriceSubmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAssetFtsos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotePowerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateInitialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wNat", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wNatVotePowerCached",
    data: BytesLike
  ): Result;
}

export namespace LowTurnoutEvent {
  export type InputTuple = [
    epochId: BigNumberish,
    natTurnout: BigNumberish,
    lowNatTurnoutThresholdBIPS: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    epochId: bigint,
    natTurnout: bigint,
    lowNatTurnoutThresholdBIPS: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    epochId: bigint;
    natTurnout: bigint;
    lowNatTurnoutThresholdBIPS: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceEpochInitializedOnFtsoEvent {
  export type InputTuple = [
    epochId: BigNumberish,
    endTime: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    epochId: bigint,
    endTime: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    epochId: bigint;
    endTime: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceFinalizedEvent {
  export type InputTuple = [
    epochId: BigNumberish,
    price: BigNumberish,
    rewardedFtso: boolean,
    lowIQRRewardPrice: BigNumberish,
    highIQRRewardPrice: BigNumberish,
    lowElasticBandRewardPrice: BigNumberish,
    highElasticBandRewardPrice: BigNumberish,
    finalizationType: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    epochId: bigint,
    price: bigint,
    rewardedFtso: boolean,
    lowIQRRewardPrice: bigint,
    highIQRRewardPrice: bigint,
    lowElasticBandRewardPrice: bigint,
    highElasticBandRewardPrice: bigint,
    finalizationType: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    epochId: bigint;
    price: bigint;
    rewardedFtso: boolean;
    lowIQRRewardPrice: bigint;
    highIQRRewardPrice: bigint;
    lowElasticBandRewardPrice: bigint;
    highElasticBandRewardPrice: bigint;
    finalizationType: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceRevealedEvent {
  export type InputTuple = [
    voter: AddressLike,
    epochId: BigNumberish,
    price: BigNumberish,
    timestamp: BigNumberish,
    votePowerNat: BigNumberish,
    votePowerAsset: BigNumberish
  ];
  export type OutputTuple = [
    voter: string,
    epochId: bigint,
    price: bigint,
    timestamp: bigint,
    votePowerNat: bigint,
    votePowerAsset: bigint
  ];
  export interface OutputObject {
    voter: string;
    epochId: bigint;
    price: bigint;
    timestamp: bigint;
    votePowerNat: bigint;
    votePowerAsset: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IIFtso extends BaseContract {
  connect(runner?: ContractRunner | null): IIFtso;
  waitForDeployment(): Promise<this>;

  interface: IIFtsoInterface;

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

  activateFtso: TypedContractMethod<
    [
      _firstEpochStartTs: BigNumberish,
      _submitPeriodSeconds: BigNumberish,
      _revealPeriodSeconds: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  active: TypedContractMethod<[], [boolean], "view">;

  configureEpochs: TypedContractMethod<
    [
      _maxVotePowerNatThresholdFraction: BigNumberish,
      _maxVotePowerAssetThresholdFraction: BigNumberish,
      _lowAssetUSDThreshold: BigNumberish,
      _highAssetUSDThreshold: BigNumberish,
      _highAssetTurnoutThresholdBIPS: BigNumberish,
      _lowNatTurnoutThresholdBIPS: BigNumberish,
      _elasticBandRewardBIPS: BigNumberish,
      _elasticBandWidthPPM: BigNumberish,
      _trustedAddresses: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;

  deactivateFtso: TypedContractMethod<[], [void], "nonpayable">;

  epochsConfiguration: TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string[]
      ] & {
        _maxVotePowerNatThresholdFraction: bigint;
        _maxVotePowerAssetThresholdFraction: bigint;
        _lowAssetUSDThreshold: bigint;
        _highAssetUSDThreshold: bigint;
        _highAssetTurnoutThresholdBIPS: bigint;
        _lowNatTurnoutThresholdBIPS: bigint;
        _elasticBandRewardBIPS: bigint;
        _elasticBandWidthPPM: bigint;
        _trustedAddresses: string[];
      }
    ],
    "view"
  >;

  fallbackFinalizePriceEpoch: TypedContractMethod<
    [_epochId: BigNumberish],
    [void],
    "nonpayable"
  >;

  finalizePriceEpoch: TypedContractMethod<
    [_epochId: BigNumberish, _returnRewardData: boolean],
    [
      [string[], bigint[], bigint] & {
        _eligibleAddresses: string[];
        _natWeights: bigint[];
        _totalNatWeight: bigint;
      }
    ],
    "nonpayable"
  >;

  forceFinalizePriceEpoch: TypedContractMethod<
    [_epochId: BigNumberish],
    [void],
    "nonpayable"
  >;

  ftsoManager: TypedContractMethod<[], [string], "view">;

  getAsset: TypedContractMethod<[], [string], "view">;

  getAssetFtsos: TypedContractMethod<[], [string[]], "view">;

  getCurrentEpochId: TypedContractMethod<[], [bigint], "view">;

  getCurrentPrice: TypedContractMethod<
    [],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;

  getCurrentPriceDetails: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        _price: bigint;
        _priceTimestamp: bigint;
        _priceFinalizationType: bigint;
        _lastPriceEpochFinalizationTimestamp: bigint;
        _lastPriceEpochFinalizationType: bigint;
      }
    ],
    "view"
  >;

  getCurrentPriceFromTrustedProviders: TypedContractMethod<
    [],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;

  getCurrentPriceWithDecimals: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _price: bigint;
        _timestamp: bigint;
        _assetPriceUsdDecimals: bigint;
      }
    ],
    "view"
  >;

  getCurrentPriceWithDecimalsFromTrustedProviders: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _price: bigint;
        _timestamp: bigint;
        _assetPriceUsdDecimals: bigint;
      }
    ],
    "view"
  >;

  getCurrentRandom: TypedContractMethod<[], [bigint], "view">;

  getEpochId: TypedContractMethod<[_timestamp: BigNumberish], [bigint], "view">;

  getEpochPrice: TypedContractMethod<
    [_epochId: BigNumberish],
    [bigint],
    "view"
  >;

  getEpochPriceForVoter: TypedContractMethod<
    [_epochId: BigNumberish, _voter: AddressLike],
    [bigint],
    "view"
  >;

  getPriceEpochConfiguration: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _firstEpochStartTs: bigint;
        _submitPeriodSeconds: bigint;
        _revealPeriodSeconds: bigint;
      }
    ],
    "view"
  >;

  getPriceEpochData: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, boolean] & {
        _epochId: bigint;
        _epochSubmitEndTime: bigint;
        _epochRevealEndTime: bigint;
        _votePowerBlock: bigint;
        _fallbackMode: boolean;
      }
    ],
    "view"
  >;

  getRandom: TypedContractMethod<[_epochId: BigNumberish], [bigint], "view">;

  getVoteWeightingParameters: TypedContractMethod<
    [],
    [
      [string[], bigint[], bigint, bigint, bigint, bigint] & {
        _assets: string[];
        _assetMultipliers: bigint[];
        _totalVotePowerNat: bigint;
        _totalVotePowerAsset: bigint;
        _assetWeightRatio: bigint;
        _votePowerBlock: bigint;
      }
    ],
    "view"
  >;

  initializeCurrentEpochStateForReveal: TypedContractMethod<
    [_circulatingSupplyNat: BigNumberish, _fallbackMode: boolean],
    [void],
    "nonpayable"
  >;

  revealPriceSubmitter: TypedContractMethod<
    [
      _voter: AddressLike,
      _epochId: BigNumberish,
      _price: BigNumberish,
      _wNatVP: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setAsset: TypedContractMethod<[_asset: AddressLike], [void], "nonpayable">;

  setAssetFtsos: TypedContractMethod<
    [_assetFtsos: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setVotePowerBlock: TypedContractMethod<
    [_blockNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  updateInitialPrice: TypedContractMethod<
    [_initialPriceUSD: BigNumberish, _initialPriceTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  wNat: TypedContractMethod<[], [string], "view">;

  wNatVotePowerCached: TypedContractMethod<
    [_voter: AddressLike, _epochId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activateFtso"
  ): TypedContractMethod<
    [
      _firstEpochStartTs: BigNumberish,
      _submitPeriodSeconds: BigNumberish,
      _revealPeriodSeconds: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "active"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "configureEpochs"
  ): TypedContractMethod<
    [
      _maxVotePowerNatThresholdFraction: BigNumberish,
      _maxVotePowerAssetThresholdFraction: BigNumberish,
      _lowAssetUSDThreshold: BigNumberish,
      _highAssetUSDThreshold: BigNumberish,
      _highAssetTurnoutThresholdBIPS: BigNumberish,
      _lowNatTurnoutThresholdBIPS: BigNumberish,
      _elasticBandRewardBIPS: BigNumberish,
      _elasticBandWidthPPM: BigNumberish,
      _trustedAddresses: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deactivateFtso"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "epochsConfiguration"
  ): TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string[]
      ] & {
        _maxVotePowerNatThresholdFraction: bigint;
        _maxVotePowerAssetThresholdFraction: bigint;
        _lowAssetUSDThreshold: bigint;
        _highAssetUSDThreshold: bigint;
        _highAssetTurnoutThresholdBIPS: bigint;
        _lowNatTurnoutThresholdBIPS: bigint;
        _elasticBandRewardBIPS: bigint;
        _elasticBandWidthPPM: bigint;
        _trustedAddresses: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "fallbackFinalizePriceEpoch"
  ): TypedContractMethod<[_epochId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "finalizePriceEpoch"
  ): TypedContractMethod<
    [_epochId: BigNumberish, _returnRewardData: boolean],
    [
      [string[], bigint[], bigint] & {
        _eligibleAddresses: string[];
        _natWeights: bigint[];
        _totalNatWeight: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "forceFinalizePriceEpoch"
  ): TypedContractMethod<[_epochId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ftsoManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAsset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAssetFtsos"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getCurrentEpochId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCurrentPrice"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPriceDetails"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        _price: bigint;
        _priceTimestamp: bigint;
        _priceFinalizationType: bigint;
        _lastPriceEpochFinalizationTimestamp: bigint;
        _lastPriceEpochFinalizationType: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPriceFromTrustedProviders"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPriceWithDecimals"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _price: bigint;
        _timestamp: bigint;
        _assetPriceUsdDecimals: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPriceWithDecimalsFromTrustedProviders"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _price: bigint;
        _timestamp: bigint;
        _assetPriceUsdDecimals: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentRandom"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEpochId"
  ): TypedContractMethod<[_timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEpochPrice"
  ): TypedContractMethod<[_epochId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEpochPriceForVoter"
  ): TypedContractMethod<
    [_epochId: BigNumberish, _voter: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceEpochConfiguration"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _firstEpochStartTs: bigint;
        _submitPeriodSeconds: bigint;
        _revealPeriodSeconds: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceEpochData"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, boolean] & {
        _epochId: bigint;
        _epochSubmitEndTime: bigint;
        _epochRevealEndTime: bigint;
        _votePowerBlock: bigint;
        _fallbackMode: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRandom"
  ): TypedContractMethod<[_epochId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getVoteWeightingParameters"
  ): TypedContractMethod<
    [],
    [
      [string[], bigint[], bigint, bigint, bigint, bigint] & {
        _assets: string[];
        _assetMultipliers: bigint[];
        _totalVotePowerNat: bigint;
        _totalVotePowerAsset: bigint;
        _assetWeightRatio: bigint;
        _votePowerBlock: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initializeCurrentEpochStateForReveal"
  ): TypedContractMethod<
    [_circulatingSupplyNat: BigNumberish, _fallbackMode: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revealPriceSubmitter"
  ): TypedContractMethod<
    [
      _voter: AddressLike,
      _epochId: BigNumberish,
      _price: BigNumberish,
      _wNatVP: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAsset"
  ): TypedContractMethod<[_asset: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAssetFtsos"
  ): TypedContractMethod<[_assetFtsos: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVotePowerBlock"
  ): TypedContractMethod<[_blockNumber: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateInitialPrice"
  ): TypedContractMethod<
    [_initialPriceUSD: BigNumberish, _initialPriceTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "wNat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wNatVotePowerCached"
  ): TypedContractMethod<
    [_voter: AddressLike, _epochId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "LowTurnout"
  ): TypedContractEvent<
    LowTurnoutEvent.InputTuple,
    LowTurnoutEvent.OutputTuple,
    LowTurnoutEvent.OutputObject
  >;
  getEvent(
    key: "PriceEpochInitializedOnFtso"
  ): TypedContractEvent<
    PriceEpochInitializedOnFtsoEvent.InputTuple,
    PriceEpochInitializedOnFtsoEvent.OutputTuple,
    PriceEpochInitializedOnFtsoEvent.OutputObject
  >;
  getEvent(
    key: "PriceFinalized"
  ): TypedContractEvent<
    PriceFinalizedEvent.InputTuple,
    PriceFinalizedEvent.OutputTuple,
    PriceFinalizedEvent.OutputObject
  >;
  getEvent(
    key: "PriceRevealed"
  ): TypedContractEvent<
    PriceRevealedEvent.InputTuple,
    PriceRevealedEvent.OutputTuple,
    PriceRevealedEvent.OutputObject
  >;

  filters: {
    "LowTurnout(uint256,uint256,uint256,uint256)": TypedContractEvent<
      LowTurnoutEvent.InputTuple,
      LowTurnoutEvent.OutputTuple,
      LowTurnoutEvent.OutputObject
    >;
    LowTurnout: TypedContractEvent<
      LowTurnoutEvent.InputTuple,
      LowTurnoutEvent.OutputTuple,
      LowTurnoutEvent.OutputObject
    >;

    "PriceEpochInitializedOnFtso(uint256,uint256,uint256)": TypedContractEvent<
      PriceEpochInitializedOnFtsoEvent.InputTuple,
      PriceEpochInitializedOnFtsoEvent.OutputTuple,
      PriceEpochInitializedOnFtsoEvent.OutputObject
    >;
    PriceEpochInitializedOnFtso: TypedContractEvent<
      PriceEpochInitializedOnFtsoEvent.InputTuple,
      PriceEpochInitializedOnFtsoEvent.OutputTuple,
      PriceEpochInitializedOnFtsoEvent.OutputObject
    >;

    "PriceFinalized(uint256,uint256,bool,uint256,uint256,uint256,uint256,uint8,uint256)": TypedContractEvent<
      PriceFinalizedEvent.InputTuple,
      PriceFinalizedEvent.OutputTuple,
      PriceFinalizedEvent.OutputObject
    >;
    PriceFinalized: TypedContractEvent<
      PriceFinalizedEvent.InputTuple,
      PriceFinalizedEvent.OutputTuple,
      PriceFinalizedEvent.OutputObject
    >;

    "PriceRevealed(address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      PriceRevealedEvent.InputTuple,
      PriceRevealedEvent.OutputTuple,
      PriceRevealedEvent.OutputObject
    >;
    PriceRevealed: TypedContractEvent<
      PriceRevealedEvent.InputTuple,
      PriceRevealedEvent.OutputTuple,
      PriceRevealedEvent.OutputObject
    >;
  };
}
