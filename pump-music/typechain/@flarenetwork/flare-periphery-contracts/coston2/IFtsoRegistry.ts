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

export declare namespace IFtsoRegistry {
  export type PriceInfoStruct = {
    ftsoIndex: BigNumberish;
    price: BigNumberish;
    decimals: BigNumberish;
    timestamp: BigNumberish;
  };

  export type PriceInfoStructOutput = [
    ftsoIndex: bigint,
    price: bigint,
    decimals: bigint,
    timestamp: bigint
  ] & { ftsoIndex: bigint; price: bigint; decimals: bigint; timestamp: bigint };
}

export interface IFtsoRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getAllCurrentPrices"
      | "getCurrentPrice(string)"
      | "getCurrentPrice(uint256)"
      | "getCurrentPriceWithDecimals(uint256)"
      | "getCurrentPriceWithDecimals(string)"
      | "getCurrentPricesByIndices"
      | "getCurrentPricesBySymbols"
      | "getFtso"
      | "getFtsoBySymbol"
      | "getFtsoIndex"
      | "getFtsoSymbol"
      | "getFtsos"
      | "getSupportedFtsos"
      | "getSupportedIndices"
      | "getSupportedIndicesAndFtsos"
      | "getSupportedIndicesAndSymbols"
      | "getSupportedIndicesSymbolsAndFtsos"
      | "getSupportedSymbols"
      | "getSupportedSymbolsAndFtsos"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllCurrentPrices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice(string)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceWithDecimals(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceWithDecimals(string)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPricesByIndices",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPricesBySymbols",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFtso",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFtsoBySymbol",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFtsoIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFtsoSymbol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFtsos",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedFtsos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedIndices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedIndicesAndFtsos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedIndicesAndSymbols",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedIndicesSymbolsAndFtsos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedSymbols",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedSymbolsAndFtsos",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllCurrentPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice(string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceWithDecimals(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceWithDecimals(string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPricesByIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPricesBySymbols",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFtso", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFtsoBySymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFtsoIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFtsoSymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFtsos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedFtsos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedIndicesAndFtsos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedIndicesAndSymbols",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedIndicesSymbolsAndFtsos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedSymbols",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedSymbolsAndFtsos",
    data: BytesLike
  ): Result;
}

export interface IFtsoRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IFtsoRegistry;
  waitForDeployment(): Promise<this>;

  interface: IFtsoRegistryInterface;

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

  getAllCurrentPrices: TypedContractMethod<
    [],
    [IFtsoRegistry.PriceInfoStructOutput[]],
    "view"
  >;

  "getCurrentPrice(string)": TypedContractMethod<
    [_symbol: string],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;

  "getCurrentPrice(uint256)": TypedContractMethod<
    [_ftsoIndex: BigNumberish],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;

  "getCurrentPriceWithDecimals(uint256)": TypedContractMethod<
    [_assetIndex: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        _price: bigint;
        _timestamp: bigint;
        _assetPriceUsdDecimals: bigint;
      }
    ],
    "view"
  >;

  "getCurrentPriceWithDecimals(string)": TypedContractMethod<
    [_symbol: string],
    [
      [bigint, bigint, bigint] & {
        _price: bigint;
        _timestamp: bigint;
        _assetPriceUsdDecimals: bigint;
      }
    ],
    "view"
  >;

  getCurrentPricesByIndices: TypedContractMethod<
    [_indices: BigNumberish[]],
    [IFtsoRegistry.PriceInfoStructOutput[]],
    "view"
  >;

  getCurrentPricesBySymbols: TypedContractMethod<
    [_symbols: string[]],
    [IFtsoRegistry.PriceInfoStructOutput[]],
    "view"
  >;

  getFtso: TypedContractMethod<[_ftsoIndex: BigNumberish], [string], "view">;

  getFtsoBySymbol: TypedContractMethod<[_symbol: string], [string], "view">;

  getFtsoIndex: TypedContractMethod<[_symbol: string], [bigint], "view">;

  getFtsoSymbol: TypedContractMethod<
    [_ftsoIndex: BigNumberish],
    [string],
    "view"
  >;

  getFtsos: TypedContractMethod<[_indices: BigNumberish[]], [string[]], "view">;

  getSupportedFtsos: TypedContractMethod<[], [string[]], "view">;

  getSupportedIndices: TypedContractMethod<[], [bigint[]], "view">;

  getSupportedIndicesAndFtsos: TypedContractMethod<
    [],
    [[bigint[], string[]] & { _supportedIndices: bigint[]; _ftsos: string[] }],
    "view"
  >;

  getSupportedIndicesAndSymbols: TypedContractMethod<
    [],
    [
      [bigint[], string[]] & {
        _supportedIndices: bigint[];
        _supportedSymbols: string[];
      }
    ],
    "view"
  >;

  getSupportedIndicesSymbolsAndFtsos: TypedContractMethod<
    [],
    [
      [bigint[], string[], string[]] & {
        _supportedIndices: bigint[];
        _supportedSymbols: string[];
        _ftsos: string[];
      }
    ],
    "view"
  >;

  getSupportedSymbols: TypedContractMethod<[], [string[]], "view">;

  getSupportedSymbolsAndFtsos: TypedContractMethod<
    [],
    [[string[], string[]] & { _supportedSymbols: string[]; _ftsos: string[] }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getAllCurrentPrices"
  ): TypedContractMethod<[], [IFtsoRegistry.PriceInfoStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getCurrentPrice(string)"
  ): TypedContractMethod<
    [_symbol: string],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPrice(uint256)"
  ): TypedContractMethod<
    [_ftsoIndex: BigNumberish],
    [[bigint, bigint] & { _price: bigint; _timestamp: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPriceWithDecimals(uint256)"
  ): TypedContractMethod<
    [_assetIndex: BigNumberish],
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
    nameOrSignature: "getCurrentPriceWithDecimals(string)"
  ): TypedContractMethod<
    [_symbol: string],
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
    nameOrSignature: "getCurrentPricesByIndices"
  ): TypedContractMethod<
    [_indices: BigNumberish[]],
    [IFtsoRegistry.PriceInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentPricesBySymbols"
  ): TypedContractMethod<
    [_symbols: string[]],
    [IFtsoRegistry.PriceInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFtso"
  ): TypedContractMethod<[_ftsoIndex: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getFtsoBySymbol"
  ): TypedContractMethod<[_symbol: string], [string], "view">;
  getFunction(
    nameOrSignature: "getFtsoIndex"
  ): TypedContractMethod<[_symbol: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "getFtsoSymbol"
  ): TypedContractMethod<[_ftsoIndex: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getFtsos"
  ): TypedContractMethod<[_indices: BigNumberish[]], [string[]], "view">;
  getFunction(
    nameOrSignature: "getSupportedFtsos"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getSupportedIndices"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getSupportedIndicesAndFtsos"
  ): TypedContractMethod<
    [],
    [[bigint[], string[]] & { _supportedIndices: bigint[]; _ftsos: string[] }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupportedIndicesAndSymbols"
  ): TypedContractMethod<
    [],
    [
      [bigint[], string[]] & {
        _supportedIndices: bigint[];
        _supportedSymbols: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupportedIndicesSymbolsAndFtsos"
  ): TypedContractMethod<
    [],
    [
      [bigint[], string[], string[]] & {
        _supportedIndices: bigint[];
        _supportedSymbols: string[];
        _ftsos: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupportedSymbols"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getSupportedSymbolsAndFtsos"
  ): TypedContractMethod<
    [],
    [[string[], string[]] & { _supportedSymbols: string[]; _ftsos: string[] }],
    "view"
  >;

  filters: {};
}
