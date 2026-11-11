# Access Modifiers in Typescript OOP

**OOP** stands for Object Oriented Programming. Javascript is a multi-paradigm programming language. It supports both the functional programming and OOP. But it doesn't contain the core OOP, which is solved by Typescript. If any variable is accessible and editable from the outside of a class, then there's a chance of modifying a critical variable which shouldn't get modified from the outside of the class. This is where encapsulation matter to maintain the codebase.

TypeScript introduces access modifiers such as `public` and `readonly` to control visibility and mutability. By default, all class properties are `public`, which means they may be read and written from anywhere. The `readonly` modifier assures that a property can only be initialized once, prohibiting further reassignments after the object is formed.

```typescript
class Employee {
  constructor(
    public name: string,
    readonly baseSalary: number,
  ) {}
}
```

TypeScript enables `private` and `protected` data concealing options. A `private` property is only available within its class and is completely concealed from subclasses and external code. Meanwhile, a `protected` property is protected from the outer world while providing secure inheritance access within child subclasses.

```typescript
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  } 
}
```

In the `Manager` class which extends its parent class `Employee`, accessing the name attribute was allowed because it's protected. But the `baseSalary` variable is not accessible from the `Manager` subclass. To get or modify the `baseSalary` variable we can use `get` or `set` method inside the `Employee` class.

By limiting direct access to critical attributes by using `public`, `private`, `protected` and `readonly`, we can secure internal states and maintain clear boundaries between your classes.

---
