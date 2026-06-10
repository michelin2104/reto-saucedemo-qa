Feature: Flujo de Autenticación y Compra en Sauce Demo

  Background: El usuario está en la página de inicio de sesión
    Given que el usuario navega a la página de Sauce Demo

  Scenario: Inicio de sesión exitoso y flujo de compra completo
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    And visualiza el producto en el carrito de compras
    And completa el proceso de compra con los datos "Camilo", "Pérez" y "15001"
    Then el sistema debería mostrar el mensaje de confirmación "Thank you for your order!"

  Scenario: Intento de inicio de sesión con usuario bloqueado
    When ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"
    Then debería ver un mensaje de error que contiene "Sorry, this user has been locked out."