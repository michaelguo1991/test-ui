const fileSave = require('file-save');
const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');

if (!process.argv[2]) {
    console.error('[组件名]必填 - 请输入您的组件名称');
    process.exit(1);
}

const dirNames = fs.readdirSync(path.join(__dirname, '../packages')); //组件文件夹名称列表
const componentFileName = process.argv[2]; //组件文件夹名称
const componentName = upperCamelCase(componentFileName); //组件名称

//重复校验
if (dirNames.indexOf(componentFileName) > -1) {
    console.error(`${componentFileName}组件已存在，请更换组件名称`);
    process.exit(1);
}

//创建文件的Promise实现
const createFile = file => {
    return new Promise((resolve, reject) => {
        fileSave(file.filePath)
            .write(file.content)
            .end('\n', () => {
                resolve(`create file succ: ${file.filePath}`);
            })
            .error(() => {
                reject();
            })
    });
}

//创建组价源码文件
const packagePath = path.join(__dirname, '../packages', componentFileName);
//写模板的时候，要注意空格与换行
const indexFileContent = `import ${componentName} from './src/index'

${componentName}.install = Vue => {
    Vue.component(${componentName}.name, ${componentName});
}

export default ${componentName};`;
const componentFileContent = `<template>
    <div class="${componentFileName}"></div>
</template>

<script>
    export default {
        name: '${componentName}'
    }
</script>

<style>
</style>`;
const files = [{
    filePath: path.join(packagePath, 'index.js'),
    content: indexFileContent
}, {
    filePath: path.join(packagePath, 'src/index.vue'),
    content: componentFileContent
}];

const createFilePromises = files.reduce((accumulator, file) => {
    accumulator.push(createFile(file));
    return accumulator;
}, [])

Promise.all(createFilePromises)
    .then(result => {
        console.log(`${componentFileName}组件创建成功`);
        require('./build-entry.js');
    })
    .catch(err => {
        console.error(err);
    })

//TODO: 添加组件到components.json配置文件中

//TODO: 添加组价的示例及文档

