# Reto de Automatización QA - FrontEnd (Sauce Demo)

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web [Sauce Demo](https://www.saucedemo.com/), construida utilizando **Playwright** con **Cucumber** bajo el patrón de diseño **Page Object Model (POM)**.

## 🛠️ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión LTS recomendada)
- Visual Studio Code (u otro IDE de tu preferencia)

## 📁 Estructura del Proyecto

```text
reto-saucedemo-qa/
├── features/           # Escenarios de prueba en formato Gherkin (.feature)
├── page_objects/       # Clases de soporte bajo el patrón Page Object Model (POM)
├── step_definitions/   # Mapeo de los pasos Gherkin a código de automatización
├── cucumber.json       # Archivo de configuración para Cucumber.js
└── package.json        # Dependencias y scripts del proyecto

⚙️ Configuración e Instalación   
## Clonar el repositorio:

git clone https://github.com/michelin2104/reto-saucedemo-qa.git
cd reto-saucedemo-qa

Instalar las dependencias del proyecto:

npm install

Instalar los navegadores binarios de Playwright:


npx playwright install
