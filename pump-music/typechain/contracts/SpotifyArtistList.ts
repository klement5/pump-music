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
} from "../common";

export type DataTransportObjectStruct = {
  name: string;
  imageUrl: string;
  artistId: string;
  bio: string;
};

export type DataTransportObjectStructOutput = [
  name: string,
  imageUrl: string,
  artistId: string,
  bio: string
] & { name: string; imageUrl: string; artistId: string; bio: string };

export type SpotifyArtistStruct = {
  name: string;
  imageUrl: string;
  bio: string;
};

export type SpotifyArtistStructOutput = [
  name: string,
  imageUrl: string,
  bio: string
] & { name: string; imageUrl: string; bio: string };

export declare namespace IJsonApi {
  export type RequestBodyStruct = {
    url: string;
    postprocessJq: string;
    abi_signature: string;
  };

  export type RequestBodyStructOutput = [
    url: string,
    postprocessJq: string,
    abi_signature: string
  ] & { url: string; postprocessJq: string; abi_signature: string };

  export type ResponseBodyStruct = { abi_encoded_data: BytesLike };

  export type ResponseBodyStructOutput = [abi_encoded_data: string] & {
    abi_encoded_data: string;
  };

  export type ResponseStruct = {
    attestationType: BytesLike;
    sourceId: BytesLike;
    votingRound: BigNumberish;
    lowestUsedTimestamp: BigNumberish;
    requestBody: IJsonApi.RequestBodyStruct;
    responseBody: IJsonApi.ResponseBodyStruct;
  };

  export type ResponseStructOutput = [
    attestationType: string,
    sourceId: string,
    votingRound: bigint,
    lowestUsedTimestamp: bigint,
    requestBody: IJsonApi.RequestBodyStructOutput,
    responseBody: IJsonApi.ResponseBodyStructOutput
  ] & {
    attestationType: string;
    sourceId: string;
    votingRound: bigint;
    lowestUsedTimestamp: bigint;
    requestBody: IJsonApi.RequestBodyStructOutput;
    responseBody: IJsonApi.ResponseBodyStructOutput;
  };

  export type ProofStruct = {
    merkleProof: BytesLike[];
    data: IJsonApi.ResponseStruct;
  };

  export type ProofStructOutput = [
    merkleProof: string[],
    data: IJsonApi.ResponseStructOutput
  ] & { merkleProof: string[]; data: IJsonApi.ResponseStructOutput };
}

export interface SpotifyArtistListInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addArtist"
      | "artistIds"
      | "artists"
      | "empty"
      | "getAllArtists"
      | "getFdcHub"
      | "isJsonApiProofValid"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addArtist",
    values: [IJsonApi.ProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "artistIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "artists", values: [string]): string;
  encodeFunctionData(
    functionFragment: "empty",
    values: [DataTransportObjectStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllArtists",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getFdcHub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isJsonApiProofValid",
    values: [IJsonApi.ProofStruct]
  ): string;

  decodeFunctionResult(functionFragment: "addArtist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "artistIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "artists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "empty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllArtists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFdcHub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isJsonApiProofValid",
    data: BytesLike
  ): Result;
}

export interface SpotifyArtistList extends BaseContract {
  connect(runner?: ContractRunner | null): SpotifyArtistList;
  waitForDeployment(): Promise<this>;

  interface: SpotifyArtistListInterface;

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

  addArtist: TypedContractMethod<
    [data: IJsonApi.ProofStruct],
    [void],
    "nonpayable"
  >;

  artistIds: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  artists: TypedContractMethod<
    [arg0: string],
    [
      [string, string, string] & { name: string; imageUrl: string; bio: string }
    ],
    "view"
  >;

  empty: TypedContractMethod<
    [x: DataTransportObjectStruct],
    [void],
    "nonpayable"
  >;

  getAllArtists: TypedContractMethod<[], [SpotifyArtistStructOutput[]], "view">;

  getFdcHub: TypedContractMethod<[], [string], "view">;

  isJsonApiProofValid: TypedContractMethod<
    [_proof: IJsonApi.ProofStruct],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addArtist"
  ): TypedContractMethod<[data: IJsonApi.ProofStruct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "artistIds"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "artists"
  ): TypedContractMethod<
    [arg0: string],
    [
      [string, string, string] & { name: string; imageUrl: string; bio: string }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "empty"
  ): TypedContractMethod<[x: DataTransportObjectStruct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllArtists"
  ): TypedContractMethod<[], [SpotifyArtistStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getFdcHub"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isJsonApiProofValid"
  ): TypedContractMethod<[_proof: IJsonApi.ProofStruct], [boolean], "view">;

  filters: {};
}
