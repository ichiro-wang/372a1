# LeNote Taking App

# Project Requirements

[editor]: /src/components/NoteEditor.tsx
[list]: /src/components/NoteList.tsx
[interface]: /src/types/types.ts
[build]: /dist
[deploy]: http://34.53.73.47/
1. **NoteEditor** component [here][editor]
2. **NoteList** component [here][list]
3. **Note Interface** [here][interface]
4. **Production Build** [here][build]
5. **Deployed URL** [here][deploy]

# GCP Console Screenshots

[sc1]: /docs/1.png
[sc2]: /docs/2.png
[sc3]: /docs/3.png
![alt text][sc1]
![alt text][sc2]
![alt text][sc3]


# Setup and Deployment

## Local Setup

Clone the repo
```shell
git clone https://github.com/bobbychan-cmpt/asn1-ichiro-wang
cd asn1-ichiro-wang
```

Install dependencies
```shell
npm install
```

Start dev server
```shell
npm run dev
```

## Build

```shell
npm run build
npm run preview
```

## Deployment

- Create Google Cloud VM
- Install Nginx
- Clone repo and build, or copy the build from local
- Deploy to Nginx
- Visit [here][deploy]