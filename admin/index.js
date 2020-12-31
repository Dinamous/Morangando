const AdminBro = require('admin-bro');
const { User, Company,Product,
  Provider,Client, Input, Output } = require('../models');

const tema = require('./theme')


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
        ClientResource, InputResource, OutputResource      
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
   },{
    resource: Output,
    options: {
      ...OutputResource,
      parent: sidebarGroups.remessas,
    }
   }
  ],
  locale: {
    ...translation
  },
  branding: {
    theme: tema,
    softwareBrothers: false,
    favicon:'https://raw.githubusercontent.com/Dinamous/Morangando/main/src/imageResources/favicon.ico',
    // logo:'../src/imageResources/logo.png',
    logo:'https://raw.githubusercontent.com/Dinamous/Morangando/main/src/imageResources/logo.svg',
    companyName: 'Morangando'
    
  }
});

module.exports = adminBro;
