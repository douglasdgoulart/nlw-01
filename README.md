# NextLevelWeek 01
Projeto desenvolvido durante o Next Level Week #01

O banco de dados escolhido foi o postgres.

PS: Os scripts de makefile foram testados apenas no linux.

## Dependencias
- [NodeJS](https://nodejs.org/en/download/package-manager/)
- [Docker](https://docs.docker.com/engine/install/)
- [XTerm](https://invisible-island.net/xterm/) -> Opcional

## Como Utilizar

Caso queria rodar todas as aplicações utilize o seguinte comando :

```
make -j4
```

### BackendAPI

Substitua `HOST_IP` pelo seu IP da rede local.

```
cd servidor/
make run-postgres
npm run dev -- -a=HOST_IP
```

### Aplicação Web

Essa aplicação depende do [BackendAPI](#BackendAPI)
```
cd web/
npm start
```

### Aplicação Mobile

Essa aplicação depende do [BackendAPI](#BackendAPI)
```
cd mobile/
npm start
```
