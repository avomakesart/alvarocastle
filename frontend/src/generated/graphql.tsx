import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  categories: PaginatedCategories;
  category?: Maybe<Categories>;
  certificates: PaginatedCertificates;
  certificate?: Maybe<Certificates>;
  contacts: PaginatedContact;
  contact?: Maybe<Contact>;
  experiences: PaginatedExperience;
  experience?: Maybe<Experience>;
  projects: PaginatedProjects;
  project?: Maybe<Projects>;
  skills: PaginatedSkills;
  skill?: Maybe<Skills>;
  me?: Maybe<Users>;
};


export type QueryCategoriesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryCertificatesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryCertificateArgs = {
  id: Scalars['Int'];
};


export type QueryContactsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryContactArgs = {
  id: Scalars['Int'];
};


export type QueryExperiencesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryExperienceArgs = {
  id: Scalars['Int'];
};


export type QueryProjectsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
};


export type QuerySkillsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QuerySkillArgs = {
  id: Scalars['Int'];
};

export type PaginatedCategories = {
  __typename?: 'PaginatedCategories';
  categories: Array<Categories>;
  hasMore: Scalars['Boolean'];
};

export type Categories = {
  __typename?: 'Categories';
  id: Scalars['Float'];
  title: Scalars['String'];
  projectId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedCertificates = {
  __typename?: 'PaginatedCertificates';
  certificates: Array<Certificates>;
  hasMore: Scalars['Boolean'];
};

export type Certificates = {
  __typename?: 'Certificates';
  id: Scalars['Float'];
  title: Scalars['String'];
  issuer: Scalars['String'];
  companyImg: Scalars['String'];
  date: Scalars['String'];
  certId: Scalars['String'];
  certUrl: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedContact = {
  __typename?: 'PaginatedContact';
  contact: Array<Contact>;
  hasMore: Scalars['Boolean'];
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['Float'];
  fullname: Scalars['String'];
  subject: Scalars['String'];
  phone: Scalars['String'];
  message: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedExperience = {
  __typename?: 'PaginatedExperience';
  experience: Array<Experience>;
  hasMore: Scalars['Boolean'];
};

export type Experience = {
  __typename?: 'Experience';
  id: Scalars['Float'];
  company: Scalars['String'];
  position: Scalars['String'];
  period: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedProjects = {
  __typename?: 'PaginatedProjects';
  projects: Array<Projects>;
  hasMore: Scalars['Boolean'];
};

export type Projects = {
  __typename?: 'Projects';
  id: Scalars['Float'];
  title: Scalars['String'];
  headline: Scalars['String'];
  description: Scalars['String'];
  featuredImage: Scalars['String'];
  category: Scalars['String'];
  points: Scalars['Float'];
  voteStatus?: Maybe<Scalars['Int']>;
  creatorId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  textSnippet: Scalars['String'];
  creator: Users;
};

export type Users = {
  __typename?: 'Users';
  id: Scalars['Float'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  pictureUrl: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedSkills = {
  __typename?: 'PaginatedSkills';
  skills: Array<Skills>;
  hasMore: Scalars['Boolean'];
};

export type Skills = {
  __typename?: 'Skills';
  id: Scalars['Float'];
  title: Scalars['String'];
  image: Scalars['String'];
  category: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Categories;
  updateCategory?: Maybe<Categories>;
  deleteCategory: Scalars['Boolean'];
  createCertificate: Certificates;
  updateCertificate?: Maybe<Certificates>;
  deleteCertificate: Scalars['Boolean'];
  createContact: Contact;
  updateContact?: Maybe<Contact>;
  deleteContact: Scalars['Boolean'];
  createExperience: Experience;
  updateExperience?: Maybe<Experience>;
  deleteExperience: Scalars['Boolean'];
  vote: Scalars['Boolean'];
  addCategory: Scalars['String'];
  createProject: Projects;
  updateProject?: Maybe<Projects>;
  deleteProject: Scalars['Boolean'];
  createSkill: Skills;
  updateSkill?: Maybe<Skills>;
  deleteSkill: Scalars['Boolean'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  updateUser?: Maybe<Users>;
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationUpdateCategoryArgs = {
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationCreateCertificateArgs = {
  input: CertificateInput;
};


export type MutationUpdateCertificateArgs = {
  certUrl: Scalars['String'];
  certId: Scalars['String'];
  date: Scalars['String'];
  companyImg: Scalars['String'];
  issuer: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteCertificateArgs = {
  id: Scalars['Int'];
};


export type MutationCreateContactArgs = {
  input: ContactInput;
};


export type MutationUpdateContactArgs = {
  input: ContactInput;
  id: Scalars['Int'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['Int'];
};


export type MutationCreateExperienceArgs = {
  input: ExperienceInput;
};


export type MutationUpdateExperienceArgs = {
  input: ExperienceInput;
  id: Scalars['Int'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['Int'];
};


export type MutationVoteArgs = {
  value: Scalars['Int'];
  projectId: Scalars['Int'];
};


export type MutationAddCategoryArgs = {
  title: Scalars['String'];
  projectId: Scalars['Int'];
};


export type MutationCreateProjectArgs = {
  input: ProjectInput;
};


export type MutationUpdateProjectArgs = {
  input: ProjectInput;
  id: Scalars['Int'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Int'];
};


export type MutationCreateSkillArgs = {
  input: SkillInput;
};


export type MutationUpdateSkillArgs = {
  input: SkillInput;
  id: Scalars['Int'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UserInput;
  id: Scalars['Int'];
};

export type CategoryInput = {
  title: Scalars['String'];
};

export type CertificateInput = {
  title: Scalars['String'];
  issuer: Scalars['String'];
  companyImg: Scalars['String'];
  date: Scalars['String'];
  certId: Scalars['String'];
  certUrl: Scalars['String'];
};

export type ContactInput = {
  fullname: Scalars['String'];
  subject: Scalars['String'];
  phone: Scalars['String'];
  message: Scalars['String'];
};

export type ExperienceInput = {
  company: Scalars['String'];
  position: Scalars['String'];
  period: Scalars['String'];
  description: Scalars['String'];
};

export type ProjectInput = {
  title: Scalars['String'];
  headline: Scalars['String'];
  description: Scalars['String'];
  featuredImage: Scalars['String'];
  category: Scalars['String'];
};

export type SkillInput = {
  title: Scalars['String'];
  image: Scalars['String'];
  category: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Users>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  pictureUrl: Scalars['String'];
  bio: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'Users' }
  & Pick<Users, 'id' | 'firstName' | 'lastName' | 'username' | 'email' | 'bio' | 'pictureUrl'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'Users' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory: (
    { __typename?: 'Categories' }
    & Pick<Categories, 'id' | 'title' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateCertificateMutationVariables = Exact<{
  input: CertificateInput;
}>;


export type CreateCertificateMutation = (
  { __typename?: 'Mutation' }
  & { createCertificate: (
    { __typename?: 'Certificates' }
    & Pick<Certificates, 'id' | 'title' | 'issuer' | 'companyImg' | 'date' | 'certId' | 'certUrl' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateContactMutationVariables = Exact<{
  input: ContactInput;
}>;


export type CreateContactMutation = (
  { __typename?: 'Mutation' }
  & { createContact: (
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'fullname' | 'subject' | 'phone' | 'message' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateExperienceMutationVariables = Exact<{
  input: ExperienceInput;
}>;


export type CreateExperienceMutation = (
  { __typename?: 'Mutation' }
  & { createExperience: (
    { __typename?: 'Experience' }
    & Pick<Experience, 'id' | 'company' | 'position' | 'description' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateProjectMutationVariables = Exact<{
  input: ProjectInput;
}>;


export type CreateProjectMutation = (
  { __typename?: 'Mutation' }
  & { createProject: (
    { __typename?: 'Projects' }
    & Pick<Projects, 'id' | 'title' | 'featuredImage' | 'description' | 'voteStatus' | 'points' | 'category' | 'creatorId' | 'createdAt' | 'updatedAt'>
    & { creator: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'firstName' | 'lastName' | 'email'>
    ) }
  ) }
);

export type CreateSkillMutationVariables = Exact<{
  input: SkillInput;
}>;


export type CreateSkillMutation = (
  { __typename?: 'Mutation' }
  & { createSkill: (
    { __typename?: 'Skills' }
    & Pick<Skills, 'id' | 'title' | 'image' | 'category' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteCategory'>
);

export type DeleteCertificateMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCertificateMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteCertificate'>
);

export type DeleteContactMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteContactMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteContact'>
);

export type DeleteExperienceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteExperienceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteExperience'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
}>;


export type UpdateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateCategory?: Maybe<(
    { __typename?: 'Categories' }
    & Pick<Categories, 'id' | 'title' | 'updatedAt'>
  )> }
);

export type UpdateCertificateMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  issuer: Scalars['String'];
  companyImg: Scalars['String'];
  date: Scalars['String'];
  certUrl: Scalars['String'];
  certId: Scalars['String'];
}>;


export type UpdateCertificateMutation = (
  { __typename?: 'Mutation' }
  & { updateCertificate?: Maybe<(
    { __typename?: 'Certificates' }
    & Pick<Certificates, 'id' | 'title' | 'issuer' | 'companyImg' | 'date' | 'certId' | 'certUrl' | 'updatedAt'>
  )> }
);

export type UpdateExperienceMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ExperienceInput;
}>;


export type UpdateExperienceMutation = (
  { __typename?: 'Mutation' }
  & { updateExperience?: Maybe<(
    { __typename?: 'Experience' }
    & Pick<Experience, 'id' | 'company' | 'position' | 'period' | 'description' | 'createdAt' | 'updatedAt'>
  )> }
);

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ProjectInput;
}>;


export type UpdateProjectMutation = (
  { __typename?: 'Mutation' }
  & { updateProject?: Maybe<(
    { __typename?: 'Projects' }
    & Pick<Projects, 'id' | 'title' | 'featuredImage' | 'description' | 'voteStatus' | 'points' | 'creatorId' | 'createdAt' | 'updatedAt'>
    & { creator: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'firstName' | 'lastName' | 'email'>
    ) }
  )> }
);

export type UpdateSkillMutationVariables = Exact<{
  id: Scalars['Int'];
  input: SkillInput;
}>;


export type UpdateSkillMutation = (
  { __typename?: 'Mutation' }
  & { updateSkill?: Maybe<(
    { __typename?: 'Skills' }
    & Pick<Skills, 'id' | 'title' | 'image' | 'createdAt' | 'updatedAt'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'pictureUrl' | 'bio'>
  )> }
);

export type VoteMutationVariables = Exact<{
  value: Scalars['Int'];
  projectId: Scalars['Int'];
}>;


export type VoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'vote'>
);

export type CategoriesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: (
    { __typename?: 'PaginatedCategories' }
    & Pick<PaginatedCategories, 'hasMore'>
    & { categories: Array<(
      { __typename?: 'Categories' }
      & Pick<Categories, 'id' | 'title' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type CategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Categories' }
    & Pick<Categories, 'id' | 'title' | 'createdAt' | 'updatedAt'>
  )> }
);

export type CertificateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CertificateQuery = (
  { __typename?: 'Query' }
  & { certificate?: Maybe<(
    { __typename?: 'Certificates' }
    & Pick<Certificates, 'id' | 'title' | 'issuer' | 'companyImg' | 'date' | 'certId' | 'certUrl' | 'createdAt' | 'updatedAt'>
  )> }
);

export type CertificatesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type CertificatesQuery = (
  { __typename?: 'Query' }
  & { certificates: (
    { __typename?: 'PaginatedCertificates' }
    & Pick<PaginatedCertificates, 'hasMore'>
    & { certificates: Array<(
      { __typename?: 'Certificates' }
      & Pick<Certificates, 'id' | 'title' | 'issuer' | 'companyImg' | 'date' | 'certId' | 'certUrl' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type ContactQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ContactQuery = (
  { __typename?: 'Query' }
  & { contact?: Maybe<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'fullname' | 'subject' | 'phone' | 'message' | 'createdAt' | 'updatedAt'>
  )> }
);

export type ContactsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ContactsQuery = (
  { __typename?: 'Query' }
  & { contacts: (
    { __typename?: 'PaginatedContact' }
    & Pick<PaginatedContact, 'hasMore'>
    & { contact: Array<(
      { __typename?: 'Contact' }
      & Pick<Contact, 'id' | 'fullname' | 'subject' | 'phone' | 'message' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type ExperienceQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ExperienceQuery = (
  { __typename?: 'Query' }
  & { experience?: Maybe<(
    { __typename?: 'Experience' }
    & Pick<Experience, 'id' | 'company' | 'position' | 'period' | 'description' | 'createdAt' | 'updatedAt'>
  )> }
);

export type ExperiencesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ExperiencesQuery = (
  { __typename?: 'Query' }
  & { experiences: (
    { __typename?: 'PaginatedExperience' }
    & Pick<PaginatedExperience, 'hasMore'>
    & { experience: Array<(
      { __typename?: 'Experience' }
      & Pick<Experience, 'id' | 'company' | 'position' | 'period' | 'description' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Users' }
    & RegularUserFragment
  )> }
);

export type ProjectQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ProjectQuery = (
  { __typename?: 'Query' }
  & { project?: Maybe<(
    { __typename?: 'Projects' }
    & Pick<Projects, 'id' | 'title' | 'headline' | 'description' | 'featuredImage' | 'points' | 'voteStatus' | 'category' | 'creatorId' | 'createdAt' | 'updatedAt'>
    & { creator: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'firstName' | 'lastName' | 'email'>
    ) }
  )> }
);

export type ProjectsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ProjectsQuery = (
  { __typename?: 'Query' }
  & { projects: (
    { __typename?: 'PaginatedProjects' }
    & Pick<PaginatedProjects, 'hasMore'>
    & { projects: Array<(
      { __typename?: 'Projects' }
      & Pick<Projects, 'id' | 'title' | 'headline' | 'description' | 'featuredImage' | 'points' | 'voteStatus' | 'category' | 'creatorId' | 'createdAt' | 'updatedAt'>
      & { creator: (
        { __typename?: 'Users' }
        & Pick<Users, 'id' | 'firstName' | 'lastName' | 'email'>
      ) }
    )> }
  ) }
);

export type SkillQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SkillQuery = (
  { __typename?: 'Query' }
  & { skill?: Maybe<(
    { __typename?: 'Skills' }
    & Pick<Skills, 'id' | 'title' | 'image' | 'category' | 'createdAt' | 'updatedAt'>
  )> }
);

export type SkillsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type SkillsQuery = (
  { __typename?: 'Query' }
  & { skills: (
    { __typename?: 'PaginatedSkills' }
    & Pick<PaginatedSkills, 'hasMore'>
    & { skills: Array<(
      { __typename?: 'Skills' }
      & Pick<Skills, 'id' | 'title' | 'image' | 'category' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on Users {
  id
  firstName
  lastName
  username
  email
  bio
  pictureUrl
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($input: CategoryInput!) {
  createCategory(input: $input) {
    id
    title
    createdAt
    updatedAt
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateCertificateDocument = gql`
    mutation CreateCertificate($input: CertificateInput!) {
  createCertificate(input: $input) {
    id
    title
    issuer
    companyImg
    date
    certId
    certUrl
    createdAt
    updatedAt
  }
}
    `;
export type CreateCertificateMutationFn = Apollo.MutationFunction<CreateCertificateMutation, CreateCertificateMutationVariables>;

/**
 * __useCreateCertificateMutation__
 *
 * To run a mutation, you first call `useCreateCertificateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCertificateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCertificateMutation, { data, loading, error }] = useCreateCertificateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCertificateMutation(baseOptions?: Apollo.MutationHookOptions<CreateCertificateMutation, CreateCertificateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCertificateMutation, CreateCertificateMutationVariables>(CreateCertificateDocument, options);
      }
export type CreateCertificateMutationHookResult = ReturnType<typeof useCreateCertificateMutation>;
export type CreateCertificateMutationResult = Apollo.MutationResult<CreateCertificateMutation>;
export type CreateCertificateMutationOptions = Apollo.BaseMutationOptions<CreateCertificateMutation, CreateCertificateMutationVariables>;
export const CreateContactDocument = gql`
    mutation CreateContact($input: ContactInput!) {
  createContact(input: $input) {
    id
    fullname
    subject
    phone
    message
    createdAt
    updatedAt
  }
}
    `;
export type CreateContactMutationFn = Apollo.MutationFunction<CreateContactMutation, CreateContactMutationVariables>;

/**
 * __useCreateContactMutation__
 *
 * To run a mutation, you first call `useCreateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactMutation, { data, loading, error }] = useCreateContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContactMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactMutation, CreateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactMutation, CreateContactMutationVariables>(CreateContactDocument, options);
      }
export type CreateContactMutationHookResult = ReturnType<typeof useCreateContactMutation>;
export type CreateContactMutationResult = Apollo.MutationResult<CreateContactMutation>;
export type CreateContactMutationOptions = Apollo.BaseMutationOptions<CreateContactMutation, CreateContactMutationVariables>;
export const CreateExperienceDocument = gql`
    mutation CreateExperience($input: ExperienceInput!) {
  createExperience(input: $input) {
    id
    company
    position
    description
    createdAt
    updatedAt
  }
}
    `;
export type CreateExperienceMutationFn = Apollo.MutationFunction<CreateExperienceMutation, CreateExperienceMutationVariables>;

/**
 * __useCreateExperienceMutation__
 *
 * To run a mutation, you first call `useCreateExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExperienceMutation, { data, loading, error }] = useCreateExperienceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExperienceMutation(baseOptions?: Apollo.MutationHookOptions<CreateExperienceMutation, CreateExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExperienceMutation, CreateExperienceMutationVariables>(CreateExperienceDocument, options);
      }
export type CreateExperienceMutationHookResult = ReturnType<typeof useCreateExperienceMutation>;
export type CreateExperienceMutationResult = Apollo.MutationResult<CreateExperienceMutation>;
export type CreateExperienceMutationOptions = Apollo.BaseMutationOptions<CreateExperienceMutation, CreateExperienceMutationVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($input: ProjectInput!) {
  createProject(input: $input) {
    id
    title
    featuredImage
    description
    voteStatus
    points
    category
    creatorId
    creator {
      id
      firstName
      lastName
      email
    }
    createdAt
    updatedAt
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateSkillDocument = gql`
    mutation CreateSkill($input: SkillInput!) {
  createSkill(input: $input) {
    id
    title
    image
    category
    createdAt
    updatedAt
  }
}
    `;
export type CreateSkillMutationFn = Apollo.MutationFunction<CreateSkillMutation, CreateSkillMutationVariables>;

/**
 * __useCreateSkillMutation__
 *
 * To run a mutation, you first call `useCreateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSkillMutation, { data, loading, error }] = useCreateSkillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateSkillMutation, CreateSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSkillMutation, CreateSkillMutationVariables>(CreateSkillDocument, options);
      }
export type CreateSkillMutationHookResult = ReturnType<typeof useCreateSkillMutation>;
export type CreateSkillMutationResult = Apollo.MutationResult<CreateSkillMutation>;
export type CreateSkillMutationOptions = Apollo.BaseMutationOptions<CreateSkillMutation, CreateSkillMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  deleteCategory(id: $id)
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const DeleteCertificateDocument = gql`
    mutation DeleteCertificate($id: Int!) {
  deleteCertificate(id: $id)
}
    `;
export type DeleteCertificateMutationFn = Apollo.MutationFunction<DeleteCertificateMutation, DeleteCertificateMutationVariables>;

/**
 * __useDeleteCertificateMutation__
 *
 * To run a mutation, you first call `useDeleteCertificateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCertificateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCertificateMutation, { data, loading, error }] = useDeleteCertificateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCertificateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCertificateMutation, DeleteCertificateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCertificateMutation, DeleteCertificateMutationVariables>(DeleteCertificateDocument, options);
      }
export type DeleteCertificateMutationHookResult = ReturnType<typeof useDeleteCertificateMutation>;
export type DeleteCertificateMutationResult = Apollo.MutationResult<DeleteCertificateMutation>;
export type DeleteCertificateMutationOptions = Apollo.BaseMutationOptions<DeleteCertificateMutation, DeleteCertificateMutationVariables>;
export const DeleteContactDocument = gql`
    mutation DeleteContact($id: Int!) {
  deleteContact(id: $id)
}
    `;
export type DeleteContactMutationFn = Apollo.MutationFunction<DeleteContactMutation, DeleteContactMutationVariables>;

/**
 * __useDeleteContactMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutation, { data, loading, error }] = useDeleteContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContactMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactMutation, DeleteContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactMutation, DeleteContactMutationVariables>(DeleteContactDocument, options);
      }
export type DeleteContactMutationHookResult = ReturnType<typeof useDeleteContactMutation>;
export type DeleteContactMutationResult = Apollo.MutationResult<DeleteContactMutation>;
export type DeleteContactMutationOptions = Apollo.BaseMutationOptions<DeleteContactMutation, DeleteContactMutationVariables>;
export const DeleteExperienceDocument = gql`
    mutation DeleteExperience($id: Int!) {
  deleteExperience(id: $id)
}
    `;
export type DeleteExperienceMutationFn = Apollo.MutationFunction<DeleteExperienceMutation, DeleteExperienceMutationVariables>;

/**
 * __useDeleteExperienceMutation__
 *
 * To run a mutation, you first call `useDeleteExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExperienceMutation, { data, loading, error }] = useDeleteExperienceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExperienceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExperienceMutation, DeleteExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExperienceMutation, DeleteExperienceMutationVariables>(DeleteExperienceDocument, options);
      }
export type DeleteExperienceMutationHookResult = ReturnType<typeof useDeleteExperienceMutation>;
export type DeleteExperienceMutationResult = Apollo.MutationResult<DeleteExperienceMutation>;
export type DeleteExperienceMutationOptions = Apollo.BaseMutationOptions<DeleteExperienceMutation, DeleteExperienceMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $title: String!) {
  updateCategory(id: $id, title: $title) {
    id
    title
    updatedAt
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const UpdateCertificateDocument = gql`
    mutation UpdateCertificate($id: Int!, $title: String!, $issuer: String!, $companyImg: String!, $date: String!, $certUrl: String!, $certId: String!) {
  updateCertificate(
    id: $id
    title: $title
    issuer: $issuer
    companyImg: $companyImg
    date: $date
    certUrl: $certUrl
    certId: $certId
  ) {
    id
    title
    issuer
    companyImg
    date
    certId
    certUrl
    updatedAt
  }
}
    `;
export type UpdateCertificateMutationFn = Apollo.MutationFunction<UpdateCertificateMutation, UpdateCertificateMutationVariables>;

/**
 * __useUpdateCertificateMutation__
 *
 * To run a mutation, you first call `useUpdateCertificateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCertificateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCertificateMutation, { data, loading, error }] = useUpdateCertificateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      issuer: // value for 'issuer'
 *      companyImg: // value for 'companyImg'
 *      date: // value for 'date'
 *      certUrl: // value for 'certUrl'
 *      certId: // value for 'certId'
 *   },
 * });
 */
export function useUpdateCertificateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCertificateMutation, UpdateCertificateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCertificateMutation, UpdateCertificateMutationVariables>(UpdateCertificateDocument, options);
      }
export type UpdateCertificateMutationHookResult = ReturnType<typeof useUpdateCertificateMutation>;
export type UpdateCertificateMutationResult = Apollo.MutationResult<UpdateCertificateMutation>;
export type UpdateCertificateMutationOptions = Apollo.BaseMutationOptions<UpdateCertificateMutation, UpdateCertificateMutationVariables>;
export const UpdateExperienceDocument = gql`
    mutation UpdateExperience($id: Int!, $input: ExperienceInput!) {
  updateExperience(id: $id, input: $input) {
    id
    company
    position
    period
    description
    createdAt
    updatedAt
  }
}
    `;
export type UpdateExperienceMutationFn = Apollo.MutationFunction<UpdateExperienceMutation, UpdateExperienceMutationVariables>;

/**
 * __useUpdateExperienceMutation__
 *
 * To run a mutation, you first call `useUpdateExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExperienceMutation, { data, loading, error }] = useUpdateExperienceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateExperienceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExperienceMutation, UpdateExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExperienceMutation, UpdateExperienceMutationVariables>(UpdateExperienceDocument, options);
      }
export type UpdateExperienceMutationHookResult = ReturnType<typeof useUpdateExperienceMutation>;
export type UpdateExperienceMutationResult = Apollo.MutationResult<UpdateExperienceMutation>;
export type UpdateExperienceMutationOptions = Apollo.BaseMutationOptions<UpdateExperienceMutation, UpdateExperienceMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($id: Int!, $input: ProjectInput!) {
  updateProject(id: $id, input: $input) {
    id
    title
    featuredImage
    description
    voteStatus
    points
    creatorId
    creator {
      id
      firstName
      lastName
      email
    }
    createdAt
    updatedAt
  }
}
    `;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const UpdateSkillDocument = gql`
    mutation UpdateSkill($id: Int!, $input: SkillInput!) {
  updateSkill(id: $id, input: $input) {
    id
    title
    image
    createdAt
    updatedAt
  }
}
    `;
export type UpdateSkillMutationFn = Apollo.MutationFunction<UpdateSkillMutation, UpdateSkillMutationVariables>;

/**
 * __useUpdateSkillMutation__
 *
 * To run a mutation, you first call `useUpdateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSkillMutation, { data, loading, error }] = useUpdateSkillMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSkillMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSkillMutation, UpdateSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSkillMutation, UpdateSkillMutationVariables>(UpdateSkillDocument, options);
      }
export type UpdateSkillMutationHookResult = ReturnType<typeof useUpdateSkillMutation>;
export type UpdateSkillMutationResult = Apollo.MutationResult<UpdateSkillMutation>;
export type UpdateSkillMutationOptions = Apollo.BaseMutationOptions<UpdateSkillMutation, UpdateSkillMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $input: UserInput!) {
  updateUser(id: $id, input: $input) {
    id
    firstName
    lastName
    email
    username
    pictureUrl
    bio
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const VoteDocument = gql`
    mutation Vote($value: Int!, $projectId: Int!) {
  vote(value: $value, projectId: $projectId)
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      value: // value for 'value'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const CategoriesDocument = gql`
    query Categories($limit: Int!, $cursor: String) {
  categories(limit: $limit, cursor: $cursor) {
    categories {
      id
      title
      createdAt
      updatedAt
    }
    hasMore
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($id: Int!) {
  category(id: $id) {
    id
    title
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const CertificateDocument = gql`
    query Certificate($id: Int!) {
  certificate(id: $id) {
    id
    title
    issuer
    companyImg
    date
    certId
    certUrl
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useCertificateQuery__
 *
 * To run a query within a React component, call `useCertificateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCertificateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCertificateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCertificateQuery(baseOptions: Apollo.QueryHookOptions<CertificateQuery, CertificateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CertificateQuery, CertificateQueryVariables>(CertificateDocument, options);
      }
export function useCertificateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CertificateQuery, CertificateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CertificateQuery, CertificateQueryVariables>(CertificateDocument, options);
        }
export type CertificateQueryHookResult = ReturnType<typeof useCertificateQuery>;
export type CertificateLazyQueryHookResult = ReturnType<typeof useCertificateLazyQuery>;
export type CertificateQueryResult = Apollo.QueryResult<CertificateQuery, CertificateQueryVariables>;
export const CertificatesDocument = gql`
    query Certificates($limit: Int!, $cursor: String) {
  certificates(limit: $limit, cursor: $cursor) {
    certificates {
      id
      title
      issuer
      companyImg
      date
      certId
      certUrl
      createdAt
      updatedAt
    }
    hasMore
  }
}
    `;

/**
 * __useCertificatesQuery__
 *
 * To run a query within a React component, call `useCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCertificatesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useCertificatesQuery(baseOptions: Apollo.QueryHookOptions<CertificatesQuery, CertificatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CertificatesQuery, CertificatesQueryVariables>(CertificatesDocument, options);
      }
export function useCertificatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CertificatesQuery, CertificatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CertificatesQuery, CertificatesQueryVariables>(CertificatesDocument, options);
        }
export type CertificatesQueryHookResult = ReturnType<typeof useCertificatesQuery>;
export type CertificatesLazyQueryHookResult = ReturnType<typeof useCertificatesLazyQuery>;
export type CertificatesQueryResult = Apollo.QueryResult<CertificatesQuery, CertificatesQueryVariables>;
export const ContactDocument = gql`
    query Contact($id: Int!) {
  contact(id: $id) {
    id
    fullname
    subject
    phone
    message
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useContactQuery__
 *
 * To run a query within a React component, call `useContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContactQuery(baseOptions: Apollo.QueryHookOptions<ContactQuery, ContactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
      }
export function useContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactQuery, ContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
        }
export type ContactQueryHookResult = ReturnType<typeof useContactQuery>;
export type ContactLazyQueryHookResult = ReturnType<typeof useContactLazyQuery>;
export type ContactQueryResult = Apollo.QueryResult<ContactQuery, ContactQueryVariables>;
export const ContactsDocument = gql`
    query Contacts($limit: Int!, $cursor: String) {
  contacts(limit: $limit, cursor: $cursor) {
    contact {
      id
      fullname
      subject
      phone
      message
      createdAt
      updatedAt
    }
    hasMore
  }
}
    `;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useContactsQuery(baseOptions: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
      }
export function useContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
        }
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const ExperienceDocument = gql`
    query Experience($id: Int!) {
  experience(id: $id) {
    id
    company
    position
    period
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useExperienceQuery__
 *
 * To run a query within a React component, call `useExperienceQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperienceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperienceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExperienceQuery(baseOptions: Apollo.QueryHookOptions<ExperienceQuery, ExperienceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExperienceQuery, ExperienceQueryVariables>(ExperienceDocument, options);
      }
export function useExperienceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExperienceQuery, ExperienceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExperienceQuery, ExperienceQueryVariables>(ExperienceDocument, options);
        }
export type ExperienceQueryHookResult = ReturnType<typeof useExperienceQuery>;
export type ExperienceLazyQueryHookResult = ReturnType<typeof useExperienceLazyQuery>;
export type ExperienceQueryResult = Apollo.QueryResult<ExperienceQuery, ExperienceQueryVariables>;
export const ExperiencesDocument = gql`
    query Experiences($limit: Int!, $cursor: String) {
  experiences(limit: $limit, cursor: $cursor) {
    experience {
      id
      company
      position
      period
      description
      createdAt
      updatedAt
    }
    hasMore
  }
}
    `;

/**
 * __useExperiencesQuery__
 *
 * To run a query within a React component, call `useExperiencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperiencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperiencesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useExperiencesQuery(baseOptions: Apollo.QueryHookOptions<ExperiencesQuery, ExperiencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExperiencesQuery, ExperiencesQueryVariables>(ExperiencesDocument, options);
      }
export function useExperiencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExperiencesQuery, ExperiencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExperiencesQuery, ExperiencesQueryVariables>(ExperiencesDocument, options);
        }
export type ExperiencesQueryHookResult = ReturnType<typeof useExperiencesQuery>;
export type ExperiencesLazyQueryHookResult = ReturnType<typeof useExperiencesLazyQuery>;
export type ExperiencesQueryResult = Apollo.QueryResult<ExperiencesQuery, ExperiencesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProjectDocument = gql`
    query Project($id: Int!) {
  project(id: $id) {
    id
    title
    headline
    description
    featuredImage
    points
    voteStatus
    category
    creatorId
    creator {
      id
      firstName
      lastName
      email
    }
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectQuery(baseOptions: Apollo.QueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
      }
export function useProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
        }
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectQueryResult = Apollo.QueryResult<ProjectQuery, ProjectQueryVariables>;
export const ProjectsDocument = gql`
    query Projects($limit: Int!, $cursor: String) {
  projects(limit: $limit, cursor: $cursor) {
    projects {
      id
      title
      headline
      description
      featuredImage
      points
      voteStatus
      category
      creatorId
      creator {
        id
        firstName
        lastName
        email
      }
      createdAt
      updatedAt
    }
    hasMore
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useProjectsQuery(baseOptions: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const SkillDocument = gql`
    query Skill($id: Int!) {
  skill(id: $id) {
    id
    title
    image
    category
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSkillQuery__
 *
 * To run a query within a React component, call `useSkillQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSkillQuery(baseOptions: Apollo.QueryHookOptions<SkillQuery, SkillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkillQuery, SkillQueryVariables>(SkillDocument, options);
      }
export function useSkillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkillQuery, SkillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkillQuery, SkillQueryVariables>(SkillDocument, options);
        }
export type SkillQueryHookResult = ReturnType<typeof useSkillQuery>;
export type SkillLazyQueryHookResult = ReturnType<typeof useSkillLazyQuery>;
export type SkillQueryResult = Apollo.QueryResult<SkillQuery, SkillQueryVariables>;
export const SkillsDocument = gql`
    query Skills($limit: Int!, $cursor: String) {
  skills(limit: $limit, cursor: $cursor) {
    skills {
      id
      title
      image
      category
      createdAt
      updatedAt
    }
    hasMore
  }
}
    `;

/**
 * __useSkillsQuery__
 *
 * To run a query within a React component, call `useSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSkillsQuery(baseOptions: Apollo.QueryHookOptions<SkillsQuery, SkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkillsQuery, SkillsQueryVariables>(SkillsDocument, options);
      }
export function useSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkillsQuery, SkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkillsQuery, SkillsQueryVariables>(SkillsDocument, options);
        }
export type SkillsQueryHookResult = ReturnType<typeof useSkillsQuery>;
export type SkillsLazyQueryHookResult = ReturnType<typeof useSkillsLazyQuery>;
export type SkillsQueryResult = Apollo.QueryResult<SkillsQuery, SkillsQueryVariables>;