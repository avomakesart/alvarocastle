import { createWithApollo } from './createWithApollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  PaginatedCategories,
  PaginatedCertificates,
  PaginatedContact,
  PaginatedExperience,
  PaginatedProjects,
  PaginatedSkills,
} from '../generated/graphql';
import { NextPageContext } from 'next';
import { hostIdentifier } from '.';

const client = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: hostIdentifier,
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            categories: {
              keyArgs: [],
              merge(
                existing: PaginatedCategories | undefined,
                incoming: PaginatedCategories
              ): PaginatedCategories {
                return {
                  ...incoming,
                  categories: [
                    ...(existing?.categories || []),
                    ...incoming.categories,
                  ],
                };
              },
            },
            certificates: {
              keyArgs: [],
              merge(
                existing: PaginatedCertificates | undefined,
                incoming: PaginatedCertificates
              ): PaginatedCertificates {
                return {
                  ...incoming,
                  certificates: [
                    ...(existing?.certificates || []),
                    ...incoming.certificates,
                  ],
                };
              },
            },
            contacts: {
              keyArgs: [],
              merge(
                existing: PaginatedContact | undefined,
                incoming: PaginatedContact
              ): PaginatedContact {
                return {
                  ...incoming,
                  contact: [...(existing?.contact || []), ...incoming.contact],
                };
              },
            },
            experiences: {
              keyArgs: [],
              merge(
                existing: PaginatedExperience | undefined,
                incoming: PaginatedExperience
              ): PaginatedExperience {
                return {
                  ...incoming,
                  experience: [
                    ...(existing?.experience || []),
                    ...incoming.experience,
                  ],
                };
              },
            },
            projects: {
              keyArgs: [],
              merge(
                existing: PaginatedProjects | undefined,
                incoming: PaginatedProjects
              ): PaginatedProjects {
                return {
                  ...incoming,
                  projects: [
                    ...(existing?.projects || []),
                    ...incoming.projects,
                  ],
                };
              },
            },
            skills: {
              keyArgs: [],
              merge(
                existing: PaginatedSkills | undefined,
                incoming: PaginatedSkills
              ): PaginatedSkills {
                return {
                  ...incoming,
                  skills: [...(existing?.skills || []), ...incoming.skills],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(client);
