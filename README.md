
![Maintenance](https://img.shields.io/maintenance/yes/2021?logo=github&style=flat)

# Ociantic
Ociantic is a cloud media storing app





## API Reference

#### Get all Images

```http
  GET /api/gallery
```

#### Post an Image

```http
  POST /api/gallery
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `image`      | `string (base64)` | **Required**. The base 64 data of the image |





## Installation

Install project with npm

```bash
  cd server && npm install
  cd client && npm install
```
    
## Running

```bash
    cd server && npm run start
    cd client && npm run start
```
## Authors

- [@fero1xd](https://www.github.com/fero1xd)

