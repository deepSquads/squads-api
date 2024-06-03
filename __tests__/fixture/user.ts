import { DeepPartial } from 'typeorm';
import { User } from '../../src/entity';

export const userCreatedDate = '2022-06-28T14:48:47.891Z';

export const usersFixture: DeepPartial<User>[] = [
  {
    id: '1',
    bio: null,
    github: 'idogithub',
    hashnode: null,
    name: 'Ido',
    image: 'https://squads.khulnasoft.com/ido.jpg',
    email: 'ido@squads.khulnasoft.com',
    createdAt: new Date(userCreatedDate),
    twitter: null,
    username: 'idoshamun',
    infoConfirmed: true,
  },
  {
    id: '2',
    bio: null,
    github: null,
    hashnode: null,
    name: 'Tsahi',
    email: 'tsahi@squads.khulnasoft.com',
    image: 'https://squads.khulnasoft.com/tsahi.jpg',
    createdAt: new Date(userCreatedDate),
    twitter: null,
    username: 'tsahidaily',
    infoConfirmed: true,
  },
  {
    id: '3',
    bio: null,
    github: null,
    hashnode: null,
    name: 'Nimrod',
    email: 'nimrod@squads.khulnasoft.com',
    image: 'https://squads.khulnasoft.com/nimrod.jpg',
    createdAt: new Date(userCreatedDate),
    twitter: null,
    username: 'nimroddaily',
    infoConfirmed: true,
  },
  {
    id: '4',
    bio: null,
    github: null,
    hashnode: null,
    name: 'Lee',
    image: 'https://squads.khulnasoft.com/lee.jpg',
    createdAt: new Date(userCreatedDate),
    twitter: null,
    username: 'lee',
    infoConfirmed: true,
  },
];
