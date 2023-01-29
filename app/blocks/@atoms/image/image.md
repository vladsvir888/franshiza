# Компонент image

## Код

```twig
{% view '@image' with {
    image: {
      class: "test-class",
      name: "test-img.png",
      alt: "test-alt",
      sizes: {
        width: 500,
        height: 500
      },
      lazy: false,
      picture: {
        class: ""
      },
      attrs: "",
    }
} %}
```

## Параметры

`class` - дополнительные классы

`sizes` - размеры

`name` - имя

`alt` - альтернативный текст

`lazy` - картинка с lazyload, по дефолту true, т.е. с lazyload

`picture` - обертка картинки

`attrs` - атрибуты