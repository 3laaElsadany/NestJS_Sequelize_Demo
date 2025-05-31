# NestJS Sequelize Demo

A simple demo project built with NestJS and Sequelize showcasing how to build a RESTful API for managing **products** and **reviews**.


## 📦 Features

- Main CRUD Operations
- One-to-Many relationship between Products and Reviews
- Clean and scalable code structure

## 📁 Project Structure

```bash

src/
├── products/
│   ├── dto/
│   │   ├── create-product.dto.ts
│   │   └── update-product.dto.ts
│   ├── entities/
│   │   └── product.entity.ts
│   ├── products.module.ts
│   ├── products.controller.ts
│   ├── products.service.ts
├── reviews/
│   ├── dto/
│   │   ├── add-review.dto.ts
│   ├── entities/
│   │   └── review.entity.ts
│   ├── reviews.module.ts
│   ├── reviews.controller.ts
│   ├── reviews.service.ts
├── app.module.ts
├── main.ts

```
