const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry', managerId: 1},
    { id: 4, name: 'shep', managerId: 2},
    { id: 3, name: 'curly', managerId: 1},
    { id: 5, name: 'groucho', managerId: 3},
    { id: 6, name: 'harpo', managerId: 5},
    { id: 8, name: 'shep Jr.', managerId: 4},
    { id: 99, name: 'lucy', managerId: 1}
  ];
  
  const spacer = (text)=> {
    if(!text){
      return console.log('');
    }
    const stars = new Array(5).fill('*').join('');
    console.log(`${stars} ${text} ${stars}`);
  }
  
  spacer('findEmployeeByName Moe')
    const findEmployeeByName = (name, employees) => {
        const employeeName = employees.find(elem => elem.name === name);
        return employeeName;
    }
    console.log(findEmployeeByName('moe', employees))
  spacer('')

  spacer('findManagerFor Shep Jr.')
    const findManagerFor = (name, employees) => {
        const managerId = name.managerId;
        const managerName = employees.find(elem => elem.id === managerId);
        return managerName;
    }
    console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));//{ id: 4, name: 'shep', managerId: 2 }
  spacer('')

  spacer('findCoworkersFor Larry')
    const findCoworkersFor = (name, employees) => {
        const managerId = name.managerId;
        const coworkers = employees.filter(elem => elem.managerId === managerId);

        return coworkers.slice(1);
    }
    console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));/*
    [ { id: 3, name: 'curly', managerId: 1 },
    { id: 99, name: 'lucy', managerId: 1 } ]
    */
  spacer('');

  spacer('findManagementChain for moe')
    const findManagementChainForEmployee = (name, employees) => {
        const managerId = name.managerId; //finding the manager id to get chain
        const managementChain = employees.filter((elem) => elem.id <= managerId)
        return managementChain.slice(0, -1)
    }

    console.log(findManagementChainForEmployee(findEmployeeByName('moe', employees), employees));//[  ]
    spacer('');
  
    spacer('findManagementChain for shep Jr.')
    console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees));/*
    [ { id: 1, name: 'moe' },
        { id: 2, name: 'larry', managerId: 1 },
        { id: 4, name: 'shep', managerId: 2 }]
    */
  spacer('');

  spacer('findManagementChain for shep Jr.')
    const generateManagementTree = (employees) => {
        /*
        so : moe is boss. his id is 1.
        we then look for manager id = 1, which is larry.
        larry's id is 2. 
        we look for manager id =2 , which is shep.
        shep's id is 4.
        we look for manager id = 4, which is shep Jr.
        shep Jr's id is 8 and that is where it ends.

        we narrowed down moe, larry, shep and shep jr. that leads us to start with curly.
        curly is next. his id is 3.
        we look for manager id = 3, which is groucho.
        groucho's id is 5.
        we look for manager id = 5, which is harpo.
        harro's id is 6 and that is where it ends.

        we narrowed down moe, larry, shep, shep jr, culy, groucho, harpo,
        lucy is last and follows moe. and reports to no one.
        */
        const boss = employees.find(elem => elem.id === 1);
        const underBoss = employees.find(elem => elem.managerId === boss.id);
        
        
    }
    console.log(generateManageTree(employees))
  spacer('');
