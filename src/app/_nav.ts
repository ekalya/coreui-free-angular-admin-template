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
    name: 'Transactions',
    url: '/transactions',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Table',
        url: '/transactions/table',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Setup',
    url: '/setup',
    icon: 'icon-settings',
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
        name: 'Banks',
        url: '/setup/banks',
        icon: 'icon-puzzle'
      },
      {
        name: 'Currencies',
        url: '/setup/currency',
        icon: 'icon-puzzle'
      },
      {
        name: 'Locations',
        url: '/setup/location',
        icon: 'icon-puzzle'
      },
      {
        name: 'Org Unit Types',
        url: '/setup/organization-unit-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'Org Units',
        url: '/setup/organization-units',
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
      },
      {
        name: 'Test Page',
        url: '/setup/tests/',
        icon: 'icon-puzzle'
      }
    ]
  }
];
