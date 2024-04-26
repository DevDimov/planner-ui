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

export type AddEventEntryInput = {
  endDateTime: Scalars['DateTime']['input'];
  event: EventRef;
  startDateTime: Scalars['DateTime']['input'];
  tags?: InputMaybe<Array<InputMaybe<TagRef>>>;
};

export type AddEventEntryPayload = {
  __typename?: 'AddEventEntryPayload';
  eventEntry?: Maybe<Array<Maybe<EventEntry>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEventEntryPayloadEventEntryArgs = {
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventEntryOrder>;
};

export type AddEventInput = {
  entries?: InputMaybe<Array<InputMaybe<EventEntryRef>>>;
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  properties?: InputMaybe<Array<InputMaybe<EventPropertyRef>>>;
  user: UserRef;
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

export type AddTagInput = {
  color?: InputMaybe<TagColor>;
  entries?: InputMaybe<Array<InputMaybe<EventEntryRef>>>;
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  user: UserRef;
};

export type AddTagPayload = {
  __typename?: 'AddTagPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Array<Maybe<Tag>>>;
};


export type AddTagPayloadTagArgs = {
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TagOrder>;
};

export type AddUserInput = {
  email: Scalars['String']['input'];
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  tags?: InputMaybe<Array<InputMaybe<TagRef>>>;
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

export type DeleteEventEntryPayload = {
  __typename?: 'DeleteEventEntryPayload';
  eventEntry?: Maybe<Array<Maybe<EventEntry>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEventEntryPayloadEventEntryArgs = {
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventEntryOrder>;
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

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Array<Maybe<Tag>>>;
};


export type DeleteTagPayloadTagArgs = {
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TagOrder>;
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
  entries?: Maybe<Array<Maybe<EventEntry>>>;
  entriesAggregate?: Maybe<EventEntryAggregateResult>;
  id: Scalars['String']['output'];
  iid: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  properties?: Maybe<Array<Maybe<EventProperty>>>;
  propertiesAggregate?: Maybe<EventPropertyAggregateResult>;
  user: User;
};


export type EventEntriesArgs = {
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventEntryOrder>;
};


export type EventEntriesAggregateArgs = {
  filter?: InputMaybe<EventEntryFilter>;
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

export type EventEntry = {
  __typename?: 'EventEntry';
  endDateTime: Scalars['DateTime']['output'];
  event: Event;
  iid: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsAggregate?: Maybe<TagAggregateResult>;
};


export type EventEntryEventArgs = {
  filter?: InputMaybe<EventFilter>;
};


export type EventEntryTagsArgs = {
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TagOrder>;
};


export type EventEntryTagsAggregateArgs = {
  filter?: InputMaybe<TagFilter>;
};

export type EventEntryAggregateResult = {
  __typename?: 'EventEntryAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  endDateTimeMax?: Maybe<Scalars['DateTime']['output']>;
  endDateTimeMin?: Maybe<Scalars['DateTime']['output']>;
  startDateTimeMax?: Maybe<Scalars['DateTime']['output']>;
  startDateTimeMin?: Maybe<Scalars['DateTime']['output']>;
};

export type EventEntryFilter = {
  and?: InputMaybe<Array<InputMaybe<EventEntryFilter>>>;
  endDateTime?: InputMaybe<DateTimeFilter>;
  has?: InputMaybe<Array<InputMaybe<EventEntryHasFilter>>>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<EventEntryFilter>;
  or?: InputMaybe<Array<InputMaybe<EventEntryFilter>>>;
  startDateTime?: InputMaybe<DateTimeFilter>;
};

export enum EventEntryHasFilter {
  EndDateTime = 'endDateTime',
  Event = 'event',
  StartDateTime = 'startDateTime',
  Tags = 'tags'
}

export type EventEntryOrder = {
  asc?: InputMaybe<EventEntryOrderable>;
  desc?: InputMaybe<EventEntryOrderable>;
  then?: InputMaybe<EventEntryOrder>;
};

export enum EventEntryOrderable {
  EndDateTime = 'endDateTime',
  StartDateTime = 'startDateTime'
}

export type EventEntryPatch = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventRef>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<Array<InputMaybe<TagRef>>>;
};

export type EventEntryRef = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventRef>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<Array<InputMaybe<TagRef>>>;
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
  Entries = 'entries',
  Id = 'id',
  Label = 'label',
  Properties = 'properties',
  User = 'user'
}

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
  entries?: InputMaybe<Array<InputMaybe<EventEntryRef>>>;
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
  entries?: InputMaybe<Array<InputMaybe<EventEntryRef>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
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
  addEventEntry?: Maybe<AddEventEntryPayload>;
  addEventProperty?: Maybe<AddEventPropertyPayload>;
  addTag?: Maybe<AddTagPayload>;
  addUser?: Maybe<AddUserPayload>;
  deleteEvent?: Maybe<DeleteEventPayload>;
  deleteEventEntry?: Maybe<DeleteEventEntryPayload>;
  deleteEventProperty?: Maybe<DeleteEventPropertyPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  updateEvent?: Maybe<UpdateEventPayload>;
  updateEventEntry?: Maybe<UpdateEventEntryPayload>;
  updateEventProperty?: Maybe<UpdateEventPropertyPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddEventArgs = {
  input: Array<AddEventInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddEventEntryArgs = {
  input: Array<AddEventEntryInput>;
};


export type MutationAddEventPropertyArgs = {
  input: Array<AddEventPropertyInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddTagArgs = {
  input: Array<AddTagInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteEventArgs = {
  filter: EventFilter;
};


export type MutationDeleteEventEntryArgs = {
  filter: EventEntryFilter;
};


export type MutationDeleteEventPropertyArgs = {
  filter: EventPropertyFilter;
};


export type MutationDeleteTagArgs = {
  filter: TagFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationUpdateEventEntryArgs = {
  input: UpdateEventEntryInput;
};


export type MutationUpdateEventPropertyArgs = {
  input: UpdateEventPropertyInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
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
  aggregateEventEntry?: Maybe<EventEntryAggregateResult>;
  aggregateEventProperty?: Maybe<EventPropertyAggregateResult>;
  aggregateTag?: Maybe<TagAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getEvent?: Maybe<Event>;
  getEventEntry?: Maybe<EventEntry>;
  getEventProperty?: Maybe<EventProperty>;
  getTag?: Maybe<Tag>;
  getUser?: Maybe<User>;
  queryEvent?: Maybe<Array<Maybe<Event>>>;
  queryEventEntry?: Maybe<Array<Maybe<EventEntry>>>;
  queryEventProperty?: Maybe<Array<Maybe<EventProperty>>>;
  queryTag?: Maybe<Array<Maybe<Tag>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryAggregateEventArgs = {
  filter?: InputMaybe<EventFilter>;
};


export type QueryAggregateEventEntryArgs = {
  filter?: InputMaybe<EventEntryFilter>;
};


export type QueryAggregateEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
};


export type QueryAggregateTagArgs = {
  filter?: InputMaybe<TagFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryGetEventArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEventEntryArgs = {
  iid: Scalars['ID']['input'];
};


export type QueryGetEventPropertyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetTagArgs = {
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


export type QueryQueryEventEntryArgs = {
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventEntryOrder>;
};


export type QueryQueryEventPropertyArgs = {
  filter?: InputMaybe<EventPropertyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventPropertyOrder>;
};


export type QueryQueryTagArgs = {
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TagOrder>;
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

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<TagColor>;
  entries?: Maybe<Array<Maybe<EventEntry>>>;
  entriesAggregate?: Maybe<EventEntryAggregateResult>;
  id: Scalars['String']['output'];
  iid: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  user: User;
};


export type TagEntriesArgs = {
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventEntryOrder>;
};


export type TagEntriesAggregateArgs = {
  filter?: InputMaybe<EventEntryFilter>;
};


export type TagUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type TagAggregateResult = {
  __typename?: 'TagAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  idMax?: Maybe<Scalars['String']['output']>;
  idMin?: Maybe<Scalars['String']['output']>;
  labelMax?: Maybe<Scalars['String']['output']>;
  labelMin?: Maybe<Scalars['String']['output']>;
};

export enum TagColor {
  Black = 'Black',
  Blue = 'Blue',
  Default = 'Default',
  Gray = 'Gray',
  Green = 'Green',
  Orange = 'Orange',
  Purple = 'Purple',
  Red = 'Red',
  White = 'White',
  Yellow = 'Yellow'
}

export type TagFilter = {
  and?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  has?: InputMaybe<Array<InputMaybe<TagHasFilter>>>;
  id?: InputMaybe<StringHashFilter>;
  iid?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<TagFilter>;
  or?: InputMaybe<Array<InputMaybe<TagFilter>>>;
};

export enum TagHasFilter {
  Color = 'color',
  Entries = 'entries',
  Id = 'id',
  Label = 'label',
  User = 'user'
}

export type TagOrder = {
  asc?: InputMaybe<TagOrderable>;
  desc?: InputMaybe<TagOrderable>;
  then?: InputMaybe<TagOrder>;
};

export enum TagOrderable {
  Id = 'id',
  Label = 'label'
}

export type TagPatch = {
  color?: InputMaybe<TagColor>;
  entries?: InputMaybe<Array<InputMaybe<EventEntryRef>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRef>;
};

export type TagRef = {
  color?: InputMaybe<TagColor>;
  entries?: InputMaybe<Array<InputMaybe<EventEntryRef>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRef>;
};

export type UpdateEventEntryInput = {
  filter: EventEntryFilter;
  remove?: InputMaybe<EventEntryPatch>;
  set?: InputMaybe<EventEntryPatch>;
};

export type UpdateEventEntryPayload = {
  __typename?: 'UpdateEventEntryPayload';
  eventEntry?: Maybe<Array<Maybe<EventEntry>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEventEntryPayloadEventEntryArgs = {
  filter?: InputMaybe<EventEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EventEntryOrder>;
};

export type UpdateEventInput = {
  filter: EventFilter;
  remove?: InputMaybe<EventPatch>;
  set?: InputMaybe<EventPatch>;
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

export type UpdateTagInput = {
  filter: TagFilter;
  remove?: InputMaybe<TagPatch>;
  set?: InputMaybe<TagPatch>;
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Array<Maybe<Tag>>>;
};


export type UpdateTagPayloadTagArgs = {
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TagOrder>;
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
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsAggregate?: Maybe<TagAggregateResult>;
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
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TagOrder>;
};


export type UserTagsAggregateArgs = {
  filter?: InputMaybe<TagFilter>;
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
  tags?: InputMaybe<Array<InputMaybe<TagRef>>>;
};

export type UserRef = {
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  iid?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<TagRef>>>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type AddEventMutationVariables = Exact<{
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
  input: Array<AddEventInput> | AddEventInput;
}>;


export type AddEventMutation = { __typename?: 'Mutation', addEvent?: { __typename?: 'AddEventPayload', numUids?: number | null, event?: Array<{ __typename?: 'Event', id: string, iid: string, label: string, properties?: Array<{ __typename?: 'EventProperty', iid: string, id: string, label: string, value: string } | null> | null } | null> | null } | null };

export type AddEventEntryMutationVariables = Exact<{
  input: Array<AddEventEntryInput> | AddEventEntryInput;
}>;


export type AddEventEntryMutation = { __typename?: 'Mutation', addEventEntry?: { __typename?: 'AddEventEntryPayload', numUids?: number | null, eventEntry?: Array<{ __typename?: 'EventEntry', iid: string, startDateTime: any, endDateTime: any, tags?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null, event: { __typename?: 'Event', iid: string, id: string, label: string } } | null> | null } | null };

export type AddEventPropertyMutationVariables = Exact<{
  input: Array<AddEventPropertyInput> | AddEventPropertyInput;
}>;


export type AddEventPropertyMutation = { __typename?: 'Mutation', addEventProperty?: { __typename?: 'AddEventPropertyPayload', numUids?: number | null, eventProperty?: Array<{ __typename?: 'EventProperty', iid: string, id: string, label: string, value: string, event: { __typename?: 'Event', iid: string, id: string, user: { __typename?: 'User', email: string } } } | null> | null } | null };

export type AddTagMutationVariables = Exact<{
  input: Array<AddTagInput> | AddTagInput;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AddTagMutation = { __typename?: 'Mutation', addTag?: { __typename?: 'AddTagPayload', numUids?: number | null, tag?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null } | null };

export type AddUserMutationVariables = Exact<{
  input: Array<AddUserInput> | AddUserInput;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'AddUserPayload', numUids?: number | null } | null };

export type DeleteEventMutationVariables = Exact<{
  filter: EventFilter;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'DeleteEventPayload', numUids?: number | null, event?: Array<{ __typename?: 'Event', iid: string, id: string, label: string } | null> | null } | null };

export type DeleteEventEntryMutationVariables = Exact<{
  filter: EventEntryFilter;
}>;


export type DeleteEventEntryMutation = { __typename?: 'Mutation', deleteEventEntry?: { __typename?: 'DeleteEventEntryPayload', numUids?: number | null, eventEntry?: Array<{ __typename?: 'EventEntry', iid: string, startDateTime: any, endDateTime: any } | null> | null } | null };

export type DeleteEventPropertyMutationVariables = Exact<{
  filter: EventPropertyFilter;
}>;


export type DeleteEventPropertyMutation = { __typename?: 'Mutation', deleteEventProperty?: { __typename?: 'DeleteEventPropertyPayload', numUids?: number | null, eventProperty?: Array<{ __typename?: 'EventProperty', iid: string, id: string, label: string, value: string, event: { __typename?: 'Event', iid: string, id: string, label: string } } | null> | null } | null };

export type DeleteTagMutationVariables = Exact<{
  filter: TagFilter;
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag?: { __typename?: 'DeleteTagPayload', numUids?: number | null, tag?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null } | null };

export type DeleteUserMutationVariables = Exact<{
  filter: UserFilter;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'DeleteUserPayload', numUids?: number | null } | null };

export type QueryEventQueryVariables = Exact<{
  filter?: InputMaybe<EventFilter>;
}>;


export type QueryEventQuery = { __typename?: 'Query', queryEvent?: Array<{ __typename?: 'Event', iid: string, id: string, label: string, properties?: Array<{ __typename?: 'EventProperty', iid: string, id: string, label: string, value: string } | null> | null } | null> | null };

export type QueryEventEntryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryEventEntryQuery = { __typename?: 'Query', queryEventEntry?: Array<{ __typename?: 'EventEntry', iid: string, startDateTime: any, endDateTime: any, event: { __typename?: 'Event', iid: string, label: string }, tags?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null } | null> | null };

export type QueryEventPropertyQueryVariables = Exact<{
  filter?: InputMaybe<EventPropertyFilter>;
}>;


export type QueryEventPropertyQuery = { __typename?: 'Query', queryEventProperty?: Array<{ __typename?: 'EventProperty', iid: string, id: string, label: string, value: string, event: { __typename?: 'Event', iid: string, id: string, label: string } } | null> | null };

export type QueryTagQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryTagQuery = { __typename?: 'Query', queryTag?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null };

export type QueryUserQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
}>;


export type QueryUserQuery = { __typename?: 'Query', queryUser?: Array<{ __typename?: 'User', email: string, iid: string } | null> | null };

export type UpdateEventMutationVariables = Exact<{
  input: UpdateEventInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'UpdateEventPayload', numUids?: number | null, event?: Array<{ __typename?: 'Event', iid: string, id: string, label: string } | null> | null } | null };

export type UpdateEventEntryMutationVariables = Exact<{
  input: UpdateEventEntryInput;
}>;


export type UpdateEventEntryMutation = { __typename?: 'Mutation', updateEventEntry?: { __typename?: 'UpdateEventEntryPayload', numUids?: number | null, eventEntry?: Array<{ __typename?: 'EventEntry', iid: string, startDateTime: any, endDateTime: any, tags?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null } | null> | null } | null };

export type UpdateEventPropertyMutationVariables = Exact<{
  input: UpdateEventPropertyInput;
}>;


export type UpdateEventPropertyMutation = { __typename?: 'Mutation', updateEventProperty?: { __typename?: 'UpdateEventPropertyPayload', numUids?: number | null, eventProperty?: Array<{ __typename?: 'EventProperty', iid: string, id: string, label: string, value: string, event: { __typename?: 'Event', iid: string, id: string, label: string } } | null> | null } | null };

export type UpdateTagMutationVariables = Exact<{
  input: UpdateTagInput;
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag?: { __typename?: 'UpdateTagPayload', numUids?: number | null, tag?: Array<{ __typename?: 'Tag', iid: string, id: string, label: string, color?: TagColor | null } | null> | null } | null };

export type MutationMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserPayload', numUids?: number | null } | null };


export const AddEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"upsert"},"value":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEventMutation, AddEventMutationVariables>;
export const AddEventEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEventEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventEntryInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEventEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEventEntryMutation, AddEventEntryMutationVariables>;
export const AddEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddEventPropertyInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEventPropertyMutation, AddEventPropertyMutationVariables>;
export const AddTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTagInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"upsert"},"value":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<AddTagMutation, AddTagMutationVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"upsert"},"value":{"kind":"Variable","name":{"kind":"Name","value":"upsert"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const DeleteEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventMutation, DeleteEventMutationVariables>;
export const DeleteEventEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventEntryFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEventEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventEntryMutation, DeleteEventEntryMutationVariables>;
export const DeleteEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventPropertyFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteEventPropertyMutation, DeleteEventPropertyMutationVariables>;
export const DeleteTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const QueryEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventQuery, QueryEventQueryVariables>;
export const QueryEventEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEventEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEventEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventEntryQuery, QueryEventEntryQueryVariables>;
export const QueryEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventPropertyFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<QueryEventPropertyQuery, QueryEventPropertyQueryVariables>;
export const QueryTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryTag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryTag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<QueryTagQuery, QueryTagQueryVariables>;
export const QueryUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"iid"}}]}}]}}]} as unknown as DocumentNode<QueryUserQuery, QueryUserQueryVariables>;
export const UpdateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEventMutation, UpdateEventMutationVariables>;
export const UpdateEventEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEventEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEventEntryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEventEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEventEntryMutation, UpdateEventEntryMutationVariables>;
export const UpdateEventPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEventProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEventPropertyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEventProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"eventProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEventPropertyMutation, UpdateEventPropertyMutationVariables>;
export const UpdateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTagInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTagMutation, UpdateTagMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;