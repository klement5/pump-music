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

export interface IJsonApiVerificationInterface extends Interface {
  getFunction(nameOrSignature: "verifyJsonApi"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyJsonApi",
    values: [IJsonApi.ProofStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyJsonApi",
    data: BytesLike
  ): Result;
}

export interface IJsonApiVerification extends BaseContract {
  connect(runner?: ContractRunner | null): IJsonApiVerification;
  waitForDeployment(): Promise<this>;

  interface: IJsonApiVerificationInterface;

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

  verifyJsonApi: TypedContractMethod<
    [_proof: IJsonApi.ProofStruct],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "verifyJsonApi"
  ): TypedContractMethod<[_proof: IJsonApi.ProofStruct], [boolean], "view">;

  filters: {};
}
