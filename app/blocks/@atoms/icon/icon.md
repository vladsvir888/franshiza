# Компонент icon

## Код

```twig
{% view '@icon' with {
    icon: {
      class: "test-icon",
      name: "sprite-mono.svg#test-icon",
      sizes: {
        width: 33,
        height: 33
      },
      attrs: "",
      svg_as_code: true
    }
} %}
```

## Параметры

`class` - дополнительные классы

`sizes` - размеры

`name` - имя (содержит название спрайта + id иконки)

`attrs` - атрибуты

`svg_as_code` - строка svg в виде кода