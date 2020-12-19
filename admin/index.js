const AdminBro = require('admin-bro');
const { User, Company,Product,Provider,Client, Input } = require('../models');
// const { UserResource, CompanyResource } = require('./resources');

const translation = require('./translation')

const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  company: {
    name: 'Company Management',
    icon: 'Product'
  },
  product:{
    name: "Gerenciar Produtos",
    icon: 'Product'
  },
  provider:{
    name: "Gerenciar Colaboradores",
    icon: 'Events'
  },
  remessas:{
    name: "Remessas",
    icon: "Box"
  }
};
const { UserResource, CompanyResource,ProductResource,ProviderResource,
        ClientResource, InputResource      
} = require('./resources');


const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
    resource: User,
    options: {
      ...UserResource,
      parent: sidebarGroups.user,
    }
   }, {
    resource: Company,
    options: {
      ...CompanyResource,
      parent: sidebarGroups.user,
    }
  },{
    resource: Product,
    options: {
      ...ProductResource,
      parent: sidebarGroups.product,
    }
   },{
    resource: Provider,
    options: {
      ...ProviderResource,
      parent: sidebarGroups.provider,
    }
   },{
    resource: Client,
    options: {
      ...ClientResource,
      parent: sidebarGroups.provider,
    }
   },{
    resource: Input,
    options: {
      ...InputResource,
      parent: sidebarGroups.remessas,
    }
   }
  ],
  locale: {
    ...translation
  },
  branding: {
    companyName: 'Morangando',
    softwareBrothers: false,
  }
});

module.exports = adminBro;
