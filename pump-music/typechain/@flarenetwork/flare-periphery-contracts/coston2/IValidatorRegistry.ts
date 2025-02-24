/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface IValidatorRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getDataProviderForNodeId"
      | "getDataProviderForPChainPublicKey"
      | "getDataProviderInfo"
      | "registerDataProvider"
      | "unregisterDataProvider"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DataProviderRegistered"
      | "DataProviderUnregistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getDataProviderForNodeId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataProviderForPChainPublicKey",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataProviderInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerDataProvider",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterDataProvider",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getDataProviderForNodeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataProviderForPChainPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataProviderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterDataProvider",
    data: BytesLike
  ): Result;
}

export namespace DataProviderRegisteredEvent {
  export type InputTuple = [
    dataProvider: AddressLike,
    nodeId: string,
    pChainPublicKey: string
  ];
  export type OutputTuple = [
    dataProvider: string,
    nodeId: string,
    pChainPublicKey: string
  ];
  export interface OutputObject {
    dataProvider: string;
    nodeId: string;
    pChainPublicKey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DataProviderUnregisteredEvent {
  export type InputTuple = [dataProvider: AddressLike];
  export type OutputTuple = [dataProvider: string];
  export interface OutputObject {
    dataProvider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IValidatorRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IValidatorRegistry;
  waitForDeployment(): Promise<this>;

  interface: IValidatorRegistryInterface;

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

  getDataProviderForNodeId: TypedContractMethod<
    [_nodeId: BytesLike],
    [string],
    "view"
  >;

  getDataProviderForPChainPublicKey: TypedContractMethod<
    [_pChainPublicKey: BytesLike],
    [string],
    "view"
  >;

  getDataProviderInfo: TypedContractMethod<
    [_dataProvider: AddressLike],
    [[string, string] & { _nodeId: string; _pChainPublicKey: string }],
    "view"
  >;

  registerDataProvider: TypedContractMethod<
    [_nodeId: string, _pChainPublicKey: string],
    [void],
    "nonpayable"
  >;

  unregisterDataProvider: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getDataProviderForNodeId"
  ): TypedContractMethod<[_nodeId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getDataProviderForPChainPublicKey"
  ): TypedContractMethod<[_pChainPublicKey: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getDataProviderInfo"
  ): TypedContractMethod<
    [_dataProvider: AddressLike],
    [[string, string] & { _nodeId: string; _pChainPublicKey: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "registerDataProvider"
  ): TypedContractMethod<
    [_nodeId: string, _pChainPublicKey: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unregisterDataProvider"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "DataProviderRegistered"
  ): TypedContractEvent<
    DataProviderRegisteredEvent.InputTuple,
    DataProviderRegisteredEvent.OutputTuple,
    DataProviderRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "DataProviderUnregistered"
  ): TypedContractEvent<
    DataProviderUnregisteredEvent.InputTuple,
    DataProviderUnregisteredEvent.OutputTuple,
    DataProviderUnregisteredEvent.OutputObject
  >;

  filters: {
    "DataProviderRegistered(address,string,string)": TypedContractEvent<
      DataProviderRegisteredEvent.InputTuple,
      DataProviderRegisteredEvent.OutputTuple,
      DataProviderRegisteredEvent.OutputObject
    >;
    DataProviderRegistered: TypedContractEvent<
      DataProviderRegisteredEvent.InputTuple,
      DataProviderRegisteredEvent.OutputTuple,
      DataProviderRegisteredEvent.OutputObject
    >;

    "DataProviderUnregistered(address)": TypedContractEvent<
      DataProviderUnregisteredEvent.InputTuple,
      DataProviderUnregisteredEvent.OutputTuple,
      DataProviderUnregisteredEvent.OutputObject
    >;
    DataProviderUnregistered: TypedContractEvent<
      DataProviderUnregisteredEvent.InputTuple,
      DataProviderUnregisteredEvent.OutputTuple,
      DataProviderUnregisteredEvent.OutputObject
    >;
  };
}
