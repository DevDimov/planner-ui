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
    "\n  mutation AddEvent($input: [AddEventInput!]!) {\n    addEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n        user {\n          email\n        }\n        instances {\n          iid\n          occurrences {\n            iid\n          }\n          tags {\n            id\n            label\n          }\n        }\n      }\n    }\n  }\n": types.AddEventDocument,
    "\n  mutation AddEventInstance($input: [AddEventInstanceInput!]!) {\n    addEventInstance(input: $input) {\n      numUids\n      eventInstance {\n        iid\n        occurrences {\n          iid\n          endDateTime\n          startDateTime\n        }\n      }\n    }\n  }\n": types.AddEventInstanceDocument,
    "\n  mutation AddEventInstanceOccurrence(\n    $input: [AddEventInstanceOccurrenceInput!]!\n  ) {\n    addEventInstanceOccurrence(input: $input) {\n      numUids\n    }\n  }\n": types.AddEventInstanceOccurrenceDocument,
    "\n  mutation AddEventProperty($input: [AddEventPropertyInput!]!) {\n    addEventProperty(input: $input) {\n      numUids\n      eventProperty {\n        id\n        label\n        value\n        iid\n        event {\n          id\n          user {\n            email\n          }\n        }\n      }\n    }\n  }\n": types.AddEventPropertyDocument,
    "\n  mutation AddUser($input: [AddUserInput!]!, $upsert: Boolean) {\n    addUser(input: $input, upsert: $upsert) {\n      numUids\n    }\n  }\n": types.AddUserDocument,
    "\n  mutation DeleteEvent($filter: EventFilter!) {\n    deleteEvent(filter: $filter) {\n      numUids\n      event {\n        id\n        label\n      }\n    }\n  }\n": types.DeleteEventDocument,
    "\n  mutation DeleteEventInstance($filter: EventInstanceFilter!) {\n    deleteEventInstance(filter: $filter) {\n      numUids\n      eventInstance {\n        iid\n      }\n    }\n  }\n": types.DeleteEventInstanceDocument,
    "\n  mutation DeleteEventInstanceOccurrence(\n    $filter: EventInstanceOccurrenceFilter!\n  ) {\n    deleteEventInstanceOccurrence(filter: $filter) {\n      numUids\n      eventInstanceOccurrence {\n        endDateTime\n        iid\n        startDateTime\n      }\n    }\n  }\n": types.DeleteEventInstanceOccurrenceDocument,
    "\n  mutation DeleteEventInstanceTag($filter: EventInstanceTagFilter!) {\n    deleteEventInstanceTag(filter: $filter) {\n      numUids\n      eventInstanceTag {\n        id\n        iid\n        label\n      }\n    }\n  }\n": types.DeleteEventInstanceTagDocument,
    "\n  mutation DeleteEventProperty($filter: EventPropertyFilter!) {\n    deleteEventProperty(filter: $filter) {\n      numUids\n      eventProperty {\n        id\n        iid\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n": types.DeleteEventPropertyDocument,
    "\n  mutation DeleteUser($filter: UserFilter!) {\n    deleteUser(filter: $filter) {\n      numUids\n    }\n  }\n": types.DeleteUserDocument,
    "\nquery QueryEvent {\n  queryEvent {\n    id\n    iid\n    instances {\n      id\n      iid\n      occurrences {\n        endDateTime\n        iid\n        startDateTime\n      }\n      tags {\n        id\n        iid\n        label\n      }\n    }\n    label\n    properties {\n      id\n      iid\n      label\n      value\n    }\n    user {\n      email\n      iid\n    }\n  }\n}\n": types.QueryEventDocument,
    "\n  query QueryEventInstance($filter: EventFilter) {\n    queryEventInstance {\n      iid\n      occurrences {\n        iid\n        endDateTime\n        startDateTime\n      }\n      event(filter: $filter) {\n        id\n      }\n      tags {\n        label\n        iid\n        id\n      }\n    }\n  }\n": types.QueryEventInstanceDocument,
    "\nquery QueryEventInstanceOccurrence {\n  queryEventInstanceOccurrence {\n    iid\n    startDateTime\n    endDateTime\n    eventInstance {\n      iid\n      id\n      tags {\n        id\n        iid\n        label\n      }\n      event {\n        id\n        iid\n        label\n        properties {\n          id\n          iid\n          label\n          value\n        }\n      }\n    }\n  }\n}\n": types.QueryEventInstanceOccurrenceDocument,
    "\n  query QueryEventProperty($filter: EventPropertyFilter) {\n    queryEventProperty(filter: $filter) {\n      id\n      label\n      value\n      event {\n        user {\n          email\n        }\n      }\n    }\n  }\n": types.QueryEventPropertyDocument,
    "\n  query QueryUser($filter: UserFilter) {\n    queryUser(filter: $filter) {\n      email\n      iid\n    }\n  }\n": types.QueryUserDocument,
    "\n  mutation UpdateEvent($input: UpdateEventInput!) {\n    updateEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n      }\n    }\n  }\n": types.UpdateEventDocument,
    "\n  mutation UpdateEventInstance($input: UpdateEventInstanceInput!) {\n    updateEventInstance(input: $input) {\n      numUids\n      eventInstance {\n        iid\n      }\n    }\n  }\n": types.UpdateEventInstanceDocument,
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
export function gql(source: "\n  mutation AddEvent($input: [AddEventInput!]!) {\n    addEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n        user {\n          email\n        }\n        instances {\n          iid\n          occurrences {\n            iid\n          }\n          tags {\n            id\n            label\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddEvent($input: [AddEventInput!]!) {\n    addEvent(input: $input) {\n      numUids\n      event {\n        id\n        iid\n        label\n        user {\n          email\n        }\n        instances {\n          iid\n          occurrences {\n            iid\n          }\n          tags {\n            id\n            label\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddEventInstance($input: [AddEventInstanceInput!]!) {\n    addEventInstance(input: $input) {\n      numUids\n      eventInstance {\n        iid\n        occurrences {\n          iid\n          endDateTime\n          startDateTime\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddEventInstance($input: [AddEventInstanceInput!]!) {\n    addEventInstance(input: $input) {\n      numUids\n      eventInstance {\n        iid\n        occurrences {\n          iid\n          endDateTime\n          startDateTime\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddEventInstanceOccurrence(\n    $input: [AddEventInstanceOccurrenceInput!]!\n  ) {\n    addEventInstanceOccurrence(input: $input) {\n      numUids\n    }\n  }\n"): (typeof documents)["\n  mutation AddEventInstanceOccurrence(\n    $input: [AddEventInstanceOccurrenceInput!]!\n  ) {\n    addEventInstanceOccurrence(input: $input) {\n      numUids\n    }\n  }\n"];
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
export function gql(source: "\n  mutation DeleteEventInstance($filter: EventInstanceFilter!) {\n    deleteEventInstance(filter: $filter) {\n      numUids\n      eventInstance {\n        iid\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEventInstance($filter: EventInstanceFilter!) {\n    deleteEventInstance(filter: $filter) {\n      numUids\n      eventInstance {\n        iid\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEventInstanceOccurrence(\n    $filter: EventInstanceOccurrenceFilter!\n  ) {\n    deleteEventInstanceOccurrence(filter: $filter) {\n      numUids\n      eventInstanceOccurrence {\n        endDateTime\n        iid\n        startDateTime\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEventInstanceOccurrence(\n    $filter: EventInstanceOccurrenceFilter!\n  ) {\n    deleteEventInstanceOccurrence(filter: $filter) {\n      numUids\n      eventInstanceOccurrence {\n        endDateTime\n        iid\n        startDateTime\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEventInstanceTag($filter: EventInstanceTagFilter!) {\n    deleteEventInstanceTag(filter: $filter) {\n      numUids\n      eventInstanceTag {\n        id\n        iid\n        label\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEventInstanceTag($filter: EventInstanceTagFilter!) {\n    deleteEventInstanceTag(filter: $filter) {\n      numUids\n      eventInstanceTag {\n        id\n        iid\n        label\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEventProperty($filter: EventPropertyFilter!) {\n    deleteEventProperty(filter: $filter) {\n      numUids\n      eventProperty {\n        id\n        iid\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteEventProperty($filter: EventPropertyFilter!) {\n    deleteEventProperty(filter: $filter) {\n      numUids\n      eventProperty {\n        id\n        iid\n        label\n        value\n        event {\n          id\n          label\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteUser($filter: UserFilter!) {\n    deleteUser(filter: $filter) {\n      numUids\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($filter: UserFilter!) {\n    deleteUser(filter: $filter) {\n      numUids\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery QueryEvent {\n  queryEvent {\n    id\n    iid\n    instances {\n      id\n      iid\n      occurrences {\n        endDateTime\n        iid\n        startDateTime\n      }\n      tags {\n        id\n        iid\n        label\n      }\n    }\n    label\n    properties {\n      id\n      iid\n      label\n      value\n    }\n    user {\n      email\n      iid\n    }\n  }\n}\n"): (typeof documents)["\nquery QueryEvent {\n  queryEvent {\n    id\n    iid\n    instances {\n      id\n      iid\n      occurrences {\n        endDateTime\n        iid\n        startDateTime\n      }\n      tags {\n        id\n        iid\n        label\n      }\n    }\n    label\n    properties {\n      id\n      iid\n      label\n      value\n    }\n    user {\n      email\n      iid\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryEventInstance($filter: EventFilter) {\n    queryEventInstance {\n      iid\n      occurrences {\n        iid\n        endDateTime\n        startDateTime\n      }\n      event(filter: $filter) {\n        id\n      }\n      tags {\n        label\n        iid\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryEventInstance($filter: EventFilter) {\n    queryEventInstance {\n      iid\n      occurrences {\n        iid\n        endDateTime\n        startDateTime\n      }\n      event(filter: $filter) {\n        id\n      }\n      tags {\n        label\n        iid\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery QueryEventInstanceOccurrence {\n  queryEventInstanceOccurrence {\n    iid\n    startDateTime\n    endDateTime\n    eventInstance {\n      iid\n      id\n      tags {\n        id\n        iid\n        label\n      }\n      event {\n        id\n        iid\n        label\n        properties {\n          id\n          iid\n          label\n          value\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery QueryEventInstanceOccurrence {\n  queryEventInstanceOccurrence {\n    iid\n    startDateTime\n    endDateTime\n    eventInstance {\n      iid\n      id\n      tags {\n        id\n        iid\n        label\n      }\n      event {\n        id\n        iid\n        label\n        properties {\n          id\n          iid\n          label\n          value\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryEventProperty($filter: EventPropertyFilter) {\n    queryEventProperty(filter: $filter) {\n      id\n      label\n      value\n      event {\n        user {\n          email\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryEventProperty($filter: EventPropertyFilter) {\n    queryEventProperty(filter: $filter) {\n      id\n      label\n      value\n      event {\n        user {\n          email\n        }\n      }\n    }\n  }\n"];
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
export function gql(source: "\n  mutation UpdateEventInstance($input: UpdateEventInstanceInput!) {\n    updateEventInstance(input: $input) {\n      numUids\n      eventInstance {\n        iid\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEventInstance($input: UpdateEventInstanceInput!) {\n    updateEventInstance(input: $input) {\n      numUids\n      eventInstance {\n        iid\n      }\n    }\n  }\n"];
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