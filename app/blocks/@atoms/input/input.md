# Компонент input

## Код

```twig
{% view '@input' with {
  input: {
    element: {
      class: "my-email",
      type: "email",
      text: "Введите E-mail",
      name: "email"
    },
    label: {
      text: "Введите E-mail"
    }
  }
} %}
```

## Параметры

`element` - объект инпута

`class` - дополнительные классы инппута

`type` - тип инпута (по умолчанию текст)

`name` - имя инпута

`text` - плейсхолдер инпута

`search_btn` - иконка-кнопка для инпута в форме поиска

`search_btn_with_text` - текст-кнопка для инпута в форме поиска

`label` - объект label

`picture` - параметр, который отвечает за вывод картинки (использовался для капчи)

`textarea` - объект textarea