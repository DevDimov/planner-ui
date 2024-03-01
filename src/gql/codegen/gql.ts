/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddEvent($input: [AddEventInput!]!) {\n    addEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n        tags {\n          iid\n          id\n          label\n        }\n        properties {\n          iid\n          id\n          label\n          value\n        }\n        entries {\n          iid\n          startDateTime\n          endDateTime\n        }\n        user {\n          email\n        }\n      }\n    }\n  }\n": types.AddEventDocument,
    "\n  mutation AddEventEntry($input: [AddEventEntryInput!]!) {\n  addEventEntry(input: $input) {\n    numUids\n    eventEntry {\n      iid\n      startDateTime\n      endDateTime\n      event {\n        id\n        iid\n        label\n        tags {\n          id\n          iid\n          label\n        }\n        properties {\n          id\n          iid\n          label\n          value\n        }\n      }\n    }\n  }\n}\n": types.AddEventEntryDocument,
    "\n  mutation AddEventProperty($input: [AddEventPropertyInput!]!) {\n    addEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        iid\n        event {\n          id\n          user {\n            email\n          }\n        }\n      }\n    }\n  }\n": types.AddEventPropertyDocument,
    "\n  mutation AddUser($input: [AddUserInput!]!, $upsert: Boolean) {\n    addUser(input: $input, upsert: $upsert) {\n      numUids\n    }\n  }\n": types.AddUserDocument,
    "\n  mutation DeleteEvent($filter: EventFilter!) {\n    deleteEvent(filter: $filter) {\n      numUids\n      event {\n        id\n        label\n      }\n    }\n  }\n": types.DeleteEventDocument,
    "\n  mutation DeleteEventEntry($filter: EventEntryFilter!) {\n    deleteEventEntry(filter: $filter) {\n      numUids\n      eventEntry {\n        endDateTime\n        iid\n        startDateTime\n      }\n    }\n  }\n": types.DeleteEventEntryDocument,
    "\n  mutation DeleteEventProperty($filter: EventPropertyFilter!) {\n    deleteEventProperty(filter: $filter) {\n      numUids\n      eventProperty {\n        id\n        iid\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n": types.DeleteEventPropertyDocument,
    "\n  mutation DeleteTag($filter: TagFilter!) {\n    deleteTag(filter: $filter) {\n      numUids\n      tag {\n        id\n        iid\n        label\n      }\n    }\n  }\n": types.DeleteTagDocument,
    "\n  mutation DeleteUser($filter: UserFilter!) {\n    deleteUser(filter: $filter) {\n      numUids\n    }\n  }\n": types.DeleteUserDocument,
    "\nquery QueryEvent {\n  queryEvent {\n    iid\n    id\n    label\n    entries {\n      iid\n      startDateTime\n      endDateTime\n    }\n    tags {\n      id\n      iid\n      label\n    }\n    properties {\n      id\n      iid\n      label\n      value\n    }\n    user {\n      email\n      iid\n    }\n  }\n}\n": types.QueryEventDocument,
    "\nquery QueryEventEntry($filter: EventFilter) {\n    queryEventEntry {\n      iid\n      startDateTime\n      endDateTime\n      event(filter: $filter) {\n        iid\n        id\n        label\n        tags {\n          iid\n          id\n          label\n        }\n        properties {\n          iid\n          id\n          label\n          value\n        }\n      }\n    }\n  }\n": types.QueryEventEntryDocument,
    "\n  query QueryEventProperty($filter: EventPropertyFilter) {\n    queryEventProperty(filter: $filter) {\n      iid\n      id\n      label\n      value\n      event {\n        iid\n        id\n        label\n      }\n    }\n  }\n": types.QueryEventPropertyDocument,
    "\n  query QueryUser($filter: UserFilter) {\n    queryUser(filter: $filter) {\n      email\n      iid\n    }\n  }\n": types.QueryUserDocument,
    "\n  mutation UpdateEvent($input: UpdateEventInput!) {\n    updateEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n      }\n    }\n  }\n": types.UpdateEventDocument,
    "\n  mutation UpdateEventEntry($input: UpdateEventEntryInput!) {\n    updateEventEntry(input: $input) {\n      numUids\n      eventEntry {\n        iid\n      }\n    }\n  }\n": types.UpdateEventEntryDocument,
    "\n  mutation UpdateEventProperty($input: UpdateEventPropertyInput!) {\n    updateEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n": types.UpdateEventPropertyDocument,
    "\n  mutation Mutation($input: UpdateUserInput!) {\n    updateUser(input: $input) {\n      numUids\n    }\n  }\n": types.MutationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddEvent($input: [AddEventInput!]!) {\n    addEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n        tags {\n          iid\n          id\n          label\n        }\n        properties {\n          iid\n          id\n          label\n          value\n        }\n        entries {\n          iid\n          startDateTime\n          endDateTime\n        }\n        user {\n          email\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddEvent($input: [AddEventInput!]!) {\n    addEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n        tags {\n          iid\n          id\n          label\n        }\n        properties {\n          iid\n          id\n          label\n          value\n        }\n        entries {\n          iid\n          startDateTime\n          endDateTime\n        }\n        user {\n          email\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddEventEntry($input: [AddEventEntryInput!]!) {\n  addEventEntry(input: $input) {\n    numUids\n    eventEntry {\n      iid\n      startDateTime\n      endDateTime\n      event {\n        id\n        iid\n        label\n        tags {\n          id\n          iid\n          label\n        }\n        properties {\n          id\n          iid\n          label\n          value\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\n  mutation AddEventEntry($input: [AddEventEntryInput!]!) {\n  addEventEntry(input: $input) {\n    numUids\n    eventEntry {\n      iid\n      startDateTime\n      endDateTime\n      event {\n        id\n        iid\n        label\n        tags {\n          id\n          iid\n          label\n        }\n        properties {\n          id\n          iid\n          label\n          value\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddEventProperty($input: [AddEventPropertyInput!]!) {\n    addEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        iid\n        event {\n          id\n          user {\n            email\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddEventProperty($input: [AddEventPropertyInput!]!) {\n    addEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        iid\n        event {\n          id\n          user {\n            email\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddUser($input: [AddUserInput!]!, $upsert: Boolean) {\n    addUser(input: $input, upsert: $upsert) {\n      numUids\n    }\n  }\n"): (typeof documents)["\n  mutation AddUser($input: [AddUserInput!]!, $upsert: Boolean) {\n    addUser(input: $input, upsert: $upsert) {\n      numUids\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEvent($filter: EventFilter!) {\n    deleteEvent(filter: $filter) {\n      numUids\n      event {\n        id\n        label\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEvent($filter: EventFilter!) {\n    deleteEvent(filter: $filter) {\n      numUids\n      event {\n        id\n        label\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEventEntry($filter: EventEntryFilter!) {\n    deleteEventEntry(filter: $filter) {\n      numUids\n      eventEntry {\n        endDateTime\n        iid\n        startDateTime\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEventEntry($filter: EventEntryFilter!) {\n    deleteEventEntry(filter: $filter) {\n      numUids\n      eventEntry {\n        endDateTime\n        iid\n        startDateTime\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEventProperty($filter: EventPropertyFilter!) {\n    deleteEventProperty(filter: $filter) {\n      numUids\n      eventProperty {\n        id\n        iid\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEventProperty($filter: EventPropertyFilter!) {\n    deleteEventProperty(filter: $filter) {\n      numUids\n      eventProperty {\n        id\n        iid\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteTag($filter: TagFilter!) {\n    deleteTag(filter: $filter) {\n      numUids\n      tag {\n        id\n        iid\n        label\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTag($filter: TagFilter!) {\n    deleteTag(filter: $filter) {\n      numUids\n      tag {\n        id\n        iid\n        label\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteUser($filter: UserFilter!) {\n    deleteUser(filter: $filter) {\n      numUids\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($filter: UserFilter!) {\n    deleteUser(filter: $filter) {\n      numUids\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery QueryEvent {\n  queryEvent {\n    iid\n    id\n    label\n    entries {\n      iid\n      startDateTime\n      endDateTime\n    }\n    tags {\n      id\n      iid\n      label\n    }\n    properties {\n      id\n      iid\n      label\n      value\n    }\n    user {\n      email\n      iid\n    }\n  }\n}\n"): (typeof documents)["\nquery QueryEvent {\n  queryEvent {\n    iid\n    id\n    label\n    entries {\n      iid\n      startDateTime\n      endDateTime\n    }\n    tags {\n      id\n      iid\n      label\n    }\n    properties {\n      id\n      iid\n      label\n      value\n    }\n    user {\n      email\n      iid\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery QueryEventEntry($filter: EventFilter) {\n    queryEventEntry {\n      iid\n      startDateTime\n      endDateTime\n      event(filter: $filter) {\n        iid\n        id\n        label\n        tags {\n          iid\n          id\n          label\n        }\n        properties {\n          iid\n          id\n          label\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery QueryEventEntry($filter: EventFilter) {\n    queryEventEntry {\n      iid\n      startDateTime\n      endDateTime\n      event(filter: $filter) {\n        iid\n        id\n        label\n        tags {\n          iid\n          id\n          label\n        }\n        properties {\n          iid\n          id\n          label\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryEventProperty($filter: EventPropertyFilter) {\n    queryEventProperty(filter: $filter) {\n      iid\n      id\n      label\n      value\n      event {\n        iid\n        id\n        label\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryEventProperty($filter: EventPropertyFilter) {\n    queryEventProperty(filter: $filter) {\n      iid\n      id\n      label\n      value\n      event {\n        iid\n        id\n        label\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryUser($filter: UserFilter) {\n    queryUser(filter: $filter) {\n      email\n      iid\n    }\n  }\n"): (typeof documents)["\n  query QueryUser($filter: UserFilter) {\n    queryUser(filter: $filter) {\n      email\n      iid\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateEvent($input: UpdateEventInput!) {\n    updateEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEvent($input: UpdateEventInput!) {\n    updateEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateEventEntry($input: UpdateEventEntryInput!) {\n    updateEventEntry(input: $input) {\n      numUids\n      eventEntry {\n        iid\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEventEntry($input: UpdateEventEntryInput!) {\n    updateEventEntry(input: $input) {\n      numUids\n      eventEntry {\n        iid\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateEventProperty($input: UpdateEventPropertyInput!) {\n    updateEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEventProperty($input: UpdateEventPropertyInput!) {\n    updateEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Mutation($input: UpdateUserInput!) {\n    updateUser(input: $input) {\n      numUids\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($input: UpdateUserInput!) {\n    updateUser(input: $input) {\n      numUids\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;