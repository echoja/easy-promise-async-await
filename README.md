# [Javascript] 비동기, Promise, async, await 확실하게 이해하기

<https://springfall.cc/article/2022-11/easy-promise-async-await>

## 프로젝트 세팅

스크립트를 실행하려면 먼저 프로젝트를 세팅해야 합니다. 패키지 매니저에 따라서 아래 3개 중 하나를 선택하여 진행하시면 됩니다.

```bash
npm install #npm
yarn # yarn
pnpm i # pnpm
```

## `1.mjs`, `2.mjs` 등등을 실행시키는 방법

확장자가 `mjs` 인 이유는 큰 의미는 없습니다. vscode 에서 뭔가 오류가 발생하지 않더라구요, `js` 파일로 진행해도 무방합니다.

```bash
npm run start 1 # npm에서 1.mjs 실행
yarn start 1 # yarn에서 1.mjs 실행
pnpm start 1 # pnpm에서 1.mjs 실행
```
