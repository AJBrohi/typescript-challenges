# Code Example of Combining Union and Intersection Types in TypeScript

When developing advanced applications, we frequently need to handle data that can assume different forms or connect multiple feature sets. While primitive types are useful for fundamental variables, extensive data modeling requires managing flexible data structures while maintaining type safety. This is where Union and Intersection types become useful additions to our type system.

```typescript
type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plans: string[] };
type ContactInfo = { email: string; phone: string };

type User = Admin | Member;

type UserContacts = User & ContactInfo;

// A function using the combination
const sendNotification = (user: UserContacts): string => {
  return `Sending notification to ${user.email} (ID: ${user.id})`;
};
```

Here in the code a user can be either an Admin or a Member using (`|`). The intersection type (`&`) forces both Admin/Member and contact info to be present.

By properly combining union and intersection types, we can create flexible yet exact data structures in our applications. Unions(`|`) enable our code to handle multiple different possibilities, whereas intersections(`&`) allow us to securely overlay required constraints, guaranteeing that our functions are totally type-safe and predictable.

---
