
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
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Senior
 * 
 */
export type Senior = $Result.DefaultSelection<Prisma.$SeniorPayload>
/**
 * Model RegistrationDocument
 * 
 */
export type RegistrationDocument = $Result.DefaultSelection<Prisma.$RegistrationDocumentPayload>
/**
 * Model Remarks
 * 
 */
export type Remarks = $Result.DefaultSelection<Prisma.$RemarksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.senior`: Exposes CRUD operations for the **Senior** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seniors
    * const seniors = await prisma.senior.findMany()
    * ```
    */
  get senior(): Prisma.SeniorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrationDocument`: Exposes CRUD operations for the **RegistrationDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationDocuments
    * const registrationDocuments = await prisma.registrationDocument.findMany()
    * ```
    */
  get registrationDocument(): Prisma.RegistrationDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remarks`: Exposes CRUD operations for the **Remarks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Remarks
    * const remarks = await prisma.remarks.findMany()
    * ```
    */
  get remarks(): Prisma.RemarksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Session: 'Session',
    Senior: 'Senior',
    RegistrationDocument: 'RegistrationDocument',
    Remarks: 'Remarks'
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
      modelProps: "user" | "session" | "senior" | "registrationDocument" | "remarks"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Senior: {
        payload: Prisma.$SeniorPayload<ExtArgs>
        fields: Prisma.SeniorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeniorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeniorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>
          }
          findFirst: {
            args: Prisma.SeniorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeniorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>
          }
          findMany: {
            args: Prisma.SeniorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>[]
          }
          create: {
            args: Prisma.SeniorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>
          }
          createMany: {
            args: Prisma.SeniorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeniorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>[]
          }
          delete: {
            args: Prisma.SeniorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>
          }
          update: {
            args: Prisma.SeniorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>
          }
          deleteMany: {
            args: Prisma.SeniorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeniorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeniorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>[]
          }
          upsert: {
            args: Prisma.SeniorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPayload>
          }
          aggregate: {
            args: Prisma.SeniorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSenior>
          }
          groupBy: {
            args: Prisma.SeniorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeniorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeniorCountArgs<ExtArgs>
            result: $Utils.Optional<SeniorCountAggregateOutputType> | number
          }
        }
      }
      RegistrationDocument: {
        payload: Prisma.$RegistrationDocumentPayload<ExtArgs>
        fields: Prisma.RegistrationDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          findFirst: {
            args: Prisma.RegistrationDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          findMany: {
            args: Prisma.RegistrationDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>[]
          }
          create: {
            args: Prisma.RegistrationDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          createMany: {
            args: Prisma.RegistrationDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>[]
          }
          delete: {
            args: Prisma.RegistrationDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          update: {
            args: Prisma.RegistrationDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>[]
          }
          upsert: {
            args: Prisma.RegistrationDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationDocumentPayload>
          }
          aggregate: {
            args: Prisma.RegistrationDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationDocument>
          }
          groupBy: {
            args: Prisma.RegistrationDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationDocumentCountAggregateOutputType> | number
          }
        }
      }
      Remarks: {
        payload: Prisma.$RemarksPayload<ExtArgs>
        fields: Prisma.RemarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>
          }
          findFirst: {
            args: Prisma.RemarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>
          }
          findMany: {
            args: Prisma.RemarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>[]
          }
          create: {
            args: Prisma.RemarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>
          }
          createMany: {
            args: Prisma.RemarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>[]
          }
          delete: {
            args: Prisma.RemarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>
          }
          update: {
            args: Prisma.RemarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>
          }
          deleteMany: {
            args: Prisma.RemarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemarksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>[]
          }
          upsert: {
            args: Prisma.RemarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarksPayload>
          }
          aggregate: {
            args: Prisma.RemarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemarks>
          }
          groupBy: {
            args: Prisma.RemarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemarksCountArgs<ExtArgs>
            result: $Utils.Optional<RemarksCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    session?: SessionOmit
    senior?: SeniorOmit
    registrationDocument?: RegistrationDocumentOmit
    remarks?: RemarksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SeniorCountOutputType
   */

  export type SeniorCountOutputType = {
    documents: number
  }

  export type SeniorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | SeniorCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * SeniorCountOutputType without action
   */
  export type SeniorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorCountOutputType
     */
    select?: SeniorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeniorCountOutputType without action
   */
  export type SeniorCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationDocumentWhereInput
  }


  /**
   * Count Type RemarksCountOutputType
   */

  export type RemarksCountOutputType = {
    seniors: number
  }

  export type RemarksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seniors?: boolean | RemarksCountOutputTypeCountSeniorsArgs
  }

  // Custom InputTypes
  /**
   * RemarksCountOutputType without action
   */
  export type RemarksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarksCountOutputType
     */
    select?: RemarksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RemarksCountOutputType without action
   */
  export type RemarksCountOutputTypeCountSeniorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeniorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Senior
   */

  export type AggregateSenior = {
    _count: SeniorCountAggregateOutputType | null
    _avg: SeniorAvgAggregateOutputType | null
    _sum: SeniorSumAggregateOutputType | null
    _min: SeniorMinAggregateOutputType | null
    _max: SeniorMaxAggregateOutputType | null
  }

  export type SeniorAvgAggregateOutputType = {
    id: number | null
    remarks_id: number | null
  }

  export type SeniorSumAggregateOutputType = {
    id: number | null
    remarks_id: number | null
  }

  export type SeniorMinAggregateOutputType = {
    id: number | null
    lastname: string | null
    firstname: string | null
    middlename: string | null
    email: string | null
    barangay: string | null
    purok: string | null
    gender: $Enums.Gender | null
    birthdate: Date | null
    age: string | null
    contact_no: string | null
    remarks_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeniorMaxAggregateOutputType = {
    id: number | null
    lastname: string | null
    firstname: string | null
    middlename: string | null
    email: string | null
    barangay: string | null
    purok: string | null
    gender: $Enums.Gender | null
    birthdate: Date | null
    age: string | null
    contact_no: string | null
    remarks_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeniorCountAggregateOutputType = {
    id: number
    lastname: number
    firstname: number
    middlename: number
    email: number
    barangay: number
    purok: number
    gender: number
    birthdate: number
    age: number
    contact_no: number
    remarks_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeniorAvgAggregateInputType = {
    id?: true
    remarks_id?: true
  }

  export type SeniorSumAggregateInputType = {
    id?: true
    remarks_id?: true
  }

  export type SeniorMinAggregateInputType = {
    id?: true
    lastname?: true
    firstname?: true
    middlename?: true
    email?: true
    barangay?: true
    purok?: true
    gender?: true
    birthdate?: true
    age?: true
    contact_no?: true
    remarks_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeniorMaxAggregateInputType = {
    id?: true
    lastname?: true
    firstname?: true
    middlename?: true
    email?: true
    barangay?: true
    purok?: true
    gender?: true
    birthdate?: true
    age?: true
    contact_no?: true
    remarks_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeniorCountAggregateInputType = {
    id?: true
    lastname?: true
    firstname?: true
    middlename?: true
    email?: true
    barangay?: true
    purok?: true
    gender?: true
    birthdate?: true
    age?: true
    contact_no?: true
    remarks_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeniorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senior to aggregate.
     */
    where?: SeniorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seniors to fetch.
     */
    orderBy?: SeniorOrderByWithRelationInput | SeniorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeniorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seniors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seniors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seniors
    **/
    _count?: true | SeniorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeniorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeniorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeniorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeniorMaxAggregateInputType
  }

  export type GetSeniorAggregateType<T extends SeniorAggregateArgs> = {
        [P in keyof T & keyof AggregateSenior]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSenior[P]>
      : GetScalarType<T[P], AggregateSenior[P]>
  }




  export type SeniorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeniorWhereInput
    orderBy?: SeniorOrderByWithAggregationInput | SeniorOrderByWithAggregationInput[]
    by: SeniorScalarFieldEnum[] | SeniorScalarFieldEnum
    having?: SeniorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeniorCountAggregateInputType | true
    _avg?: SeniorAvgAggregateInputType
    _sum?: SeniorSumAggregateInputType
    _min?: SeniorMinAggregateInputType
    _max?: SeniorMaxAggregateInputType
  }

  export type SeniorGroupByOutputType = {
    id: number
    lastname: string
    firstname: string
    middlename: string | null
    email: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date
    age: string
    contact_no: string
    remarks_id: number
    createdAt: Date
    updatedAt: Date
    _count: SeniorCountAggregateOutputType | null
    _avg: SeniorAvgAggregateOutputType | null
    _sum: SeniorSumAggregateOutputType | null
    _min: SeniorMinAggregateOutputType | null
    _max: SeniorMaxAggregateOutputType | null
  }

  type GetSeniorGroupByPayload<T extends SeniorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeniorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeniorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeniorGroupByOutputType[P]>
            : GetScalarType<T[P], SeniorGroupByOutputType[P]>
        }
      >
    >


  export type SeniorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    email?: boolean
    barangay?: boolean
    purok?: boolean
    gender?: boolean
    birthdate?: boolean
    age?: boolean
    contact_no?: boolean
    remarks_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    remarks?: boolean | RemarksDefaultArgs<ExtArgs>
    documents?: boolean | Senior$documentsArgs<ExtArgs>
    _count?: boolean | SeniorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senior"]>

  export type SeniorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    email?: boolean
    barangay?: boolean
    purok?: boolean
    gender?: boolean
    birthdate?: boolean
    age?: boolean
    contact_no?: boolean
    remarks_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    remarks?: boolean | RemarksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senior"]>

  export type SeniorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    email?: boolean
    barangay?: boolean
    purok?: boolean
    gender?: boolean
    birthdate?: boolean
    age?: boolean
    contact_no?: boolean
    remarks_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    remarks?: boolean | RemarksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senior"]>

  export type SeniorSelectScalar = {
    id?: boolean
    lastname?: boolean
    firstname?: boolean
    middlename?: boolean
    email?: boolean
    barangay?: boolean
    purok?: boolean
    gender?: boolean
    birthdate?: boolean
    age?: boolean
    contact_no?: boolean
    remarks_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeniorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastname" | "firstname" | "middlename" | "email" | "barangay" | "purok" | "gender" | "birthdate" | "age" | "contact_no" | "remarks_id" | "createdAt" | "updatedAt", ExtArgs["result"]["senior"]>
  export type SeniorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remarks?: boolean | RemarksDefaultArgs<ExtArgs>
    documents?: boolean | Senior$documentsArgs<ExtArgs>
    _count?: boolean | SeniorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeniorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remarks?: boolean | RemarksDefaultArgs<ExtArgs>
  }
  export type SeniorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remarks?: boolean | RemarksDefaultArgs<ExtArgs>
  }

  export type $SeniorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Senior"
    objects: {
      remarks: Prisma.$RemarksPayload<ExtArgs>
      documents: Prisma.$RegistrationDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lastname: string
      firstname: string
      middlename: string | null
      email: string | null
      barangay: string
      purok: string
      gender: $Enums.Gender
      birthdate: Date
      age: string
      contact_no: string
      remarks_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["senior"]>
    composites: {}
  }

  type SeniorGetPayload<S extends boolean | null | undefined | SeniorDefaultArgs> = $Result.GetResult<Prisma.$SeniorPayload, S>

  type SeniorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeniorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeniorCountAggregateInputType | true
    }

  export interface SeniorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Senior'], meta: { name: 'Senior' } }
    /**
     * Find zero or one Senior that matches the filter.
     * @param {SeniorFindUniqueArgs} args - Arguments to find a Senior
     * @example
     * // Get one Senior
     * const senior = await prisma.senior.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeniorFindUniqueArgs>(args: SelectSubset<T, SeniorFindUniqueArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Senior that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeniorFindUniqueOrThrowArgs} args - Arguments to find a Senior
     * @example
     * // Get one Senior
     * const senior = await prisma.senior.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeniorFindUniqueOrThrowArgs>(args: SelectSubset<T, SeniorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senior that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorFindFirstArgs} args - Arguments to find a Senior
     * @example
     * // Get one Senior
     * const senior = await prisma.senior.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeniorFindFirstArgs>(args?: SelectSubset<T, SeniorFindFirstArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senior that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorFindFirstOrThrowArgs} args - Arguments to find a Senior
     * @example
     * // Get one Senior
     * const senior = await prisma.senior.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeniorFindFirstOrThrowArgs>(args?: SelectSubset<T, SeniorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seniors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seniors
     * const seniors = await prisma.senior.findMany()
     * 
     * // Get first 10 Seniors
     * const seniors = await prisma.senior.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seniorWithIdOnly = await prisma.senior.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeniorFindManyArgs>(args?: SelectSubset<T, SeniorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Senior.
     * @param {SeniorCreateArgs} args - Arguments to create a Senior.
     * @example
     * // Create one Senior
     * const Senior = await prisma.senior.create({
     *   data: {
     *     // ... data to create a Senior
     *   }
     * })
     * 
     */
    create<T extends SeniorCreateArgs>(args: SelectSubset<T, SeniorCreateArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seniors.
     * @param {SeniorCreateManyArgs} args - Arguments to create many Seniors.
     * @example
     * // Create many Seniors
     * const senior = await prisma.senior.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeniorCreateManyArgs>(args?: SelectSubset<T, SeniorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seniors and returns the data saved in the database.
     * @param {SeniorCreateManyAndReturnArgs} args - Arguments to create many Seniors.
     * @example
     * // Create many Seniors
     * const senior = await prisma.senior.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seniors and only return the `id`
     * const seniorWithIdOnly = await prisma.senior.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeniorCreateManyAndReturnArgs>(args?: SelectSubset<T, SeniorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Senior.
     * @param {SeniorDeleteArgs} args - Arguments to delete one Senior.
     * @example
     * // Delete one Senior
     * const Senior = await prisma.senior.delete({
     *   where: {
     *     // ... filter to delete one Senior
     *   }
     * })
     * 
     */
    delete<T extends SeniorDeleteArgs>(args: SelectSubset<T, SeniorDeleteArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Senior.
     * @param {SeniorUpdateArgs} args - Arguments to update one Senior.
     * @example
     * // Update one Senior
     * const senior = await prisma.senior.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeniorUpdateArgs>(args: SelectSubset<T, SeniorUpdateArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seniors.
     * @param {SeniorDeleteManyArgs} args - Arguments to filter Seniors to delete.
     * @example
     * // Delete a few Seniors
     * const { count } = await prisma.senior.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeniorDeleteManyArgs>(args?: SelectSubset<T, SeniorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seniors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seniors
     * const senior = await prisma.senior.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeniorUpdateManyArgs>(args: SelectSubset<T, SeniorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seniors and returns the data updated in the database.
     * @param {SeniorUpdateManyAndReturnArgs} args - Arguments to update many Seniors.
     * @example
     * // Update many Seniors
     * const senior = await prisma.senior.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seniors and only return the `id`
     * const seniorWithIdOnly = await prisma.senior.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeniorUpdateManyAndReturnArgs>(args: SelectSubset<T, SeniorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Senior.
     * @param {SeniorUpsertArgs} args - Arguments to update or create a Senior.
     * @example
     * // Update or create a Senior
     * const senior = await prisma.senior.upsert({
     *   create: {
     *     // ... data to create a Senior
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Senior we want to update
     *   }
     * })
     */
    upsert<T extends SeniorUpsertArgs>(args: SelectSubset<T, SeniorUpsertArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seniors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorCountArgs} args - Arguments to filter Seniors to count.
     * @example
     * // Count the number of Seniors
     * const count = await prisma.senior.count({
     *   where: {
     *     // ... the filter for the Seniors we want to count
     *   }
     * })
    **/
    count<T extends SeniorCountArgs>(
      args?: Subset<T, SeniorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeniorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Senior.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeniorAggregateArgs>(args: Subset<T, SeniorAggregateArgs>): Prisma.PrismaPromise<GetSeniorAggregateType<T>>

    /**
     * Group by Senior.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorGroupByArgs} args - Group by arguments.
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
      T extends SeniorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeniorGroupByArgs['orderBy'] }
        : { orderBy?: SeniorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeniorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeniorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Senior model
   */
  readonly fields: SeniorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Senior.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeniorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    remarks<T extends RemarksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RemarksDefaultArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Senior$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Senior$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Senior model
   */
  interface SeniorFieldRefs {
    readonly id: FieldRef<"Senior", 'Int'>
    readonly lastname: FieldRef<"Senior", 'String'>
    readonly firstname: FieldRef<"Senior", 'String'>
    readonly middlename: FieldRef<"Senior", 'String'>
    readonly email: FieldRef<"Senior", 'String'>
    readonly barangay: FieldRef<"Senior", 'String'>
    readonly purok: FieldRef<"Senior", 'String'>
    readonly gender: FieldRef<"Senior", 'Gender'>
    readonly birthdate: FieldRef<"Senior", 'DateTime'>
    readonly age: FieldRef<"Senior", 'String'>
    readonly contact_no: FieldRef<"Senior", 'String'>
    readonly remarks_id: FieldRef<"Senior", 'Int'>
    readonly createdAt: FieldRef<"Senior", 'DateTime'>
    readonly updatedAt: FieldRef<"Senior", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Senior findUnique
   */
  export type SeniorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * Filter, which Senior to fetch.
     */
    where: SeniorWhereUniqueInput
  }

  /**
   * Senior findUniqueOrThrow
   */
  export type SeniorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * Filter, which Senior to fetch.
     */
    where: SeniorWhereUniqueInput
  }

  /**
   * Senior findFirst
   */
  export type SeniorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * Filter, which Senior to fetch.
     */
    where?: SeniorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seniors to fetch.
     */
    orderBy?: SeniorOrderByWithRelationInput | SeniorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seniors.
     */
    cursor?: SeniorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seniors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seniors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seniors.
     */
    distinct?: SeniorScalarFieldEnum | SeniorScalarFieldEnum[]
  }

  /**
   * Senior findFirstOrThrow
   */
  export type SeniorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * Filter, which Senior to fetch.
     */
    where?: SeniorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seniors to fetch.
     */
    orderBy?: SeniorOrderByWithRelationInput | SeniorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seniors.
     */
    cursor?: SeniorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seniors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seniors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seniors.
     */
    distinct?: SeniorScalarFieldEnum | SeniorScalarFieldEnum[]
  }

  /**
   * Senior findMany
   */
  export type SeniorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * Filter, which Seniors to fetch.
     */
    where?: SeniorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seniors to fetch.
     */
    orderBy?: SeniorOrderByWithRelationInput | SeniorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seniors.
     */
    cursor?: SeniorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seniors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seniors.
     */
    skip?: number
    distinct?: SeniorScalarFieldEnum | SeniorScalarFieldEnum[]
  }

  /**
   * Senior create
   */
  export type SeniorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * The data needed to create a Senior.
     */
    data: XOR<SeniorCreateInput, SeniorUncheckedCreateInput>
  }

  /**
   * Senior createMany
   */
  export type SeniorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seniors.
     */
    data: SeniorCreateManyInput | SeniorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Senior createManyAndReturn
   */
  export type SeniorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * The data used to create many Seniors.
     */
    data: SeniorCreateManyInput | SeniorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Senior update
   */
  export type SeniorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * The data needed to update a Senior.
     */
    data: XOR<SeniorUpdateInput, SeniorUncheckedUpdateInput>
    /**
     * Choose, which Senior to update.
     */
    where: SeniorWhereUniqueInput
  }

  /**
   * Senior updateMany
   */
  export type SeniorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seniors.
     */
    data: XOR<SeniorUpdateManyMutationInput, SeniorUncheckedUpdateManyInput>
    /**
     * Filter which Seniors to update
     */
    where?: SeniorWhereInput
    /**
     * Limit how many Seniors to update.
     */
    limit?: number
  }

  /**
   * Senior updateManyAndReturn
   */
  export type SeniorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * The data used to update Seniors.
     */
    data: XOR<SeniorUpdateManyMutationInput, SeniorUncheckedUpdateManyInput>
    /**
     * Filter which Seniors to update
     */
    where?: SeniorWhereInput
    /**
     * Limit how many Seniors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Senior upsert
   */
  export type SeniorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * The filter to search for the Senior to update in case it exists.
     */
    where: SeniorWhereUniqueInput
    /**
     * In case the Senior found by the `where` argument doesn't exist, create a new Senior with this data.
     */
    create: XOR<SeniorCreateInput, SeniorUncheckedCreateInput>
    /**
     * In case the Senior was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeniorUpdateInput, SeniorUncheckedUpdateInput>
  }

  /**
   * Senior delete
   */
  export type SeniorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    /**
     * Filter which Senior to delete.
     */
    where: SeniorWhereUniqueInput
  }

  /**
   * Senior deleteMany
   */
  export type SeniorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seniors to delete
     */
    where?: SeniorWhereInput
    /**
     * Limit how many Seniors to delete.
     */
    limit?: number
  }

  /**
   * Senior.documents
   */
  export type Senior$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    where?: RegistrationDocumentWhereInput
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    cursor?: RegistrationDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * Senior without action
   */
  export type SeniorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationDocument
   */

  export type AggregateRegistrationDocument = {
    _count: RegistrationDocumentCountAggregateOutputType | null
    _avg: RegistrationDocumentAvgAggregateOutputType | null
    _sum: RegistrationDocumentSumAggregateOutputType | null
    _min: RegistrationDocumentMinAggregateOutputType | null
    _max: RegistrationDocumentMaxAggregateOutputType | null
  }

  export type RegistrationDocumentAvgAggregateOutputType = {
    id: number | null
    seniors_id: number | null
  }

  export type RegistrationDocumentSumAggregateOutputType = {
    id: number | null
    seniors_id: number | null
  }

  export type RegistrationDocumentMinAggregateOutputType = {
    id: number | null
    tag: string | null
    path: string | null
    file_name: string | null
    seniors_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationDocumentMaxAggregateOutputType = {
    id: number | null
    tag: string | null
    path: string | null
    file_name: string | null
    seniors_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationDocumentCountAggregateOutputType = {
    id: number
    tag: number
    path: number
    file_name: number
    seniors_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistrationDocumentAvgAggregateInputType = {
    id?: true
    seniors_id?: true
  }

  export type RegistrationDocumentSumAggregateInputType = {
    id?: true
    seniors_id?: true
  }

  export type RegistrationDocumentMinAggregateInputType = {
    id?: true
    tag?: true
    path?: true
    file_name?: true
    seniors_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationDocumentMaxAggregateInputType = {
    id?: true
    tag?: true
    path?: true
    file_name?: true
    seniors_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationDocumentCountAggregateInputType = {
    id?: true
    tag?: true
    path?: true
    file_name?: true
    seniors_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistrationDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationDocument to aggregate.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationDocuments
    **/
    _count?: true | RegistrationDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationDocumentMaxAggregateInputType
  }

  export type GetRegistrationDocumentAggregateType<T extends RegistrationDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationDocument[P]>
      : GetScalarType<T[P], AggregateRegistrationDocument[P]>
  }




  export type RegistrationDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationDocumentWhereInput
    orderBy?: RegistrationDocumentOrderByWithAggregationInput | RegistrationDocumentOrderByWithAggregationInput[]
    by: RegistrationDocumentScalarFieldEnum[] | RegistrationDocumentScalarFieldEnum
    having?: RegistrationDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationDocumentCountAggregateInputType | true
    _avg?: RegistrationDocumentAvgAggregateInputType
    _sum?: RegistrationDocumentSumAggregateInputType
    _min?: RegistrationDocumentMinAggregateInputType
    _max?: RegistrationDocumentMaxAggregateInputType
  }

  export type RegistrationDocumentGroupByOutputType = {
    id: number
    tag: string
    path: string
    file_name: string
    seniors_id: number
    createdAt: Date
    updatedAt: Date
    _count: RegistrationDocumentCountAggregateOutputType | null
    _avg: RegistrationDocumentAvgAggregateOutputType | null
    _sum: RegistrationDocumentSumAggregateOutputType | null
    _min: RegistrationDocumentMinAggregateOutputType | null
    _max: RegistrationDocumentMaxAggregateOutputType | null
  }

  type GetRegistrationDocumentGroupByPayload<T extends RegistrationDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationDocumentGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    path?: boolean
    file_name?: boolean
    seniors_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senior?: boolean | SeniorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationDocument"]>

  export type RegistrationDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    path?: boolean
    file_name?: boolean
    seniors_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senior?: boolean | SeniorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationDocument"]>

  export type RegistrationDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    path?: boolean
    file_name?: boolean
    seniors_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senior?: boolean | SeniorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationDocument"]>

  export type RegistrationDocumentSelectScalar = {
    id?: boolean
    tag?: boolean
    path?: boolean
    file_name?: boolean
    seniors_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistrationDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag" | "path" | "file_name" | "seniors_id" | "createdAt" | "updatedAt", ExtArgs["result"]["registrationDocument"]>
  export type RegistrationDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senior?: boolean | SeniorDefaultArgs<ExtArgs>
  }
  export type RegistrationDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senior?: boolean | SeniorDefaultArgs<ExtArgs>
  }
  export type RegistrationDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senior?: boolean | SeniorDefaultArgs<ExtArgs>
  }

  export type $RegistrationDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationDocument"
    objects: {
      senior: Prisma.$SeniorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tag: string
      path: string
      file_name: string
      seniors_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registrationDocument"]>
    composites: {}
  }

  type RegistrationDocumentGetPayload<S extends boolean | null | undefined | RegistrationDocumentDefaultArgs> = $Result.GetResult<Prisma.$RegistrationDocumentPayload, S>

  type RegistrationDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationDocumentCountAggregateInputType | true
    }

  export interface RegistrationDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationDocument'], meta: { name: 'RegistrationDocument' } }
    /**
     * Find zero or one RegistrationDocument that matches the filter.
     * @param {RegistrationDocumentFindUniqueArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationDocumentFindUniqueArgs>(args: SelectSubset<T, RegistrationDocumentFindUniqueArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrationDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationDocumentFindUniqueOrThrowArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentFindFirstArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationDocumentFindFirstArgs>(args?: SelectSubset<T, RegistrationDocumentFindFirstArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentFindFirstOrThrowArgs} args - Arguments to find a RegistrationDocument
     * @example
     * // Get one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationDocuments
     * const registrationDocuments = await prisma.registrationDocument.findMany()
     * 
     * // Get first 10 RegistrationDocuments
     * const registrationDocuments = await prisma.registrationDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationDocumentWithIdOnly = await prisma.registrationDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationDocumentFindManyArgs>(args?: SelectSubset<T, RegistrationDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrationDocument.
     * @param {RegistrationDocumentCreateArgs} args - Arguments to create a RegistrationDocument.
     * @example
     * // Create one RegistrationDocument
     * const RegistrationDocument = await prisma.registrationDocument.create({
     *   data: {
     *     // ... data to create a RegistrationDocument
     *   }
     * })
     * 
     */
    create<T extends RegistrationDocumentCreateArgs>(args: SelectSubset<T, RegistrationDocumentCreateArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrationDocuments.
     * @param {RegistrationDocumentCreateManyArgs} args - Arguments to create many RegistrationDocuments.
     * @example
     * // Create many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationDocumentCreateManyArgs>(args?: SelectSubset<T, RegistrationDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistrationDocuments and returns the data saved in the database.
     * @param {RegistrationDocumentCreateManyAndReturnArgs} args - Arguments to create many RegistrationDocuments.
     * @example
     * // Create many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistrationDocuments and only return the `id`
     * const registrationDocumentWithIdOnly = await prisma.registrationDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistrationDocument.
     * @param {RegistrationDocumentDeleteArgs} args - Arguments to delete one RegistrationDocument.
     * @example
     * // Delete one RegistrationDocument
     * const RegistrationDocument = await prisma.registrationDocument.delete({
     *   where: {
     *     // ... filter to delete one RegistrationDocument
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDocumentDeleteArgs>(args: SelectSubset<T, RegistrationDocumentDeleteArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrationDocument.
     * @param {RegistrationDocumentUpdateArgs} args - Arguments to update one RegistrationDocument.
     * @example
     * // Update one RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationDocumentUpdateArgs>(args: SelectSubset<T, RegistrationDocumentUpdateArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrationDocuments.
     * @param {RegistrationDocumentDeleteManyArgs} args - Arguments to filter RegistrationDocuments to delete.
     * @example
     * // Delete a few RegistrationDocuments
     * const { count } = await prisma.registrationDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDocumentDeleteManyArgs>(args?: SelectSubset<T, RegistrationDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationDocumentUpdateManyArgs>(args: SelectSubset<T, RegistrationDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationDocuments and returns the data updated in the database.
     * @param {RegistrationDocumentUpdateManyAndReturnArgs} args - Arguments to update many RegistrationDocuments.
     * @example
     * // Update many RegistrationDocuments
     * const registrationDocument = await prisma.registrationDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistrationDocuments and only return the `id`
     * const registrationDocumentWithIdOnly = await prisma.registrationDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrationDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistrationDocument.
     * @param {RegistrationDocumentUpsertArgs} args - Arguments to update or create a RegistrationDocument.
     * @example
     * // Update or create a RegistrationDocument
     * const registrationDocument = await prisma.registrationDocument.upsert({
     *   create: {
     *     // ... data to create a RegistrationDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationDocument we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationDocumentUpsertArgs>(args: SelectSubset<T, RegistrationDocumentUpsertArgs<ExtArgs>>): Prisma__RegistrationDocumentClient<$Result.GetResult<Prisma.$RegistrationDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistrationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentCountArgs} args - Arguments to filter RegistrationDocuments to count.
     * @example
     * // Count the number of RegistrationDocuments
     * const count = await prisma.registrationDocument.count({
     *   where: {
     *     // ... the filter for the RegistrationDocuments we want to count
     *   }
     * })
    **/
    count<T extends RegistrationDocumentCountArgs>(
      args?: Subset<T, RegistrationDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationDocumentAggregateArgs>(args: Subset<T, RegistrationDocumentAggregateArgs>): Prisma.PrismaPromise<GetRegistrationDocumentAggregateType<T>>

    /**
     * Group by RegistrationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationDocumentGroupByArgs} args - Group by arguments.
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
      T extends RegistrationDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationDocumentGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationDocument model
   */
  readonly fields: RegistrationDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senior<T extends SeniorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeniorDefaultArgs<ExtArgs>>): Prisma__SeniorClient<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistrationDocument model
   */
  interface RegistrationDocumentFieldRefs {
    readonly id: FieldRef<"RegistrationDocument", 'Int'>
    readonly tag: FieldRef<"RegistrationDocument", 'String'>
    readonly path: FieldRef<"RegistrationDocument", 'String'>
    readonly file_name: FieldRef<"RegistrationDocument", 'String'>
    readonly seniors_id: FieldRef<"RegistrationDocument", 'Int'>
    readonly createdAt: FieldRef<"RegistrationDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"RegistrationDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationDocument findUnique
   */
  export type RegistrationDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument findUniqueOrThrow
   */
  export type RegistrationDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument findFirst
   */
  export type RegistrationDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationDocuments.
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationDocuments.
     */
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * RegistrationDocument findFirstOrThrow
   */
  export type RegistrationDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocument to fetch.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationDocuments.
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationDocuments.
     */
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * RegistrationDocument findMany
   */
  export type RegistrationDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationDocuments to fetch.
     */
    where?: RegistrationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationDocuments to fetch.
     */
    orderBy?: RegistrationDocumentOrderByWithRelationInput | RegistrationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationDocuments.
     */
    cursor?: RegistrationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationDocuments.
     */
    skip?: number
    distinct?: RegistrationDocumentScalarFieldEnum | RegistrationDocumentScalarFieldEnum[]
  }

  /**
   * RegistrationDocument create
   */
  export type RegistrationDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationDocument.
     */
    data: XOR<RegistrationDocumentCreateInput, RegistrationDocumentUncheckedCreateInput>
  }

  /**
   * RegistrationDocument createMany
   */
  export type RegistrationDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationDocuments.
     */
    data: RegistrationDocumentCreateManyInput | RegistrationDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistrationDocument createManyAndReturn
   */
  export type RegistrationDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many RegistrationDocuments.
     */
    data: RegistrationDocumentCreateManyInput | RegistrationDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrationDocument update
   */
  export type RegistrationDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationDocument.
     */
    data: XOR<RegistrationDocumentUpdateInput, RegistrationDocumentUncheckedUpdateInput>
    /**
     * Choose, which RegistrationDocument to update.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument updateMany
   */
  export type RegistrationDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationDocuments.
     */
    data: XOR<RegistrationDocumentUpdateManyMutationInput, RegistrationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationDocuments to update
     */
    where?: RegistrationDocumentWhereInput
    /**
     * Limit how many RegistrationDocuments to update.
     */
    limit?: number
  }

  /**
   * RegistrationDocument updateManyAndReturn
   */
  export type RegistrationDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * The data used to update RegistrationDocuments.
     */
    data: XOR<RegistrationDocumentUpdateManyMutationInput, RegistrationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationDocuments to update
     */
    where?: RegistrationDocumentWhereInput
    /**
     * Limit how many RegistrationDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrationDocument upsert
   */
  export type RegistrationDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationDocument to update in case it exists.
     */
    where: RegistrationDocumentWhereUniqueInput
    /**
     * In case the RegistrationDocument found by the `where` argument doesn't exist, create a new RegistrationDocument with this data.
     */
    create: XOR<RegistrationDocumentCreateInput, RegistrationDocumentUncheckedCreateInput>
    /**
     * In case the RegistrationDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationDocumentUpdateInput, RegistrationDocumentUncheckedUpdateInput>
  }

  /**
   * RegistrationDocument delete
   */
  export type RegistrationDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
    /**
     * Filter which RegistrationDocument to delete.
     */
    where: RegistrationDocumentWhereUniqueInput
  }

  /**
   * RegistrationDocument deleteMany
   */
  export type RegistrationDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationDocuments to delete
     */
    where?: RegistrationDocumentWhereInput
    /**
     * Limit how many RegistrationDocuments to delete.
     */
    limit?: number
  }

  /**
   * RegistrationDocument without action
   */
  export type RegistrationDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationDocument
     */
    select?: RegistrationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationDocument
     */
    omit?: RegistrationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Remarks
   */

  export type AggregateRemarks = {
    _count: RemarksCountAggregateOutputType | null
    _avg: RemarksAvgAggregateOutputType | null
    _sum: RemarksSumAggregateOutputType | null
    _min: RemarksMinAggregateOutputType | null
    _max: RemarksMaxAggregateOutputType | null
  }

  export type RemarksAvgAggregateOutputType = {
    id: number | null
  }

  export type RemarksSumAggregateOutputType = {
    id: number | null
  }

  export type RemarksMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemarksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemarksCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemarksAvgAggregateInputType = {
    id?: true
  }

  export type RemarksSumAggregateInputType = {
    id?: true
  }

  export type RemarksMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemarksMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemarksCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Remarks to aggregate.
     */
    where?: RemarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remarks to fetch.
     */
    orderBy?: RemarksOrderByWithRelationInput | RemarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Remarks
    **/
    _count?: true | RemarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemarksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemarksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemarksMaxAggregateInputType
  }

  export type GetRemarksAggregateType<T extends RemarksAggregateArgs> = {
        [P in keyof T & keyof AggregateRemarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemarks[P]>
      : GetScalarType<T[P], AggregateRemarks[P]>
  }




  export type RemarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemarksWhereInput
    orderBy?: RemarksOrderByWithAggregationInput | RemarksOrderByWithAggregationInput[]
    by: RemarksScalarFieldEnum[] | RemarksScalarFieldEnum
    having?: RemarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemarksCountAggregateInputType | true
    _avg?: RemarksAvgAggregateInputType
    _sum?: RemarksSumAggregateInputType
    _min?: RemarksMinAggregateInputType
    _max?: RemarksMaxAggregateInputType
  }

  export type RemarksGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RemarksCountAggregateOutputType | null
    _avg: RemarksAvgAggregateOutputType | null
    _sum: RemarksSumAggregateOutputType | null
    _min: RemarksMinAggregateOutputType | null
    _max: RemarksMaxAggregateOutputType | null
  }

  type GetRemarksGroupByPayload<T extends RemarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemarksGroupByOutputType[P]>
            : GetScalarType<T[P], RemarksGroupByOutputType[P]>
        }
      >
    >


  export type RemarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seniors?: boolean | Remarks$seniorsArgs<ExtArgs>
    _count?: boolean | RemarksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remarks"]>

  export type RemarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remarks"]>

  export type RemarksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remarks"]>

  export type RemarksSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemarksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["remarks"]>
  export type RemarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seniors?: boolean | Remarks$seniorsArgs<ExtArgs>
    _count?: boolean | RemarksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RemarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RemarksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RemarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Remarks"
    objects: {
      seniors: Prisma.$SeniorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["remarks"]>
    composites: {}
  }

  type RemarksGetPayload<S extends boolean | null | undefined | RemarksDefaultArgs> = $Result.GetResult<Prisma.$RemarksPayload, S>

  type RemarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemarksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemarksCountAggregateInputType | true
    }

  export interface RemarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Remarks'], meta: { name: 'Remarks' } }
    /**
     * Find zero or one Remarks that matches the filter.
     * @param {RemarksFindUniqueArgs} args - Arguments to find a Remarks
     * @example
     * // Get one Remarks
     * const remarks = await prisma.remarks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemarksFindUniqueArgs>(args: SelectSubset<T, RemarksFindUniqueArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Remarks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemarksFindUniqueOrThrowArgs} args - Arguments to find a Remarks
     * @example
     * // Get one Remarks
     * const remarks = await prisma.remarks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemarksFindUniqueOrThrowArgs>(args: SelectSubset<T, RemarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Remarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksFindFirstArgs} args - Arguments to find a Remarks
     * @example
     * // Get one Remarks
     * const remarks = await prisma.remarks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemarksFindFirstArgs>(args?: SelectSubset<T, RemarksFindFirstArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Remarks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksFindFirstOrThrowArgs} args - Arguments to find a Remarks
     * @example
     * // Get one Remarks
     * const remarks = await prisma.remarks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemarksFindFirstOrThrowArgs>(args?: SelectSubset<T, RemarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Remarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Remarks
     * const remarks = await prisma.remarks.findMany()
     * 
     * // Get first 10 Remarks
     * const remarks = await prisma.remarks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remarksWithIdOnly = await prisma.remarks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemarksFindManyArgs>(args?: SelectSubset<T, RemarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Remarks.
     * @param {RemarksCreateArgs} args - Arguments to create a Remarks.
     * @example
     * // Create one Remarks
     * const Remarks = await prisma.remarks.create({
     *   data: {
     *     // ... data to create a Remarks
     *   }
     * })
     * 
     */
    create<T extends RemarksCreateArgs>(args: SelectSubset<T, RemarksCreateArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Remarks.
     * @param {RemarksCreateManyArgs} args - Arguments to create many Remarks.
     * @example
     * // Create many Remarks
     * const remarks = await prisma.remarks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemarksCreateManyArgs>(args?: SelectSubset<T, RemarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Remarks and returns the data saved in the database.
     * @param {RemarksCreateManyAndReturnArgs} args - Arguments to create many Remarks.
     * @example
     * // Create many Remarks
     * const remarks = await prisma.remarks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Remarks and only return the `id`
     * const remarksWithIdOnly = await prisma.remarks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemarksCreateManyAndReturnArgs>(args?: SelectSubset<T, RemarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Remarks.
     * @param {RemarksDeleteArgs} args - Arguments to delete one Remarks.
     * @example
     * // Delete one Remarks
     * const Remarks = await prisma.remarks.delete({
     *   where: {
     *     // ... filter to delete one Remarks
     *   }
     * })
     * 
     */
    delete<T extends RemarksDeleteArgs>(args: SelectSubset<T, RemarksDeleteArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Remarks.
     * @param {RemarksUpdateArgs} args - Arguments to update one Remarks.
     * @example
     * // Update one Remarks
     * const remarks = await prisma.remarks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemarksUpdateArgs>(args: SelectSubset<T, RemarksUpdateArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Remarks.
     * @param {RemarksDeleteManyArgs} args - Arguments to filter Remarks to delete.
     * @example
     * // Delete a few Remarks
     * const { count } = await prisma.remarks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemarksDeleteManyArgs>(args?: SelectSubset<T, RemarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Remarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Remarks
     * const remarks = await prisma.remarks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemarksUpdateManyArgs>(args: SelectSubset<T, RemarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Remarks and returns the data updated in the database.
     * @param {RemarksUpdateManyAndReturnArgs} args - Arguments to update many Remarks.
     * @example
     * // Update many Remarks
     * const remarks = await prisma.remarks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Remarks and only return the `id`
     * const remarksWithIdOnly = await prisma.remarks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemarksUpdateManyAndReturnArgs>(args: SelectSubset<T, RemarksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Remarks.
     * @param {RemarksUpsertArgs} args - Arguments to update or create a Remarks.
     * @example
     * // Update or create a Remarks
     * const remarks = await prisma.remarks.upsert({
     *   create: {
     *     // ... data to create a Remarks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Remarks we want to update
     *   }
     * })
     */
    upsert<T extends RemarksUpsertArgs>(args: SelectSubset<T, RemarksUpsertArgs<ExtArgs>>): Prisma__RemarksClient<$Result.GetResult<Prisma.$RemarksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Remarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksCountArgs} args - Arguments to filter Remarks to count.
     * @example
     * // Count the number of Remarks
     * const count = await prisma.remarks.count({
     *   where: {
     *     // ... the filter for the Remarks we want to count
     *   }
     * })
    **/
    count<T extends RemarksCountArgs>(
      args?: Subset<T, RemarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Remarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemarksAggregateArgs>(args: Subset<T, RemarksAggregateArgs>): Prisma.PrismaPromise<GetRemarksAggregateType<T>>

    /**
     * Group by Remarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarksGroupByArgs} args - Group by arguments.
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
      T extends RemarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemarksGroupByArgs['orderBy'] }
        : { orderBy?: RemarksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RemarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Remarks model
   */
  readonly fields: RemarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Remarks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seniors<T extends Remarks$seniorsArgs<ExtArgs> = {}>(args?: Subset<T, Remarks$seniorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Remarks model
   */
  interface RemarksFieldRefs {
    readonly id: FieldRef<"Remarks", 'Int'>
    readonly name: FieldRef<"Remarks", 'String'>
    readonly createdAt: FieldRef<"Remarks", 'DateTime'>
    readonly updatedAt: FieldRef<"Remarks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Remarks findUnique
   */
  export type RemarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * Filter, which Remarks to fetch.
     */
    where: RemarksWhereUniqueInput
  }

  /**
   * Remarks findUniqueOrThrow
   */
  export type RemarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * Filter, which Remarks to fetch.
     */
    where: RemarksWhereUniqueInput
  }

  /**
   * Remarks findFirst
   */
  export type RemarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * Filter, which Remarks to fetch.
     */
    where?: RemarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remarks to fetch.
     */
    orderBy?: RemarksOrderByWithRelationInput | RemarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Remarks.
     */
    cursor?: RemarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Remarks.
     */
    distinct?: RemarksScalarFieldEnum | RemarksScalarFieldEnum[]
  }

  /**
   * Remarks findFirstOrThrow
   */
  export type RemarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * Filter, which Remarks to fetch.
     */
    where?: RemarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remarks to fetch.
     */
    orderBy?: RemarksOrderByWithRelationInput | RemarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Remarks.
     */
    cursor?: RemarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Remarks.
     */
    distinct?: RemarksScalarFieldEnum | RemarksScalarFieldEnum[]
  }

  /**
   * Remarks findMany
   */
  export type RemarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * Filter, which Remarks to fetch.
     */
    where?: RemarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remarks to fetch.
     */
    orderBy?: RemarksOrderByWithRelationInput | RemarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Remarks.
     */
    cursor?: RemarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remarks.
     */
    skip?: number
    distinct?: RemarksScalarFieldEnum | RemarksScalarFieldEnum[]
  }

  /**
   * Remarks create
   */
  export type RemarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Remarks.
     */
    data: XOR<RemarksCreateInput, RemarksUncheckedCreateInput>
  }

  /**
   * Remarks createMany
   */
  export type RemarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Remarks.
     */
    data: RemarksCreateManyInput | RemarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Remarks createManyAndReturn
   */
  export type RemarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * The data used to create many Remarks.
     */
    data: RemarksCreateManyInput | RemarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Remarks update
   */
  export type RemarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Remarks.
     */
    data: XOR<RemarksUpdateInput, RemarksUncheckedUpdateInput>
    /**
     * Choose, which Remarks to update.
     */
    where: RemarksWhereUniqueInput
  }

  /**
   * Remarks updateMany
   */
  export type RemarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Remarks.
     */
    data: XOR<RemarksUpdateManyMutationInput, RemarksUncheckedUpdateManyInput>
    /**
     * Filter which Remarks to update
     */
    where?: RemarksWhereInput
    /**
     * Limit how many Remarks to update.
     */
    limit?: number
  }

  /**
   * Remarks updateManyAndReturn
   */
  export type RemarksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * The data used to update Remarks.
     */
    data: XOR<RemarksUpdateManyMutationInput, RemarksUncheckedUpdateManyInput>
    /**
     * Filter which Remarks to update
     */
    where?: RemarksWhereInput
    /**
     * Limit how many Remarks to update.
     */
    limit?: number
  }

  /**
   * Remarks upsert
   */
  export type RemarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Remarks to update in case it exists.
     */
    where: RemarksWhereUniqueInput
    /**
     * In case the Remarks found by the `where` argument doesn't exist, create a new Remarks with this data.
     */
    create: XOR<RemarksCreateInput, RemarksUncheckedCreateInput>
    /**
     * In case the Remarks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemarksUpdateInput, RemarksUncheckedUpdateInput>
  }

  /**
   * Remarks delete
   */
  export type RemarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
    /**
     * Filter which Remarks to delete.
     */
    where: RemarksWhereUniqueInput
  }

  /**
   * Remarks deleteMany
   */
  export type RemarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Remarks to delete
     */
    where?: RemarksWhereInput
    /**
     * Limit how many Remarks to delete.
     */
    limit?: number
  }

  /**
   * Remarks.seniors
   */
  export type Remarks$seniorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senior
     */
    select?: SeniorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senior
     */
    omit?: SeniorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorInclude<ExtArgs> | null
    where?: SeniorWhereInput
    orderBy?: SeniorOrderByWithRelationInput | SeniorOrderByWithRelationInput[]
    cursor?: SeniorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeniorScalarFieldEnum | SeniorScalarFieldEnum[]
  }

  /**
   * Remarks without action
   */
  export type RemarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remarks
     */
    select?: RemarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remarks
     */
    omit?: RemarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarksInclude<ExtArgs> | null
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
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SeniorScalarFieldEnum: {
    id: 'id',
    lastname: 'lastname',
    firstname: 'firstname',
    middlename: 'middlename',
    email: 'email',
    barangay: 'barangay',
    purok: 'purok',
    gender: 'gender',
    birthdate: 'birthdate',
    age: 'age',
    contact_no: 'contact_no',
    remarks_id: 'remarks_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeniorScalarFieldEnum = (typeof SeniorScalarFieldEnum)[keyof typeof SeniorScalarFieldEnum]


  export const RegistrationDocumentScalarFieldEnum: {
    id: 'id',
    tag: 'tag',
    path: 'path',
    file_name: 'file_name',
    seniors_id: 'seniors_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistrationDocumentScalarFieldEnum = (typeof RegistrationDocumentScalarFieldEnum)[keyof typeof RegistrationDocumentScalarFieldEnum]


  export const RemarksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemarksScalarFieldEnum = (typeof RemarksScalarFieldEnum)[keyof typeof RemarksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SeniorWhereInput = {
    AND?: SeniorWhereInput | SeniorWhereInput[]
    OR?: SeniorWhereInput[]
    NOT?: SeniorWhereInput | SeniorWhereInput[]
    id?: IntFilter<"Senior"> | number
    lastname?: StringFilter<"Senior"> | string
    firstname?: StringFilter<"Senior"> | string
    middlename?: StringNullableFilter<"Senior"> | string | null
    email?: StringNullableFilter<"Senior"> | string | null
    barangay?: StringFilter<"Senior"> | string
    purok?: StringFilter<"Senior"> | string
    gender?: EnumGenderFilter<"Senior"> | $Enums.Gender
    birthdate?: DateTimeFilter<"Senior"> | Date | string
    age?: StringFilter<"Senior"> | string
    contact_no?: StringFilter<"Senior"> | string
    remarks_id?: IntFilter<"Senior"> | number
    createdAt?: DateTimeFilter<"Senior"> | Date | string
    updatedAt?: DateTimeFilter<"Senior"> | Date | string
    remarks?: XOR<RemarksScalarRelationFilter, RemarksWhereInput>
    documents?: RegistrationDocumentListRelationFilter
  }

  export type SeniorOrderByWithRelationInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    barangay?: SortOrder
    purok?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    contact_no?: SortOrder
    remarks_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    remarks?: RemarksOrderByWithRelationInput
    documents?: RegistrationDocumentOrderByRelationAggregateInput
  }

  export type SeniorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeniorWhereInput | SeniorWhereInput[]
    OR?: SeniorWhereInput[]
    NOT?: SeniorWhereInput | SeniorWhereInput[]
    lastname?: StringFilter<"Senior"> | string
    firstname?: StringFilter<"Senior"> | string
    middlename?: StringNullableFilter<"Senior"> | string | null
    email?: StringNullableFilter<"Senior"> | string | null
    barangay?: StringFilter<"Senior"> | string
    purok?: StringFilter<"Senior"> | string
    gender?: EnumGenderFilter<"Senior"> | $Enums.Gender
    birthdate?: DateTimeFilter<"Senior"> | Date | string
    age?: StringFilter<"Senior"> | string
    contact_no?: StringFilter<"Senior"> | string
    remarks_id?: IntFilter<"Senior"> | number
    createdAt?: DateTimeFilter<"Senior"> | Date | string
    updatedAt?: DateTimeFilter<"Senior"> | Date | string
    remarks?: XOR<RemarksScalarRelationFilter, RemarksWhereInput>
    documents?: RegistrationDocumentListRelationFilter
  }, "id">

  export type SeniorOrderByWithAggregationInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    barangay?: SortOrder
    purok?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    contact_no?: SortOrder
    remarks_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeniorCountOrderByAggregateInput
    _avg?: SeniorAvgOrderByAggregateInput
    _max?: SeniorMaxOrderByAggregateInput
    _min?: SeniorMinOrderByAggregateInput
    _sum?: SeniorSumOrderByAggregateInput
  }

  export type SeniorScalarWhereWithAggregatesInput = {
    AND?: SeniorScalarWhereWithAggregatesInput | SeniorScalarWhereWithAggregatesInput[]
    OR?: SeniorScalarWhereWithAggregatesInput[]
    NOT?: SeniorScalarWhereWithAggregatesInput | SeniorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Senior"> | number
    lastname?: StringWithAggregatesFilter<"Senior"> | string
    firstname?: StringWithAggregatesFilter<"Senior"> | string
    middlename?: StringNullableWithAggregatesFilter<"Senior"> | string | null
    email?: StringNullableWithAggregatesFilter<"Senior"> | string | null
    barangay?: StringWithAggregatesFilter<"Senior"> | string
    purok?: StringWithAggregatesFilter<"Senior"> | string
    gender?: EnumGenderWithAggregatesFilter<"Senior"> | $Enums.Gender
    birthdate?: DateTimeWithAggregatesFilter<"Senior"> | Date | string
    age?: StringWithAggregatesFilter<"Senior"> | string
    contact_no?: StringWithAggregatesFilter<"Senior"> | string
    remarks_id?: IntWithAggregatesFilter<"Senior"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Senior"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Senior"> | Date | string
  }

  export type RegistrationDocumentWhereInput = {
    AND?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    OR?: RegistrationDocumentWhereInput[]
    NOT?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    id?: IntFilter<"RegistrationDocument"> | number
    tag?: StringFilter<"RegistrationDocument"> | string
    path?: StringFilter<"RegistrationDocument"> | string
    file_name?: StringFilter<"RegistrationDocument"> | string
    seniors_id?: IntFilter<"RegistrationDocument"> | number
    createdAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    senior?: XOR<SeniorScalarRelationFilter, SeniorWhereInput>
  }

  export type RegistrationDocumentOrderByWithRelationInput = {
    id?: SortOrder
    tag?: SortOrder
    path?: SortOrder
    file_name?: SortOrder
    seniors_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senior?: SeniorOrderByWithRelationInput
  }

  export type RegistrationDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    OR?: RegistrationDocumentWhereInput[]
    NOT?: RegistrationDocumentWhereInput | RegistrationDocumentWhereInput[]
    tag?: StringFilter<"RegistrationDocument"> | string
    path?: StringFilter<"RegistrationDocument"> | string
    file_name?: StringFilter<"RegistrationDocument"> | string
    seniors_id?: IntFilter<"RegistrationDocument"> | number
    createdAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    senior?: XOR<SeniorScalarRelationFilter, SeniorWhereInput>
  }, "id">

  export type RegistrationDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    tag?: SortOrder
    path?: SortOrder
    file_name?: SortOrder
    seniors_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistrationDocumentCountOrderByAggregateInput
    _avg?: RegistrationDocumentAvgOrderByAggregateInput
    _max?: RegistrationDocumentMaxOrderByAggregateInput
    _min?: RegistrationDocumentMinOrderByAggregateInput
    _sum?: RegistrationDocumentSumOrderByAggregateInput
  }

  export type RegistrationDocumentScalarWhereWithAggregatesInput = {
    AND?: RegistrationDocumentScalarWhereWithAggregatesInput | RegistrationDocumentScalarWhereWithAggregatesInput[]
    OR?: RegistrationDocumentScalarWhereWithAggregatesInput[]
    NOT?: RegistrationDocumentScalarWhereWithAggregatesInput | RegistrationDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegistrationDocument"> | number
    tag?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    path?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    file_name?: StringWithAggregatesFilter<"RegistrationDocument"> | string
    seniors_id?: IntWithAggregatesFilter<"RegistrationDocument"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RegistrationDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegistrationDocument"> | Date | string
  }

  export type RemarksWhereInput = {
    AND?: RemarksWhereInput | RemarksWhereInput[]
    OR?: RemarksWhereInput[]
    NOT?: RemarksWhereInput | RemarksWhereInput[]
    id?: IntFilter<"Remarks"> | number
    name?: StringFilter<"Remarks"> | string
    createdAt?: DateTimeFilter<"Remarks"> | Date | string
    updatedAt?: DateTimeFilter<"Remarks"> | Date | string
    seniors?: SeniorListRelationFilter
  }

  export type RemarksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seniors?: SeniorOrderByRelationAggregateInput
  }

  export type RemarksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RemarksWhereInput | RemarksWhereInput[]
    OR?: RemarksWhereInput[]
    NOT?: RemarksWhereInput | RemarksWhereInput[]
    createdAt?: DateTimeFilter<"Remarks"> | Date | string
    updatedAt?: DateTimeFilter<"Remarks"> | Date | string
    seniors?: SeniorListRelationFilter
  }, "id" | "name">

  export type RemarksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemarksCountOrderByAggregateInput
    _avg?: RemarksAvgOrderByAggregateInput
    _max?: RemarksMaxOrderByAggregateInput
    _min?: RemarksMinOrderByAggregateInput
    _sum?: RemarksSumOrderByAggregateInput
  }

  export type RemarksScalarWhereWithAggregatesInput = {
    AND?: RemarksScalarWhereWithAggregatesInput | RemarksScalarWhereWithAggregatesInput[]
    OR?: RemarksScalarWhereWithAggregatesInput[]
    NOT?: RemarksScalarWhereWithAggregatesInput | RemarksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Remarks"> | number
    name?: StringWithAggregatesFilter<"Remarks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Remarks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Remarks"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorCreateInput = {
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: RemarksCreateNestedOneWithoutSeniorsInput
    documents?: RegistrationDocumentCreateNestedManyWithoutSeniorInput
  }

  export type SeniorUncheckedCreateInput = {
    id?: number
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    remarks_id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentUncheckedCreateNestedManyWithoutSeniorInput
  }

  export type SeniorUpdateInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: RemarksUpdateOneRequiredWithoutSeniorsNestedInput
    documents?: RegistrationDocumentUpdateManyWithoutSeniorNestedInput
  }

  export type SeniorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    remarks_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUncheckedUpdateManyWithoutSeniorNestedInput
  }

  export type SeniorCreateManyInput = {
    id?: number
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    remarks_id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeniorUpdateManyMutationInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    remarks_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentCreateInput = {
    tag: string
    path: string
    file_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senior: SeniorCreateNestedOneWithoutDocumentsInput
  }

  export type RegistrationDocumentUncheckedCreateInput = {
    id?: number
    tag: string
    path: string
    file_name: string
    seniors_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationDocumentUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senior?: SeniorUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type RegistrationDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    seniors_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentCreateManyInput = {
    id?: number
    tag: string
    path: string
    file_name: string
    seniors_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationDocumentUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    seniors_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemarksCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniors?: SeniorCreateNestedManyWithoutRemarksInput
  }

  export type RemarksUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniors?: SeniorUncheckedCreateNestedManyWithoutRemarksInput
  }

  export type RemarksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniors?: SeniorUpdateManyWithoutRemarksNestedInput
  }

  export type RemarksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniors?: SeniorUncheckedUpdateManyWithoutRemarksNestedInput
  }

  export type RemarksCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemarksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemarksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type RemarksScalarRelationFilter = {
    is?: RemarksWhereInput
    isNot?: RemarksWhereInput
  }

  export type RegistrationDocumentListRelationFilter = {
    every?: RegistrationDocumentWhereInput
    some?: RegistrationDocumentWhereInput
    none?: RegistrationDocumentWhereInput
  }

  export type RegistrationDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeniorCountOrderByAggregateInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    email?: SortOrder
    barangay?: SortOrder
    purok?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    contact_no?: SortOrder
    remarks_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeniorAvgOrderByAggregateInput = {
    id?: SortOrder
    remarks_id?: SortOrder
  }

  export type SeniorMaxOrderByAggregateInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    email?: SortOrder
    barangay?: SortOrder
    purok?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    contact_no?: SortOrder
    remarks_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeniorMinOrderByAggregateInput = {
    id?: SortOrder
    lastname?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    email?: SortOrder
    barangay?: SortOrder
    purok?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    contact_no?: SortOrder
    remarks_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeniorSumOrderByAggregateInput = {
    id?: SortOrder
    remarks_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type SeniorScalarRelationFilter = {
    is?: SeniorWhereInput
    isNot?: SeniorWhereInput
  }

  export type RegistrationDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    path?: SortOrder
    file_name?: SortOrder
    seniors_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    seniors_id?: SortOrder
  }

  export type RegistrationDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    path?: SortOrder
    file_name?: SortOrder
    seniors_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    path?: SortOrder
    file_name?: SortOrder
    seniors_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    seniors_id?: SortOrder
  }

  export type SeniorListRelationFilter = {
    every?: SeniorWhereInput
    some?: SeniorWhereInput
    none?: SeniorWhereInput
  }

  export type SeniorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RemarksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemarksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RemarksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemarksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemarksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type RemarksCreateNestedOneWithoutSeniorsInput = {
    create?: XOR<RemarksCreateWithoutSeniorsInput, RemarksUncheckedCreateWithoutSeniorsInput>
    connectOrCreate?: RemarksCreateOrConnectWithoutSeniorsInput
    connect?: RemarksWhereUniqueInput
  }

  export type RegistrationDocumentCreateNestedManyWithoutSeniorInput = {
    create?: XOR<RegistrationDocumentCreateWithoutSeniorInput, RegistrationDocumentUncheckedCreateWithoutSeniorInput> | RegistrationDocumentCreateWithoutSeniorInput[] | RegistrationDocumentUncheckedCreateWithoutSeniorInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutSeniorInput | RegistrationDocumentCreateOrConnectWithoutSeniorInput[]
    createMany?: RegistrationDocumentCreateManySeniorInputEnvelope
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
  }

  export type RegistrationDocumentUncheckedCreateNestedManyWithoutSeniorInput = {
    create?: XOR<RegistrationDocumentCreateWithoutSeniorInput, RegistrationDocumentUncheckedCreateWithoutSeniorInput> | RegistrationDocumentCreateWithoutSeniorInput[] | RegistrationDocumentUncheckedCreateWithoutSeniorInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutSeniorInput | RegistrationDocumentCreateOrConnectWithoutSeniorInput[]
    createMany?: RegistrationDocumentCreateManySeniorInputEnvelope
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type RemarksUpdateOneRequiredWithoutSeniorsNestedInput = {
    create?: XOR<RemarksCreateWithoutSeniorsInput, RemarksUncheckedCreateWithoutSeniorsInput>
    connectOrCreate?: RemarksCreateOrConnectWithoutSeniorsInput
    upsert?: RemarksUpsertWithoutSeniorsInput
    connect?: RemarksWhereUniqueInput
    update?: XOR<XOR<RemarksUpdateToOneWithWhereWithoutSeniorsInput, RemarksUpdateWithoutSeniorsInput>, RemarksUncheckedUpdateWithoutSeniorsInput>
  }

  export type RegistrationDocumentUpdateManyWithoutSeniorNestedInput = {
    create?: XOR<RegistrationDocumentCreateWithoutSeniorInput, RegistrationDocumentUncheckedCreateWithoutSeniorInput> | RegistrationDocumentCreateWithoutSeniorInput[] | RegistrationDocumentUncheckedCreateWithoutSeniorInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutSeniorInput | RegistrationDocumentCreateOrConnectWithoutSeniorInput[]
    upsert?: RegistrationDocumentUpsertWithWhereUniqueWithoutSeniorInput | RegistrationDocumentUpsertWithWhereUniqueWithoutSeniorInput[]
    createMany?: RegistrationDocumentCreateManySeniorInputEnvelope
    set?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    disconnect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    delete?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    update?: RegistrationDocumentUpdateWithWhereUniqueWithoutSeniorInput | RegistrationDocumentUpdateWithWhereUniqueWithoutSeniorInput[]
    updateMany?: RegistrationDocumentUpdateManyWithWhereWithoutSeniorInput | RegistrationDocumentUpdateManyWithWhereWithoutSeniorInput[]
    deleteMany?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegistrationDocumentUncheckedUpdateManyWithoutSeniorNestedInput = {
    create?: XOR<RegistrationDocumentCreateWithoutSeniorInput, RegistrationDocumentUncheckedCreateWithoutSeniorInput> | RegistrationDocumentCreateWithoutSeniorInput[] | RegistrationDocumentUncheckedCreateWithoutSeniorInput[]
    connectOrCreate?: RegistrationDocumentCreateOrConnectWithoutSeniorInput | RegistrationDocumentCreateOrConnectWithoutSeniorInput[]
    upsert?: RegistrationDocumentUpsertWithWhereUniqueWithoutSeniorInput | RegistrationDocumentUpsertWithWhereUniqueWithoutSeniorInput[]
    createMany?: RegistrationDocumentCreateManySeniorInputEnvelope
    set?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    disconnect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    delete?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    connect?: RegistrationDocumentWhereUniqueInput | RegistrationDocumentWhereUniqueInput[]
    update?: RegistrationDocumentUpdateWithWhereUniqueWithoutSeniorInput | RegistrationDocumentUpdateWithWhereUniqueWithoutSeniorInput[]
    updateMany?: RegistrationDocumentUpdateManyWithWhereWithoutSeniorInput | RegistrationDocumentUpdateManyWithWhereWithoutSeniorInput[]
    deleteMany?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
  }

  export type SeniorCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<SeniorCreateWithoutDocumentsInput, SeniorUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: SeniorCreateOrConnectWithoutDocumentsInput
    connect?: SeniorWhereUniqueInput
  }

  export type SeniorUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<SeniorCreateWithoutDocumentsInput, SeniorUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: SeniorCreateOrConnectWithoutDocumentsInput
    upsert?: SeniorUpsertWithoutDocumentsInput
    connect?: SeniorWhereUniqueInput
    update?: XOR<XOR<SeniorUpdateToOneWithWhereWithoutDocumentsInput, SeniorUpdateWithoutDocumentsInput>, SeniorUncheckedUpdateWithoutDocumentsInput>
  }

  export type SeniorCreateNestedManyWithoutRemarksInput = {
    create?: XOR<SeniorCreateWithoutRemarksInput, SeniorUncheckedCreateWithoutRemarksInput> | SeniorCreateWithoutRemarksInput[] | SeniorUncheckedCreateWithoutRemarksInput[]
    connectOrCreate?: SeniorCreateOrConnectWithoutRemarksInput | SeniorCreateOrConnectWithoutRemarksInput[]
    createMany?: SeniorCreateManyRemarksInputEnvelope
    connect?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
  }

  export type SeniorUncheckedCreateNestedManyWithoutRemarksInput = {
    create?: XOR<SeniorCreateWithoutRemarksInput, SeniorUncheckedCreateWithoutRemarksInput> | SeniorCreateWithoutRemarksInput[] | SeniorUncheckedCreateWithoutRemarksInput[]
    connectOrCreate?: SeniorCreateOrConnectWithoutRemarksInput | SeniorCreateOrConnectWithoutRemarksInput[]
    createMany?: SeniorCreateManyRemarksInputEnvelope
    connect?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
  }

  export type SeniorUpdateManyWithoutRemarksNestedInput = {
    create?: XOR<SeniorCreateWithoutRemarksInput, SeniorUncheckedCreateWithoutRemarksInput> | SeniorCreateWithoutRemarksInput[] | SeniorUncheckedCreateWithoutRemarksInput[]
    connectOrCreate?: SeniorCreateOrConnectWithoutRemarksInput | SeniorCreateOrConnectWithoutRemarksInput[]
    upsert?: SeniorUpsertWithWhereUniqueWithoutRemarksInput | SeniorUpsertWithWhereUniqueWithoutRemarksInput[]
    createMany?: SeniorCreateManyRemarksInputEnvelope
    set?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    disconnect?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    delete?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    connect?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    update?: SeniorUpdateWithWhereUniqueWithoutRemarksInput | SeniorUpdateWithWhereUniqueWithoutRemarksInput[]
    updateMany?: SeniorUpdateManyWithWhereWithoutRemarksInput | SeniorUpdateManyWithWhereWithoutRemarksInput[]
    deleteMany?: SeniorScalarWhereInput | SeniorScalarWhereInput[]
  }

  export type SeniorUncheckedUpdateManyWithoutRemarksNestedInput = {
    create?: XOR<SeniorCreateWithoutRemarksInput, SeniorUncheckedCreateWithoutRemarksInput> | SeniorCreateWithoutRemarksInput[] | SeniorUncheckedCreateWithoutRemarksInput[]
    connectOrCreate?: SeniorCreateOrConnectWithoutRemarksInput | SeniorCreateOrConnectWithoutRemarksInput[]
    upsert?: SeniorUpsertWithWhereUniqueWithoutRemarksInput | SeniorUpsertWithWhereUniqueWithoutRemarksInput[]
    createMany?: SeniorCreateManyRemarksInputEnvelope
    set?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    disconnect?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    delete?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    connect?: SeniorWhereUniqueInput | SeniorWhereUniqueInput[]
    update?: SeniorUpdateWithWhereUniqueWithoutRemarksInput | SeniorUpdateWithWhereUniqueWithoutRemarksInput[]
    updateMany?: SeniorUpdateManyWithWhereWithoutRemarksInput | SeniorUpdateManyWithWhereWithoutRemarksInput[]
    deleteMany?: SeniorScalarWhereInput | SeniorScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemarksCreateWithoutSeniorsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemarksUncheckedCreateWithoutSeniorsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemarksCreateOrConnectWithoutSeniorsInput = {
    where: RemarksWhereUniqueInput
    create: XOR<RemarksCreateWithoutSeniorsInput, RemarksUncheckedCreateWithoutSeniorsInput>
  }

  export type RegistrationDocumentCreateWithoutSeniorInput = {
    tag: string
    path: string
    file_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationDocumentUncheckedCreateWithoutSeniorInput = {
    id?: number
    tag: string
    path: string
    file_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationDocumentCreateOrConnectWithoutSeniorInput = {
    where: RegistrationDocumentWhereUniqueInput
    create: XOR<RegistrationDocumentCreateWithoutSeniorInput, RegistrationDocumentUncheckedCreateWithoutSeniorInput>
  }

  export type RegistrationDocumentCreateManySeniorInputEnvelope = {
    data: RegistrationDocumentCreateManySeniorInput | RegistrationDocumentCreateManySeniorInput[]
    skipDuplicates?: boolean
  }

  export type RemarksUpsertWithoutSeniorsInput = {
    update: XOR<RemarksUpdateWithoutSeniorsInput, RemarksUncheckedUpdateWithoutSeniorsInput>
    create: XOR<RemarksCreateWithoutSeniorsInput, RemarksUncheckedCreateWithoutSeniorsInput>
    where?: RemarksWhereInput
  }

  export type RemarksUpdateToOneWithWhereWithoutSeniorsInput = {
    where?: RemarksWhereInput
    data: XOR<RemarksUpdateWithoutSeniorsInput, RemarksUncheckedUpdateWithoutSeniorsInput>
  }

  export type RemarksUpdateWithoutSeniorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemarksUncheckedUpdateWithoutSeniorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUpsertWithWhereUniqueWithoutSeniorInput = {
    where: RegistrationDocumentWhereUniqueInput
    update: XOR<RegistrationDocumentUpdateWithoutSeniorInput, RegistrationDocumentUncheckedUpdateWithoutSeniorInput>
    create: XOR<RegistrationDocumentCreateWithoutSeniorInput, RegistrationDocumentUncheckedCreateWithoutSeniorInput>
  }

  export type RegistrationDocumentUpdateWithWhereUniqueWithoutSeniorInput = {
    where: RegistrationDocumentWhereUniqueInput
    data: XOR<RegistrationDocumentUpdateWithoutSeniorInput, RegistrationDocumentUncheckedUpdateWithoutSeniorInput>
  }

  export type RegistrationDocumentUpdateManyWithWhereWithoutSeniorInput = {
    where: RegistrationDocumentScalarWhereInput
    data: XOR<RegistrationDocumentUpdateManyMutationInput, RegistrationDocumentUncheckedUpdateManyWithoutSeniorInput>
  }

  export type RegistrationDocumentScalarWhereInput = {
    AND?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
    OR?: RegistrationDocumentScalarWhereInput[]
    NOT?: RegistrationDocumentScalarWhereInput | RegistrationDocumentScalarWhereInput[]
    id?: IntFilter<"RegistrationDocument"> | number
    tag?: StringFilter<"RegistrationDocument"> | string
    path?: StringFilter<"RegistrationDocument"> | string
    file_name?: StringFilter<"RegistrationDocument"> | string
    seniors_id?: IntFilter<"RegistrationDocument"> | number
    createdAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationDocument"> | Date | string
  }

  export type SeniorCreateWithoutDocumentsInput = {
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: RemarksCreateNestedOneWithoutSeniorsInput
  }

  export type SeniorUncheckedCreateWithoutDocumentsInput = {
    id?: number
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    remarks_id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeniorCreateOrConnectWithoutDocumentsInput = {
    where: SeniorWhereUniqueInput
    create: XOR<SeniorCreateWithoutDocumentsInput, SeniorUncheckedCreateWithoutDocumentsInput>
  }

  export type SeniorUpsertWithoutDocumentsInput = {
    update: XOR<SeniorUpdateWithoutDocumentsInput, SeniorUncheckedUpdateWithoutDocumentsInput>
    create: XOR<SeniorCreateWithoutDocumentsInput, SeniorUncheckedCreateWithoutDocumentsInput>
    where?: SeniorWhereInput
  }

  export type SeniorUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: SeniorWhereInput
    data: XOR<SeniorUpdateWithoutDocumentsInput, SeniorUncheckedUpdateWithoutDocumentsInput>
  }

  export type SeniorUpdateWithoutDocumentsInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: RemarksUpdateOneRequiredWithoutSeniorsNestedInput
  }

  export type SeniorUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    remarks_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorCreateWithoutRemarksInput = {
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentCreateNestedManyWithoutSeniorInput
  }

  export type SeniorUncheckedCreateWithoutRemarksInput = {
    id?: number
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: RegistrationDocumentUncheckedCreateNestedManyWithoutSeniorInput
  }

  export type SeniorCreateOrConnectWithoutRemarksInput = {
    where: SeniorWhereUniqueInput
    create: XOR<SeniorCreateWithoutRemarksInput, SeniorUncheckedCreateWithoutRemarksInput>
  }

  export type SeniorCreateManyRemarksInputEnvelope = {
    data: SeniorCreateManyRemarksInput | SeniorCreateManyRemarksInput[]
    skipDuplicates?: boolean
  }

  export type SeniorUpsertWithWhereUniqueWithoutRemarksInput = {
    where: SeniorWhereUniqueInput
    update: XOR<SeniorUpdateWithoutRemarksInput, SeniorUncheckedUpdateWithoutRemarksInput>
    create: XOR<SeniorCreateWithoutRemarksInput, SeniorUncheckedCreateWithoutRemarksInput>
  }

  export type SeniorUpdateWithWhereUniqueWithoutRemarksInput = {
    where: SeniorWhereUniqueInput
    data: XOR<SeniorUpdateWithoutRemarksInput, SeniorUncheckedUpdateWithoutRemarksInput>
  }

  export type SeniorUpdateManyWithWhereWithoutRemarksInput = {
    where: SeniorScalarWhereInput
    data: XOR<SeniorUpdateManyMutationInput, SeniorUncheckedUpdateManyWithoutRemarksInput>
  }

  export type SeniorScalarWhereInput = {
    AND?: SeniorScalarWhereInput | SeniorScalarWhereInput[]
    OR?: SeniorScalarWhereInput[]
    NOT?: SeniorScalarWhereInput | SeniorScalarWhereInput[]
    id?: IntFilter<"Senior"> | number
    lastname?: StringFilter<"Senior"> | string
    firstname?: StringFilter<"Senior"> | string
    middlename?: StringNullableFilter<"Senior"> | string | null
    email?: StringNullableFilter<"Senior"> | string | null
    barangay?: StringFilter<"Senior"> | string
    purok?: StringFilter<"Senior"> | string
    gender?: EnumGenderFilter<"Senior"> | $Enums.Gender
    birthdate?: DateTimeFilter<"Senior"> | Date | string
    age?: StringFilter<"Senior"> | string
    contact_no?: StringFilter<"Senior"> | string
    remarks_id?: IntFilter<"Senior"> | number
    createdAt?: DateTimeFilter<"Senior"> | Date | string
    updatedAt?: DateTimeFilter<"Senior"> | Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentCreateManySeniorInput = {
    id?: number
    tag: string
    path: string
    file_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationDocumentUpdateWithoutSeniorInput = {
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUncheckedUpdateWithoutSeniorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationDocumentUncheckedUpdateManyWithoutSeniorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorCreateManyRemarksInput = {
    id?: number
    lastname: string
    firstname: string
    middlename?: string | null
    email?: string | null
    barangay: string
    purok: string
    gender: $Enums.Gender
    birthdate: Date | string
    age: string
    contact_no: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeniorUpdateWithoutRemarksInput = {
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUpdateManyWithoutSeniorNestedInput
  }

  export type SeniorUncheckedUpdateWithoutRemarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RegistrationDocumentUncheckedUpdateManyWithoutSeniorNestedInput
  }

  export type SeniorUncheckedUpdateManyWithoutRemarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastname?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    barangay?: StringFieldUpdateOperationsInput | string
    purok?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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