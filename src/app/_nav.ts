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
    name: 'PIM',
    url: '/pim',
    icon: 'icon-settings',
    children: [
      {
        name: 'Employees',
        url: '/pim/employees',
        icon: 'icon-puzzle'
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
        name: 'Org Units',
        url: '/setup/organization-units',
        icon: 'icon-puzzle'
      },
      {
        name: 'Jobs',
        url: '/setup/jobs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Positions',
        url: '/setup/positions',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pay Grades',
        url: '/setup/paygrades',
        icon: 'icon-puzzle'
      },
      {
        name: 'Work Shifts',
        url: '/setup/workshifts',
        icon: 'icon-puzzle'
      },
      {
        name: 'Nationalities',
        url: '/setup/nationalities',
        icon: 'icon-puzzle'
      },
      {
        name: 'Employment Status',
        url: '/setup/employmentstatus',
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
