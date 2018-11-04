import Page from  './components/page';

const appConfig = require('./config/config.json');
const sidebarConfig = appConfig.sidebar;

let guiderRoute = {
    path: '/guider',
    component: Page,
    children: []
};
const addGuiderRoute = path => {
    // const component = () => import(`./docs${path}.md`);
    const component = require(`./docs${path}.md`).default;
    // console.log(component.render);
    guiderRoute.children.push({ 
        path: path.replace(/^\//, ''),
        component 
    });
}

//如果是array, 则app只有1个导航
// console.log(typeof sidebarConfig)
// if (typeof sidebarConfig == 'Array') {
    sidebarConfig.forEach(config => {
        if (config.path) {
            addGuiderRoute(config.path);
        } else if (config.children && config.children.length > 0) {
            const childConfigs = config.children;
            childConfigs.forEach(childConfig => {
                if (childConfig.path) {
                    addGuiderRoute(childConfig.path);
                } else if (childConfig.children && childConfig.children.length > 0) {
                    const secondChildConfigs = childConfig.children;
                    secondChildConfigs.forEach(secondChildConfig => {
                        addGuiderRoute(secondChildConfig.path);
                    })
                }
            })
        }
    });
// }
console.log(guiderRoute);

let routes = [];
routes.push({ path: '/', component: Page });
routes.push(guiderRoute);


// routes = [
//     { path: '/', component: Page },
//     { 
//         path: '/guider',
//         component: Page,
//         children: [
//             { path: 'igt-button', component: IgtButtonMd },
//             { path: 'igt-card', component: IgtCardMd }
//         ]
//     }
// ]

export default routes;