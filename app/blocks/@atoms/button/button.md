# Компонент button

## Код

```twig
{% view '@button' with {
    button: {
      id: "test-btn",
      class: "test-btn",
      href: "#",
      text: {
        class: "test-class-text",
        text: "test button text"
      },
      icon: {

      },
      right_icon: {

      },
      attrs: ""
    }
} %}
```

## Параметры

`href` - если указан, то ссылка

`class` - дополнительные классы

`text` - текст

`icon` - иконка

`attrs` - атрибуты

`id` - id

`right_icon` - иконка справа

`svg_as_code` - строка svg ввиде кода