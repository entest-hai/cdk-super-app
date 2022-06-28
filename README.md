# Multiple apps in CDK

multiple apps in bin

```
|-- bin
    |-- first-app.ts
    |-- second-app.ts
```

synth the first app

```bash
cdk --app 'npx ts-node --prefer-ts-exts bin/first-app.ts' synth
```

synth the second app

```bash
cdk --app 'npx ts-node --prefer-ts-exts bin/second-app.ts' synth
```

deploy an app 
```bash 
dk --app 'npx ts-node --prefer-ts-exts bin/second-app.ts' deploy
```