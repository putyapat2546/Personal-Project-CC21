
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * //////////////////////////////
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Persona
 * 
 */
export type Persona = $Result.DefaultSelection<Prisma.$PersonaPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model VirtualTryOn
 * 
 */
export type VirtualTryOn = $Result.DefaultSelection<Prisma.$VirtualTryOnPayload>
/**
 * Model Customization
 * 
 */
export type Customization = $Result.DefaultSelection<Prisma.$CustomizationPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminRole: {
  superadmin: 'superadmin',
  editor: 'editor',
  moderator: 'moderator'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.PersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.virtualTryOn`: Exposes CRUD operations for the **VirtualTryOn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VirtualTryOns
    * const virtualTryOns = await prisma.virtualTryOn.findMany()
    * ```
    */
  get virtualTryOn(): Prisma.VirtualTryOnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customization`: Exposes CRUD operations for the **Customization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customizations
    * const customizations = await prisma.customization.findMany()
    * ```
    */
  get customization(): Prisma.CustomizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Persona: 'Persona',
    Admin: 'Admin',
    Brand: 'Brand',
    Product: 'Product',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    VirtualTryOn: 'VirtualTryOn',
    Customization: 'Customization',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "persona" | "admin" | "brand" | "product" | "cart" | "cartItem" | "order" | "virtualTryOn" | "customization" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Persona: {
        payload: Prisma.$PersonaPayload<ExtArgs>
        fields: Prisma.PersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findFirst: {
            args: Prisma.PersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findMany: {
            args: Prisma.PersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          create: {
            args: Prisma.PersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          createMany: {
            args: Prisma.PersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          update: {
            args: Prisma.PersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          deleteMany: {
            args: Prisma.PersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.PersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      VirtualTryOn: {
        payload: Prisma.$VirtualTryOnPayload<ExtArgs>
        fields: Prisma.VirtualTryOnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VirtualTryOnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VirtualTryOnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>
          }
          findFirst: {
            args: Prisma.VirtualTryOnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VirtualTryOnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>
          }
          findMany: {
            args: Prisma.VirtualTryOnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>[]
          }
          create: {
            args: Prisma.VirtualTryOnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>
          }
          createMany: {
            args: Prisma.VirtualTryOnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VirtualTryOnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>
          }
          update: {
            args: Prisma.VirtualTryOnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>
          }
          deleteMany: {
            args: Prisma.VirtualTryOnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VirtualTryOnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VirtualTryOnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualTryOnPayload>
          }
          aggregate: {
            args: Prisma.VirtualTryOnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtualTryOn>
          }
          groupBy: {
            args: Prisma.VirtualTryOnGroupByArgs<ExtArgs>
            result: $Utils.Optional<VirtualTryOnGroupByOutputType>[]
          }
          count: {
            args: Prisma.VirtualTryOnCountArgs<ExtArgs>
            result: $Utils.Optional<VirtualTryOnCountAggregateOutputType> | number
          }
        }
      }
      Customization: {
        payload: Prisma.$CustomizationPayload<ExtArgs>
        fields: Prisma.CustomizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>
          }
          findFirst: {
            args: Prisma.CustomizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>
          }
          findMany: {
            args: Prisma.CustomizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>[]
          }
          create: {
            args: Prisma.CustomizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>
          }
          createMany: {
            args: Prisma.CustomizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>
          }
          update: {
            args: Prisma.CustomizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>
          }
          deleteMany: {
            args: Prisma.CustomizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomizationPayload>
          }
          aggregate: {
            args: Prisma.CustomizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomization>
          }
          groupBy: {
            args: Prisma.CustomizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomizationCountArgs<ExtArgs>
            result: $Utils.Optional<CustomizationCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    persona?: PersonaOmit
    admin?: AdminOmit
    brand?: BrandOmit
    product?: ProductOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    order?: OrderOmit
    virtualTryOn?: VirtualTryOnOmit
    customization?: CustomizationOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carts: number
    orders: number
    tryons: number
    customizations: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UserCountOutputTypeCountCartsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    tryons?: boolean | UserCountOutputTypeCountTryonsArgs
    customizations?: boolean | UserCountOutputTypeCountCustomizationsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTryonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualTryOnWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    users: number
    products: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PersonaCountOutputTypeCountUsersArgs
    products?: boolean | PersonaCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    added_products: number
    verified_brands: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    added_products?: boolean | AdminCountOutputTypeCountAdded_productsArgs
    verified_brands?: boolean | AdminCountOutputTypeCountVerified_brandsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAdded_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountVerified_brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    reviews: number
    customizations: number
    tryons: number
    cart_items: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
    customizations?: boolean | ProductCountOutputTypeCountCustomizationsArgs
    tryons?: boolean | ProductCountOutputTypeCountTryonsArgs
    cart_items?: boolean | ProductCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCustomizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomizationWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTryonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualTryOnWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    height: number | null
    weight: number | null
    selected_persona: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    height: number | null
    weight: number | null
    selected_persona: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    password_hash: string | null
    height: number | null
    weight: number | null
    skin_tone: string | null
    selected_persona: number | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    password_hash: string | null
    height: number | null
    weight: number | null
    skin_tone: string | null
    selected_persona: number | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    full_name: number
    email: number
    password_hash: number
    height: number
    weight: number
    skin_tone: number
    selected_persona: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    height?: true
    weight?: true
    selected_persona?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    height?: true
    weight?: true
    selected_persona?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password_hash?: true
    height?: true
    weight?: true
    skin_tone?: true
    selected_persona?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password_hash?: true
    height?: true
    weight?: true
    skin_tone?: true
    selected_persona?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password_hash?: true
    height?: true
    weight?: true
    skin_tone?: true
    selected_persona?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    full_name: string
    email: string
    password_hash: string
    height: number | null
    weight: number | null
    skin_tone: string | null
    selected_persona: number | null
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    password_hash?: boolean
    height?: boolean
    weight?: boolean
    skin_tone?: boolean
    selected_persona?: boolean
    created_at?: boolean
    persona?: boolean | User$personaArgs<ExtArgs>
    carts?: boolean | User$cartsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    tryons?: boolean | User$tryonsArgs<ExtArgs>
    customizations?: boolean | User$customizationsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    password_hash?: boolean
    height?: boolean
    weight?: boolean
    skin_tone?: boolean
    selected_persona?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "full_name" | "email" | "password_hash" | "height" | "weight" | "skin_tone" | "selected_persona" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | User$personaArgs<ExtArgs>
    carts?: boolean | User$cartsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    tryons?: boolean | User$tryonsArgs<ExtArgs>
    customizations?: boolean | User$customizationsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs> | null
      carts: Prisma.$CartPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      tryons: Prisma.$VirtualTryOnPayload<ExtArgs>[]
      customizations: Prisma.$CustomizationPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      full_name: string
      email: string
      password_hash: string
      height: number | null
      weight: number | null
      skin_tone: string | null
      selected_persona: number | null
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends User$personaArgs<ExtArgs> = {}>(args?: Subset<T, User$personaArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carts<T extends User$cartsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tryons<T extends User$tryonsArgs<ExtArgs> = {}>(args?: Subset<T, User$tryonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customizations<T extends User$customizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$customizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly height: FieldRef<"User", 'Int'>
    readonly weight: FieldRef<"User", 'Int'>
    readonly skin_tone: FieldRef<"User", 'String'>
    readonly selected_persona: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.persona
   */
  export type User$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    where?: PersonaWhereInput
  }

  /**
   * User.carts
   */
  export type User$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.tryons
   */
  export type User$tryonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    where?: VirtualTryOnWhereInput
    orderBy?: VirtualTryOnOrderByWithRelationInput | VirtualTryOnOrderByWithRelationInput[]
    cursor?: VirtualTryOnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualTryOnScalarFieldEnum | VirtualTryOnScalarFieldEnum[]
  }

  /**
   * User.customizations
   */
  export type User$customizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    where?: CustomizationWhereInput
    orderBy?: CustomizationOrderByWithRelationInput | CustomizationOrderByWithRelationInput[]
    cursor?: CustomizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomizationScalarFieldEnum | CustomizationScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    persona_id: number | null
  }

  export type PersonaSumAggregateOutputType = {
    persona_id: number | null
  }

  export type PersonaMinAggregateOutputType = {
    persona_id: number | null
    persona_name: string | null
    description: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    persona_id: number | null
    persona_name: string | null
    description: string | null
  }

  export type PersonaCountAggregateOutputType = {
    persona_id: number
    persona_name: number
    description: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    persona_id?: true
  }

  export type PersonaSumAggregateInputType = {
    persona_id?: true
  }

  export type PersonaMinAggregateInputType = {
    persona_id?: true
    persona_name?: true
    description?: true
  }

  export type PersonaMaxAggregateInputType = {
    persona_id?: true
    persona_name?: true
    description?: true
  }

  export type PersonaCountAggregateInputType = {
    persona_id?: true
    persona_name?: true
    description?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Persona to aggregate.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type PersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaWhereInput
    orderBy?: PersonaOrderByWithAggregationInput | PersonaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: PersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    persona_id: number
    persona_name: string
    description: string | null
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends PersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type PersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    persona_id?: boolean
    persona_name?: boolean
    description?: boolean
    users?: boolean | Persona$usersArgs<ExtArgs>
    products?: boolean | Persona$productsArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>



  export type PersonaSelectScalar = {
    persona_id?: boolean
    persona_name?: boolean
    description?: boolean
  }

  export type PersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"persona_id" | "persona_name" | "description", ExtArgs["result"]["persona"]>
  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Persona$usersArgs<ExtArgs>
    products?: boolean | Persona$productsArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      persona_id: number
      persona_name: string
      description: string | null
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type PersonaGetPayload<S extends boolean | null | undefined | PersonaDefaultArgs> = $Result.GetResult<Prisma.$PersonaPayload, S>

  type PersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface PersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Persona'], meta: { name: 'Persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {PersonaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaFindUniqueArgs>(args: SelectSubset<T, PersonaFindUniqueArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaFindFirstArgs>(args?: SelectSubset<T, PersonaFindFirstArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `persona_id`
     * const personaWithPersona_idOnly = await prisma.persona.findMany({ select: { persona_id: true } })
     * 
     */
    findMany<T extends PersonaFindManyArgs>(args?: SelectSubset<T, PersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {PersonaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends PersonaCreateArgs>(args: SelectSubset<T, PersonaCreateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {PersonaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaCreateManyArgs>(args?: SelectSubset<T, PersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Persona.
     * @param {PersonaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends PersonaDeleteArgs>(args: SelectSubset<T, PersonaDeleteArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {PersonaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaUpdateArgs>(args: SelectSubset<T, PersonaUpdateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {PersonaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaDeleteManyArgs>(args?: SelectSubset<T, PersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaUpdateManyArgs>(args: SelectSubset<T, PersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Persona.
     * @param {PersonaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends PersonaUpsertArgs>(args: SelectSubset<T, PersonaUpsertArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends PersonaCountArgs>(
      args?: Subset<T, PersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaGroupByArgs['orderBy'] }
        : { orderBy?: PersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Persona model
   */
  readonly fields: PersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Persona$usersArgs<ExtArgs> = {}>(args?: Subset<T, Persona$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Persona$productsArgs<ExtArgs> = {}>(args?: Subset<T, Persona$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Persona model
   */
  interface PersonaFieldRefs {
    readonly persona_id: FieldRef<"Persona", 'Int'>
    readonly persona_name: FieldRef<"Persona", 'String'>
    readonly description: FieldRef<"Persona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Persona findUnique
   */
  export type PersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findUniqueOrThrow
   */
  export type PersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findFirst
   */
  export type PersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findFirstOrThrow
   */
  export type PersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findMany
   */
  export type PersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Personas to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona create
   */
  export type PersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Persona.
     */
    data: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
  }

  /**
   * Persona createMany
   */
  export type PersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Persona update
   */
  export type PersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Persona.
     */
    data: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
    /**
     * Choose, which Persona to update.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona updateMany
   */
  export type PersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona upsert
   */
  export type PersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Persona to update in case it exists.
     */
    where: PersonaWhereUniqueInput
    /**
     * In case the Persona found by the `where` argument doesn't exist, create a new Persona with this data.
     */
    create: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
    /**
     * In case the Persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
  }

  /**
   * Persona delete
   */
  export type PersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter which Persona to delete.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona deleteMany
   */
  export type PersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personas to delete
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to delete.
     */
    limit?: number
  }

  /**
   * Persona.users
   */
  export type Persona$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Persona.products
   */
  export type Persona$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Persona without action
   */
  export type PersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    admin_id: number | null
    full_name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.AdminRole | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    admin_id: number | null
    full_name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.AdminRole | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    admin_id: number
    full_name: number
    email: number
    password_hash: number
    role: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    admin_id?: true
  }

  export type AdminSumAggregateInputType = {
    admin_id?: true
  }

  export type AdminMinAggregateInputType = {
    admin_id?: true
    full_name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    admin_id?: true
    full_name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    admin_id?: true
    full_name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    admin_id: number
    full_name: string
    email: string
    password_hash: string
    role: $Enums.AdminRole
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    full_name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    added_products?: boolean | Admin$added_productsArgs<ExtArgs>
    verified_brands?: boolean | Admin$verified_brandsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    admin_id?: boolean
    full_name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_id" | "full_name" | "email" | "password_hash" | "role" | "created_at", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    added_products?: boolean | Admin$added_productsArgs<ExtArgs>
    verified_brands?: boolean | Admin$verified_brandsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      added_products: Prisma.$ProductPayload<ExtArgs>[]
      verified_brands: Prisma.$BrandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      full_name: string
      email: string
      password_hash: string
      role: $Enums.AdminRole
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.findMany({ select: { admin_id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    added_products<T extends Admin$added_productsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$added_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verified_brands<T extends Admin$verified_brandsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$verified_brandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly admin_id: FieldRef<"Admin", 'Int'>
    readonly full_name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password_hash: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'AdminRole'>
    readonly created_at: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.added_products
   */
  export type Admin$added_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Admin.verified_brands
   */
  export type Admin$verified_brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    cursor?: BrandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    brand_id: number | null
    verified_by: number | null
  }

  export type BrandSumAggregateOutputType = {
    brand_id: number | null
    verified_by: number | null
  }

  export type BrandMinAggregateOutputType = {
    brand_id: number | null
    brand_name: string | null
    country: string | null
    verified_by: number | null
  }

  export type BrandMaxAggregateOutputType = {
    brand_id: number | null
    brand_name: string | null
    country: string | null
    verified_by: number | null
  }

  export type BrandCountAggregateOutputType = {
    brand_id: number
    brand_name: number
    country: number
    verified_by: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    brand_id?: true
    verified_by?: true
  }

  export type BrandSumAggregateInputType = {
    brand_id?: true
    verified_by?: true
  }

  export type BrandMinAggregateInputType = {
    brand_id?: true
    brand_name?: true
    country?: true
    verified_by?: true
  }

  export type BrandMaxAggregateInputType = {
    brand_id?: true
    brand_name?: true
    country?: true
    verified_by?: true
  }

  export type BrandCountAggregateInputType = {
    brand_id?: true
    brand_name?: true
    country?: true
    verified_by?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    brand_id: number
    brand_name: string
    country: string | null
    verified_by: number | null
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    brand_id?: boolean
    brand_name?: boolean
    country?: boolean
    verified_by?: boolean
    admin?: boolean | Brand$adminArgs<ExtArgs>
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>



  export type BrandSelectScalar = {
    brand_id?: boolean
    brand_name?: boolean
    country?: boolean
    verified_by?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"brand_id" | "brand_name" | "country" | "verified_by", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Brand$adminArgs<ExtArgs>
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      brand_id: number
      brand_name: string
      country: string | null
      verified_by: number | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `brand_id`
     * const brandWithBrand_idOnly = await prisma.brand.findMany({ select: { brand_id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Brand$adminArgs<ExtArgs> = {}>(args?: Subset<T, Brand$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly brand_id: FieldRef<"Brand", 'Int'>
    readonly brand_name: FieldRef<"Brand", 'String'>
    readonly country: FieldRef<"Brand", 'String'>
    readonly verified_by: FieldRef<"Brand", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.admin
   */
  export type Brand$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    product_id: number | null
    brand_id: number | null
    persona_id: number | null
    price: number | null
    added_by: number | null
  }

  export type ProductSumAggregateOutputType = {
    product_id: number | null
    brand_id: number | null
    persona_id: number | null
    price: number | null
    added_by: number | null
  }

  export type ProductMinAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    brand_id: number | null
    persona_id: number | null
    category: string | null
    price: number | null
    color: string | null
    size: string | null
    fit: string | null
    added_by: number | null
  }

  export type ProductMaxAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    brand_id: number | null
    persona_id: number | null
    category: string | null
    price: number | null
    color: string | null
    size: string | null
    fit: string | null
    added_by: number | null
  }

  export type ProductCountAggregateOutputType = {
    product_id: number
    product_name: number
    brand_id: number
    persona_id: number
    category: number
    price: number
    color: number
    size: number
    fit: number
    added_by: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    product_id?: true
    brand_id?: true
    persona_id?: true
    price?: true
    added_by?: true
  }

  export type ProductSumAggregateInputType = {
    product_id?: true
    brand_id?: true
    persona_id?: true
    price?: true
    added_by?: true
  }

  export type ProductMinAggregateInputType = {
    product_id?: true
    product_name?: true
    brand_id?: true
    persona_id?: true
    category?: true
    price?: true
    color?: true
    size?: true
    fit?: true
    added_by?: true
  }

  export type ProductMaxAggregateInputType = {
    product_id?: true
    product_name?: true
    brand_id?: true
    persona_id?: true
    category?: true
    price?: true
    color?: true
    size?: true
    fit?: true
    added_by?: true
  }

  export type ProductCountAggregateInputType = {
    product_id?: true
    product_name?: true
    brand_id?: true
    persona_id?: true
    category?: true
    price?: true
    color?: true
    size?: true
    fit?: true
    added_by?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    product_id: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color: string | null
    size: string | null
    fit: string | null
    added_by: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    brand_id?: boolean
    persona_id?: boolean
    category?: boolean
    price?: boolean
    color?: boolean
    size?: boolean
    fit?: boolean
    added_by?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    admin?: boolean | Product$adminArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    customizations?: boolean | Product$customizationsArgs<ExtArgs>
    tryons?: boolean | Product$tryonsArgs<ExtArgs>
    cart_items?: boolean | Product$cart_itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    product_id?: boolean
    product_name?: boolean
    brand_id?: boolean
    persona_id?: boolean
    category?: boolean
    price?: boolean
    color?: boolean
    size?: boolean
    fit?: boolean
    added_by?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_name" | "brand_id" | "persona_id" | "category" | "price" | "color" | "size" | "fit" | "added_by", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    admin?: boolean | Product$adminArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    customizations?: boolean | Product$customizationsArgs<ExtArgs>
    tryons?: boolean | Product$tryonsArgs<ExtArgs>
    cart_items?: boolean | Product$cart_itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      persona: Prisma.$PersonaPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      customizations: Prisma.$CustomizationPayload<ExtArgs>[]
      tryons: Prisma.$VirtualTryOnPayload<ExtArgs>[]
      cart_items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      product_name: string
      brand_id: number
      persona_id: number
      category: string
      price: number
      color: string | null
      size: string | null
      fit: string | null
      added_by: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends Product$adminArgs<ExtArgs> = {}>(args?: Subset<T, Product$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customizations<T extends Product$customizationsArgs<ExtArgs> = {}>(args?: Subset<T, Product$customizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tryons<T extends Product$tryonsArgs<ExtArgs> = {}>(args?: Subset<T, Product$tryonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart_items<T extends Product$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly product_id: FieldRef<"Product", 'Int'>
    readonly product_name: FieldRef<"Product", 'String'>
    readonly brand_id: FieldRef<"Product", 'Int'>
    readonly persona_id: FieldRef<"Product", 'Int'>
    readonly category: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly color: FieldRef<"Product", 'String'>
    readonly size: FieldRef<"Product", 'String'>
    readonly fit: FieldRef<"Product", 'String'>
    readonly added_by: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.admin
   */
  export type Product$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Product.customizations
   */
  export type Product$customizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    where?: CustomizationWhereInput
    orderBy?: CustomizationOrderByWithRelationInput | CustomizationOrderByWithRelationInput[]
    cursor?: CustomizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomizationScalarFieldEnum | CustomizationScalarFieldEnum[]
  }

  /**
   * Product.tryons
   */
  export type Product$tryonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    where?: VirtualTryOnWhereInput
    orderBy?: VirtualTryOnOrderByWithRelationInput | VirtualTryOnOrderByWithRelationInput[]
    cursor?: VirtualTryOnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualTryOnScalarFieldEnum | VirtualTryOnScalarFieldEnum[]
  }

  /**
   * Product.cart_items
   */
  export type Product$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartSumAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartMinAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type CartMaxAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type CartCountAggregateOutputType = {
    cart_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartSumAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartMinAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
  }

  export type CartMaxAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
  }

  export type CartCountAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    cart_id: number
    user_id: number
    created_at: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type CartSelectScalar = {
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_id" | "user_id" | "created_at", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: number
      user_id: number
      created_at: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.findMany({ select: { cart_id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly cart_id: FieldRef<"Cart", 'Int'>
    readonly user_id: FieldRef<"Cart", 'Int'>
    readonly created_at: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    subtotal: number | null
  }

  export type CartItemSumAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    subtotal: number | null
  }

  export type CartItemMinAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    subtotal: number | null
  }

  export type CartItemMaxAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    subtotal: number | null
  }

  export type CartItemCountAggregateOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    subtotal: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    subtotal?: true
  }

  export type CartItemSumAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    subtotal?: true
  }

  export type CartItemMinAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    subtotal?: true
  }

  export type CartItemMaxAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    subtotal?: true
  }

  export type CartItemCountAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    subtotal?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    subtotal: number
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    subtotal?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>



  export type CartItemSelectScalar = {
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    subtotal?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_item_id" | "cart_id" | "product_id" | "quantity" | "subtotal", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_item_id: number
      cart_id: number
      product_id: number
      quantity: number
      subtotal: number
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `cart_item_id`
     * const cartItemWithCart_item_idOnly = await prisma.cartItem.findMany({ select: { cart_item_id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly cart_item_id: FieldRef<"CartItem", 'Int'>
    readonly cart_id: FieldRef<"CartItem", 'Int'>
    readonly product_id: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly subtotal: FieldRef<"CartItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    total_price: number | null
  }

  export type OrderSumAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    total_price: number | null
  }

  export type OrderMinAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    total_price: number | null
    payment_status: $Enums.PaymentStatus | null
    shipping_address: string | null
    order_date: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    total_price: number | null
    payment_status: $Enums.PaymentStatus | null
    shipping_address: string | null
    order_date: Date | null
  }

  export type OrderCountAggregateOutputType = {
    order_id: number
    user_id: number
    total_price: number
    payment_status: number
    shipping_address: number
    order_date: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
  }

  export type OrderSumAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
  }

  export type OrderMinAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
    payment_status?: true
    shipping_address?: true
    order_date?: true
  }

  export type OrderMaxAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
    payment_status?: true
    shipping_address?: true
    order_date?: true
  }

  export type OrderCountAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
    payment_status?: true
    shipping_address?: true
    order_date?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    order_id: number
    user_id: number
    total_price: number
    payment_status: $Enums.PaymentStatus
    shipping_address: string
    order_date: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    total_price?: boolean
    payment_status?: boolean
    shipping_address?: boolean
    order_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    order_id?: boolean
    user_id?: boolean
    total_price?: boolean
    payment_status?: boolean
    shipping_address?: boolean
    order_date?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "user_id" | "total_price" | "payment_status" | "shipping_address" | "order_date", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      user_id: number
      total_price: number
      payment_status: $Enums.PaymentStatus
      shipping_address: string
      order_date: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly order_id: FieldRef<"Order", 'Int'>
    readonly user_id: FieldRef<"Order", 'Int'>
    readonly total_price: FieldRef<"Order", 'Float'>
    readonly payment_status: FieldRef<"Order", 'PaymentStatus'>
    readonly shipping_address: FieldRef<"Order", 'String'>
    readonly order_date: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model VirtualTryOn
   */

  export type AggregateVirtualTryOn = {
    _count: VirtualTryOnCountAggregateOutputType | null
    _avg: VirtualTryOnAvgAggregateOutputType | null
    _sum: VirtualTryOnSumAggregateOutputType | null
    _min: VirtualTryOnMinAggregateOutputType | null
    _max: VirtualTryOnMaxAggregateOutputType | null
  }

  export type VirtualTryOnAvgAggregateOutputType = {
    tryon_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type VirtualTryOnSumAggregateOutputType = {
    tryon_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type VirtualTryOnMinAggregateOutputType = {
    tryon_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type VirtualTryOnMaxAggregateOutputType = {
    tryon_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type VirtualTryOnCountAggregateOutputType = {
    tryon_id: number
    user_id: number
    product_id: number
    outfit_combination: number
    _all: number
  }


  export type VirtualTryOnAvgAggregateInputType = {
    tryon_id?: true
    user_id?: true
    product_id?: true
  }

  export type VirtualTryOnSumAggregateInputType = {
    tryon_id?: true
    user_id?: true
    product_id?: true
  }

  export type VirtualTryOnMinAggregateInputType = {
    tryon_id?: true
    user_id?: true
    product_id?: true
  }

  export type VirtualTryOnMaxAggregateInputType = {
    tryon_id?: true
    user_id?: true
    product_id?: true
  }

  export type VirtualTryOnCountAggregateInputType = {
    tryon_id?: true
    user_id?: true
    product_id?: true
    outfit_combination?: true
    _all?: true
  }

  export type VirtualTryOnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualTryOn to aggregate.
     */
    where?: VirtualTryOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualTryOns to fetch.
     */
    orderBy?: VirtualTryOnOrderByWithRelationInput | VirtualTryOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VirtualTryOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualTryOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualTryOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VirtualTryOns
    **/
    _count?: true | VirtualTryOnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VirtualTryOnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VirtualTryOnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VirtualTryOnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VirtualTryOnMaxAggregateInputType
  }

  export type GetVirtualTryOnAggregateType<T extends VirtualTryOnAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtualTryOn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualTryOn[P]>
      : GetScalarType<T[P], AggregateVirtualTryOn[P]>
  }




  export type VirtualTryOnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualTryOnWhereInput
    orderBy?: VirtualTryOnOrderByWithAggregationInput | VirtualTryOnOrderByWithAggregationInput[]
    by: VirtualTryOnScalarFieldEnum[] | VirtualTryOnScalarFieldEnum
    having?: VirtualTryOnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VirtualTryOnCountAggregateInputType | true
    _avg?: VirtualTryOnAvgAggregateInputType
    _sum?: VirtualTryOnSumAggregateInputType
    _min?: VirtualTryOnMinAggregateInputType
    _max?: VirtualTryOnMaxAggregateInputType
  }

  export type VirtualTryOnGroupByOutputType = {
    tryon_id: number
    user_id: number
    product_id: number
    outfit_combination: JsonValue | null
    _count: VirtualTryOnCountAggregateOutputType | null
    _avg: VirtualTryOnAvgAggregateOutputType | null
    _sum: VirtualTryOnSumAggregateOutputType | null
    _min: VirtualTryOnMinAggregateOutputType | null
    _max: VirtualTryOnMaxAggregateOutputType | null
  }

  type GetVirtualTryOnGroupByPayload<T extends VirtualTryOnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VirtualTryOnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VirtualTryOnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualTryOnGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualTryOnGroupByOutputType[P]>
        }
      >
    >


  export type VirtualTryOnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tryon_id?: boolean
    user_id?: boolean
    product_id?: boolean
    outfit_combination?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualTryOn"]>



  export type VirtualTryOnSelectScalar = {
    tryon_id?: boolean
    user_id?: boolean
    product_id?: boolean
    outfit_combination?: boolean
  }

  export type VirtualTryOnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tryon_id" | "user_id" | "product_id" | "outfit_combination", ExtArgs["result"]["virtualTryOn"]>
  export type VirtualTryOnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VirtualTryOnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualTryOn"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tryon_id: number
      user_id: number
      product_id: number
      outfit_combination: Prisma.JsonValue | null
    }, ExtArgs["result"]["virtualTryOn"]>
    composites: {}
  }

  type VirtualTryOnGetPayload<S extends boolean | null | undefined | VirtualTryOnDefaultArgs> = $Result.GetResult<Prisma.$VirtualTryOnPayload, S>

  type VirtualTryOnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VirtualTryOnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VirtualTryOnCountAggregateInputType | true
    }

  export interface VirtualTryOnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VirtualTryOn'], meta: { name: 'VirtualTryOn' } }
    /**
     * Find zero or one VirtualTryOn that matches the filter.
     * @param {VirtualTryOnFindUniqueArgs} args - Arguments to find a VirtualTryOn
     * @example
     * // Get one VirtualTryOn
     * const virtualTryOn = await prisma.virtualTryOn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualTryOnFindUniqueArgs>(args: SelectSubset<T, VirtualTryOnFindUniqueArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VirtualTryOn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualTryOnFindUniqueOrThrowArgs} args - Arguments to find a VirtualTryOn
     * @example
     * // Get one VirtualTryOn
     * const virtualTryOn = await prisma.virtualTryOn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualTryOnFindUniqueOrThrowArgs>(args: SelectSubset<T, VirtualTryOnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualTryOn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnFindFirstArgs} args - Arguments to find a VirtualTryOn
     * @example
     * // Get one VirtualTryOn
     * const virtualTryOn = await prisma.virtualTryOn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualTryOnFindFirstArgs>(args?: SelectSubset<T, VirtualTryOnFindFirstArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualTryOn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnFindFirstOrThrowArgs} args - Arguments to find a VirtualTryOn
     * @example
     * // Get one VirtualTryOn
     * const virtualTryOn = await prisma.virtualTryOn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualTryOnFindFirstOrThrowArgs>(args?: SelectSubset<T, VirtualTryOnFindFirstOrThrowArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VirtualTryOns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualTryOns
     * const virtualTryOns = await prisma.virtualTryOn.findMany()
     * 
     * // Get first 10 VirtualTryOns
     * const virtualTryOns = await prisma.virtualTryOn.findMany({ take: 10 })
     * 
     * // Only select the `tryon_id`
     * const virtualTryOnWithTryon_idOnly = await prisma.virtualTryOn.findMany({ select: { tryon_id: true } })
     * 
     */
    findMany<T extends VirtualTryOnFindManyArgs>(args?: SelectSubset<T, VirtualTryOnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VirtualTryOn.
     * @param {VirtualTryOnCreateArgs} args - Arguments to create a VirtualTryOn.
     * @example
     * // Create one VirtualTryOn
     * const VirtualTryOn = await prisma.virtualTryOn.create({
     *   data: {
     *     // ... data to create a VirtualTryOn
     *   }
     * })
     * 
     */
    create<T extends VirtualTryOnCreateArgs>(args: SelectSubset<T, VirtualTryOnCreateArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VirtualTryOns.
     * @param {VirtualTryOnCreateManyArgs} args - Arguments to create many VirtualTryOns.
     * @example
     * // Create many VirtualTryOns
     * const virtualTryOn = await prisma.virtualTryOn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VirtualTryOnCreateManyArgs>(args?: SelectSubset<T, VirtualTryOnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VirtualTryOn.
     * @param {VirtualTryOnDeleteArgs} args - Arguments to delete one VirtualTryOn.
     * @example
     * // Delete one VirtualTryOn
     * const VirtualTryOn = await prisma.virtualTryOn.delete({
     *   where: {
     *     // ... filter to delete one VirtualTryOn
     *   }
     * })
     * 
     */
    delete<T extends VirtualTryOnDeleteArgs>(args: SelectSubset<T, VirtualTryOnDeleteArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VirtualTryOn.
     * @param {VirtualTryOnUpdateArgs} args - Arguments to update one VirtualTryOn.
     * @example
     * // Update one VirtualTryOn
     * const virtualTryOn = await prisma.virtualTryOn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VirtualTryOnUpdateArgs>(args: SelectSubset<T, VirtualTryOnUpdateArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VirtualTryOns.
     * @param {VirtualTryOnDeleteManyArgs} args - Arguments to filter VirtualTryOns to delete.
     * @example
     * // Delete a few VirtualTryOns
     * const { count } = await prisma.virtualTryOn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VirtualTryOnDeleteManyArgs>(args?: SelectSubset<T, VirtualTryOnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualTryOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualTryOns
     * const virtualTryOn = await prisma.virtualTryOn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VirtualTryOnUpdateManyArgs>(args: SelectSubset<T, VirtualTryOnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VirtualTryOn.
     * @param {VirtualTryOnUpsertArgs} args - Arguments to update or create a VirtualTryOn.
     * @example
     * // Update or create a VirtualTryOn
     * const virtualTryOn = await prisma.virtualTryOn.upsert({
     *   create: {
     *     // ... data to create a VirtualTryOn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualTryOn we want to update
     *   }
     * })
     */
    upsert<T extends VirtualTryOnUpsertArgs>(args: SelectSubset<T, VirtualTryOnUpsertArgs<ExtArgs>>): Prisma__VirtualTryOnClient<$Result.GetResult<Prisma.$VirtualTryOnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VirtualTryOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnCountArgs} args - Arguments to filter VirtualTryOns to count.
     * @example
     * // Count the number of VirtualTryOns
     * const count = await prisma.virtualTryOn.count({
     *   where: {
     *     // ... the filter for the VirtualTryOns we want to count
     *   }
     * })
    **/
    count<T extends VirtualTryOnCountArgs>(
      args?: Subset<T, VirtualTryOnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualTryOnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VirtualTryOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VirtualTryOnAggregateArgs>(args: Subset<T, VirtualTryOnAggregateArgs>): Prisma.PrismaPromise<GetVirtualTryOnAggregateType<T>>

    /**
     * Group by VirtualTryOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualTryOnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VirtualTryOnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualTryOnGroupByArgs['orderBy'] }
        : { orderBy?: VirtualTryOnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VirtualTryOnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualTryOnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VirtualTryOn model
   */
  readonly fields: VirtualTryOnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualTryOn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualTryOnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VirtualTryOn model
   */
  interface VirtualTryOnFieldRefs {
    readonly tryon_id: FieldRef<"VirtualTryOn", 'Int'>
    readonly user_id: FieldRef<"VirtualTryOn", 'Int'>
    readonly product_id: FieldRef<"VirtualTryOn", 'Int'>
    readonly outfit_combination: FieldRef<"VirtualTryOn", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * VirtualTryOn findUnique
   */
  export type VirtualTryOnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * Filter, which VirtualTryOn to fetch.
     */
    where: VirtualTryOnWhereUniqueInput
  }

  /**
   * VirtualTryOn findUniqueOrThrow
   */
  export type VirtualTryOnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * Filter, which VirtualTryOn to fetch.
     */
    where: VirtualTryOnWhereUniqueInput
  }

  /**
   * VirtualTryOn findFirst
   */
  export type VirtualTryOnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * Filter, which VirtualTryOn to fetch.
     */
    where?: VirtualTryOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualTryOns to fetch.
     */
    orderBy?: VirtualTryOnOrderByWithRelationInput | VirtualTryOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualTryOns.
     */
    cursor?: VirtualTryOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualTryOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualTryOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualTryOns.
     */
    distinct?: VirtualTryOnScalarFieldEnum | VirtualTryOnScalarFieldEnum[]
  }

  /**
   * VirtualTryOn findFirstOrThrow
   */
  export type VirtualTryOnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * Filter, which VirtualTryOn to fetch.
     */
    where?: VirtualTryOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualTryOns to fetch.
     */
    orderBy?: VirtualTryOnOrderByWithRelationInput | VirtualTryOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualTryOns.
     */
    cursor?: VirtualTryOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualTryOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualTryOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualTryOns.
     */
    distinct?: VirtualTryOnScalarFieldEnum | VirtualTryOnScalarFieldEnum[]
  }

  /**
   * VirtualTryOn findMany
   */
  export type VirtualTryOnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * Filter, which VirtualTryOns to fetch.
     */
    where?: VirtualTryOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualTryOns to fetch.
     */
    orderBy?: VirtualTryOnOrderByWithRelationInput | VirtualTryOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VirtualTryOns.
     */
    cursor?: VirtualTryOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualTryOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualTryOns.
     */
    skip?: number
    distinct?: VirtualTryOnScalarFieldEnum | VirtualTryOnScalarFieldEnum[]
  }

  /**
   * VirtualTryOn create
   */
  export type VirtualTryOnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * The data needed to create a VirtualTryOn.
     */
    data: XOR<VirtualTryOnCreateInput, VirtualTryOnUncheckedCreateInput>
  }

  /**
   * VirtualTryOn createMany
   */
  export type VirtualTryOnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualTryOns.
     */
    data: VirtualTryOnCreateManyInput | VirtualTryOnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VirtualTryOn update
   */
  export type VirtualTryOnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * The data needed to update a VirtualTryOn.
     */
    data: XOR<VirtualTryOnUpdateInput, VirtualTryOnUncheckedUpdateInput>
    /**
     * Choose, which VirtualTryOn to update.
     */
    where: VirtualTryOnWhereUniqueInput
  }

  /**
   * VirtualTryOn updateMany
   */
  export type VirtualTryOnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualTryOns.
     */
    data: XOR<VirtualTryOnUpdateManyMutationInput, VirtualTryOnUncheckedUpdateManyInput>
    /**
     * Filter which VirtualTryOns to update
     */
    where?: VirtualTryOnWhereInput
    /**
     * Limit how many VirtualTryOns to update.
     */
    limit?: number
  }

  /**
   * VirtualTryOn upsert
   */
  export type VirtualTryOnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * The filter to search for the VirtualTryOn to update in case it exists.
     */
    where: VirtualTryOnWhereUniqueInput
    /**
     * In case the VirtualTryOn found by the `where` argument doesn't exist, create a new VirtualTryOn with this data.
     */
    create: XOR<VirtualTryOnCreateInput, VirtualTryOnUncheckedCreateInput>
    /**
     * In case the VirtualTryOn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualTryOnUpdateInput, VirtualTryOnUncheckedUpdateInput>
  }

  /**
   * VirtualTryOn delete
   */
  export type VirtualTryOnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
    /**
     * Filter which VirtualTryOn to delete.
     */
    where: VirtualTryOnWhereUniqueInput
  }

  /**
   * VirtualTryOn deleteMany
   */
  export type VirtualTryOnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualTryOns to delete
     */
    where?: VirtualTryOnWhereInput
    /**
     * Limit how many VirtualTryOns to delete.
     */
    limit?: number
  }

  /**
   * VirtualTryOn without action
   */
  export type VirtualTryOnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualTryOn
     */
    select?: VirtualTryOnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualTryOn
     */
    omit?: VirtualTryOnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualTryOnInclude<ExtArgs> | null
  }


  /**
   * Model Customization
   */

  export type AggregateCustomization = {
    _count: CustomizationCountAggregateOutputType | null
    _avg: CustomizationAvgAggregateOutputType | null
    _sum: CustomizationSumAggregateOutputType | null
    _min: CustomizationMinAggregateOutputType | null
    _max: CustomizationMaxAggregateOutputType | null
  }

  export type CustomizationAvgAggregateOutputType = {
    custom_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type CustomizationSumAggregateOutputType = {
    custom_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type CustomizationMinAggregateOutputType = {
    custom_id: number | null
    user_id: number | null
    product_id: number | null
    fit_preference: string | null
    color_choice: string | null
  }

  export type CustomizationMaxAggregateOutputType = {
    custom_id: number | null
    user_id: number | null
    product_id: number | null
    fit_preference: string | null
    color_choice: string | null
  }

  export type CustomizationCountAggregateOutputType = {
    custom_id: number
    user_id: number
    product_id: number
    fit_preference: number
    color_choice: number
    _all: number
  }


  export type CustomizationAvgAggregateInputType = {
    custom_id?: true
    user_id?: true
    product_id?: true
  }

  export type CustomizationSumAggregateInputType = {
    custom_id?: true
    user_id?: true
    product_id?: true
  }

  export type CustomizationMinAggregateInputType = {
    custom_id?: true
    user_id?: true
    product_id?: true
    fit_preference?: true
    color_choice?: true
  }

  export type CustomizationMaxAggregateInputType = {
    custom_id?: true
    user_id?: true
    product_id?: true
    fit_preference?: true
    color_choice?: true
  }

  export type CustomizationCountAggregateInputType = {
    custom_id?: true
    user_id?: true
    product_id?: true
    fit_preference?: true
    color_choice?: true
    _all?: true
  }

  export type CustomizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customization to aggregate.
     */
    where?: CustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customizations to fetch.
     */
    orderBy?: CustomizationOrderByWithRelationInput | CustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customizations
    **/
    _count?: true | CustomizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomizationMaxAggregateInputType
  }

  export type GetCustomizationAggregateType<T extends CustomizationAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomization[P]>
      : GetScalarType<T[P], AggregateCustomization[P]>
  }




  export type CustomizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomizationWhereInput
    orderBy?: CustomizationOrderByWithAggregationInput | CustomizationOrderByWithAggregationInput[]
    by: CustomizationScalarFieldEnum[] | CustomizationScalarFieldEnum
    having?: CustomizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomizationCountAggregateInputType | true
    _avg?: CustomizationAvgAggregateInputType
    _sum?: CustomizationSumAggregateInputType
    _min?: CustomizationMinAggregateInputType
    _max?: CustomizationMaxAggregateInputType
  }

  export type CustomizationGroupByOutputType = {
    custom_id: number
    user_id: number
    product_id: number
    fit_preference: string | null
    color_choice: string | null
    _count: CustomizationCountAggregateOutputType | null
    _avg: CustomizationAvgAggregateOutputType | null
    _sum: CustomizationSumAggregateOutputType | null
    _min: CustomizationMinAggregateOutputType | null
    _max: CustomizationMaxAggregateOutputType | null
  }

  type GetCustomizationGroupByPayload<T extends CustomizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomizationGroupByOutputType[P]>
            : GetScalarType<T[P], CustomizationGroupByOutputType[P]>
        }
      >
    >


  export type CustomizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    custom_id?: boolean
    user_id?: boolean
    product_id?: boolean
    fit_preference?: boolean
    color_choice?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customization"]>



  export type CustomizationSelectScalar = {
    custom_id?: boolean
    user_id?: boolean
    product_id?: boolean
    fit_preference?: boolean
    color_choice?: boolean
  }

  export type CustomizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"custom_id" | "user_id" | "product_id" | "fit_preference" | "color_choice", ExtArgs["result"]["customization"]>
  export type CustomizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CustomizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customization"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      custom_id: number
      user_id: number
      product_id: number
      fit_preference: string | null
      color_choice: string | null
    }, ExtArgs["result"]["customization"]>
    composites: {}
  }

  type CustomizationGetPayload<S extends boolean | null | undefined | CustomizationDefaultArgs> = $Result.GetResult<Prisma.$CustomizationPayload, S>

  type CustomizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomizationCountAggregateInputType | true
    }

  export interface CustomizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customization'], meta: { name: 'Customization' } }
    /**
     * Find zero or one Customization that matches the filter.
     * @param {CustomizationFindUniqueArgs} args - Arguments to find a Customization
     * @example
     * // Get one Customization
     * const customization = await prisma.customization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomizationFindUniqueArgs>(args: SelectSubset<T, CustomizationFindUniqueArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomizationFindUniqueOrThrowArgs} args - Arguments to find a Customization
     * @example
     * // Get one Customization
     * const customization = await prisma.customization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomizationFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationFindFirstArgs} args - Arguments to find a Customization
     * @example
     * // Get one Customization
     * const customization = await prisma.customization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomizationFindFirstArgs>(args?: SelectSubset<T, CustomizationFindFirstArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationFindFirstOrThrowArgs} args - Arguments to find a Customization
     * @example
     * // Get one Customization
     * const customization = await prisma.customization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomizationFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customizations
     * const customizations = await prisma.customization.findMany()
     * 
     * // Get first 10 Customizations
     * const customizations = await prisma.customization.findMany({ take: 10 })
     * 
     * // Only select the `custom_id`
     * const customizationWithCustom_idOnly = await prisma.customization.findMany({ select: { custom_id: true } })
     * 
     */
    findMany<T extends CustomizationFindManyArgs>(args?: SelectSubset<T, CustomizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customization.
     * @param {CustomizationCreateArgs} args - Arguments to create a Customization.
     * @example
     * // Create one Customization
     * const Customization = await prisma.customization.create({
     *   data: {
     *     // ... data to create a Customization
     *   }
     * })
     * 
     */
    create<T extends CustomizationCreateArgs>(args: SelectSubset<T, CustomizationCreateArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customizations.
     * @param {CustomizationCreateManyArgs} args - Arguments to create many Customizations.
     * @example
     * // Create many Customizations
     * const customization = await prisma.customization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomizationCreateManyArgs>(args?: SelectSubset<T, CustomizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customization.
     * @param {CustomizationDeleteArgs} args - Arguments to delete one Customization.
     * @example
     * // Delete one Customization
     * const Customization = await prisma.customization.delete({
     *   where: {
     *     // ... filter to delete one Customization
     *   }
     * })
     * 
     */
    delete<T extends CustomizationDeleteArgs>(args: SelectSubset<T, CustomizationDeleteArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customization.
     * @param {CustomizationUpdateArgs} args - Arguments to update one Customization.
     * @example
     * // Update one Customization
     * const customization = await prisma.customization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomizationUpdateArgs>(args: SelectSubset<T, CustomizationUpdateArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customizations.
     * @param {CustomizationDeleteManyArgs} args - Arguments to filter Customizations to delete.
     * @example
     * // Delete a few Customizations
     * const { count } = await prisma.customization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomizationDeleteManyArgs>(args?: SelectSubset<T, CustomizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customizations
     * const customization = await prisma.customization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomizationUpdateManyArgs>(args: SelectSubset<T, CustomizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customization.
     * @param {CustomizationUpsertArgs} args - Arguments to update or create a Customization.
     * @example
     * // Update or create a Customization
     * const customization = await prisma.customization.upsert({
     *   create: {
     *     // ... data to create a Customization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customization we want to update
     *   }
     * })
     */
    upsert<T extends CustomizationUpsertArgs>(args: SelectSubset<T, CustomizationUpsertArgs<ExtArgs>>): Prisma__CustomizationClient<$Result.GetResult<Prisma.$CustomizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationCountArgs} args - Arguments to filter Customizations to count.
     * @example
     * // Count the number of Customizations
     * const count = await prisma.customization.count({
     *   where: {
     *     // ... the filter for the Customizations we want to count
     *   }
     * })
    **/
    count<T extends CustomizationCountArgs>(
      args?: Subset<T, CustomizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomizationAggregateArgs>(args: Subset<T, CustomizationAggregateArgs>): Prisma.PrismaPromise<GetCustomizationAggregateType<T>>

    /**
     * Group by Customization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomizationGroupByArgs['orderBy'] }
        : { orderBy?: CustomizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customization model
   */
  readonly fields: CustomizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customization model
   */
  interface CustomizationFieldRefs {
    readonly custom_id: FieldRef<"Customization", 'Int'>
    readonly user_id: FieldRef<"Customization", 'Int'>
    readonly product_id: FieldRef<"Customization", 'Int'>
    readonly fit_preference: FieldRef<"Customization", 'String'>
    readonly color_choice: FieldRef<"Customization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customization findUnique
   */
  export type CustomizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * Filter, which Customization to fetch.
     */
    where: CustomizationWhereUniqueInput
  }

  /**
   * Customization findUniqueOrThrow
   */
  export type CustomizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * Filter, which Customization to fetch.
     */
    where: CustomizationWhereUniqueInput
  }

  /**
   * Customization findFirst
   */
  export type CustomizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * Filter, which Customization to fetch.
     */
    where?: CustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customizations to fetch.
     */
    orderBy?: CustomizationOrderByWithRelationInput | CustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customizations.
     */
    cursor?: CustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customizations.
     */
    distinct?: CustomizationScalarFieldEnum | CustomizationScalarFieldEnum[]
  }

  /**
   * Customization findFirstOrThrow
   */
  export type CustomizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * Filter, which Customization to fetch.
     */
    where?: CustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customizations to fetch.
     */
    orderBy?: CustomizationOrderByWithRelationInput | CustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customizations.
     */
    cursor?: CustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customizations.
     */
    distinct?: CustomizationScalarFieldEnum | CustomizationScalarFieldEnum[]
  }

  /**
   * Customization findMany
   */
  export type CustomizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * Filter, which Customizations to fetch.
     */
    where?: CustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customizations to fetch.
     */
    orderBy?: CustomizationOrderByWithRelationInput | CustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customizations.
     */
    cursor?: CustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customizations.
     */
    skip?: number
    distinct?: CustomizationScalarFieldEnum | CustomizationScalarFieldEnum[]
  }

  /**
   * Customization create
   */
  export type CustomizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Customization.
     */
    data: XOR<CustomizationCreateInput, CustomizationUncheckedCreateInput>
  }

  /**
   * Customization createMany
   */
  export type CustomizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customizations.
     */
    data: CustomizationCreateManyInput | CustomizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customization update
   */
  export type CustomizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Customization.
     */
    data: XOR<CustomizationUpdateInput, CustomizationUncheckedUpdateInput>
    /**
     * Choose, which Customization to update.
     */
    where: CustomizationWhereUniqueInput
  }

  /**
   * Customization updateMany
   */
  export type CustomizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customizations.
     */
    data: XOR<CustomizationUpdateManyMutationInput, CustomizationUncheckedUpdateManyInput>
    /**
     * Filter which Customizations to update
     */
    where?: CustomizationWhereInput
    /**
     * Limit how many Customizations to update.
     */
    limit?: number
  }

  /**
   * Customization upsert
   */
  export type CustomizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Customization to update in case it exists.
     */
    where: CustomizationWhereUniqueInput
    /**
     * In case the Customization found by the `where` argument doesn't exist, create a new Customization with this data.
     */
    create: XOR<CustomizationCreateInput, CustomizationUncheckedCreateInput>
    /**
     * In case the Customization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomizationUpdateInput, CustomizationUncheckedUpdateInput>
  }

  /**
   * Customization delete
   */
  export type CustomizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
    /**
     * Filter which Customization to delete.
     */
    where: CustomizationWhereUniqueInput
  }

  /**
   * Customization deleteMany
   */
  export type CustomizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customizations to delete
     */
    where?: CustomizationWhereInput
    /**
     * Limit how many Customizations to delete.
     */
    limit?: number
  }

  /**
   * Customization without action
   */
  export type CustomizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customization
     */
    select?: CustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customization
     */
    omit?: CustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomizationInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
    comment: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    rating: number | null
    comment: string | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    user_id: number
    product_id: number
    rating: number
    comment: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
    comment?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
    comment?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    rating?: true
    comment?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    user_id: number
    product_id: number
    rating: number
    comment: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    rating?: boolean
    comment?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "user_id" | "product_id" | "rating" | "comment", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      user_id: number
      product_id: number
      rating: number
      comment: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly review_id: FieldRef<"Review", 'Int'>
    readonly user_id: FieldRef<"Review", 'Int'>
    readonly product_id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    password_hash: 'password_hash',
    height: 'height',
    weight: 'weight',
    skin_tone: 'skin_tone',
    selected_persona: 'selected_persona',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    persona_id: 'persona_id',
    persona_name: 'persona_name',
    description: 'description'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    admin_id: 'admin_id',
    full_name: 'full_name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    brand_id: 'brand_id',
    brand_name: 'brand_name',
    country: 'country',
    verified_by: 'verified_by'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    product_id: 'product_id',
    product_name: 'product_name',
    brand_id: 'brand_id',
    persona_id: 'persona_id',
    category: 'category',
    price: 'price',
    color: 'color',
    size: 'size',
    fit: 'fit',
    added_by: 'added_by'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CartScalarFieldEnum: {
    cart_id: 'cart_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    cart_item_id: 'cart_item_id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity',
    subtotal: 'subtotal'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id',
    total_price: 'total_price',
    payment_status: 'payment_status',
    shipping_address: 'shipping_address',
    order_date: 'order_date'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const VirtualTryOnScalarFieldEnum: {
    tryon_id: 'tryon_id',
    user_id: 'user_id',
    product_id: 'product_id',
    outfit_combination: 'outfit_combination'
  };

  export type VirtualTryOnScalarFieldEnum = (typeof VirtualTryOnScalarFieldEnum)[keyof typeof VirtualTryOnScalarFieldEnum]


  export const CustomizationScalarFieldEnum: {
    custom_id: 'custom_id',
    user_id: 'user_id',
    product_id: 'product_id',
    fit_preference: 'fit_preference',
    color_choice: 'color_choice'
  };

  export type CustomizationScalarFieldEnum = (typeof CustomizationScalarFieldEnum)[keyof typeof CustomizationScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    user_id: 'user_id',
    product_id: 'product_id',
    rating: 'rating',
    comment: 'comment'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    password_hash: 'password_hash',
    skin_tone: 'skin_tone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PersonaOrderByRelevanceFieldEnum: {
    persona_name: 'persona_name',
    description: 'description'
  };

  export type PersonaOrderByRelevanceFieldEnum = (typeof PersonaOrderByRelevanceFieldEnum)[keyof typeof PersonaOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const BrandOrderByRelevanceFieldEnum: {
    brand_name: 'brand_name',
    country: 'country'
  };

  export type BrandOrderByRelevanceFieldEnum = (typeof BrandOrderByRelevanceFieldEnum)[keyof typeof BrandOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    product_name: 'product_name',
    category: 'category',
    color: 'color',
    size: 'size',
    fit: 'fit'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    shipping_address: 'shipping_address'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const CustomizationOrderByRelevanceFieldEnum: {
    fit_preference: 'fit_preference',
    color_choice: 'color_choice'
  };

  export type CustomizationOrderByRelevanceFieldEnum = (typeof CustomizationOrderByRelevanceFieldEnum)[keyof typeof CustomizationOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    height?: IntNullableFilter<"User"> | number | null
    weight?: IntNullableFilter<"User"> | number | null
    skin_tone?: StringNullableFilter<"User"> | string | null
    selected_persona?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeFilter<"User"> | Date | string
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    carts?: CartListRelationFilter
    orders?: OrderListRelationFilter
    tryons?: VirtualTryOnListRelationFilter
    customizations?: CustomizationListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    skin_tone?: SortOrderInput | SortOrder
    selected_persona?: SortOrderInput | SortOrder
    created_at?: SortOrder
    persona?: PersonaOrderByWithRelationInput
    carts?: CartOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    tryons?: VirtualTryOnOrderByRelationAggregateInput
    customizations?: CustomizationOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    height?: IntNullableFilter<"User"> | number | null
    weight?: IntNullableFilter<"User"> | number | null
    skin_tone?: StringNullableFilter<"User"> | string | null
    selected_persona?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeFilter<"User"> | Date | string
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    carts?: CartListRelationFilter
    orders?: OrderListRelationFilter
    tryons?: VirtualTryOnListRelationFilter
    customizations?: CustomizationListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    skin_tone?: SortOrderInput | SortOrder
    selected_persona?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    height?: IntNullableWithAggregatesFilter<"User"> | number | null
    weight?: IntNullableWithAggregatesFilter<"User"> | number | null
    skin_tone?: StringNullableWithAggregatesFilter<"User"> | string | null
    selected_persona?: IntNullableWithAggregatesFilter<"User"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    persona_id?: IntFilter<"Persona"> | number
    persona_name?: StringFilter<"Persona"> | string
    description?: StringNullableFilter<"Persona"> | string | null
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    persona_id?: SortOrder
    persona_name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    _relevance?: PersonaOrderByRelevanceInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    persona_id?: number
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    persona_name?: StringFilter<"Persona"> | string
    description?: StringNullableFilter<"Persona"> | string | null
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
  }, "persona_id">

  export type PersonaOrderByWithAggregationInput = {
    persona_id?: SortOrder
    persona_name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PersonaCountOrderByAggregateInput
    _avg?: PersonaAvgOrderByAggregateInput
    _max?: PersonaMaxOrderByAggregateInput
    _min?: PersonaMinOrderByAggregateInput
    _sum?: PersonaSumOrderByAggregateInput
  }

  export type PersonaScalarWhereWithAggregatesInput = {
    AND?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    OR?: PersonaScalarWhereWithAggregatesInput[]
    NOT?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    persona_id?: IntWithAggregatesFilter<"Persona"> | number
    persona_name?: StringWithAggregatesFilter<"Persona"> | string
    description?: StringNullableWithAggregatesFilter<"Persona"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    admin_id?: IntFilter<"Admin"> | number
    full_name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password_hash?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    created_at?: DateTimeFilter<"Admin"> | Date | string
    added_products?: ProductListRelationFilter
    verified_brands?: BrandListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    admin_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    added_products?: ProductOrderByRelationAggregateInput
    verified_brands?: BrandOrderByRelationAggregateInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    full_name?: StringFilter<"Admin"> | string
    password_hash?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    created_at?: DateTimeFilter<"Admin"> | Date | string
    added_products?: ProductListRelationFilter
    verified_brands?: BrandListRelationFilter
  }, "admin_id" | "email">

  export type AdminOrderByWithAggregationInput = {
    admin_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"Admin"> | number
    full_name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password_hash?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"Admin"> | $Enums.AdminRole
    created_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    brand_id?: IntFilter<"Brand"> | number
    brand_name?: StringFilter<"Brand"> | string
    country?: StringNullableFilter<"Brand"> | string | null
    verified_by?: IntNullableFilter<"Brand"> | number | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    country?: SortOrderInput | SortOrder
    verified_by?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    _relevance?: BrandOrderByRelevanceInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    brand_id?: number
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    brand_name?: StringFilter<"Brand"> | string
    country?: StringNullableFilter<"Brand"> | string | null
    verified_by?: IntNullableFilter<"Brand"> | number | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    products?: ProductListRelationFilter
  }, "brand_id">

  export type BrandOrderByWithAggregationInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    country?: SortOrderInput | SortOrder
    verified_by?: SortOrderInput | SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    brand_id?: IntWithAggregatesFilter<"Brand"> | number
    brand_name?: StringWithAggregatesFilter<"Brand"> | string
    country?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    verified_by?: IntNullableWithAggregatesFilter<"Brand"> | number | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_id?: IntFilter<"Product"> | number
    product_name?: StringFilter<"Product"> | string
    brand_id?: IntFilter<"Product"> | number
    persona_id?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    color?: StringNullableFilter<"Product"> | string | null
    size?: StringNullableFilter<"Product"> | string | null
    fit?: StringNullableFilter<"Product"> | string | null
    added_by?: IntNullableFilter<"Product"> | number | null
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    reviews?: ReviewListRelationFilter
    customizations?: CustomizationListRelationFilter
    tryons?: VirtualTryOnListRelationFilter
    cart_items?: CartItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    fit?: SortOrderInput | SortOrder
    added_by?: SortOrderInput | SortOrder
    brand?: BrandOrderByWithRelationInput
    persona?: PersonaOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    customizations?: CustomizationOrderByRelationAggregateInput
    tryons?: VirtualTryOnOrderByRelationAggregateInput
    cart_items?: CartItemOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_name?: StringFilter<"Product"> | string
    brand_id?: IntFilter<"Product"> | number
    persona_id?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    color?: StringNullableFilter<"Product"> | string | null
    size?: StringNullableFilter<"Product"> | string | null
    fit?: StringNullableFilter<"Product"> | string | null
    added_by?: IntNullableFilter<"Product"> | number | null
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    reviews?: ReviewListRelationFilter
    customizations?: CustomizationListRelationFilter
    tryons?: VirtualTryOnListRelationFilter
    cart_items?: CartItemListRelationFilter
  }, "product_id">

  export type ProductOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    fit?: SortOrderInput | SortOrder
    added_by?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"Product"> | number
    product_name?: StringWithAggregatesFilter<"Product"> | string
    brand_id?: IntWithAggregatesFilter<"Product"> | number
    persona_id?: IntWithAggregatesFilter<"Product"> | number
    category?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    color?: StringNullableWithAggregatesFilter<"Product"> | string | null
    size?: StringNullableWithAggregatesFilter<"Product"> | string | null
    fit?: StringNullableWithAggregatesFilter<"Product"> | string | null
    added_by?: IntNullableWithAggregatesFilter<"Product"> | number | null
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    cart_id?: IntFilter<"Cart"> | number
    user_id?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    user_id?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CartItemListRelationFilter
  }, "cart_id">

  export type CartOrderByWithAggregationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    cart_id?: IntWithAggregatesFilter<"Cart"> | number
    user_id?: IntWithAggregatesFilter<"Cart"> | number
    created_at?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cart_item_id?: IntFilter<"CartItem"> | number
    cart_id?: IntFilter<"CartItem"> | number
    product_id?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    subtotal?: FloatFilter<"CartItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    cart?: CartOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    cart_item_id?: number
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cart_id?: IntFilter<"CartItem"> | number
    product_id?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    subtotal?: FloatFilter<"CartItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "cart_item_id">

  export type CartItemOrderByWithAggregationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    cart_item_id?: IntWithAggregatesFilter<"CartItem"> | number
    cart_id?: IntWithAggregatesFilter<"CartItem"> | number
    product_id?: IntWithAggregatesFilter<"CartItem"> | number
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    subtotal?: FloatWithAggregatesFilter<"CartItem"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    order_id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    total_price?: FloatFilter<"Order"> | number
    payment_status?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    shipping_address?: StringFilter<"Order"> | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    shipping_address?: SortOrder
    order_date?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    user_id?: IntFilter<"Order"> | number
    total_price?: FloatFilter<"Order"> | number
    payment_status?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    shipping_address?: StringFilter<"Order"> | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "order_id">

  export type OrderOrderByWithAggregationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    shipping_address?: SortOrder
    order_date?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Order"> | number
    user_id?: IntWithAggregatesFilter<"Order"> | number
    total_price?: FloatWithAggregatesFilter<"Order"> | number
    payment_status?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
    shipping_address?: StringWithAggregatesFilter<"Order"> | string
    order_date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type VirtualTryOnWhereInput = {
    AND?: VirtualTryOnWhereInput | VirtualTryOnWhereInput[]
    OR?: VirtualTryOnWhereInput[]
    NOT?: VirtualTryOnWhereInput | VirtualTryOnWhereInput[]
    tryon_id?: IntFilter<"VirtualTryOn"> | number
    user_id?: IntFilter<"VirtualTryOn"> | number
    product_id?: IntFilter<"VirtualTryOn"> | number
    outfit_combination?: JsonNullableFilter<"VirtualTryOn">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type VirtualTryOnOrderByWithRelationInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    outfit_combination?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type VirtualTryOnWhereUniqueInput = Prisma.AtLeast<{
    tryon_id?: number
    AND?: VirtualTryOnWhereInput | VirtualTryOnWhereInput[]
    OR?: VirtualTryOnWhereInput[]
    NOT?: VirtualTryOnWhereInput | VirtualTryOnWhereInput[]
    user_id?: IntFilter<"VirtualTryOn"> | number
    product_id?: IntFilter<"VirtualTryOn"> | number
    outfit_combination?: JsonNullableFilter<"VirtualTryOn">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "tryon_id">

  export type VirtualTryOnOrderByWithAggregationInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    outfit_combination?: SortOrderInput | SortOrder
    _count?: VirtualTryOnCountOrderByAggregateInput
    _avg?: VirtualTryOnAvgOrderByAggregateInput
    _max?: VirtualTryOnMaxOrderByAggregateInput
    _min?: VirtualTryOnMinOrderByAggregateInput
    _sum?: VirtualTryOnSumOrderByAggregateInput
  }

  export type VirtualTryOnScalarWhereWithAggregatesInput = {
    AND?: VirtualTryOnScalarWhereWithAggregatesInput | VirtualTryOnScalarWhereWithAggregatesInput[]
    OR?: VirtualTryOnScalarWhereWithAggregatesInput[]
    NOT?: VirtualTryOnScalarWhereWithAggregatesInput | VirtualTryOnScalarWhereWithAggregatesInput[]
    tryon_id?: IntWithAggregatesFilter<"VirtualTryOn"> | number
    user_id?: IntWithAggregatesFilter<"VirtualTryOn"> | number
    product_id?: IntWithAggregatesFilter<"VirtualTryOn"> | number
    outfit_combination?: JsonNullableWithAggregatesFilter<"VirtualTryOn">
  }

  export type CustomizationWhereInput = {
    AND?: CustomizationWhereInput | CustomizationWhereInput[]
    OR?: CustomizationWhereInput[]
    NOT?: CustomizationWhereInput | CustomizationWhereInput[]
    custom_id?: IntFilter<"Customization"> | number
    user_id?: IntFilter<"Customization"> | number
    product_id?: IntFilter<"Customization"> | number
    fit_preference?: StringNullableFilter<"Customization"> | string | null
    color_choice?: StringNullableFilter<"Customization"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CustomizationOrderByWithRelationInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    fit_preference?: SortOrderInput | SortOrder
    color_choice?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    _relevance?: CustomizationOrderByRelevanceInput
  }

  export type CustomizationWhereUniqueInput = Prisma.AtLeast<{
    custom_id?: number
    AND?: CustomizationWhereInput | CustomizationWhereInput[]
    OR?: CustomizationWhereInput[]
    NOT?: CustomizationWhereInput | CustomizationWhereInput[]
    user_id?: IntFilter<"Customization"> | number
    product_id?: IntFilter<"Customization"> | number
    fit_preference?: StringNullableFilter<"Customization"> | string | null
    color_choice?: StringNullableFilter<"Customization"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "custom_id">

  export type CustomizationOrderByWithAggregationInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    fit_preference?: SortOrderInput | SortOrder
    color_choice?: SortOrderInput | SortOrder
    _count?: CustomizationCountOrderByAggregateInput
    _avg?: CustomizationAvgOrderByAggregateInput
    _max?: CustomizationMaxOrderByAggregateInput
    _min?: CustomizationMinOrderByAggregateInput
    _sum?: CustomizationSumOrderByAggregateInput
  }

  export type CustomizationScalarWhereWithAggregatesInput = {
    AND?: CustomizationScalarWhereWithAggregatesInput | CustomizationScalarWhereWithAggregatesInput[]
    OR?: CustomizationScalarWhereWithAggregatesInput[]
    NOT?: CustomizationScalarWhereWithAggregatesInput | CustomizationScalarWhereWithAggregatesInput[]
    custom_id?: IntWithAggregatesFilter<"Customization"> | number
    user_id?: IntWithAggregatesFilter<"Customization"> | number
    product_id?: IntWithAggregatesFilter<"Customization"> | number
    fit_preference?: StringNullableWithAggregatesFilter<"Customization"> | string | null
    color_choice?: StringNullableWithAggregatesFilter<"Customization"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    review_id?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    product_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    user_id?: IntFilter<"Review"> | number
    product_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "review_id">

  export type ReviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"Review"> | number
    user_id?: IntWithAggregatesFilter<"Review"> | number
    product_id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type UserCreateInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    persona?: PersonaCreateNestedOneWithoutUsersInput
    carts?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnCreateNestedManyWithoutUserInput
    customizations?: CustomizationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutUserInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutUsersNestedInput
    carts?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonaCreateInput = {
    persona_name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutPersonaInput
    products?: ProductCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateInput = {
    persona_id?: number
    persona_name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutPersonaInput
    products?: ProductUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUpdateInput = {
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutPersonaNestedInput
    products?: ProductUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    persona_id?: IntFieldUpdateOperationsInput | number
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutPersonaNestedInput
    products?: ProductUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaCreateManyInput = {
    persona_id?: number
    persona_name: string
    description?: string | null
  }

  export type PersonaUpdateManyMutationInput = {
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonaUncheckedUpdateManyInput = {
    persona_id?: IntFieldUpdateOperationsInput | number
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
    added_products?: ProductCreateNestedManyWithoutAdminInput
    verified_brands?: BrandCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    admin_id?: number
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
    added_products?: ProductUncheckedCreateNestedManyWithoutAdminInput
    verified_brands?: BrandUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added_products?: ProductUpdateManyWithoutAdminNestedInput
    verified_brands?: BrandUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added_products?: ProductUncheckedUpdateManyWithoutAdminNestedInput
    verified_brands?: BrandUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    admin_id?: number
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    brand_name: string
    country?: string | null
    admin?: AdminCreateNestedOneWithoutVerified_brandsInput
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    brand_id?: number
    brand_name: string
    country?: string | null
    verified_by?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutVerified_brandsNestedInput
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified_by?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    brand_id?: number
    brand_name: string
    country?: string | null
    verified_by?: number | null
  }

  export type BrandUpdateManyMutationInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    persona: PersonaCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
  }

  export type ProductUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CartCreateInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCartsInput
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    quantity: number
    subtotal: number
    cart: CartCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemUncheckedCreateInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
    subtotal: number
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
    subtotal: number
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    total_price: number
    payment_status?: $Enums.PaymentStatus
    shipping_address: string
    order_date?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    order_id?: number
    user_id: number
    total_price: number
    payment_status?: $Enums.PaymentStatus
    shipping_address: string
    order_date?: Date | string
  }

  export type OrderUpdateInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    order_id?: number
    user_id: number
    total_price: number
    payment_status?: $Enums.PaymentStatus
    shipping_address: string
    order_date?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualTryOnCreateInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutTryonsInput
    product: ProductCreateNestedOneWithoutTryonsInput
  }

  export type VirtualTryOnUncheckedCreateInput = {
    tryon_id?: number
    user_id: number
    product_id: number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnUpdateInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutTryonsNestedInput
    product?: ProductUpdateOneRequiredWithoutTryonsNestedInput
  }

  export type VirtualTryOnUncheckedUpdateInput = {
    tryon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnCreateManyInput = {
    tryon_id?: number
    user_id: number
    product_id: number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnUpdateManyMutationInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnUncheckedUpdateManyInput = {
    tryon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CustomizationCreateInput = {
    fit_preference?: string | null
    color_choice?: string | null
    user: UserCreateNestedOneWithoutCustomizationsInput
    product: ProductCreateNestedOneWithoutCustomizationsInput
  }

  export type CustomizationUncheckedCreateInput = {
    custom_id?: number
    user_id: number
    product_id: number
    fit_preference?: string | null
    color_choice?: string | null
  }

  export type CustomizationUpdateInput = {
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomizationsNestedInput
    product?: ProductUpdateOneRequiredWithoutCustomizationsNestedInput
  }

  export type CustomizationUncheckedUpdateInput = {
    custom_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomizationCreateManyInput = {
    custom_id?: number
    user_id: number
    product_id: number
    fit_preference?: string | null
    color_choice?: string | null
  }

  export type CustomizationUpdateManyMutationInput = {
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomizationUncheckedUpdateManyInput = {
    custom_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    review_id?: number
    user_id: number
    product_id: number
    rating: number
    comment?: string | null
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyInput = {
    review_id?: number
    user_id: number
    product_id: number
    rating: number
    comment?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonaNullableScalarRelationFilter = {
    is?: PersonaWhereInput | null
    isNot?: PersonaWhereInput | null
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type VirtualTryOnListRelationFilter = {
    every?: VirtualTryOnWhereInput
    some?: VirtualTryOnWhereInput
    none?: VirtualTryOnWhereInput
  }

  export type CustomizationListRelationFilter = {
    every?: CustomizationWhereInput
    some?: CustomizationWhereInput
    none?: CustomizationWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VirtualTryOnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    skin_tone?: SortOrder
    selected_persona?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    selected_persona?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    skin_tone?: SortOrder
    selected_persona?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    skin_tone?: SortOrder
    selected_persona?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    selected_persona?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonaOrderByRelevanceInput = {
    fields: PersonaOrderByRelevanceFieldEnum | PersonaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PersonaCountOrderByAggregateInput = {
    persona_id?: SortOrder
    persona_name?: SortOrder
    description?: SortOrder
  }

  export type PersonaAvgOrderByAggregateInput = {
    persona_id?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    persona_id?: SortOrder
    persona_name?: SortOrder
    description?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    persona_id?: SortOrder
    persona_name?: SortOrder
    description?: SortOrder
  }

  export type PersonaSumOrderByAggregateInput = {
    persona_id?: SortOrder
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type BrandListRelationFilter = {
    every?: BrandWhereInput
    some?: BrandWhereInput
    none?: BrandWhereInput
  }

  export type BrandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    admin_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    admin_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type BrandOrderByRelevanceInput = {
    fields: BrandOrderByRelevanceFieldEnum | BrandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BrandCountOrderByAggregateInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    country?: SortOrder
    verified_by?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    brand_id?: SortOrder
    verified_by?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    country?: SortOrder
    verified_by?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    country?: SortOrder
    verified_by?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    brand_id?: SortOrder
    verified_by?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type PersonaScalarRelationFilter = {
    is?: PersonaWhereInput
    isNot?: PersonaWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
    size?: SortOrder
    fit?: SortOrder
    added_by?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    product_id?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    price?: SortOrder
    added_by?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
    size?: SortOrder
    fit?: SortOrder
    added_by?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
    size?: SortOrder
    fit?: SortOrder
    added_by?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    product_id?: SortOrder
    brand_id?: SortOrder
    persona_id?: SortOrder
    price?: SortOrder
    added_by?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    shipping_address?: SortOrder
    order_date?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    shipping_address?: SortOrder
    order_date?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    shipping_address?: SortOrder
    order_date?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VirtualTryOnCountOrderByAggregateInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    outfit_combination?: SortOrder
  }

  export type VirtualTryOnAvgOrderByAggregateInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type VirtualTryOnMaxOrderByAggregateInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type VirtualTryOnMinOrderByAggregateInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type VirtualTryOnSumOrderByAggregateInput = {
    tryon_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CustomizationOrderByRelevanceInput = {
    fields: CustomizationOrderByRelevanceFieldEnum | CustomizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomizationCountOrderByAggregateInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    fit_preference?: SortOrder
    color_choice?: SortOrder
  }

  export type CustomizationAvgOrderByAggregateInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type CustomizationMaxOrderByAggregateInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    fit_preference?: SortOrder
    color_choice?: SortOrder
  }

  export type CustomizationMinOrderByAggregateInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    fit_preference?: SortOrder
    color_choice?: SortOrder
  }

  export type CustomizationSumOrderByAggregateInput = {
    custom_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    rating?: SortOrder
  }

  export type PersonaCreateNestedOneWithoutUsersInput = {
    create?: XOR<PersonaCreateWithoutUsersInput, PersonaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutUsersInput
    connect?: PersonaWhereUniqueInput
  }

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VirtualTryOnCreateNestedManyWithoutUserInput = {
    create?: XOR<VirtualTryOnCreateWithoutUserInput, VirtualTryOnUncheckedCreateWithoutUserInput> | VirtualTryOnCreateWithoutUserInput[] | VirtualTryOnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutUserInput | VirtualTryOnCreateOrConnectWithoutUserInput[]
    createMany?: VirtualTryOnCreateManyUserInputEnvelope
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
  }

  export type CustomizationCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomizationCreateWithoutUserInput, CustomizationUncheckedCreateWithoutUserInput> | CustomizationCreateWithoutUserInput[] | CustomizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutUserInput | CustomizationCreateOrConnectWithoutUserInput[]
    createMany?: CustomizationCreateManyUserInputEnvelope
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VirtualTryOnUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VirtualTryOnCreateWithoutUserInput, VirtualTryOnUncheckedCreateWithoutUserInput> | VirtualTryOnCreateWithoutUserInput[] | VirtualTryOnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutUserInput | VirtualTryOnCreateOrConnectWithoutUserInput[]
    createMany?: VirtualTryOnCreateManyUserInputEnvelope
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
  }

  export type CustomizationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomizationCreateWithoutUserInput, CustomizationUncheckedCreateWithoutUserInput> | CustomizationCreateWithoutUserInput[] | CustomizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutUserInput | CustomizationCreateOrConnectWithoutUserInput[]
    createMany?: CustomizationCreateManyUserInputEnvelope
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PersonaCreateWithoutUsersInput, PersonaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutUsersInput
    upsert?: PersonaUpsertWithoutUsersInput
    disconnect?: PersonaWhereInput | boolean
    delete?: PersonaWhereInput | boolean
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutUsersInput, PersonaUpdateWithoutUsersInput>, PersonaUncheckedUpdateWithoutUsersInput>
  }

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VirtualTryOnUpdateManyWithoutUserNestedInput = {
    create?: XOR<VirtualTryOnCreateWithoutUserInput, VirtualTryOnUncheckedCreateWithoutUserInput> | VirtualTryOnCreateWithoutUserInput[] | VirtualTryOnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutUserInput | VirtualTryOnCreateOrConnectWithoutUserInput[]
    upsert?: VirtualTryOnUpsertWithWhereUniqueWithoutUserInput | VirtualTryOnUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VirtualTryOnCreateManyUserInputEnvelope
    set?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    disconnect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    delete?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    update?: VirtualTryOnUpdateWithWhereUniqueWithoutUserInput | VirtualTryOnUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VirtualTryOnUpdateManyWithWhereWithoutUserInput | VirtualTryOnUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VirtualTryOnScalarWhereInput | VirtualTryOnScalarWhereInput[]
  }

  export type CustomizationUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomizationCreateWithoutUserInput, CustomizationUncheckedCreateWithoutUserInput> | CustomizationCreateWithoutUserInput[] | CustomizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutUserInput | CustomizationCreateOrConnectWithoutUserInput[]
    upsert?: CustomizationUpsertWithWhereUniqueWithoutUserInput | CustomizationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomizationCreateManyUserInputEnvelope
    set?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    disconnect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    delete?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    update?: CustomizationUpdateWithWhereUniqueWithoutUserInput | CustomizationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomizationUpdateManyWithWhereWithoutUserInput | CustomizationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomizationScalarWhereInput | CustomizationScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VirtualTryOnCreateWithoutUserInput, VirtualTryOnUncheckedCreateWithoutUserInput> | VirtualTryOnCreateWithoutUserInput[] | VirtualTryOnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutUserInput | VirtualTryOnCreateOrConnectWithoutUserInput[]
    upsert?: VirtualTryOnUpsertWithWhereUniqueWithoutUserInput | VirtualTryOnUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VirtualTryOnCreateManyUserInputEnvelope
    set?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    disconnect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    delete?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    update?: VirtualTryOnUpdateWithWhereUniqueWithoutUserInput | VirtualTryOnUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VirtualTryOnUpdateManyWithWhereWithoutUserInput | VirtualTryOnUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VirtualTryOnScalarWhereInput | VirtualTryOnScalarWhereInput[]
  }

  export type CustomizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomizationCreateWithoutUserInput, CustomizationUncheckedCreateWithoutUserInput> | CustomizationCreateWithoutUserInput[] | CustomizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutUserInput | CustomizationCreateOrConnectWithoutUserInput[]
    upsert?: CustomizationUpsertWithWhereUniqueWithoutUserInput | CustomizationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomizationCreateManyUserInputEnvelope
    set?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    disconnect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    delete?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    update?: CustomizationUpdateWithWhereUniqueWithoutUserInput | CustomizationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomizationUpdateManyWithWhereWithoutUserInput | CustomizationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomizationScalarWhereInput | CustomizationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutPersonaInput = {
    create?: XOR<UserCreateWithoutPersonaInput, UserUncheckedCreateWithoutPersonaInput> | UserCreateWithoutPersonaInput[] | UserUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPersonaInput | UserCreateOrConnectWithoutPersonaInput[]
    createMany?: UserCreateManyPersonaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ProductCreateWithoutPersonaInput, ProductUncheckedCreateWithoutPersonaInput> | ProductCreateWithoutPersonaInput[] | ProductUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPersonaInput | ProductCreateOrConnectWithoutPersonaInput[]
    createMany?: ProductCreateManyPersonaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<UserCreateWithoutPersonaInput, UserUncheckedCreateWithoutPersonaInput> | UserCreateWithoutPersonaInput[] | UserUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPersonaInput | UserCreateOrConnectWithoutPersonaInput[]
    createMany?: UserCreateManyPersonaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ProductCreateWithoutPersonaInput, ProductUncheckedCreateWithoutPersonaInput> | ProductCreateWithoutPersonaInput[] | ProductUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPersonaInput | ProductCreateOrConnectWithoutPersonaInput[]
    createMany?: ProductCreateManyPersonaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<UserCreateWithoutPersonaInput, UserUncheckedCreateWithoutPersonaInput> | UserCreateWithoutPersonaInput[] | UserUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPersonaInput | UserCreateOrConnectWithoutPersonaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPersonaInput | UserUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: UserCreateManyPersonaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPersonaInput | UserUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPersonaInput | UserUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ProductCreateWithoutPersonaInput, ProductUncheckedCreateWithoutPersonaInput> | ProductCreateWithoutPersonaInput[] | ProductUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPersonaInput | ProductCreateOrConnectWithoutPersonaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPersonaInput | ProductUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ProductCreateManyPersonaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPersonaInput | ProductUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPersonaInput | ProductUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<UserCreateWithoutPersonaInput, UserUncheckedCreateWithoutPersonaInput> | UserCreateWithoutPersonaInput[] | UserUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPersonaInput | UserCreateOrConnectWithoutPersonaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPersonaInput | UserUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: UserCreateManyPersonaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPersonaInput | UserUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPersonaInput | UserUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ProductCreateWithoutPersonaInput, ProductUncheckedCreateWithoutPersonaInput> | ProductCreateWithoutPersonaInput[] | ProductUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPersonaInput | ProductCreateOrConnectWithoutPersonaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPersonaInput | ProductUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ProductCreateManyPersonaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPersonaInput | ProductUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPersonaInput | ProductUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandCreateNestedManyWithoutAdminInput = {
    create?: XOR<BrandCreateWithoutAdminInput, BrandUncheckedCreateWithoutAdminInput> | BrandCreateWithoutAdminInput[] | BrandUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutAdminInput | BrandCreateOrConnectWithoutAdminInput[]
    createMany?: BrandCreateManyAdminInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<BrandCreateWithoutAdminInput, BrandUncheckedCreateWithoutAdminInput> | BrandCreateWithoutAdminInput[] | BrandUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutAdminInput | BrandCreateOrConnectWithoutAdminInput[]
    createMany?: BrandCreateManyAdminInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type ProductUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutAdminInput | ProductUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutAdminInput | ProductUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutAdminInput | ProductUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BrandCreateWithoutAdminInput, BrandUncheckedCreateWithoutAdminInput> | BrandCreateWithoutAdminInput[] | BrandUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutAdminInput | BrandCreateOrConnectWithoutAdminInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutAdminInput | BrandUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BrandCreateManyAdminInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutAdminInput | BrandUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutAdminInput | BrandUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput> | ProductCreateWithoutAdminInput[] | ProductUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutAdminInput | ProductCreateOrConnectWithoutAdminInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutAdminInput | ProductUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProductCreateManyAdminInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutAdminInput | ProductUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutAdminInput | ProductUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BrandCreateWithoutAdminInput, BrandUncheckedCreateWithoutAdminInput> | BrandCreateWithoutAdminInput[] | BrandUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutAdminInput | BrandCreateOrConnectWithoutAdminInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutAdminInput | BrandUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BrandCreateManyAdminInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutAdminInput | BrandUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutAdminInput | BrandUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutVerified_brandsInput = {
    create?: XOR<AdminCreateWithoutVerified_brandsInput, AdminUncheckedCreateWithoutVerified_brandsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutVerified_brandsInput
    connect?: AdminWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AdminUpdateOneWithoutVerified_brandsNestedInput = {
    create?: XOR<AdminCreateWithoutVerified_brandsInput, AdminUncheckedCreateWithoutVerified_brandsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutVerified_brandsInput
    upsert?: AdminUpsertWithoutVerified_brandsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutVerified_brandsInput, AdminUpdateWithoutVerified_brandsInput>, AdminUncheckedUpdateWithoutVerified_brandsInput>
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type PersonaCreateNestedOneWithoutProductsInput = {
    create?: XOR<PersonaCreateWithoutProductsInput, PersonaUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutProductsInput
    connect?: PersonaWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutAdded_productsInput = {
    create?: XOR<AdminCreateWithoutAdded_productsInput, AdminUncheckedCreateWithoutAdded_productsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAdded_productsInput
    connect?: AdminWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CustomizationCreateNestedManyWithoutProductInput = {
    create?: XOR<CustomizationCreateWithoutProductInput, CustomizationUncheckedCreateWithoutProductInput> | CustomizationCreateWithoutProductInput[] | CustomizationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutProductInput | CustomizationCreateOrConnectWithoutProductInput[]
    createMany?: CustomizationCreateManyProductInputEnvelope
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
  }

  export type VirtualTryOnCreateNestedManyWithoutProductInput = {
    create?: XOR<VirtualTryOnCreateWithoutProductInput, VirtualTryOnUncheckedCreateWithoutProductInput> | VirtualTryOnCreateWithoutProductInput[] | VirtualTryOnUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutProductInput | VirtualTryOnCreateOrConnectWithoutProductInput[]
    createMany?: VirtualTryOnCreateManyProductInputEnvelope
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CustomizationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CustomizationCreateWithoutProductInput, CustomizationUncheckedCreateWithoutProductInput> | CustomizationCreateWithoutProductInput[] | CustomizationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutProductInput | CustomizationCreateOrConnectWithoutProductInput[]
    createMany?: CustomizationCreateManyProductInputEnvelope
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
  }

  export type VirtualTryOnUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VirtualTryOnCreateWithoutProductInput, VirtualTryOnUncheckedCreateWithoutProductInput> | VirtualTryOnCreateWithoutProductInput[] | VirtualTryOnUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutProductInput | VirtualTryOnCreateOrConnectWithoutProductInput[]
    createMany?: VirtualTryOnCreateManyProductInputEnvelope
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrandUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type PersonaUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<PersonaCreateWithoutProductsInput, PersonaUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutProductsInput
    upsert?: PersonaUpsertWithoutProductsInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutProductsInput, PersonaUpdateWithoutProductsInput>, PersonaUncheckedUpdateWithoutProductsInput>
  }

  export type AdminUpdateOneWithoutAdded_productsNestedInput = {
    create?: XOR<AdminCreateWithoutAdded_productsInput, AdminUncheckedCreateWithoutAdded_productsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAdded_productsInput
    upsert?: AdminUpsertWithoutAdded_productsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutAdded_productsInput, AdminUpdateWithoutAdded_productsInput>, AdminUncheckedUpdateWithoutAdded_productsInput>
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CustomizationUpdateManyWithoutProductNestedInput = {
    create?: XOR<CustomizationCreateWithoutProductInput, CustomizationUncheckedCreateWithoutProductInput> | CustomizationCreateWithoutProductInput[] | CustomizationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutProductInput | CustomizationCreateOrConnectWithoutProductInput[]
    upsert?: CustomizationUpsertWithWhereUniqueWithoutProductInput | CustomizationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CustomizationCreateManyProductInputEnvelope
    set?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    disconnect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    delete?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    update?: CustomizationUpdateWithWhereUniqueWithoutProductInput | CustomizationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CustomizationUpdateManyWithWhereWithoutProductInput | CustomizationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CustomizationScalarWhereInput | CustomizationScalarWhereInput[]
  }

  export type VirtualTryOnUpdateManyWithoutProductNestedInput = {
    create?: XOR<VirtualTryOnCreateWithoutProductInput, VirtualTryOnUncheckedCreateWithoutProductInput> | VirtualTryOnCreateWithoutProductInput[] | VirtualTryOnUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutProductInput | VirtualTryOnCreateOrConnectWithoutProductInput[]
    upsert?: VirtualTryOnUpsertWithWhereUniqueWithoutProductInput | VirtualTryOnUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VirtualTryOnCreateManyProductInputEnvelope
    set?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    disconnect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    delete?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    update?: VirtualTryOnUpdateWithWhereUniqueWithoutProductInput | VirtualTryOnUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VirtualTryOnUpdateManyWithWhereWithoutProductInput | VirtualTryOnUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VirtualTryOnScalarWhereInput | VirtualTryOnScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CustomizationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CustomizationCreateWithoutProductInput, CustomizationUncheckedCreateWithoutProductInput> | CustomizationCreateWithoutProductInput[] | CustomizationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CustomizationCreateOrConnectWithoutProductInput | CustomizationCreateOrConnectWithoutProductInput[]
    upsert?: CustomizationUpsertWithWhereUniqueWithoutProductInput | CustomizationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CustomizationCreateManyProductInputEnvelope
    set?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    disconnect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    delete?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    connect?: CustomizationWhereUniqueInput | CustomizationWhereUniqueInput[]
    update?: CustomizationUpdateWithWhereUniqueWithoutProductInput | CustomizationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CustomizationUpdateManyWithWhereWithoutProductInput | CustomizationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CustomizationScalarWhereInput | CustomizationScalarWhereInput[]
  }

  export type VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VirtualTryOnCreateWithoutProductInput, VirtualTryOnUncheckedCreateWithoutProductInput> | VirtualTryOnCreateWithoutProductInput[] | VirtualTryOnUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VirtualTryOnCreateOrConnectWithoutProductInput | VirtualTryOnCreateOrConnectWithoutProductInput[]
    upsert?: VirtualTryOnUpsertWithWhereUniqueWithoutProductInput | VirtualTryOnUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VirtualTryOnCreateManyProductInputEnvelope
    set?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    disconnect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    delete?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    connect?: VirtualTryOnWhereUniqueInput | VirtualTryOnWhereUniqueInput[]
    update?: VirtualTryOnUpdateWithWhereUniqueWithoutProductInput | VirtualTryOnUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VirtualTryOnUpdateManyWithWhereWithoutProductInput | VirtualTryOnUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VirtualTryOnScalarWhereInput | VirtualTryOnScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartsInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    upsert?: UserUpsertWithoutCartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsInput, UserUpdateWithoutCartsInput>, UserUncheckedUpdateWithoutCartsInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<ProductCreateWithoutCart_itemsInput, ProductUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCart_itemsInput
    connect?: ProductWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<ProductCreateWithoutCart_itemsInput, ProductUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCart_itemsInput
    upsert?: ProductUpsertWithoutCart_itemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCart_itemsInput, ProductUpdateWithoutCart_itemsInput>, ProductUncheckedUpdateWithoutCart_itemsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutTryonsInput = {
    create?: XOR<UserCreateWithoutTryonsInput, UserUncheckedCreateWithoutTryonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTryonsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutTryonsInput = {
    create?: XOR<ProductCreateWithoutTryonsInput, ProductUncheckedCreateWithoutTryonsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTryonsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTryonsNestedInput = {
    create?: XOR<UserCreateWithoutTryonsInput, UserUncheckedCreateWithoutTryonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTryonsInput
    upsert?: UserUpsertWithoutTryonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTryonsInput, UserUpdateWithoutTryonsInput>, UserUncheckedUpdateWithoutTryonsInput>
  }

  export type ProductUpdateOneRequiredWithoutTryonsNestedInput = {
    create?: XOR<ProductCreateWithoutTryonsInput, ProductUncheckedCreateWithoutTryonsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTryonsInput
    upsert?: ProductUpsertWithoutTryonsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTryonsInput, ProductUpdateWithoutTryonsInput>, ProductUncheckedUpdateWithoutTryonsInput>
  }

  export type UserCreateNestedOneWithoutCustomizationsInput = {
    create?: XOR<UserCreateWithoutCustomizationsInput, UserUncheckedCreateWithoutCustomizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomizationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCustomizationsInput = {
    create?: XOR<ProductCreateWithoutCustomizationsInput, ProductUncheckedCreateWithoutCustomizationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCustomizationsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCustomizationsNestedInput = {
    create?: XOR<UserCreateWithoutCustomizationsInput, UserUncheckedCreateWithoutCustomizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomizationsInput
    upsert?: UserUpsertWithoutCustomizationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomizationsInput, UserUpdateWithoutCustomizationsInput>, UserUncheckedUpdateWithoutCustomizationsInput>
  }

  export type ProductUpdateOneRequiredWithoutCustomizationsNestedInput = {
    create?: XOR<ProductCreateWithoutCustomizationsInput, ProductUncheckedCreateWithoutCustomizationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCustomizationsInput
    upsert?: ProductUpsertWithoutCustomizationsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCustomizationsInput, ProductUpdateWithoutCustomizationsInput>, ProductUncheckedUpdateWithoutCustomizationsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PersonaCreateWithoutUsersInput = {
    persona_name: string
    description?: string | null
    products?: ProductCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutUsersInput = {
    persona_id?: number
    persona_name: string
    description?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutUsersInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutUsersInput, PersonaUncheckedCreateWithoutUsersInput>
  }

  export type CartCreateWithoutUserInput = {
    created_at?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    cart_id?: number
    created_at?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: CartCreateManyUserInput | CartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    total_price: number
    payment_status?: $Enums.PaymentStatus
    shipping_address: string
    order_date?: Date | string
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    order_id?: number
    total_price: number
    payment_status?: $Enums.PaymentStatus
    shipping_address: string
    order_date?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VirtualTryOnCreateWithoutUserInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutTryonsInput
  }

  export type VirtualTryOnUncheckedCreateWithoutUserInput = {
    tryon_id?: number
    product_id: number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnCreateOrConnectWithoutUserInput = {
    where: VirtualTryOnWhereUniqueInput
    create: XOR<VirtualTryOnCreateWithoutUserInput, VirtualTryOnUncheckedCreateWithoutUserInput>
  }

  export type VirtualTryOnCreateManyUserInputEnvelope = {
    data: VirtualTryOnCreateManyUserInput | VirtualTryOnCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomizationCreateWithoutUserInput = {
    fit_preference?: string | null
    color_choice?: string | null
    product: ProductCreateNestedOneWithoutCustomizationsInput
  }

  export type CustomizationUncheckedCreateWithoutUserInput = {
    custom_id?: number
    product_id: number
    fit_preference?: string | null
    color_choice?: string | null
  }

  export type CustomizationCreateOrConnectWithoutUserInput = {
    where: CustomizationWhereUniqueInput
    create: XOR<CustomizationCreateWithoutUserInput, CustomizationUncheckedCreateWithoutUserInput>
  }

  export type CustomizationCreateManyUserInputEnvelope = {
    data: CustomizationCreateManyUserInput | CustomizationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    review_id?: number
    product_id: number
    rating: number
    comment?: string | null
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonaUpsertWithoutUsersInput = {
    update: XOR<PersonaUpdateWithoutUsersInput, PersonaUncheckedUpdateWithoutUsersInput>
    create: XOR<PersonaCreateWithoutUsersInput, PersonaUncheckedCreateWithoutUsersInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutUsersInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutUsersInput, PersonaUncheckedUpdateWithoutUsersInput>
  }

  export type PersonaUpdateWithoutUsersInput = {
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutUsersInput = {
    persona_id?: IntFieldUpdateOperationsInput | number
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUserInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    cart_id?: IntFilter<"Cart"> | number
    user_id?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    order_id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    total_price?: FloatFilter<"Order"> | number
    payment_status?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    shipping_address?: StringFilter<"Order"> | string
    order_date?: DateTimeFilter<"Order"> | Date | string
  }

  export type VirtualTryOnUpsertWithWhereUniqueWithoutUserInput = {
    where: VirtualTryOnWhereUniqueInput
    update: XOR<VirtualTryOnUpdateWithoutUserInput, VirtualTryOnUncheckedUpdateWithoutUserInput>
    create: XOR<VirtualTryOnCreateWithoutUserInput, VirtualTryOnUncheckedCreateWithoutUserInput>
  }

  export type VirtualTryOnUpdateWithWhereUniqueWithoutUserInput = {
    where: VirtualTryOnWhereUniqueInput
    data: XOR<VirtualTryOnUpdateWithoutUserInput, VirtualTryOnUncheckedUpdateWithoutUserInput>
  }

  export type VirtualTryOnUpdateManyWithWhereWithoutUserInput = {
    where: VirtualTryOnScalarWhereInput
    data: XOR<VirtualTryOnUpdateManyMutationInput, VirtualTryOnUncheckedUpdateManyWithoutUserInput>
  }

  export type VirtualTryOnScalarWhereInput = {
    AND?: VirtualTryOnScalarWhereInput | VirtualTryOnScalarWhereInput[]
    OR?: VirtualTryOnScalarWhereInput[]
    NOT?: VirtualTryOnScalarWhereInput | VirtualTryOnScalarWhereInput[]
    tryon_id?: IntFilter<"VirtualTryOn"> | number
    user_id?: IntFilter<"VirtualTryOn"> | number
    product_id?: IntFilter<"VirtualTryOn"> | number
    outfit_combination?: JsonNullableFilter<"VirtualTryOn">
  }

  export type CustomizationUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomizationWhereUniqueInput
    update: XOR<CustomizationUpdateWithoutUserInput, CustomizationUncheckedUpdateWithoutUserInput>
    create: XOR<CustomizationCreateWithoutUserInput, CustomizationUncheckedCreateWithoutUserInput>
  }

  export type CustomizationUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomizationWhereUniqueInput
    data: XOR<CustomizationUpdateWithoutUserInput, CustomizationUncheckedUpdateWithoutUserInput>
  }

  export type CustomizationUpdateManyWithWhereWithoutUserInput = {
    where: CustomizationScalarWhereInput
    data: XOR<CustomizationUpdateManyMutationInput, CustomizationUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomizationScalarWhereInput = {
    AND?: CustomizationScalarWhereInput | CustomizationScalarWhereInput[]
    OR?: CustomizationScalarWhereInput[]
    NOT?: CustomizationScalarWhereInput | CustomizationScalarWhereInput[]
    custom_id?: IntFilter<"Customization"> | number
    user_id?: IntFilter<"Customization"> | number
    product_id?: IntFilter<"Customization"> | number
    fit_preference?: StringNullableFilter<"Customization"> | string | null
    color_choice?: StringNullableFilter<"Customization"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    review_id?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    product_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
  }

  export type UserCreateWithoutPersonaInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    carts?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnCreateNestedManyWithoutUserInput
    customizations?: CustomizationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonaInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutUserInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonaInput, UserUncheckedCreateWithoutPersonaInput>
  }

  export type UserCreateManyPersonaInputEnvelope = {
    data: UserCreateManyPersonaInput | UserCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutPersonaInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPersonaInput = {
    product_id?: number
    product_name: string
    brand_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPersonaInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPersonaInput, ProductUncheckedCreateWithoutPersonaInput>
  }

  export type ProductCreateManyPersonaInputEnvelope = {
    data: ProductCreateManyPersonaInput | ProductCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPersonaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPersonaInput, UserUncheckedUpdateWithoutPersonaInput>
    create: XOR<UserCreateWithoutPersonaInput, UserUncheckedCreateWithoutPersonaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPersonaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPersonaInput, UserUncheckedUpdateWithoutPersonaInput>
  }

  export type UserUpdateManyWithWhereWithoutPersonaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPersonaInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    user_id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    height?: IntNullableFilter<"User"> | number | null
    weight?: IntNullableFilter<"User"> | number | null
    skin_tone?: StringNullableFilter<"User"> | string | null
    selected_persona?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeFilter<"User"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutPersonaInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutPersonaInput, ProductUncheckedUpdateWithoutPersonaInput>
    create: XOR<ProductCreateWithoutPersonaInput, ProductUncheckedCreateWithoutPersonaInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutPersonaInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutPersonaInput, ProductUncheckedUpdateWithoutPersonaInput>
  }

  export type ProductUpdateManyWithWhereWithoutPersonaInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutPersonaInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    product_id?: IntFilter<"Product"> | number
    product_name?: StringFilter<"Product"> | string
    brand_id?: IntFilter<"Product"> | number
    persona_id?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    color?: StringNullableFilter<"Product"> | string | null
    size?: StringNullableFilter<"Product"> | string | null
    fit?: StringNullableFilter<"Product"> | string | null
    added_by?: IntNullableFilter<"Product"> | number | null
  }

  export type ProductCreateWithoutAdminInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    persona: PersonaCreateNestedOneWithoutProductsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAdminInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAdminInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput>
  }

  export type ProductCreateManyAdminInputEnvelope = {
    data: ProductCreateManyAdminInput | ProductCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type BrandCreateWithoutAdminInput = {
    brand_name: string
    country?: string | null
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutAdminInput = {
    brand_id?: number
    brand_name: string
    country?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutAdminInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutAdminInput, BrandUncheckedCreateWithoutAdminInput>
  }

  export type BrandCreateManyAdminInputEnvelope = {
    data: BrandCreateManyAdminInput | BrandCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutAdminInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutAdminInput, ProductUncheckedUpdateWithoutAdminInput>
    create: XOR<ProductCreateWithoutAdminInput, ProductUncheckedCreateWithoutAdminInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutAdminInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutAdminInput, ProductUncheckedUpdateWithoutAdminInput>
  }

  export type ProductUpdateManyWithWhereWithoutAdminInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutAdminInput>
  }

  export type BrandUpsertWithWhereUniqueWithoutAdminInput = {
    where: BrandWhereUniqueInput
    update: XOR<BrandUpdateWithoutAdminInput, BrandUncheckedUpdateWithoutAdminInput>
    create: XOR<BrandCreateWithoutAdminInput, BrandUncheckedCreateWithoutAdminInput>
  }

  export type BrandUpdateWithWhereUniqueWithoutAdminInput = {
    where: BrandWhereUniqueInput
    data: XOR<BrandUpdateWithoutAdminInput, BrandUncheckedUpdateWithoutAdminInput>
  }

  export type BrandUpdateManyWithWhereWithoutAdminInput = {
    where: BrandScalarWhereInput
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyWithoutAdminInput>
  }

  export type BrandScalarWhereInput = {
    AND?: BrandScalarWhereInput | BrandScalarWhereInput[]
    OR?: BrandScalarWhereInput[]
    NOT?: BrandScalarWhereInput | BrandScalarWhereInput[]
    brand_id?: IntFilter<"Brand"> | number
    brand_name?: StringFilter<"Brand"> | string
    country?: StringNullableFilter<"Brand"> | string | null
    verified_by?: IntNullableFilter<"Brand"> | number | null
  }

  export type AdminCreateWithoutVerified_brandsInput = {
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
    added_products?: ProductCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutVerified_brandsInput = {
    admin_id?: number
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
    added_products?: ProductUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutVerified_brandsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutVerified_brandsInput, AdminUncheckedCreateWithoutVerified_brandsInput>
  }

  export type ProductCreateWithoutBrandInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    persona: PersonaCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    product_id?: number
    product_name: string
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutVerified_brandsInput = {
    update: XOR<AdminUpdateWithoutVerified_brandsInput, AdminUncheckedUpdateWithoutVerified_brandsInput>
    create: XOR<AdminCreateWithoutVerified_brandsInput, AdminUncheckedCreateWithoutVerified_brandsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutVerified_brandsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutVerified_brandsInput, AdminUncheckedUpdateWithoutVerified_brandsInput>
  }

  export type AdminUpdateWithoutVerified_brandsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added_products?: ProductUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutVerified_brandsInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added_products?: ProductUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type BrandCreateWithoutProductsInput = {
    brand_name: string
    country?: string | null
    admin?: AdminCreateNestedOneWithoutVerified_brandsInput
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    brand_id?: number
    brand_name: string
    country?: string | null
    verified_by?: number | null
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type PersonaCreateWithoutProductsInput = {
    persona_name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutProductsInput = {
    persona_id?: number
    persona_name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutProductsInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutProductsInput, PersonaUncheckedCreateWithoutProductsInput>
  }

  export type AdminCreateWithoutAdded_productsInput = {
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
    verified_brands?: BrandCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutAdded_productsInput = {
    admin_id?: number
    full_name: string
    email: string
    password_hash: string
    role?: $Enums.AdminRole
    created_at?: Date | string
    verified_brands?: BrandUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutAdded_productsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutAdded_productsInput, AdminUncheckedCreateWithoutAdded_productsInput>
  }

  export type ReviewCreateWithoutProductInput = {
    rating: number
    comment?: string | null
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    review_id?: number
    user_id: number
    rating: number
    comment?: string | null
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CustomizationCreateWithoutProductInput = {
    fit_preference?: string | null
    color_choice?: string | null
    user: UserCreateNestedOneWithoutCustomizationsInput
  }

  export type CustomizationUncheckedCreateWithoutProductInput = {
    custom_id?: number
    user_id: number
    fit_preference?: string | null
    color_choice?: string | null
  }

  export type CustomizationCreateOrConnectWithoutProductInput = {
    where: CustomizationWhereUniqueInput
    create: XOR<CustomizationCreateWithoutProductInput, CustomizationUncheckedCreateWithoutProductInput>
  }

  export type CustomizationCreateManyProductInputEnvelope = {
    data: CustomizationCreateManyProductInput | CustomizationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type VirtualTryOnCreateWithoutProductInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutTryonsInput
  }

  export type VirtualTryOnUncheckedCreateWithoutProductInput = {
    tryon_id?: number
    user_id: number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnCreateOrConnectWithoutProductInput = {
    where: VirtualTryOnWhereUniqueInput
    create: XOR<VirtualTryOnCreateWithoutProductInput, VirtualTryOnUncheckedCreateWithoutProductInput>
  }

  export type VirtualTryOnCreateManyProductInputEnvelope = {
    data: VirtualTryOnCreateManyProductInput | VirtualTryOnCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductInput = {
    quantity: number
    subtotal: number
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
    subtotal: number
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutVerified_brandsNestedInput
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PersonaUpsertWithoutProductsInput = {
    update: XOR<PersonaUpdateWithoutProductsInput, PersonaUncheckedUpdateWithoutProductsInput>
    create: XOR<PersonaCreateWithoutProductsInput, PersonaUncheckedCreateWithoutProductsInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutProductsInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutProductsInput, PersonaUncheckedUpdateWithoutProductsInput>
  }

  export type PersonaUpdateWithoutProductsInput = {
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutProductsInput = {
    persona_id?: IntFieldUpdateOperationsInput | number
    persona_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type AdminUpsertWithoutAdded_productsInput = {
    update: XOR<AdminUpdateWithoutAdded_productsInput, AdminUncheckedUpdateWithoutAdded_productsInput>
    create: XOR<AdminCreateWithoutAdded_productsInput, AdminUncheckedCreateWithoutAdded_productsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutAdded_productsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutAdded_productsInput, AdminUncheckedUpdateWithoutAdded_productsInput>
  }

  export type AdminUpdateWithoutAdded_productsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_brands?: BrandUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutAdded_productsInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_brands?: BrandUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type CustomizationUpsertWithWhereUniqueWithoutProductInput = {
    where: CustomizationWhereUniqueInput
    update: XOR<CustomizationUpdateWithoutProductInput, CustomizationUncheckedUpdateWithoutProductInput>
    create: XOR<CustomizationCreateWithoutProductInput, CustomizationUncheckedCreateWithoutProductInput>
  }

  export type CustomizationUpdateWithWhereUniqueWithoutProductInput = {
    where: CustomizationWhereUniqueInput
    data: XOR<CustomizationUpdateWithoutProductInput, CustomizationUncheckedUpdateWithoutProductInput>
  }

  export type CustomizationUpdateManyWithWhereWithoutProductInput = {
    where: CustomizationScalarWhereInput
    data: XOR<CustomizationUpdateManyMutationInput, CustomizationUncheckedUpdateManyWithoutProductInput>
  }

  export type VirtualTryOnUpsertWithWhereUniqueWithoutProductInput = {
    where: VirtualTryOnWhereUniqueInput
    update: XOR<VirtualTryOnUpdateWithoutProductInput, VirtualTryOnUncheckedUpdateWithoutProductInput>
    create: XOR<VirtualTryOnCreateWithoutProductInput, VirtualTryOnUncheckedCreateWithoutProductInput>
  }

  export type VirtualTryOnUpdateWithWhereUniqueWithoutProductInput = {
    where: VirtualTryOnWhereUniqueInput
    data: XOR<VirtualTryOnUpdateWithoutProductInput, VirtualTryOnUncheckedUpdateWithoutProductInput>
  }

  export type VirtualTryOnUpdateManyWithWhereWithoutProductInput = {
    where: VirtualTryOnScalarWhereInput
    data: XOR<VirtualTryOnUpdateManyMutationInput, VirtualTryOnUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    cart_item_id?: IntFilter<"CartItem"> | number
    cart_id?: IntFilter<"CartItem"> | number
    product_id?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    subtotal?: FloatFilter<"CartItem"> | number
  }

  export type UserCreateWithoutCartsInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    persona?: PersonaCreateNestedOneWithoutUsersInput
    orders?: OrderCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnCreateNestedManyWithoutUserInput
    customizations?: CustomizationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutUserInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
  }

  export type CartItemCreateWithoutCartInput = {
    quantity: number
    subtotal: number
    product: ProductCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
    subtotal: number
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartsInput = {
    update: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateWithoutCartsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutUsersNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCartsInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutCart_itemsInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    persona: PersonaCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCart_itemsInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCart_itemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCart_itemsInput, ProductUncheckedCreateWithoutCart_itemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutCart_itemsInput = {
    update: XOR<ProductUpdateWithoutCart_itemsInput, ProductUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<ProductCreateWithoutCart_itemsInput, ProductUncheckedCreateWithoutCart_itemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCart_itemsInput, ProductUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ProductUpdateWithoutCart_itemsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCart_itemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    persona?: PersonaCreateNestedOneWithoutUsersInput
    carts?: CartCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnCreateNestedManyWithoutUserInput
    customizations?: CustomizationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutUserInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutUsersNestedInput
    carts?: CartUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTryonsInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    persona?: PersonaCreateNestedOneWithoutUsersInput
    carts?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    customizations?: CustomizationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTryonsInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTryonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTryonsInput, UserUncheckedCreateWithoutTryonsInput>
  }

  export type ProductCreateWithoutTryonsInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    persona: PersonaCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTryonsInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTryonsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTryonsInput, ProductUncheckedCreateWithoutTryonsInput>
  }

  export type UserUpsertWithoutTryonsInput = {
    update: XOR<UserUpdateWithoutTryonsInput, UserUncheckedUpdateWithoutTryonsInput>
    create: XOR<UserCreateWithoutTryonsInput, UserUncheckedCreateWithoutTryonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTryonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTryonsInput, UserUncheckedUpdateWithoutTryonsInput>
  }

  export type UserUpdateWithoutTryonsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutUsersNestedInput
    carts?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTryonsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutTryonsInput = {
    update: XOR<ProductUpdateWithoutTryonsInput, ProductUncheckedUpdateWithoutTryonsInput>
    create: XOR<ProductCreateWithoutTryonsInput, ProductUncheckedCreateWithoutTryonsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTryonsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTryonsInput, ProductUncheckedUpdateWithoutTryonsInput>
  }

  export type ProductUpdateWithoutTryonsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTryonsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutCustomizationsInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    persona?: PersonaCreateNestedOneWithoutUsersInput
    carts?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomizationsInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomizationsInput, UserUncheckedCreateWithoutCustomizationsInput>
  }

  export type ProductCreateWithoutCustomizationsInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    persona: PersonaCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCustomizationsInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCustomizationsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCustomizationsInput, ProductUncheckedCreateWithoutCustomizationsInput>
  }

  export type UserUpsertWithoutCustomizationsInput = {
    update: XOR<UserUpdateWithoutCustomizationsInput, UserUncheckedUpdateWithoutCustomizationsInput>
    create: XOR<UserCreateWithoutCustomizationsInput, UserUncheckedCreateWithoutCustomizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomizationsInput, UserUncheckedUpdateWithoutCustomizationsInput>
  }

  export type UserUpdateWithoutCustomizationsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutUsersNestedInput
    carts?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomizationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutCustomizationsInput = {
    update: XOR<ProductUpdateWithoutCustomizationsInput, ProductUncheckedUpdateWithoutCustomizationsInput>
    create: XOR<ProductCreateWithoutCustomizationsInput, ProductUncheckedCreateWithoutCustomizationsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCustomizationsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCustomizationsInput, ProductUncheckedUpdateWithoutCustomizationsInput>
  }

  export type ProductUpdateWithoutCustomizationsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCustomizationsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
    persona?: PersonaCreateNestedOneWithoutUsersInput
    carts?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnCreateNestedManyWithoutUserInput
    customizations?: CustomizationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    selected_persona?: number | null
    created_at?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutUserInput
    customizations?: CustomizationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    product_name: string
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    brand: BrandCreateNestedOneWithoutProductsInput
    persona: PersonaCreateNestedOneWithoutProductsInput
    admin?: AdminCreateNestedOneWithoutAdded_productsInput
    customizations?: CustomizationCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnCreateNestedManyWithoutProductInput
    cart_items?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
    customizations?: CustomizationUncheckedCreateNestedManyWithoutProductInput
    tryons?: VirtualTryOnUncheckedCreateNestedManyWithoutProductInput
    cart_items?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutUsersNestedInput
    carts?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    selected_persona?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartCreateManyUserInput = {
    cart_id?: number
    created_at?: Date | string
  }

  export type OrderCreateManyUserInput = {
    order_id?: number
    total_price: number
    payment_status?: $Enums.PaymentStatus
    shipping_address: string
    order_date?: Date | string
  }

  export type VirtualTryOnCreateManyUserInput = {
    tryon_id?: number
    product_id: number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CustomizationCreateManyUserInput = {
    custom_id?: number
    product_id: number
    fit_preference?: string | null
    color_choice?: string | null
  }

  export type ReviewCreateManyUserInput = {
    review_id?: number
    product_id: number
    rating: number
    comment?: string | null
  }

  export type CartUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    shipping_address?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualTryOnUpdateWithoutUserInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutTryonsNestedInput
  }

  export type VirtualTryOnUncheckedUpdateWithoutUserInput = {
    tryon_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnUncheckedUpdateManyWithoutUserInput = {
    tryon_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CustomizationUpdateWithoutUserInput = {
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutCustomizationsNestedInput
  }

  export type CustomizationUncheckedUpdateWithoutUserInput = {
    custom_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomizationUncheckedUpdateManyWithoutUserInput = {
    custom_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyPersonaInput = {
    user_id?: number
    full_name: string
    email: string
    password_hash: string
    height?: number | null
    weight?: number | null
    skin_tone?: string | null
    created_at?: Date | string
  }

  export type ProductCreateManyPersonaInput = {
    product_id?: number
    product_name: string
    brand_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
  }

  export type UserUpdateWithoutPersonaInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonaInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutUserNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPersonaInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    skin_tone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutPersonaInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPersonaInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutPersonaInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyAdminInput = {
    product_id?: number
    product_name: string
    brand_id: number
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
  }

  export type BrandCreateManyAdminInput = {
    brand_id?: number
    brand_name: string
    country?: string | null
  }

  export type ProductUpdateWithoutAdminInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAdminInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutAdminInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUpdateWithoutAdminInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutAdminInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateManyWithoutAdminInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateManyBrandInput = {
    product_id?: number
    product_name: string
    persona_id: number
    category: string
    price: number
    color?: string | null
    size?: string | null
    fit?: string | null
    added_by?: number | null
  }

  export type ProductUpdateWithoutBrandInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: PersonaUpdateOneRequiredWithoutProductsNestedInput
    admin?: AdminUpdateOneWithoutAdded_productsNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    customizations?: CustomizationUncheckedUpdateManyWithoutProductNestedInput
    tryons?: VirtualTryOnUncheckedUpdateManyWithoutProductNestedInput
    cart_items?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    persona_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    fit?: NullableStringFieldUpdateOperationsInput | string | null
    added_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewCreateManyProductInput = {
    review_id?: number
    user_id: number
    rating: number
    comment?: string | null
  }

  export type CustomizationCreateManyProductInput = {
    custom_id?: number
    user_id: number
    fit_preference?: string | null
    color_choice?: string | null
  }

  export type VirtualTryOnCreateManyProductInput = {
    tryon_id?: number
    user_id: number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CartItemCreateManyProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
    subtotal: number
  }

  export type ReviewUpdateWithoutProductInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomizationUpdateWithoutProductInput = {
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomizationsNestedInput
  }

  export type CustomizationUncheckedUpdateWithoutProductInput = {
    custom_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomizationUncheckedUpdateManyWithoutProductInput = {
    custom_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fit_preference?: NullableStringFieldUpdateOperationsInput | string | null
    color_choice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VirtualTryOnUpdateWithoutProductInput = {
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutTryonsNestedInput
  }

  export type VirtualTryOnUncheckedUpdateWithoutProductInput = {
    tryon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VirtualTryOnUncheckedUpdateManyWithoutProductInput = {
    tryon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    outfit_combination?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
    subtotal: number
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}