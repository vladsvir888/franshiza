# Компонент title

## Код

```twig
{% view '@title' with {
    title: {
      level: 1,
      class: "test-title",
      text: "test-title",
      attrs: "",
      link: {

      }
    }
} %}
```

## Параметры

`class` - дополнительные классы

`text` - текст

`level` - уровень, по дефолту 1

`attrs` - атрибуты

`link` - заголовок-ссылка