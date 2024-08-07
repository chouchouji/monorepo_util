# Tip

This is a repo that used to try monorepo. Please don't use shared or hooks package in your **production environment** !!!

If you want to do something like this, just clone it and modify code without any worry.

# Tech

## tsup

It is used to build typescript files. Don't worry about how to use it, because it is so easy that you will get it fastly. 

```json
"build": "tsup src/index.ts --format esm,cjs --out-dir=lib --dts --clean",
```

```shell
pnpm build
```

## vitest

It is used to run test cases for all packages. Now, I only add it in shared package. If all of the packages need to add test cases, remember to add `vitest` devDependency to root. 

The command is 

```shell
pnpm add -Dw vitest
```

## vitepress 

It is used to build docs site. You can find all methods and compsables in the website. If you want to update some content, just find the md file of relevant packages. 

![image](https://github.com/user-attachments/assets/e67e280a-7bc0-4750-a780-ae81e9a98e6f)

## varlet-release

It is a tool used for publishing all packages, generating changelogs. [More details](https://github.com/varletjs/varlet-release)

# End

If you have some problems, please contact me by mail(**1305974212@qq.com**). 
