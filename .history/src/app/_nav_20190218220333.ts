export interface NavData {
  name?: string,
  url?: string,
  icon?: string,
  badge?: any,
  title?: boolean,
  children?: any,
  variant?: string,
  attributes?: object,
  divider?: boolean,
  class?: string,
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Transactions',
    url: '/transactions',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Table',
        url: '/transactions/table',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Setup',
    url: '/setup',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Company',
        url: '/setup/company',
        icon: 'icon-puzzle'
      },
      {
        name: 'Branches',
        url: '/setup/branches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Users',
        url: '/setup/users/',
        icon: 'icon-user'
      },
      {
        name: 'User Roles',
        url: '/setup/user-role/',
        icon: 'icon-puzzle'
      }
    ]
  }
];
