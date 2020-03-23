# TypeScript Design Patterns

Popular design patterns implemented in TypeScript.

## Designs

- [Decorator](###-Decorator)
- [Observer](###-Observer)
- [Facade](###-Facade)

### Decorator

Often used for adding additional functionality to another class by wrapping it. This allows developers to add/extend functionality without impacting other objects using the same class.

_Sources_: [Wikipedia](https://en.wikipedia.org/wiki/Decorator_pattern)

### Observer

Allows for easy distribution of event handling systems. Pattern centralizes the notification logic to the `Subject` object and the "reaction logic" to the `Observer` objects.

\* _Note_: Personally, I prefer the term `Observable` over `Subject` so in my example, you'll see `Observable`. The term `Subject` is too generic and doesn't clearly indicate the observer pattern to me.

_Sources_: [Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern)

### Facade

TBD

_Sources_: [Wikipedia](https://en.wikipedia.org/wiki/Facade_pattern)
