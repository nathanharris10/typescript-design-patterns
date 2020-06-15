# TypeScript Design Patterns

Popular design patterns implemented in TypeScript.

## Designs

- [Decorator](###-Decorator)
- [Observer](###-Observer)
- [Facade](###-Facade)
- [Adapter](###-Adapter)
- [Builder](###-Builder)

### Decorator

Often used for adding additional functionality to another class by wrapping it. This allows developers to add/extend functionality without impacting other objects using the same class.

_Additional Sources_: [Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern)

### Observer

Allows for easy distribution of event handling systems. Pattern centralizes the notification logic to the `Subject` object and the "reaction logic" to the `Observer` objects.

_Note_: Personally, I prefer the term `Observable` over `Subject` so in my example, you'll see `Observable`. The term `Subject` is too generic and doesn't clearly indicate the observer pattern to me.

_Additional Sources_: [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern)

### Facade

Hides very complex, or difficult to understand, code behind a single (and simplified) API. Improves readability and usability of client code, as well as, making unit testing easier since only the API needs to be mocked instead of the implementation details. Also often used to wrap legacy code which provides a clean break for refactoring efforts.

Facades are also commonly used in ACLs (anti-corruption layer), as part of Domain Driven design, to cleanly separate different systems.

_Additional Sources_: [Facade Pattern](https://en.wikipedia.org/wiki/Facade_pattern), [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)

### Adapter

Allows two different interfaces to communicate with each other without changing their implementation. Very much like adapters used for charging our electronic devices across Europe and US.

Similarly to Facades, Adapters are also commonly used in ACLs (anti-corruption layer), as part of Domain Driven design, to cleanly separate different systems.

_Additional Sources_: [Adapter Pattern](https://en.wikipedia.org/wiki/Adapter_pattern), [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)

### Builder

One of my go-to patterns, the builder pattern allows for very flexible contruction of an object in a way that's easy to read, maintain, and expand upon. Eliminates the need for telescoping constructors and keeps the codebase small.

_Additional Sources_: [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern)

### Strategy

Another really popular and fun pattern that is easily adaptable to many scenarios. Typically, this pattern is designed to represent a group, or family, of rules/processes and only one is applicable to a scenario. However, this is easily extendable to allow any combination of rules/processes to apply to a scenario. This allows for easy encapsulation of code for each rule/process.

_Additional Sources_: [Builder Pattern](https://en.wikipedia.org/wiki/Strategy_pattern)