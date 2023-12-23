/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 mins 50.52 secs after the 23rd hour of Apr 12th 1985 in UTC.
   */
  DateTime: { input: any; output: any; }
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: { input: any; output: any; }
};

export type AddEventInput = {
  id: Scalars['String']['input'];
  instances?: InputMaybe<Array<InputMaybe<EventInstanceRef>>>;
  label: Scalars['String']['input'];
  properties?: InputMaybe<Array<InputMaybe<EventPropertyRef>>>;
  user: UserRef;
};

export type AddEventInstanceInput = {
  event: EventRef;
  id: Scalars['String']['input'];
  occurrences?: InputMaybe<Array<EventInstanceOccurrenceRef>>;
  tags?: InputMaybe<Array<EventInstanceTagRef>>;
};

export type AddEventInstanceOccurrenceInput = {
  endDateTime: Scalars['DateTime']['input'];
  eventInstance: EventInstanceRef;
  startDateTime: Scalars['DateTime']['input'];
};

export type AddEventInstanceOccurrencePayload = {
  __typename?: 'AddEventInstanceOccurrencePayload';
  eventInstanceOccurrence?: Maybe<Array<Maybe<EventInstanceOccurrence>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEventInstanceOccurrencePayloadEventInstanceOccurrenceArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOccurrenceOrder>;
};

export type AddEventInstancePayload = {
  __typename?: 'AddEventInstancePayload';
  eventInstance?: Maybe<Array<Maybe<EventInstance>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEventInstancePayloadEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOrder>;
};

export type AddEventInstanceTagInput = {
  eventInstance?: InputMaybe<Array<EventInstanceRef>>;
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  user: UserRef;
};

export type AddEventInstanceTagPayload = {
  __typename?: 'AddEventInstanceTagPayload';
  eventInstanceTag?: Maybe<Array<Maybe<EventInstanceTag>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEventInstanceTagPayloadEventInstanceTagArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceTagOrder>;
};

export type AddEventPayload = {
  __typename?: 'AddEventPayload';
  event?: Maybe<Array<Maybe<Event>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEventPayloadEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventOrder>;
};

export type AddEventPropertyInput = {
  event: EventRef;
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AddEventPropertyPayload = {
  __typename?: 'AddEventPropertyPayload';
  eventProperty?: Maybe<Array<Maybe<EventProperty>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEventPropertyPayloadEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventPropertyOrder>;
};

export type AddUserInput = {
  email: Scalars['String']['input'];
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  tags?: InputMaybe<Array<InputMaybe<EventInstanceTagRef>>>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type AddUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']['input']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']['input']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  ge?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  le?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime']['input'];
  min: Scalars['DateTime']['input'];
};

export type DeleteEventInstanceOccurrencePayload = {
  __typename?: 'DeleteEventInstanceOccurrencePayload';
  eventInstanceOccurrence?: Maybe<Array<Maybe<EventInstanceOccurrence>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEventInstanceOccurrencePayloadEventInstanceOccurrenceArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOccurrenceOrder>;
};

export type DeleteEventInstancePayload = {
  __typename?: 'DeleteEventInstancePayload';
  eventInstance?: Maybe<Array<Maybe<EventInstance>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEventInstancePayloadEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOrder>;
};

export type DeleteEventInstanceTagPayload = {
  __typename?: 'DeleteEventInstanceTagPayload';
  eventInstanceTag?: Maybe<Array<Maybe<EventInstanceTag>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEventInstanceTagPayloadEventInstanceTagArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceTagOrder>;
};

export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload';
  event?: Maybe<Array<Maybe<Event>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEventPayloadEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventOrder>;
};

export type DeleteEventPropertyPayload = {
  __typename?: 'DeleteEventPropertyPayload';
  eventProperty?: Maybe<Array<Maybe<EventProperty>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEventPropertyPayloadEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventPropertyOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type Event = {
  __typename?: 'Event';
  id: Scalars['String']['output'];
  iid: Scalars['ID']['output'];
  instances?: Maybe<Array<Maybe<EventInstance>>>;
  instancesAggregate?: Maybe<EventInstanceAggregateResult>;
  label: Scalars['String']['output'];
  properties?: Maybe<Array<Maybe<EventProperty>>>;
  propertiesAggregate?: Maybe<EventPropertyAggregateResult>;
  user: User;
};


export type EventInstancesArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOrder>;
};


export type EventInstancesAggregateArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
};


export type EventPropertiesArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventPropertyOrder>;
};


export type EventPropertiesAggregateArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
};


export type EventUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type EventAggregateResult = {
  __typename?: 'EventAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  idMax?: Maybe<Scalars['String']['output']>;
  idMin?: Maybe<Scalars['String']['output']>;
  labelMax?: Maybe<Scalars['String']['output']>;
  labelMin?: Maybe<Scalars['String']['output']>;
};

export type EventFilter = {
  and?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EventHasFilter>>>;
  id?: InputMaybe<StringHashFilter>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<EventFilter>;
  or?: InputMaybe<Array<InputMaybe<EventFilter>>>;
};

export enum EventHasFilter {
  Id = 'id',
  Instances = 'instances',
  Label = 'label',
  Properties = 'properties',
  User = 'user'
}

export type EventInstance = {
  __typename?: 'EventInstance';
  event: Event;
  id: Scalars['String']['output'];
  iid: Scalars['ID']['output'];
  occurrences?: Maybe<Array<EventInstanceOccurrence>>;
  occurrencesAggregate?: Maybe<EventInstanceOccurrenceAggregateResult>;
  tags?: Maybe<Array<EventInstanceTag>>;
  tagsAggregate?: Maybe<EventInstanceTagAggregateResult>;
};


export type EventInstanceEventArgs = {
  filter?: InputMaybe<EventFilter>;
};


export type EventInstanceOccurrencesArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOccurrenceOrder>;
};


export type EventInstanceOccurrencesAggregateArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
};


export type EventInstanceTagsArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceTagOrder>;
};


export type EventInstanceTagsAggregateArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
};

export type EventInstanceAggregateResult = {
  __typename?: 'EventInstanceAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  idMax?: Maybe<Scalars['String']['output']>;
  idMin?: Maybe<Scalars['String']['output']>;
};

export type EventInstanceFilter = {
  and?: InputMaybe<Array<InputMaybe<EventInstanceFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EventInstanceHasFilter>>>;
  id?: InputMaybe<StringHashFilter>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<EventInstanceFilter>;
  or?: InputMaybe<Array<InputMaybe<EventInstanceFilter>>>;
};

export enum EventInstanceHasFilter {
  Event = 'event',
  Id = 'id',
  Occurrences = 'occurrences',
  Tags = 'tags'
}

export type EventInstanceOccurrence = {
  __typename?: 'EventInstanceOccurrence';
  endDateTime: Scalars['DateTime']['output'];
  eventInstance: EventInstance;
  iid: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};


export type EventInstanceOccurrenceEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
};

export type EventInstanceOccurrenceAggregateResult = {
  __typename?: 'EventInstanceOccurrenceAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  endDateTimeMax?: Maybe<Scalars['DateTime']['output']>;
  endDateTimeMin?: Maybe<Scalars['DateTime']['output']>;
  startDateTimeMax?: Maybe<Scalars['DateTime']['output']>;
  startDateTimeMin?: Maybe<Scalars['DateTime']['output']>;
};

export type EventInstanceOccurrenceFilter = {
  and?: InputMaybe<Array<InputMaybe<EventInstanceOccurrenceFilter>>>;
  endDateTime?: InputMaybe<DateTimeFilter>;
  has?: InputMaybe<Array<InputMaybe<EventInstanceOccurrenceHasFilter>>>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<EventInstanceOccurrenceFilter>;
  or?: InputMaybe<Array<InputMaybe<EventInstanceOccurrenceFilter>>>;
  startDateTime?: InputMaybe<DateTimeFilter>;
};

export enum EventInstanceOccurrenceHasFilter {
  EndDateTime = 'endDateTime',
  EventInstance = 'eventInstance',
  StartDateTime = 'startDateTime'
}

export type EventInstanceOccurrenceOrder = {
  asc?: InputMaybe<EventInstanceOccurrenceOrderable>;
  desc?: InputMaybe<EventInstanceOccurrenceOrderable>;
  then?: InputMaybe<EventInstanceOccurrenceOrder>;
};

export enum EventInstanceOccurrenceOrderable {
  EndDateTime = 'endDateTime',
  StartDateTime = 'startDateTime'
}

export type EventInstanceOccurrencePatch = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventInstance?: InputMaybe<EventInstanceRef>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventInstanceOccurrenceRef = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventInstance?: InputMaybe<EventInstanceRef>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventInstanceOrder = {
  asc?: InputMaybe<EventInstanceOrderable>;
  desc?: InputMaybe<EventInstanceOrderable>;
  then?: InputMaybe<EventInstanceOrder>;
};

export enum EventInstanceOrderable {
  Id = 'id'
}

export type EventInstancePatch = {
  event?: InputMaybe<EventRef>;
  occurrences?: InputMaybe<Array<EventInstanceOccurrenceRef>>;
  tags?: InputMaybe<Array<EventInstanceTagRef>>;
};

export type EventInstanceRef = {
  event?: InputMaybe<EventRef>;
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  occurrences?: InputMaybe<Array<EventInstanceOccurrenceRef>>;
  tags?: InputMaybe<Array<EventInstanceTagRef>>;
};

export type EventInstanceTag = {
  __typename?: 'EventInstanceTag';
  eventInstance?: Maybe<Array<EventInstance>>;
  eventInstanceAggregate?: Maybe<EventInstanceAggregateResult>;
  id: Scalars['String']['output'];
  iid: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  user: User;
};


export type EventInstanceTagEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOrder>;
};


export type EventInstanceTagEventInstanceAggregateArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
};


export type EventInstanceTagUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type EventInstanceTagAggregateResult = {
  __typename?: 'EventInstanceTagAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  idMax?: Maybe<Scalars['String']['output']>;
  idMin?: Maybe<Scalars['String']['output']>;
  labelMax?: Maybe<Scalars['String']['output']>;
  labelMin?: Maybe<Scalars['String']['output']>;
};

export type EventInstanceTagFilter = {
  and?: InputMaybe<Array<InputMaybe<EventInstanceTagFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EventInstanceTagHasFilter>>>;
  id?: InputMaybe<StringHashFilter>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<EventInstanceTagFilter>;
  or?: InputMaybe<Array<InputMaybe<EventInstanceTagFilter>>>;
};

export enum EventInstanceTagHasFilter {
  EventInstance = 'eventInstance',
  Id = 'id',
  Label = 'label',
  User = 'user'
}

export type EventInstanceTagOrder = {
  asc?: InputMaybe<EventInstanceTagOrderable>;
  desc?: InputMaybe<EventInstanceTagOrderable>;
  then?: InputMaybe<EventInstanceTagOrder>;
};

export enum EventInstanceTagOrderable {
  Id = 'id',
  Label = 'label'
}

export type EventInstanceTagPatch = {
  eventInstance?: InputMaybe<Array<EventInstanceRef>>;
  label?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRef>;
};

export type EventInstanceTagRef = {
  eventInstance?: InputMaybe<Array<EventInstanceRef>>;
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRef>;
};

export type EventOrder = {
  asc?: InputMaybe<EventOrderable>;
  desc?: InputMaybe<EventOrderable>;
  then?: InputMaybe<EventOrder>;
};

export enum EventOrderable {
  Id = 'id',
  Label = 'label'
}

export type EventPatch = {
  instances?: InputMaybe<Array<InputMaybe<EventInstanceRef>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Array<InputMaybe<EventPropertyRef>>>;
  user?: InputMaybe<UserRef>;
};

export type EventProperty = {
  __typename?: 'EventProperty';
  event: Event;
  id: Scalars['String']['output'];
  iid: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};


export type EventPropertyEventArgs = {
  filter?: InputMaybe<EventFilter>;
};

export type EventPropertyAggregateResult = {
  __typename?: 'EventPropertyAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  idMax?: Maybe<Scalars['String']['output']>;
  idMin?: Maybe<Scalars['String']['output']>;
  labelMax?: Maybe<Scalars['String']['output']>;
  labelMin?: Maybe<Scalars['String']['output']>;
  valueMax?: Maybe<Scalars['String']['output']>;
  valueMin?: Maybe<Scalars['String']['output']>;
};

export type EventPropertyFilter = {
  and?: InputMaybe<Array<InputMaybe<EventPropertyFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EventPropertyHasFilter>>>;
  id?: InputMaybe<StringHashFilter>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<EventPropertyFilter>;
  or?: InputMaybe<Array<InputMaybe<EventPropertyFilter>>>;
};

export enum EventPropertyHasFilter {
  Event = 'event',
  Id = 'id',
  Label = 'label',
  Value = 'value'
}

export type EventPropertyOrder = {
  asc?: InputMaybe<EventPropertyOrderable>;
  desc?: InputMaybe<EventPropertyOrderable>;
  then?: InputMaybe<EventPropertyOrder>;
};

export enum EventPropertyOrderable {
  Id = 'id',
  Label = 'label',
  Value = 'value'
}

export type EventPropertyPatch = {
  event?: InputMaybe<EventRef>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type EventPropertyRef = {
  event?: InputMaybe<EventRef>;
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type EventRef = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<EventInstanceRef>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Array<InputMaybe<EventPropertyRef>>>;
  user?: InputMaybe<UserRef>;
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatRange = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']['input']>;
  get?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  query?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']['input']>;
  ge?: InputMaybe<Scalars['Int64']['input']>;
  gt?: InputMaybe<Scalars['Int64']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']['input']>>>;
  le?: InputMaybe<Scalars['Int64']['input']>;
  lt?: InputMaybe<Scalars['Int64']['input']>;
};

export type Int64Range = {
  max: Scalars['Int64']['input'];
  min: Scalars['Int64']['input'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
};

export type IntRange = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addEvent?: Maybe<AddEventPayload>;
  addEventInstance?: Maybe<AddEventInstancePayload>;
  addEventInstanceOccurrence?: Maybe<AddEventInstanceOccurrencePayload>;
  addEventInstanceTag?: Maybe<AddEventInstanceTagPayload>;
  addEventProperty?: Maybe<AddEventPropertyPayload>;
  addUser?: Maybe<AddUserPayload>;
  deleteEvent?: Maybe<DeleteEventPayload>;
  deleteEventInstance?: Maybe<DeleteEventInstancePayload>;
  deleteEventInstanceOccurrence?: Maybe<DeleteEventInstanceOccurrencePayload>;
  deleteEventInstanceTag?: Maybe<DeleteEventInstanceTagPayload>;
  deleteEventProperty?: Maybe<DeleteEventPropertyPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  updateEvent?: Maybe<UpdateEventPayload>;
  updateEventInstance?: Maybe<UpdateEventInstancePayload>;
  updateEventInstanceOccurrence?: Maybe<UpdateEventInstanceOccurrencePayload>;
  updateEventInstanceTag?: Maybe<UpdateEventInstanceTagPayload>;
  updateEventProperty?: Maybe<UpdateEventPropertyPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddEventArgs = {
  input: Array<AddEventInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddEventInstanceArgs = {
  input: Array<AddEventInstanceInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddEventInstanceOccurrenceArgs = {
  input: Array<AddEventInstanceOccurrenceInput>;
};


export type MutationAddEventInstanceTagArgs = {
  input: Array<AddEventInstanceTagInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddEventPropertyArgs = {
  input: Array<AddEventPropertyInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteEventArgs = {
  filter: EventFilter;
};


export type MutationDeleteEventInstanceArgs = {
  filter: EventInstanceFilter;
};


export type MutationDeleteEventInstanceOccurrenceArgs = {
  filter: EventInstanceOccurrenceFilter;
};


export type MutationDeleteEventInstanceTagArgs = {
  filter: EventInstanceTagFilter;
};


export type MutationDeleteEventPropertyArgs = {
  filter: EventPropertyFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationUpdateEventInstanceArgs = {
  input: UpdateEventInstanceInput;
};


export type MutationUpdateEventInstanceOccurrenceArgs = {
  input: UpdateEventInstanceOccurrenceInput;
};


export type MutationUpdateEventInstanceTagArgs = {
  input: UpdateEventInstanceTagInput;
};


export type MutationUpdateEventPropertyArgs = {
  input: UpdateEventPropertyInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float']['input'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateEvent?: Maybe<EventAggregateResult>;
  aggregateEventInstance?: Maybe<EventInstanceAggregateResult>;
  aggregateEventInstanceOccurrence?: Maybe<EventInstanceOccurrenceAggregateResult>;
  aggregateEventInstanceTag?: Maybe<EventInstanceTagAggregateResult>;
  aggregateEventProperty?: Maybe<EventPropertyAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getEvent?: Maybe<Event>;
  getEventInstance?: Maybe<EventInstance>;
  getEventInstanceOccurrence?: Maybe<EventInstanceOccurrence>;
  getEventInstanceTag?: Maybe<EventInstanceTag>;
  getEventProperty?: Maybe<EventProperty>;
  getUser?: Maybe<User>;
  queryEvent?: Maybe<Array<Maybe<Event>>>;
  queryEventInstance?: Maybe<Array<Maybe<EventInstance>>>;
  queryEventInstanceOccurrence?: Maybe<Array<Maybe<EventInstanceOccurrence>>>;
  queryEventInstanceTag?: Maybe<Array<Maybe<EventInstanceTag>>>;
  queryEventProperty?: Maybe<Array<Maybe<EventProperty>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryAggregateEventArgs = {
  filter?: InputMaybe<EventFilter>;
};


export type QueryAggregateEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
};


export type QueryAggregateEventInstanceOccurrenceArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
};


export type QueryAggregateEventInstanceTagArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
};


export type QueryAggregateEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryGetEventArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEventInstanceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEventInstanceOccurrenceArgs = {
  iid: Scalars['ID']['input'];
};


export type QueryGetEventInstanceTagArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEventPropertyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQueryEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventOrder>;
};


export type QueryQueryEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOrder>;
};


export type QueryQueryEventInstanceOccurrenceArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOccurrenceOrder>;
};


export type QueryQueryEventInstanceTagArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceTagOrder>;
};


export type QueryQueryEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventPropertyOrder>;
};


export type QueryQueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']['input']>;
  anyoftext?: InputMaybe<Scalars['String']['input']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StringRange = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']['input']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']['input']>;
  anyofterms?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventInput = {
  filter: EventFilter;
  remove?: InputMaybe<EventPatch>;
  set?: InputMaybe<EventPatch>;
};

export type UpdateEventInstanceInput = {
  filter: EventInstanceFilter;
  remove?: InputMaybe<EventInstancePatch>;
  set?: InputMaybe<EventInstancePatch>;
};

export type UpdateEventInstanceOccurrenceInput = {
  filter: EventInstanceOccurrenceFilter;
  remove?: InputMaybe<EventInstanceOccurrencePatch>;
  set?: InputMaybe<EventInstanceOccurrencePatch>;
};

export type UpdateEventInstanceOccurrencePayload = {
  __typename?: 'UpdateEventInstanceOccurrencePayload';
  eventInstanceOccurrence?: Maybe<Array<Maybe<EventInstanceOccurrence>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEventInstanceOccurrencePayloadEventInstanceOccurrenceArgs = {
  filter?: InputMaybe<EventInstanceOccurrenceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOccurrenceOrder>;
};

export type UpdateEventInstancePayload = {
  __typename?: 'UpdateEventInstancePayload';
  eventInstance?: Maybe<Array<Maybe<EventInstance>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEventInstancePayloadEventInstanceArgs = {
  filter?: InputMaybe<EventInstanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceOrder>;
};

export type UpdateEventInstanceTagInput = {
  filter: EventInstanceTagFilter;
  remove?: InputMaybe<EventInstanceTagPatch>;
  set?: InputMaybe<EventInstanceTagPatch>;
};

export type UpdateEventInstanceTagPayload = {
  __typename?: 'UpdateEventInstanceTagPayload';
  eventInstanceTag?: Maybe<Array<Maybe<EventInstanceTag>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEventInstanceTagPayloadEventInstanceTagArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceTagOrder>;
};

export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload';
  event?: Maybe<Array<Maybe<Event>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEventPayloadEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventOrder>;
};

export type UpdateEventPropertyInput = {
  filter: EventPropertyFilter;
  remove?: InputMaybe<EventPropertyPatch>;
  set?: InputMaybe<EventPropertyPatch>;
};

export type UpdateEventPropertyPayload = {
  __typename?: 'UpdateEventPropertyPayload';
  eventProperty?: Maybe<Array<Maybe<EventProperty>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEventPropertyPayloadEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventPropertyOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: InputMaybe<UserPatch>;
  set?: InputMaybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  events?: Maybe<Array<Maybe<Event>>>;
  eventsAggregate?: Maybe<EventAggregateResult>;
  iid: Scalars['ID']['output'];
  tags?: Maybe<Array<Maybe<EventInstanceTag>>>;
  tagsAggregate?: Maybe<EventInstanceTagAggregateResult>;
};


export type UserEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventOrder>;
};


export type UserEventsAggregateArgs = {
  filter?: InputMaybe<EventFilter>;
};


export type UserTagsArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventInstanceTagOrder>;
};


export type UserTagsAggregateArgs = {
  filter?: InputMaybe<EventInstanceTagFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  emailMax?: Maybe<Scalars['String']['output']>;
  emailMin?: Maybe<Scalars['String']['output']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  email?: InputMaybe<StringHashFilter>;
  has?: InputMaybe<Array<InputMaybe<UserHasFilter>>>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<Array<InputMaybe<UserFilter>>>;
};

export enum UserHasFilter {
  Email = 'email',
  Events = 'events',
  Tags = 'tags'
}

export type UserOrder = {
  asc?: InputMaybe<UserOrderable>;
  desc?: InputMaybe<UserOrderable>;
  then?: InputMaybe<UserOrder>;
};

export enum UserOrderable {
  Email = 'email'
}

export type UserPatch = {
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  tags?: InputMaybe<Array<InputMaybe<EventInstanceTagRef>>>;
};

export type UserRef = {
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<EventInstanceTagRef>>>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type AddEventMutationVariables = Exact<{
  input: Array<AddEventInput> | AddEventInput;
}>;


export type AddEventMutation = { __typename?: 'Mutation', addEvent?: { __typename?: 'AddEventPayload', numUids?: number | null, event?: Array<{ __typename?: 'Event', id: string, iid: string, label: string, user: { __typename?: 'User', email: string }, instances?: Array<{ __typename?: 'EventInstance', iid: string, occurrences?: Array<{ __typename?: 'EventInstanceOccurrence', iid: string }> | null, tags?: Array<{ __typename?: 'EventInstanceTag', id: string, label: string }> | null } | null> | null } | null> | null } | null };

export type AddEventInstanceMutationVariables = Exact<{
  input: Array<AddEventInstanceInput> | AddEventInstanceInput;
}>;


export type AddEventInstanceMutation = { __typename?: 'Mutation', addEventInstance?: { __typename?: 'AddEventInstancePayload', numUids?: number | null, eventInstance?: Array<{ __typename?: 'EventInstance', iid: string, occurrences?: Array<{ __typename?: 'EventInstanceOccurrence', iid: string, endDateTime: any, startDateTime: any }> | null } | null> | null } | null };

export type AddEventInstanceOccurrenceMutationVariables = Exact<{
  input: Array<AddEventInstanceOccurrenceInput> | AddEventInstanceOccurrenceInput;
}>;


export type AddEventInstanceOccurrenceMutation = { __typename?: 'Mutation', addEventInstanceOccurrence?: { __typename?: 'AddEventInstanceOccurrencePayload', numUids?: number | null } | null };

export type AddEventPropertyMutationVariables = Exact<{
  input: Array<AddEventPropertyInput> | AddEventPropertyInput;
}>;


export type AddEventPropertyMutation = { __typename?: 'Mutation', addEventProperty?: { __typename?: 'AddEventPropertyPayload', numUids?: number | null, eventProperty?: Array<{ __typename?: 'EventProperty', id: string, label: string, value: string, iid: string, event: { __typename?: 'Event', id: string, user: { __typename?: 'User', email: string } } } | null> | null } | null };

export type AddUserMutationVariables = Exact<{
  input: Array<AddUserInput> | AddUserInput;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'AddUserPayload', numUids?: number | null } | null };

export type DeleteEventMutationVariables = Exact<{
  filter: EventFilter;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'DeleteEventPayload', numUids?: number | null, event?: Array<{ __typename?: 'Event', id: string, label: string } | null> | null } | null };

export type DeleteEventInstanceMutationVariables = Exact<{
  filter: EventInstanceFilter;
}>;


export type DeleteEventInstanceMutation = { __typename?: 'Mutation', deleteEventInstance?: { __typename?: 'DeleteEventInstancePayload', numUids?: number | null, eventInstance?: Array<{ __typename?: 'EventInstance', iid: string } | null> | null } | null };

export type DeleteEventInstanceOccurrenceMutationVariables = Exact<{
  filter: EventInstanceOccurrenceFilter;
}>;


export type DeleteEventInstanceOccurrenceMutation = { __typename?: 'Mutation', deleteEventInstanceOccurrence?: { __typename?: 'DeleteEventInstanceOccurrencePayload', numUids?: number | null, eventInstanceOccurrence?: Array<{ __typename?: 'EventInstanceOccurrence', endDateTime: any, iid: string, startDateTime: any } | null> | null } | null };

export type DeleteEventInstanceTagMutationVariables = Exact<{
  filter: EventInstanceTagFilter;
}>;


export type DeleteEventInstanceTagMutation = { __typename?: 'Mutation', deleteEventInstanceTag?: { __typename?: 'DeleteEventInstanceTagPayload', numUids?: number | null, eventInstanceTag?: Array<{ __typename?: 'EventInstanceTag', id: string, iid: string, label: string } | null> | null } | null };

export type DeleteEventPropertyMutationVariables = Exact<{
  filter: EventPropertyFilter;
}>;


export type DeleteEventPropertyMutation = { __typename?: 'Mutation', deleteEventProperty?: { __typename?: 'DeleteEventPropertyPayload', numUids?: number | null, eventProperty?: Array<{ __typename?: 'EventProperty', id: string, iid: string, label: string, value: string, event: { __typename?: 'Event', id: string, label: string } } | null> | null } | null };

export type DeleteUserMutationVariables = Exact<{
  filter: UserFilter;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'DeleteUserPayload', numUids?: number | null } | null };

export type QueryEventQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryEventQuery = { __typename?: 'Query', queryEvent?: Array<{ __typename?: 'Event', id: string, iid: string, label: string, instances?: Array<{ __typename?: 'EventInstance', id: string, iid: string, occurrences?: Array<{ __typename?: 'EventInstanceOccurrence', endDateTime: any, iid: string, startDateTime: any }> | null, tags?: Array<{ __typename?: 'EventInstanceTag', id: string, iid: string, label: string }> | null } | null> | null, properties?: Array<{ __typename?: 'EventProperty', id: string, iid: string, label: string, value: string } | null> | null, user: { __typename?: 'User', email: string, iid: string } } | null> | null };

export type QueryEventInstanceQueryVariables = Exact<{
  filter?: InputMaybe<EventFilter>;
}>;


export type QueryEventInstanceQuery = { __typename?: 'Query', queryEventInstance?: Array<{ __typename?: 'EventInstance', iid: string, occurrences?: Array<{ __typename?: 'EventInstanceOccurrence', iid: string, endDateTime: any, startDateTime: any }> | null, event: { __typename?: 'Event', id: string }, tags?: Array<{ __typename?: 'EventInstanceTag', label: string, iid: string, id: string }> | null } | null> | null };

export type QueryEventInstanceOccurrenceQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryEventInstanceOccurrenceQuery = { __typename?: 'Query', queryEventInstanceOccurrence?: Array<{ __typename?: 'EventInstanceOccurrence', iid: string, startDateTime: any, endDateTime: any, eventInstance: { __typename?: 'EventInstance', iid: string, id: string, tags?: Array<{ __typename?: 'EventInstanceTag', id: string, iid: string, label: string }> | null, event: { __typename?: 'Event', id: string, iid: string, label: string } } } | null> | null };

export type QueryEventPropertyQueryVariables = Exact<{
  filter?: InputMaybe<EventPropertyFilter>;
}>;


export type QueryEventPropertyQuery = { __typename?: 'Query', queryEventProperty?: Array<{ __typename?: 'EventProperty', id: string, label: string, value: string, event: { __typename?: 'Event', user: { __typename?: 'User', email: string } } } | null> | null };

export type QueryUserQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
}>;


export type QueryUserQuery = { __typename?: 'Query', queryUser?: Array<{ __typename?: 'User', email: string, iid: string } | null> | null };

export type UpdateEventMutationVariables = Exact<{
  input: UpdateEventInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'UpdateEventPayload', numUids?: number | null, event?: Array<{ __typename?: 'Event', id: string, iid: string, label: string } | null> | null } | null };

export type UpdateEventInstanceMutationVariables = Exact<{
  input: UpdateEventInstanceInput;
}>;


export type UpdateEventInstanceMutation = { __typename?: 'Mutation', updateEventInstance?: { __typename?: 'UpdateEventInstancePayload', numUids?: number | null, eventInstance?: Array<{ __typename?: 'EventInstance', iid: string } | null> | null } | null };

export type UpdateEventPropertyMutationVariables = Exact<{
  input: UpdateEventPropertyInput;
}>;


export type UpdateEventPropertyMutation = { __typename?: 'Mutation', updateEventProperty?: { __typename?: 'UpdateEventPropertyPayload', numUids?: number | null, eventProperty?: Array<{ __typename?: 'EventProperty', id: string, label: string, value: string, event: { __typename?: 'Event', id: string, label: string } } | null> | null } | null };

export type MutationMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserPayload', numUids?: number | null } | null };


export const AddEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"occurrences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEventMutation, AddEventMutationVariables>;
export const AddEventInstanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEventInstance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventInstanceInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEventInstance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"occurrences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEventInstanceMutation, AddEventInstanceMutationVariables>;
export const AddEventInstanceOccurrenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEventInstanceOccurrence"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventInstanceOccurrenceInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEventInstanceOccurrence"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<AddEventInstanceOccurrenceMutation, AddEventInstanceOccurrenceMutationVariables>;
export const AddEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventPropertyInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEventPropertyMutation, AddEventPropertyMutationVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"upsert"},"value":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const DeleteEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventMutation, DeleteEventMutationVariables>;
export const DeleteEventInstanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventInstance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventInstanceFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEventInstance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventInstanceMutation, DeleteEventInstanceMutationVariables>;
export const DeleteEventInstanceOccurrenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventInstanceOccurrence"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventInstanceOccurrenceFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEventInstanceOccurrence"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventInstanceOccurrence"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventInstanceOccurrenceMutation, DeleteEventInstanceOccurrenceMutationVariables>;
export const DeleteEventInstanceTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventInstanceTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventInstanceTagFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEventInstanceTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventInstanceTag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventInstanceTagMutation, DeleteEventInstanceTagMutationVariables>;
export const DeleteEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventPropertyFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventPropertyMutation, DeleteEventPropertyMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const QueryEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"instances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"occurrences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventQuery, QueryEventQueryVariables>;
export const QueryEventInstanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEventInstance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEventInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"occurrences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventInstanceQuery, QueryEventInstanceQueryVariables>;
export const QueryEventInstanceOccurrenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEventInstanceOccurrence"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEventInstanceOccurrence"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"eventInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventInstanceOccurrenceQuery, QueryEventInstanceOccurrenceQueryVariables>;
export const QueryEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventPropertyFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventPropertyQuery, QueryEventPropertyQueryVariables>;
export const QueryUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}}]}}]}}]} as unknown as DocumentNode<QueryUserQuery, QueryUserQueryVariables>;
export const UpdateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEventMutation, UpdateEventMutationVariables>;
export const UpdateEventInstanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEventInstance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEventInstanceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEventInstance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventInstance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEventInstanceMutation, UpdateEventInstanceMutationVariables>;
export const UpdateEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEventPropertyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEventPropertyMutation, UpdateEventPropertyMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;