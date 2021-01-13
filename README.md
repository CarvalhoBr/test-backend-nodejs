# Teste backend anota ai

## Executando o projeto
```bash
yarn
docker-compose up
```

## Endpoints

`GET http://localhost:3000/products`

Lista todos os produtos cadastrados. Aceita parâmetros de filtro como 'title' e/ou 'category', no formato:
`/products?category=Modificado&title=Test`

---

`POST http://localhost:3000/products`

Cria um novo produto no banco. Aceita um objeto no corpo no seguinte formato:
```JSON
{
	"title": "Teste",
	"description": "Teste",
	"price": 3,
 "category": "teste"
}
```
---

```PUT http://localhost:3000/products/category```

Muda ou atribui uma categoria a um produto. Aceita um objeto no corpo no seguinte formato:
```JSON
{
	"id": "id",
 "category": "teste"
}
```
---

```PUT http://localhost:3000/products/:id```

Edita os atributos de um produto. Aceita um objeto no corpo no seguinte formato:
```JSON
{
	"title": "Teste",
	"description": "Teste",
	"price": 3,
 "category": "teste"
}
```
---

```DELETE http://localhost:3000/products/:id```

Exclui o produto do banco

