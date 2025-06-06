
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
 * Model SkillCategory
 * 
 */
export type SkillCategory = $Result.DefaultSelection<Prisma.$SkillCategoryPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model WeekPlan
 * 
 */
export type WeekPlan = $Result.DefaultSelection<Prisma.$WeekPlanPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Reflection
 * 
 */
export type Reflection = $Result.DefaultSelection<Prisma.$ReflectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GoalStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]


export const SkillLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type SkillLevel = (typeof SkillLevel)[keyof typeof SkillLevel]

}

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

export type SkillLevel = $Enums.SkillLevel

export const SkillLevel: typeof $Enums.SkillLevel

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
   * `prisma.skillCategory`: Exposes CRUD operations for the **SkillCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillCategories
    * const skillCategories = await prisma.skillCategory.findMany()
    * ```
    */
  get skillCategory(): Prisma.SkillCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weekPlan`: Exposes CRUD operations for the **WeekPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeekPlans
    * const weekPlans = await prisma.weekPlan.findMany()
    * ```
    */
  get weekPlan(): Prisma.WeekPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reflection`: Exposes CRUD operations for the **Reflection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reflections
    * const reflections = await prisma.reflection.findMany()
    * ```
    */
  get reflection(): Prisma.ReflectionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    SkillCategory: 'SkillCategory',
    Skill: 'Skill',
    WeekPlan: 'WeekPlan',
    Goal: 'Goal',
    Reflection: 'Reflection'
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
      modelProps: "user" | "skillCategory" | "skill" | "weekPlan" | "goal" | "reflection"
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
      SkillCategory: {
        payload: Prisma.$SkillCategoryPayload<ExtArgs>
        fields: Prisma.SkillCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findFirst: {
            args: Prisma.SkillCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findMany: {
            args: Prisma.SkillCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          create: {
            args: Prisma.SkillCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          createMany: {
            args: Prisma.SkillCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          delete: {
            args: Prisma.SkillCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          update: {
            args: Prisma.SkillCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SkillCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SkillCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          aggregate: {
            args: Prisma.SkillCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillCategory>
          }
          groupBy: {
            args: Prisma.SkillCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      WeekPlan: {
        payload: Prisma.$WeekPlanPayload<ExtArgs>
        fields: Prisma.WeekPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>
          }
          findFirst: {
            args: Prisma.WeekPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>
          }
          findMany: {
            args: Prisma.WeekPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>[]
          }
          create: {
            args: Prisma.WeekPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>
          }
          createMany: {
            args: Prisma.WeekPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeekPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>[]
          }
          delete: {
            args: Prisma.WeekPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>
          }
          update: {
            args: Prisma.WeekPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>
          }
          deleteMany: {
            args: Prisma.WeekPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeekPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeekPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>[]
          }
          upsert: {
            args: Prisma.WeekPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPlanPayload>
          }
          aggregate: {
            args: Prisma.WeekPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeekPlan>
          }
          groupBy: {
            args: Prisma.WeekPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekPlanCountArgs<ExtArgs>
            result: $Utils.Optional<WeekPlanCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Reflection: {
        payload: Prisma.$ReflectionPayload<ExtArgs>
        fields: Prisma.ReflectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReflectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReflectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          findFirst: {
            args: Prisma.ReflectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReflectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          findMany: {
            args: Prisma.ReflectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          create: {
            args: Prisma.ReflectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          createMany: {
            args: Prisma.ReflectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReflectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          delete: {
            args: Prisma.ReflectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          update: {
            args: Prisma.ReflectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          deleteMany: {
            args: Prisma.ReflectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReflectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReflectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          upsert: {
            args: Prisma.ReflectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          aggregate: {
            args: Prisma.ReflectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReflection>
          }
          groupBy: {
            args: Prisma.ReflectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReflectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReflectionCountArgs<ExtArgs>
            result: $Utils.Optional<ReflectionCountAggregateOutputType> | number
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
    skillCategory?: SkillCategoryOmit
    skill?: SkillOmit
    weekPlan?: WeekPlanOmit
    goal?: GoalOmit
    reflection?: ReflectionOmit
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
    Skill: number
    WeekPlan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Skill?: boolean | UserCountOutputTypeCountSkillArgs
    WeekPlan?: boolean | UserCountOutputTypeCountWeekPlanArgs
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
  export type UserCountOutputTypeCountSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeekPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekPlanWhereInput
  }


  /**
   * Count Type SkillCategoryCountOutputType
   */

  export type SkillCategoryCountOutputType = {
    skills: number
  }

  export type SkillCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillCategoryCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategoryCountOutputType
     */
    select?: SkillCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    Goal: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Goal?: boolean | SkillCountOutputTypeCountGoalArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }


  /**
   * Count Type WeekPlanCountOutputType
   */

  export type WeekPlanCountOutputType = {
    goals: number
  }

  export type WeekPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | WeekPlanCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * WeekPlanCountOutputType without action
   */
  export type WeekPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlanCountOutputType
     */
    select?: WeekPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeekPlanCountOutputType without action
   */
  export type WeekPlanCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
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
    email: string | null
    password: string | null
    name: string | null
    refreshToken: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    refreshToken: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    refreshToken: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    refreshToken?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    refreshToken?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    refreshToken?: true
    createdAt?: true
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
    email: string
    password: string
    name: string | null
    refreshToken: string | null
    createdAt: Date
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
    email?: boolean
    password?: boolean
    name?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    Skill?: boolean | User$SkillArgs<ExtArgs>
    WeekPlan?: boolean | User$WeekPlanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    refreshToken?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    refreshToken?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    refreshToken?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "refreshToken" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Skill?: boolean | User$SkillArgs<ExtArgs>
    WeekPlan?: boolean | User$WeekPlanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Skill: Prisma.$SkillPayload<ExtArgs>[]
      WeekPlan: Prisma.$WeekPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      refreshToken: string | null
      createdAt: Date
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
    Skill<T extends User$SkillArgs<ExtArgs> = {}>(args?: Subset<T, User$SkillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WeekPlan<T extends User$WeekPlanArgs<ExtArgs> = {}>(args?: Subset<T, User$WeekPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.Skill
   */
  export type User$SkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * User.WeekPlan
   */
  export type User$WeekPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    where?: WeekPlanWhereInput
    orderBy?: WeekPlanOrderByWithRelationInput | WeekPlanOrderByWithRelationInput[]
    cursor?: WeekPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeekPlanScalarFieldEnum | WeekPlanScalarFieldEnum[]
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
   * Model SkillCategory
   */

  export type AggregateSkillCategory = {
    _count: SkillCategoryCountAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  export type SkillCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategory to aggregate.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillCategories
    **/
    _count?: true | SkillCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type GetSkillCategoryAggregateType<T extends SkillCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillCategory[P]>
      : GetScalarType<T[P], AggregateSkillCategory[P]>
  }




  export type SkillCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillCategoryWhereInput
    orderBy?: SkillCategoryOrderByWithAggregationInput | SkillCategoryOrderByWithAggregationInput[]
    by: SkillCategoryScalarFieldEnum[] | SkillCategoryScalarFieldEnum
    having?: SkillCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCategoryCountAggregateInputType | true
    _min?: SkillCategoryMinAggregateInputType
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type SkillCategoryGroupByOutputType = {
    id: string
    name: string
    _count: SkillCategoryCountAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  type GetSkillCategoryGroupByPayload<T extends SkillCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SkillCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skills?: boolean | SkillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["skillCategory"]>
  export type SkillCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillCategory"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["skillCategory"]>
    composites: {}
  }

  type SkillCategoryGetPayload<S extends boolean | null | undefined | SkillCategoryDefaultArgs> = $Result.GetResult<Prisma.$SkillCategoryPayload, S>

  type SkillCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCategoryCountAggregateInputType | true
    }

  export interface SkillCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillCategory'], meta: { name: 'SkillCategory' } }
    /**
     * Find zero or one SkillCategory that matches the filter.
     * @param {SkillCategoryFindUniqueArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillCategoryFindUniqueArgs>(args: SelectSubset<T, SkillCategoryFindUniqueArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillCategoryFindUniqueOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillCategoryFindFirstArgs>(args?: SelectSubset<T, SkillCategoryFindFirstArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany()
     * 
     * // Get first 10 SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillCategoryFindManyArgs>(args?: SelectSubset<T, SkillCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillCategory.
     * @param {SkillCategoryCreateArgs} args - Arguments to create a SkillCategory.
     * @example
     * // Create one SkillCategory
     * const SkillCategory = await prisma.skillCategory.create({
     *   data: {
     *     // ... data to create a SkillCategory
     *   }
     * })
     * 
     */
    create<T extends SkillCategoryCreateArgs>(args: SelectSubset<T, SkillCategoryCreateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillCategories.
     * @param {SkillCategoryCreateManyArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCategoryCreateManyArgs>(args?: SelectSubset<T, SkillCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillCategories and returns the data saved in the database.
     * @param {SkillCategoryCreateManyAndReturnArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillCategories and only return the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillCategory.
     * @param {SkillCategoryDeleteArgs} args - Arguments to delete one SkillCategory.
     * @example
     * // Delete one SkillCategory
     * const SkillCategory = await prisma.skillCategory.delete({
     *   where: {
     *     // ... filter to delete one SkillCategory
     *   }
     * })
     * 
     */
    delete<T extends SkillCategoryDeleteArgs>(args: SelectSubset<T, SkillCategoryDeleteArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillCategory.
     * @param {SkillCategoryUpdateArgs} args - Arguments to update one SkillCategory.
     * @example
     * // Update one SkillCategory
     * const skillCategory = await prisma.skillCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillCategoryUpdateArgs>(args: SelectSubset<T, SkillCategoryUpdateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillCategories.
     * @param {SkillCategoryDeleteManyArgs} args - Arguments to filter SkillCategories to delete.
     * @example
     * // Delete a few SkillCategories
     * const { count } = await prisma.skillCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillCategoryDeleteManyArgs>(args?: SelectSubset<T, SkillCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillCategoryUpdateManyArgs>(args: SelectSubset<T, SkillCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories and returns the data updated in the database.
     * @param {SkillCategoryUpdateManyAndReturnArgs} args - Arguments to update many SkillCategories.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillCategories and only return the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillCategory.
     * @param {SkillCategoryUpsertArgs} args - Arguments to update or create a SkillCategory.
     * @example
     * // Update or create a SkillCategory
     * const skillCategory = await prisma.skillCategory.upsert({
     *   create: {
     *     // ... data to create a SkillCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillCategory we want to update
     *   }
     * })
     */
    upsert<T extends SkillCategoryUpsertArgs>(args: SelectSubset<T, SkillCategoryUpsertArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryCountArgs} args - Arguments to filter SkillCategories to count.
     * @example
     * // Count the number of SkillCategories
     * const count = await prisma.skillCategory.count({
     *   where: {
     *     // ... the filter for the SkillCategories we want to count
     *   }
     * })
    **/
    count<T extends SkillCategoryCountArgs>(
      args?: Subset<T, SkillCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillCategoryAggregateArgs>(args: Subset<T, SkillCategoryAggregateArgs>): Prisma.PrismaPromise<GetSkillCategoryAggregateType<T>>

    /**
     * Group by SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryGroupByArgs} args - Group by arguments.
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
      T extends SkillCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SkillCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillCategory model
   */
  readonly fields: SkillCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends SkillCategory$skillsArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategory$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SkillCategory model
   */
  interface SkillCategoryFieldRefs {
    readonly id: FieldRef<"SkillCategory", 'String'>
    readonly name: FieldRef<"SkillCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SkillCategory findUnique
   */
  export type SkillCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findUniqueOrThrow
   */
  export type SkillCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findFirst
   */
  export type SkillCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findFirstOrThrow
   */
  export type SkillCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findMany
   */
  export type SkillCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategories to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory create
   */
  export type SkillCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillCategory.
     */
    data: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
  }

  /**
   * SkillCategory createMany
   */
  export type SkillCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillCategory createManyAndReturn
   */
  export type SkillCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillCategory update
   */
  export type SkillCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillCategory.
     */
    data: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
    /**
     * Choose, which SkillCategory to update.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory updateMany
   */
  export type SkillCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory updateManyAndReturn
   */
  export type SkillCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory upsert
   */
  export type SkillCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillCategory to update in case it exists.
     */
    where: SkillCategoryWhereUniqueInput
    /**
     * In case the SkillCategory found by the `where` argument doesn't exist, create a new SkillCategory with this data.
     */
    create: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
    /**
     * In case the SkillCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
  }

  /**
   * SkillCategory delete
   */
  export type SkillCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter which SkillCategory to delete.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory deleteMany
   */
  export type SkillCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategories to delete
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to delete.
     */
    limit?: number
  }

  /**
   * SkillCategory.skills
   */
  export type SkillCategory$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * SkillCategory without action
   */
  export type SkillCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: $Enums.SkillLevel | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: $Enums.SkillLevel | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    level: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    level: $Enums.SkillLevel
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
    Goal?: boolean | Skill$GoalArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "notes" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
    Goal?: boolean | Skill$GoalArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$SkillCategoryPayload<ExtArgs>
      Goal: Prisma.$GoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: $Enums.SkillLevel
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends SkillCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategoryDefaultArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Goal<T extends Skill$GoalArgs<ExtArgs> = {}>(args?: Subset<T, Skill$GoalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly level: FieldRef<"Skill", 'SkillLevel'>
    readonly notes: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
    readonly userId: FieldRef<"Skill", 'String'>
    readonly categoryId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.Goal
   */
  export type Skill$GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model WeekPlan
   */

  export type AggregateWeekPlan = {
    _count: WeekPlanCountAggregateOutputType | null
    _min: WeekPlanMinAggregateOutputType | null
    _max: WeekPlanMaxAggregateOutputType | null
  }

  export type WeekPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type WeekPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type WeekPlanCountAggregateOutputType = {
    id: number
    userId: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type WeekPlanMinAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type WeekPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type WeekPlanCountAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type WeekPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeekPlan to aggregate.
     */
    where?: WeekPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekPlans to fetch.
     */
    orderBy?: WeekPlanOrderByWithRelationInput | WeekPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeekPlans
    **/
    _count?: true | WeekPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekPlanMaxAggregateInputType
  }

  export type GetWeekPlanAggregateType<T extends WeekPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateWeekPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeekPlan[P]>
      : GetScalarType<T[P], AggregateWeekPlan[P]>
  }




  export type WeekPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekPlanWhereInput
    orderBy?: WeekPlanOrderByWithAggregationInput | WeekPlanOrderByWithAggregationInput[]
    by: WeekPlanScalarFieldEnum[] | WeekPlanScalarFieldEnum
    having?: WeekPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekPlanCountAggregateInputType | true
    _min?: WeekPlanMinAggregateInputType
    _max?: WeekPlanMaxAggregateInputType
  }

  export type WeekPlanGroupByOutputType = {
    id: string
    userId: string
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: WeekPlanCountAggregateOutputType | null
    _min: WeekPlanMinAggregateOutputType | null
    _max: WeekPlanMaxAggregateOutputType | null
  }

  type GetWeekPlanGroupByPayload<T extends WeekPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekPlanGroupByOutputType[P]>
            : GetScalarType<T[P], WeekPlanGroupByOutputType[P]>
        }
      >
    >


  export type WeekPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    goals?: boolean | WeekPlan$goalsArgs<ExtArgs>
    reflection?: boolean | WeekPlan$reflectionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WeekPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekPlan"]>

  export type WeekPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekPlan"]>

  export type WeekPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekPlan"]>

  export type WeekPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type WeekPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["weekPlan"]>
  export type WeekPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | WeekPlan$goalsArgs<ExtArgs>
    reflection?: boolean | WeekPlan$reflectionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WeekPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeekPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeekPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeekPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeekPlan"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
      reflection: Prisma.$ReflectionPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["weekPlan"]>
    composites: {}
  }

  type WeekPlanGetPayload<S extends boolean | null | undefined | WeekPlanDefaultArgs> = $Result.GetResult<Prisma.$WeekPlanPayload, S>

  type WeekPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeekPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeekPlanCountAggregateInputType | true
    }

  export interface WeekPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeekPlan'], meta: { name: 'WeekPlan' } }
    /**
     * Find zero or one WeekPlan that matches the filter.
     * @param {WeekPlanFindUniqueArgs} args - Arguments to find a WeekPlan
     * @example
     * // Get one WeekPlan
     * const weekPlan = await prisma.weekPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeekPlanFindUniqueArgs>(args: SelectSubset<T, WeekPlanFindUniqueArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeekPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeekPlanFindUniqueOrThrowArgs} args - Arguments to find a WeekPlan
     * @example
     * // Get one WeekPlan
     * const weekPlan = await prisma.weekPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeekPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, WeekPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeekPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanFindFirstArgs} args - Arguments to find a WeekPlan
     * @example
     * // Get one WeekPlan
     * const weekPlan = await prisma.weekPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeekPlanFindFirstArgs>(args?: SelectSubset<T, WeekPlanFindFirstArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeekPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanFindFirstOrThrowArgs} args - Arguments to find a WeekPlan
     * @example
     * // Get one WeekPlan
     * const weekPlan = await prisma.weekPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeekPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, WeekPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeekPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeekPlans
     * const weekPlans = await prisma.weekPlan.findMany()
     * 
     * // Get first 10 WeekPlans
     * const weekPlans = await prisma.weekPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekPlanWithIdOnly = await prisma.weekPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeekPlanFindManyArgs>(args?: SelectSubset<T, WeekPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeekPlan.
     * @param {WeekPlanCreateArgs} args - Arguments to create a WeekPlan.
     * @example
     * // Create one WeekPlan
     * const WeekPlan = await prisma.weekPlan.create({
     *   data: {
     *     // ... data to create a WeekPlan
     *   }
     * })
     * 
     */
    create<T extends WeekPlanCreateArgs>(args: SelectSubset<T, WeekPlanCreateArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeekPlans.
     * @param {WeekPlanCreateManyArgs} args - Arguments to create many WeekPlans.
     * @example
     * // Create many WeekPlans
     * const weekPlan = await prisma.weekPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeekPlanCreateManyArgs>(args?: SelectSubset<T, WeekPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeekPlans and returns the data saved in the database.
     * @param {WeekPlanCreateManyAndReturnArgs} args - Arguments to create many WeekPlans.
     * @example
     * // Create many WeekPlans
     * const weekPlan = await prisma.weekPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeekPlans and only return the `id`
     * const weekPlanWithIdOnly = await prisma.weekPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeekPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, WeekPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeekPlan.
     * @param {WeekPlanDeleteArgs} args - Arguments to delete one WeekPlan.
     * @example
     * // Delete one WeekPlan
     * const WeekPlan = await prisma.weekPlan.delete({
     *   where: {
     *     // ... filter to delete one WeekPlan
     *   }
     * })
     * 
     */
    delete<T extends WeekPlanDeleteArgs>(args: SelectSubset<T, WeekPlanDeleteArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeekPlan.
     * @param {WeekPlanUpdateArgs} args - Arguments to update one WeekPlan.
     * @example
     * // Update one WeekPlan
     * const weekPlan = await prisma.weekPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeekPlanUpdateArgs>(args: SelectSubset<T, WeekPlanUpdateArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeekPlans.
     * @param {WeekPlanDeleteManyArgs} args - Arguments to filter WeekPlans to delete.
     * @example
     * // Delete a few WeekPlans
     * const { count } = await prisma.weekPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeekPlanDeleteManyArgs>(args?: SelectSubset<T, WeekPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeekPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeekPlans
     * const weekPlan = await prisma.weekPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeekPlanUpdateManyArgs>(args: SelectSubset<T, WeekPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeekPlans and returns the data updated in the database.
     * @param {WeekPlanUpdateManyAndReturnArgs} args - Arguments to update many WeekPlans.
     * @example
     * // Update many WeekPlans
     * const weekPlan = await prisma.weekPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeekPlans and only return the `id`
     * const weekPlanWithIdOnly = await prisma.weekPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeekPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, WeekPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeekPlan.
     * @param {WeekPlanUpsertArgs} args - Arguments to update or create a WeekPlan.
     * @example
     * // Update or create a WeekPlan
     * const weekPlan = await prisma.weekPlan.upsert({
     *   create: {
     *     // ... data to create a WeekPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeekPlan we want to update
     *   }
     * })
     */
    upsert<T extends WeekPlanUpsertArgs>(args: SelectSubset<T, WeekPlanUpsertArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeekPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanCountArgs} args - Arguments to filter WeekPlans to count.
     * @example
     * // Count the number of WeekPlans
     * const count = await prisma.weekPlan.count({
     *   where: {
     *     // ... the filter for the WeekPlans we want to count
     *   }
     * })
    **/
    count<T extends WeekPlanCountArgs>(
      args?: Subset<T, WeekPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeekPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeekPlanAggregateArgs>(args: Subset<T, WeekPlanAggregateArgs>): Prisma.PrismaPromise<GetWeekPlanAggregateType<T>>

    /**
     * Group by WeekPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekPlanGroupByArgs} args - Group by arguments.
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
      T extends WeekPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekPlanGroupByArgs['orderBy'] }
        : { orderBy?: WeekPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeekPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeekPlan model
   */
  readonly fields: WeekPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeekPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends WeekPlan$goalsArgs<ExtArgs> = {}>(args?: Subset<T, WeekPlan$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reflection<T extends WeekPlan$reflectionArgs<ExtArgs> = {}>(args?: Subset<T, WeekPlan$reflectionArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeekPlan model
   */
  interface WeekPlanFieldRefs {
    readonly id: FieldRef<"WeekPlan", 'String'>
    readonly userId: FieldRef<"WeekPlan", 'String'>
    readonly startDate: FieldRef<"WeekPlan", 'DateTime'>
    readonly endDate: FieldRef<"WeekPlan", 'DateTime'>
    readonly createdAt: FieldRef<"WeekPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeekPlan findUnique
   */
  export type WeekPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * Filter, which WeekPlan to fetch.
     */
    where: WeekPlanWhereUniqueInput
  }

  /**
   * WeekPlan findUniqueOrThrow
   */
  export type WeekPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * Filter, which WeekPlan to fetch.
     */
    where: WeekPlanWhereUniqueInput
  }

  /**
   * WeekPlan findFirst
   */
  export type WeekPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * Filter, which WeekPlan to fetch.
     */
    where?: WeekPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekPlans to fetch.
     */
    orderBy?: WeekPlanOrderByWithRelationInput | WeekPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeekPlans.
     */
    cursor?: WeekPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeekPlans.
     */
    distinct?: WeekPlanScalarFieldEnum | WeekPlanScalarFieldEnum[]
  }

  /**
   * WeekPlan findFirstOrThrow
   */
  export type WeekPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * Filter, which WeekPlan to fetch.
     */
    where?: WeekPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekPlans to fetch.
     */
    orderBy?: WeekPlanOrderByWithRelationInput | WeekPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeekPlans.
     */
    cursor?: WeekPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeekPlans.
     */
    distinct?: WeekPlanScalarFieldEnum | WeekPlanScalarFieldEnum[]
  }

  /**
   * WeekPlan findMany
   */
  export type WeekPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * Filter, which WeekPlans to fetch.
     */
    where?: WeekPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekPlans to fetch.
     */
    orderBy?: WeekPlanOrderByWithRelationInput | WeekPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeekPlans.
     */
    cursor?: WeekPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekPlans.
     */
    skip?: number
    distinct?: WeekPlanScalarFieldEnum | WeekPlanScalarFieldEnum[]
  }

  /**
   * WeekPlan create
   */
  export type WeekPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a WeekPlan.
     */
    data: XOR<WeekPlanCreateInput, WeekPlanUncheckedCreateInput>
  }

  /**
   * WeekPlan createMany
   */
  export type WeekPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeekPlans.
     */
    data: WeekPlanCreateManyInput | WeekPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeekPlan createManyAndReturn
   */
  export type WeekPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * The data used to create many WeekPlans.
     */
    data: WeekPlanCreateManyInput | WeekPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeekPlan update
   */
  export type WeekPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a WeekPlan.
     */
    data: XOR<WeekPlanUpdateInput, WeekPlanUncheckedUpdateInput>
    /**
     * Choose, which WeekPlan to update.
     */
    where: WeekPlanWhereUniqueInput
  }

  /**
   * WeekPlan updateMany
   */
  export type WeekPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeekPlans.
     */
    data: XOR<WeekPlanUpdateManyMutationInput, WeekPlanUncheckedUpdateManyInput>
    /**
     * Filter which WeekPlans to update
     */
    where?: WeekPlanWhereInput
    /**
     * Limit how many WeekPlans to update.
     */
    limit?: number
  }

  /**
   * WeekPlan updateManyAndReturn
   */
  export type WeekPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * The data used to update WeekPlans.
     */
    data: XOR<WeekPlanUpdateManyMutationInput, WeekPlanUncheckedUpdateManyInput>
    /**
     * Filter which WeekPlans to update
     */
    where?: WeekPlanWhereInput
    /**
     * Limit how many WeekPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeekPlan upsert
   */
  export type WeekPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the WeekPlan to update in case it exists.
     */
    where: WeekPlanWhereUniqueInput
    /**
     * In case the WeekPlan found by the `where` argument doesn't exist, create a new WeekPlan with this data.
     */
    create: XOR<WeekPlanCreateInput, WeekPlanUncheckedCreateInput>
    /**
     * In case the WeekPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekPlanUpdateInput, WeekPlanUncheckedUpdateInput>
  }

  /**
   * WeekPlan delete
   */
  export type WeekPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
    /**
     * Filter which WeekPlan to delete.
     */
    where: WeekPlanWhereUniqueInput
  }

  /**
   * WeekPlan deleteMany
   */
  export type WeekPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeekPlans to delete
     */
    where?: WeekPlanWhereInput
    /**
     * Limit how many WeekPlans to delete.
     */
    limit?: number
  }

  /**
   * WeekPlan.goals
   */
  export type WeekPlan$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * WeekPlan.reflection
   */
  export type WeekPlan$reflectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    where?: ReflectionWhereInput
  }

  /**
   * WeekPlan without action
   */
  export type WeekPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekPlan
     */
    select?: WeekPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeekPlan
     */
    omit?: WeekPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekPlanInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    weekPlanId: string | null
    title: string | null
    skillId: string | null
    status: $Enums.GoalStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    weekPlanId: string | null
    title: string | null
    skillId: string | null
    status: $Enums.GoalStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    weekPlanId: number
    title: number
    skillId: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type GoalMinAggregateInputType = {
    id?: true
    weekPlanId?: true
    title?: true
    skillId?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    weekPlanId?: true
    title?: true
    skillId?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    weekPlanId?: true
    title?: true
    skillId?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    weekPlanId: string
    title: string
    skillId: string
    status: $Enums.GoalStatus
    notes: string | null
    createdAt: Date
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekPlanId?: boolean
    title?: boolean
    skillId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekPlanId?: boolean
    title?: boolean
    skillId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekPlanId?: boolean
    title?: boolean
    skillId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    weekPlanId?: boolean
    title?: boolean
    skillId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekPlanId" | "title" | "skillId" | "status" | "notes" | "createdAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs>
      weekPlan: Prisma.$WeekPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekPlanId: string
      title: string
      skillId: string
      status: $Enums.GoalStatus
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weekPlan<T extends WeekPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeekPlanDefaultArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly weekPlanId: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly skillId: FieldRef<"Goal", 'String'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly notes: FieldRef<"Goal", 'String'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Reflection
   */

  export type AggregateReflection = {
    _count: ReflectionCountAggregateOutputType | null
    _min: ReflectionMinAggregateOutputType | null
    _max: ReflectionMaxAggregateOutputType | null
  }

  export type ReflectionMinAggregateOutputType = {
    id: string | null
    weekPlanId: string | null
    summary: string | null
    challenges: string | null
    wins: string | null
    ideas: string | null
    createdAt: Date | null
  }

  export type ReflectionMaxAggregateOutputType = {
    id: string | null
    weekPlanId: string | null
    summary: string | null
    challenges: string | null
    wins: string | null
    ideas: string | null
    createdAt: Date | null
  }

  export type ReflectionCountAggregateOutputType = {
    id: number
    weekPlanId: number
    summary: number
    challenges: number
    wins: number
    ideas: number
    createdAt: number
    _all: number
  }


  export type ReflectionMinAggregateInputType = {
    id?: true
    weekPlanId?: true
    summary?: true
    challenges?: true
    wins?: true
    ideas?: true
    createdAt?: true
  }

  export type ReflectionMaxAggregateInputType = {
    id?: true
    weekPlanId?: true
    summary?: true
    challenges?: true
    wins?: true
    ideas?: true
    createdAt?: true
  }

  export type ReflectionCountAggregateInputType = {
    id?: true
    weekPlanId?: true
    summary?: true
    challenges?: true
    wins?: true
    ideas?: true
    createdAt?: true
    _all?: true
  }

  export type ReflectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reflection to aggregate.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reflections
    **/
    _count?: true | ReflectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReflectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReflectionMaxAggregateInputType
  }

  export type GetReflectionAggregateType<T extends ReflectionAggregateArgs> = {
        [P in keyof T & keyof AggregateReflection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReflection[P]>
      : GetScalarType<T[P], AggregateReflection[P]>
  }




  export type ReflectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithAggregationInput | ReflectionOrderByWithAggregationInput[]
    by: ReflectionScalarFieldEnum[] | ReflectionScalarFieldEnum
    having?: ReflectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReflectionCountAggregateInputType | true
    _min?: ReflectionMinAggregateInputType
    _max?: ReflectionMaxAggregateInputType
  }

  export type ReflectionGroupByOutputType = {
    id: string
    weekPlanId: string
    summary: string
    challenges: string
    wins: string
    ideas: string
    createdAt: Date
    _count: ReflectionCountAggregateOutputType | null
    _min: ReflectionMinAggregateOutputType | null
    _max: ReflectionMaxAggregateOutputType | null
  }

  type GetReflectionGroupByPayload<T extends ReflectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReflectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReflectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReflectionGroupByOutputType[P]>
            : GetScalarType<T[P], ReflectionGroupByOutputType[P]>
        }
      >
    >


  export type ReflectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekPlanId?: boolean
    summary?: boolean
    challenges?: boolean
    wins?: boolean
    ideas?: boolean
    createdAt?: boolean
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekPlanId?: boolean
    summary?: boolean
    challenges?: boolean
    wins?: boolean
    ideas?: boolean
    createdAt?: boolean
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekPlanId?: boolean
    summary?: boolean
    challenges?: boolean
    wins?: boolean
    ideas?: boolean
    createdAt?: boolean
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectScalar = {
    id?: boolean
    weekPlanId?: boolean
    summary?: boolean
    challenges?: boolean
    wins?: boolean
    ideas?: boolean
    createdAt?: boolean
  }

  export type ReflectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekPlanId" | "summary" | "challenges" | "wins" | "ideas" | "createdAt", ExtArgs["result"]["reflection"]>
  export type ReflectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }
  export type ReflectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }
  export type ReflectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekPlan?: boolean | WeekPlanDefaultArgs<ExtArgs>
  }

  export type $ReflectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reflection"
    objects: {
      weekPlan: Prisma.$WeekPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekPlanId: string
      summary: string
      challenges: string
      wins: string
      ideas: string
      createdAt: Date
    }, ExtArgs["result"]["reflection"]>
    composites: {}
  }

  type ReflectionGetPayload<S extends boolean | null | undefined | ReflectionDefaultArgs> = $Result.GetResult<Prisma.$ReflectionPayload, S>

  type ReflectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReflectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReflectionCountAggregateInputType | true
    }

  export interface ReflectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reflection'], meta: { name: 'Reflection' } }
    /**
     * Find zero or one Reflection that matches the filter.
     * @param {ReflectionFindUniqueArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReflectionFindUniqueArgs>(args: SelectSubset<T, ReflectionFindUniqueArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reflection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReflectionFindUniqueOrThrowArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReflectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReflectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reflection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindFirstArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReflectionFindFirstArgs>(args?: SelectSubset<T, ReflectionFindFirstArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reflection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindFirstOrThrowArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReflectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReflectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reflections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reflections
     * const reflections = await prisma.reflection.findMany()
     * 
     * // Get first 10 Reflections
     * const reflections = await prisma.reflection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reflectionWithIdOnly = await prisma.reflection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReflectionFindManyArgs>(args?: SelectSubset<T, ReflectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reflection.
     * @param {ReflectionCreateArgs} args - Arguments to create a Reflection.
     * @example
     * // Create one Reflection
     * const Reflection = await prisma.reflection.create({
     *   data: {
     *     // ... data to create a Reflection
     *   }
     * })
     * 
     */
    create<T extends ReflectionCreateArgs>(args: SelectSubset<T, ReflectionCreateArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reflections.
     * @param {ReflectionCreateManyArgs} args - Arguments to create many Reflections.
     * @example
     * // Create many Reflections
     * const reflection = await prisma.reflection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReflectionCreateManyArgs>(args?: SelectSubset<T, ReflectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reflections and returns the data saved in the database.
     * @param {ReflectionCreateManyAndReturnArgs} args - Arguments to create many Reflections.
     * @example
     * // Create many Reflections
     * const reflection = await prisma.reflection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reflections and only return the `id`
     * const reflectionWithIdOnly = await prisma.reflection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReflectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReflectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reflection.
     * @param {ReflectionDeleteArgs} args - Arguments to delete one Reflection.
     * @example
     * // Delete one Reflection
     * const Reflection = await prisma.reflection.delete({
     *   where: {
     *     // ... filter to delete one Reflection
     *   }
     * })
     * 
     */
    delete<T extends ReflectionDeleteArgs>(args: SelectSubset<T, ReflectionDeleteArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reflection.
     * @param {ReflectionUpdateArgs} args - Arguments to update one Reflection.
     * @example
     * // Update one Reflection
     * const reflection = await prisma.reflection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReflectionUpdateArgs>(args: SelectSubset<T, ReflectionUpdateArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reflections.
     * @param {ReflectionDeleteManyArgs} args - Arguments to filter Reflections to delete.
     * @example
     * // Delete a few Reflections
     * const { count } = await prisma.reflection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReflectionDeleteManyArgs>(args?: SelectSubset<T, ReflectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reflections
     * const reflection = await prisma.reflection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReflectionUpdateManyArgs>(args: SelectSubset<T, ReflectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reflections and returns the data updated in the database.
     * @param {ReflectionUpdateManyAndReturnArgs} args - Arguments to update many Reflections.
     * @example
     * // Update many Reflections
     * const reflection = await prisma.reflection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reflections and only return the `id`
     * const reflectionWithIdOnly = await prisma.reflection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReflectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReflectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reflection.
     * @param {ReflectionUpsertArgs} args - Arguments to update or create a Reflection.
     * @example
     * // Update or create a Reflection
     * const reflection = await prisma.reflection.upsert({
     *   create: {
     *     // ... data to create a Reflection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reflection we want to update
     *   }
     * })
     */
    upsert<T extends ReflectionUpsertArgs>(args: SelectSubset<T, ReflectionUpsertArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionCountArgs} args - Arguments to filter Reflections to count.
     * @example
     * // Count the number of Reflections
     * const count = await prisma.reflection.count({
     *   where: {
     *     // ... the filter for the Reflections we want to count
     *   }
     * })
    **/
    count<T extends ReflectionCountArgs>(
      args?: Subset<T, ReflectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReflectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReflectionAggregateArgs>(args: Subset<T, ReflectionAggregateArgs>): Prisma.PrismaPromise<GetReflectionAggregateType<T>>

    /**
     * Group by Reflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionGroupByArgs} args - Group by arguments.
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
      T extends ReflectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReflectionGroupByArgs['orderBy'] }
        : { orderBy?: ReflectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReflectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReflectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reflection model
   */
  readonly fields: ReflectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reflection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReflectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weekPlan<T extends WeekPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeekPlanDefaultArgs<ExtArgs>>): Prisma__WeekPlanClient<$Result.GetResult<Prisma.$WeekPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reflection model
   */
  interface ReflectionFieldRefs {
    readonly id: FieldRef<"Reflection", 'String'>
    readonly weekPlanId: FieldRef<"Reflection", 'String'>
    readonly summary: FieldRef<"Reflection", 'String'>
    readonly challenges: FieldRef<"Reflection", 'String'>
    readonly wins: FieldRef<"Reflection", 'String'>
    readonly ideas: FieldRef<"Reflection", 'String'>
    readonly createdAt: FieldRef<"Reflection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reflection findUnique
   */
  export type ReflectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection findUniqueOrThrow
   */
  export type ReflectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection findFirst
   */
  export type ReflectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reflections.
     */
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection findFirstOrThrow
   */
  export type ReflectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reflections.
     */
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection findMany
   */
  export type ReflectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflections to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection create
   */
  export type ReflectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reflection.
     */
    data: XOR<ReflectionCreateInput, ReflectionUncheckedCreateInput>
  }

  /**
   * Reflection createMany
   */
  export type ReflectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reflections.
     */
    data: ReflectionCreateManyInput | ReflectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reflection createManyAndReturn
   */
  export type ReflectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * The data used to create many Reflections.
     */
    data: ReflectionCreateManyInput | ReflectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reflection update
   */
  export type ReflectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reflection.
     */
    data: XOR<ReflectionUpdateInput, ReflectionUncheckedUpdateInput>
    /**
     * Choose, which Reflection to update.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection updateMany
   */
  export type ReflectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reflections.
     */
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyInput>
    /**
     * Filter which Reflections to update
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to update.
     */
    limit?: number
  }

  /**
   * Reflection updateManyAndReturn
   */
  export type ReflectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * The data used to update Reflections.
     */
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyInput>
    /**
     * Filter which Reflections to update
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reflection upsert
   */
  export type ReflectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reflection to update in case it exists.
     */
    where: ReflectionWhereUniqueInput
    /**
     * In case the Reflection found by the `where` argument doesn't exist, create a new Reflection with this data.
     */
    create: XOR<ReflectionCreateInput, ReflectionUncheckedCreateInput>
    /**
     * In case the Reflection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReflectionUpdateInput, ReflectionUncheckedUpdateInput>
  }

  /**
   * Reflection delete
   */
  export type ReflectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter which Reflection to delete.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection deleteMany
   */
  export type ReflectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reflections to delete
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to delete.
     */
    limit?: number
  }

  /**
   * Reflection without action
   */
  export type ReflectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillCategoryScalarFieldEnum = (typeof SkillCategoryScalarFieldEnum)[keyof typeof SkillCategoryScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const WeekPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type WeekPlanScalarFieldEnum = (typeof WeekPlanScalarFieldEnum)[keyof typeof WeekPlanScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    weekPlanId: 'weekPlanId',
    title: 'title',
    skillId: 'skillId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const ReflectionScalarFieldEnum: {
    id: 'id',
    weekPlanId: 'weekPlanId',
    summary: 'summary',
    challenges: 'challenges',
    wins: 'wins',
    ideas: 'ideas',
    createdAt: 'createdAt'
  };

  export type ReflectionScalarFieldEnum = (typeof ReflectionScalarFieldEnum)[keyof typeof ReflectionScalarFieldEnum]


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
   * Reference to a field of type 'SkillLevel'
   */
  export type EnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel'>
    


  /**
   * Reference to a field of type 'SkillLevel[]'
   */
  export type ListEnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Skill?: SkillListRelationFilter
    WeekPlan?: WeekPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Skill?: SkillOrderByRelationAggregateInput
    WeekPlan?: WeekPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Skill?: SkillListRelationFilter
    WeekPlan?: WeekPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillCategoryWhereInput = {
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    id?: StringFilter<"SkillCategory"> | string
    name?: StringFilter<"SkillCategory"> | string
    skills?: SkillListRelationFilter
  }

  export type SkillCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
  }

  export type SkillCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    skills?: SkillListRelationFilter
  }, "id" | "name">

  export type SkillCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCategoryCountOrderByAggregateInput
    _max?: SkillCategoryMaxOrderByAggregateInput
    _min?: SkillCategoryMinOrderByAggregateInput
  }

  export type SkillCategoryScalarWhereWithAggregatesInput = {
    AND?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    OR?: SkillCategoryScalarWhereWithAggregatesInput[]
    NOT?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillCategory"> | string
    name?: StringWithAggregatesFilter<"SkillCategory"> | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: EnumSkillLevelFilter<"Skill"> | $Enums.SkillLevel
    notes?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    userId?: StringFilter<"Skill"> | string
    categoryId?: StringFilter<"Skill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<SkillCategoryScalarRelationFilter, SkillCategoryWhereInput>
    Goal?: GoalListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: SkillCategoryOrderByWithRelationInput
    Goal?: GoalOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    level?: EnumSkillLevelFilter<"Skill"> | $Enums.SkillLevel
    notes?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    userId?: StringFilter<"Skill"> | string
    categoryId?: StringFilter<"Skill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<SkillCategoryScalarRelationFilter, SkillCategoryWhereInput>
    Goal?: GoalListRelationFilter
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    level?: EnumSkillLevelWithAggregatesFilter<"Skill"> | $Enums.SkillLevel
    notes?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    userId?: StringWithAggregatesFilter<"Skill"> | string
    categoryId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type WeekPlanWhereInput = {
    AND?: WeekPlanWhereInput | WeekPlanWhereInput[]
    OR?: WeekPlanWhereInput[]
    NOT?: WeekPlanWhereInput | WeekPlanWhereInput[]
    id?: StringFilter<"WeekPlan"> | string
    userId?: StringFilter<"WeekPlan"> | string
    startDate?: DateTimeFilter<"WeekPlan"> | Date | string
    endDate?: DateTimeFilter<"WeekPlan"> | Date | string
    createdAt?: DateTimeFilter<"WeekPlan"> | Date | string
    goals?: GoalListRelationFilter
    reflection?: XOR<ReflectionNullableScalarRelationFilter, ReflectionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeekPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
    reflection?: ReflectionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WeekPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeekPlanWhereInput | WeekPlanWhereInput[]
    OR?: WeekPlanWhereInput[]
    NOT?: WeekPlanWhereInput | WeekPlanWhereInput[]
    userId?: StringFilter<"WeekPlan"> | string
    startDate?: DateTimeFilter<"WeekPlan"> | Date | string
    endDate?: DateTimeFilter<"WeekPlan"> | Date | string
    createdAt?: DateTimeFilter<"WeekPlan"> | Date | string
    goals?: GoalListRelationFilter
    reflection?: XOR<ReflectionNullableScalarRelationFilter, ReflectionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WeekPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: WeekPlanCountOrderByAggregateInput
    _max?: WeekPlanMaxOrderByAggregateInput
    _min?: WeekPlanMinOrderByAggregateInput
  }

  export type WeekPlanScalarWhereWithAggregatesInput = {
    AND?: WeekPlanScalarWhereWithAggregatesInput | WeekPlanScalarWhereWithAggregatesInput[]
    OR?: WeekPlanScalarWhereWithAggregatesInput[]
    NOT?: WeekPlanScalarWhereWithAggregatesInput | WeekPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeekPlan"> | string
    userId?: StringWithAggregatesFilter<"WeekPlan"> | string
    startDate?: DateTimeWithAggregatesFilter<"WeekPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"WeekPlan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WeekPlan"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    weekPlanId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    skillId?: StringFilter<"Goal"> | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    notes?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    weekPlan?: XOR<WeekPlanScalarRelationFilter, WeekPlanWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    title?: SortOrder
    skillId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    skill?: SkillOrderByWithRelationInput
    weekPlan?: WeekPlanOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    weekPlanId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    skillId?: StringFilter<"Goal"> | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    notes?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    weekPlan?: XOR<WeekPlanScalarRelationFilter, WeekPlanWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    title?: SortOrder
    skillId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    weekPlanId?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    skillId?: StringWithAggregatesFilter<"Goal"> | string
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    notes?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type ReflectionWhereInput = {
    AND?: ReflectionWhereInput | ReflectionWhereInput[]
    OR?: ReflectionWhereInput[]
    NOT?: ReflectionWhereInput | ReflectionWhereInput[]
    id?: StringFilter<"Reflection"> | string
    weekPlanId?: StringFilter<"Reflection"> | string
    summary?: StringFilter<"Reflection"> | string
    challenges?: StringFilter<"Reflection"> | string
    wins?: StringFilter<"Reflection"> | string
    ideas?: StringFilter<"Reflection"> | string
    createdAt?: DateTimeFilter<"Reflection"> | Date | string
    weekPlan?: XOR<WeekPlanScalarRelationFilter, WeekPlanWhereInput>
  }

  export type ReflectionOrderByWithRelationInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    summary?: SortOrder
    challenges?: SortOrder
    wins?: SortOrder
    ideas?: SortOrder
    createdAt?: SortOrder
    weekPlan?: WeekPlanOrderByWithRelationInput
  }

  export type ReflectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    weekPlanId?: string
    AND?: ReflectionWhereInput | ReflectionWhereInput[]
    OR?: ReflectionWhereInput[]
    NOT?: ReflectionWhereInput | ReflectionWhereInput[]
    summary?: StringFilter<"Reflection"> | string
    challenges?: StringFilter<"Reflection"> | string
    wins?: StringFilter<"Reflection"> | string
    ideas?: StringFilter<"Reflection"> | string
    createdAt?: DateTimeFilter<"Reflection"> | Date | string
    weekPlan?: XOR<WeekPlanScalarRelationFilter, WeekPlanWhereInput>
  }, "id" | "weekPlanId">

  export type ReflectionOrderByWithAggregationInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    summary?: SortOrder
    challenges?: SortOrder
    wins?: SortOrder
    ideas?: SortOrder
    createdAt?: SortOrder
    _count?: ReflectionCountOrderByAggregateInput
    _max?: ReflectionMaxOrderByAggregateInput
    _min?: ReflectionMinOrderByAggregateInput
  }

  export type ReflectionScalarWhereWithAggregatesInput = {
    AND?: ReflectionScalarWhereWithAggregatesInput | ReflectionScalarWhereWithAggregatesInput[]
    OR?: ReflectionScalarWhereWithAggregatesInput[]
    NOT?: ReflectionScalarWhereWithAggregatesInput | ReflectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reflection"> | string
    weekPlanId?: StringWithAggregatesFilter<"Reflection"> | string
    summary?: StringWithAggregatesFilter<"Reflection"> | string
    challenges?: StringWithAggregatesFilter<"Reflection"> | string
    wins?: StringWithAggregatesFilter<"Reflection"> | string
    ideas?: StringWithAggregatesFilter<"Reflection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reflection"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    Skill?: SkillCreateNestedManyWithoutUserInput
    WeekPlan?: WeekPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    Skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    WeekPlan?: WeekPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Skill?: SkillUpdateManyWithoutUserNestedInput
    WeekPlan?: WeekPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    WeekPlan?: WeekPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryCreateInput = {
    id?: string
    name: string
    skills?: SkillCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUncheckedCreateInput = {
    id?: string
    name: string
    skills?: SkillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skills?: SkillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type SkillCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    Goal?: GoalCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    Goal?: GoalUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    Goal?: GoalUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    Goal?: GoalUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type WeekPlanCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    goals?: GoalCreateNestedManyWithoutWeekPlanInput
    reflection?: ReflectionCreateNestedOneWithoutWeekPlanInput
    user: UserCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanUncheckedCreateInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutWeekPlanInput
    reflection?: ReflectionUncheckedCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutWeekPlanNestedInput
    reflection?: ReflectionUpdateOneWithoutWeekPlanNestedInput
    user?: UserUpdateOneRequiredWithoutWeekPlanNestedInput
  }

  export type WeekPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutWeekPlanNestedInput
    reflection?: ReflectionUncheckedUpdateOneWithoutWeekPlanNestedInput
  }

  export type WeekPlanCreateManyInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type WeekPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutGoalInput
    weekPlan: WeekPlanCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    weekPlanId: string
    title: string
    skillId: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutGoalNestedInput
    weekPlan?: WeekPlanUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: string
    weekPlanId: string
    title: string
    skillId: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionCreateInput = {
    id?: string
    summary: string
    challenges: string
    wins: string
    ideas: string
    createdAt?: Date | string
    weekPlan: WeekPlanCreateNestedOneWithoutReflectionInput
  }

  export type ReflectionUncheckedCreateInput = {
    id?: string
    weekPlanId: string
    summary: string
    challenges: string
    wins: string
    ideas: string
    createdAt?: Date | string
  }

  export type ReflectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    wins?: StringFieldUpdateOperationsInput | string
    ideas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekPlan?: WeekPlanUpdateOneRequiredWithoutReflectionNestedInput
  }

  export type ReflectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekPlanId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    wins?: StringFieldUpdateOperationsInput | string
    ideas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionCreateManyInput = {
    id?: string
    weekPlanId: string
    summary: string
    challenges: string
    wins: string
    ideas: string
    createdAt?: Date | string
  }

  export type ReflectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    wins?: StringFieldUpdateOperationsInput | string
    ideas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekPlanId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    wins?: StringFieldUpdateOperationsInput | string
    ideas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type WeekPlanListRelationFilter = {
    every?: WeekPlanWhereInput
    some?: WeekPlanWhereInput
    none?: WeekPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeekPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
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

  export type SkillCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillCategoryScalarRelationFilter = {
    is?: SkillCategoryWhereInput
    isNot?: SkillCategoryWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type ReflectionNullableScalarRelationFilter = {
    is?: ReflectionWhereInput | null
    isNot?: ReflectionWhereInput | null
  }

  export type WeekPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type WeekPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type WeekPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type WeekPlanScalarRelationFilter = {
    is?: WeekPlanWhereInput
    isNot?: WeekPlanWhereInput
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    title?: SortOrder
    skillId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    title?: SortOrder
    skillId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    title?: SortOrder
    skillId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type ReflectionCountOrderByAggregateInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    summary?: SortOrder
    challenges?: SortOrder
    wins?: SortOrder
    ideas?: SortOrder
    createdAt?: SortOrder
  }

  export type ReflectionMaxOrderByAggregateInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    summary?: SortOrder
    challenges?: SortOrder
    wins?: SortOrder
    ideas?: SortOrder
    createdAt?: SortOrder
  }

  export type ReflectionMinOrderByAggregateInput = {
    id?: SortOrder
    weekPlanId?: SortOrder
    summary?: SortOrder
    challenges?: SortOrder
    wins?: SortOrder
    ideas?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type WeekPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<WeekPlanCreateWithoutUserInput, WeekPlanUncheckedCreateWithoutUserInput> | WeekPlanCreateWithoutUserInput[] | WeekPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeekPlanCreateOrConnectWithoutUserInput | WeekPlanCreateOrConnectWithoutUserInput[]
    createMany?: WeekPlanCreateManyUserInputEnvelope
    connect?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type WeekPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeekPlanCreateWithoutUserInput, WeekPlanUncheckedCreateWithoutUserInput> | WeekPlanCreateWithoutUserInput[] | WeekPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeekPlanCreateOrConnectWithoutUserInput | WeekPlanCreateOrConnectWithoutUserInput[]
    createMany?: WeekPlanCreateManyUserInputEnvelope
    connect?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
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

  export type SkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type WeekPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeekPlanCreateWithoutUserInput, WeekPlanUncheckedCreateWithoutUserInput> | WeekPlanCreateWithoutUserInput[] | WeekPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeekPlanCreateOrConnectWithoutUserInput | WeekPlanCreateOrConnectWithoutUserInput[]
    upsert?: WeekPlanUpsertWithWhereUniqueWithoutUserInput | WeekPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeekPlanCreateManyUserInputEnvelope
    set?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    disconnect?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    delete?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    connect?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    update?: WeekPlanUpdateWithWhereUniqueWithoutUserInput | WeekPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeekPlanUpdateManyWithWhereWithoutUserInput | WeekPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeekPlanScalarWhereInput | WeekPlanScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type WeekPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeekPlanCreateWithoutUserInput, WeekPlanUncheckedCreateWithoutUserInput> | WeekPlanCreateWithoutUserInput[] | WeekPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeekPlanCreateOrConnectWithoutUserInput | WeekPlanCreateOrConnectWithoutUserInput[]
    upsert?: WeekPlanUpsertWithWhereUniqueWithoutUserInput | WeekPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeekPlanCreateManyUserInputEnvelope
    set?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    disconnect?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    delete?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    connect?: WeekPlanWhereUniqueInput | WeekPlanWhereUniqueInput[]
    update?: WeekPlanUpdateWithWhereUniqueWithoutUserInput | WeekPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeekPlanUpdateManyWithWhereWithoutUserInput | WeekPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeekPlanScalarWhereInput | WeekPlanScalarWhereInput[]
  }

  export type SkillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCategoryInput | SkillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCategoryInput | SkillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCategoryInput | SkillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCategoryInput | SkillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCategoryInput | SkillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCategoryInput | SkillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillInput = {
    create?: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCategoryCreateNestedOneWithoutSkillsInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillsInput
    connect?: SkillCategoryWhereUniqueInput
  }

  export type GoalCreateNestedManyWithoutSkillInput = {
    create?: XOR<GoalCreateWithoutSkillInput, GoalUncheckedCreateWithoutSkillInput> | GoalCreateWithoutSkillInput[] | GoalUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutSkillInput | GoalCreateOrConnectWithoutSkillInput[]
    createMany?: GoalCreateManySkillInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<GoalCreateWithoutSkillInput, GoalUncheckedCreateWithoutSkillInput> | GoalCreateWithoutSkillInput[] | GoalUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutSkillInput | GoalCreateOrConnectWithoutSkillInput[]
    createMany?: GoalCreateManySkillInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type EnumSkillLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillLevel
  }

  export type UserUpdateOneRequiredWithoutSkillNestedInput = {
    create?: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillInput
    upsert?: UserUpsertWithoutSkillInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillInput, UserUpdateWithoutSkillInput>, UserUncheckedUpdateWithoutSkillInput>
  }

  export type SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillsInput
    upsert?: SkillCategoryUpsertWithoutSkillsInput
    connect?: SkillCategoryWhereUniqueInput
    update?: XOR<XOR<SkillCategoryUpdateToOneWithWhereWithoutSkillsInput, SkillCategoryUpdateWithoutSkillsInput>, SkillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type GoalUpdateManyWithoutSkillNestedInput = {
    create?: XOR<GoalCreateWithoutSkillInput, GoalUncheckedCreateWithoutSkillInput> | GoalCreateWithoutSkillInput[] | GoalUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutSkillInput | GoalCreateOrConnectWithoutSkillInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutSkillInput | GoalUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: GoalCreateManySkillInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutSkillInput | GoalUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutSkillInput | GoalUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<GoalCreateWithoutSkillInput, GoalUncheckedCreateWithoutSkillInput> | GoalCreateWithoutSkillInput[] | GoalUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutSkillInput | GoalCreateOrConnectWithoutSkillInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutSkillInput | GoalUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: GoalCreateManySkillInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutSkillInput | GoalUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutSkillInput | GoalUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type GoalCreateNestedManyWithoutWeekPlanInput = {
    create?: XOR<GoalCreateWithoutWeekPlanInput, GoalUncheckedCreateWithoutWeekPlanInput> | GoalCreateWithoutWeekPlanInput[] | GoalUncheckedCreateWithoutWeekPlanInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWeekPlanInput | GoalCreateOrConnectWithoutWeekPlanInput[]
    createMany?: GoalCreateManyWeekPlanInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type ReflectionCreateNestedOneWithoutWeekPlanInput = {
    create?: XOR<ReflectionCreateWithoutWeekPlanInput, ReflectionUncheckedCreateWithoutWeekPlanInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutWeekPlanInput
    connect?: ReflectionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWeekPlanInput = {
    create?: XOR<UserCreateWithoutWeekPlanInput, UserUncheckedCreateWithoutWeekPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeekPlanInput
    connect?: UserWhereUniqueInput
  }

  export type GoalUncheckedCreateNestedManyWithoutWeekPlanInput = {
    create?: XOR<GoalCreateWithoutWeekPlanInput, GoalUncheckedCreateWithoutWeekPlanInput> | GoalCreateWithoutWeekPlanInput[] | GoalUncheckedCreateWithoutWeekPlanInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWeekPlanInput | GoalCreateOrConnectWithoutWeekPlanInput[]
    createMany?: GoalCreateManyWeekPlanInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type ReflectionUncheckedCreateNestedOneWithoutWeekPlanInput = {
    create?: XOR<ReflectionCreateWithoutWeekPlanInput, ReflectionUncheckedCreateWithoutWeekPlanInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutWeekPlanInput
    connect?: ReflectionWhereUniqueInput
  }

  export type GoalUpdateManyWithoutWeekPlanNestedInput = {
    create?: XOR<GoalCreateWithoutWeekPlanInput, GoalUncheckedCreateWithoutWeekPlanInput> | GoalCreateWithoutWeekPlanInput[] | GoalUncheckedCreateWithoutWeekPlanInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWeekPlanInput | GoalCreateOrConnectWithoutWeekPlanInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutWeekPlanInput | GoalUpsertWithWhereUniqueWithoutWeekPlanInput[]
    createMany?: GoalCreateManyWeekPlanInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutWeekPlanInput | GoalUpdateWithWhereUniqueWithoutWeekPlanInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutWeekPlanInput | GoalUpdateManyWithWhereWithoutWeekPlanInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type ReflectionUpdateOneWithoutWeekPlanNestedInput = {
    create?: XOR<ReflectionCreateWithoutWeekPlanInput, ReflectionUncheckedCreateWithoutWeekPlanInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutWeekPlanInput
    upsert?: ReflectionUpsertWithoutWeekPlanInput
    disconnect?: ReflectionWhereInput | boolean
    delete?: ReflectionWhereInput | boolean
    connect?: ReflectionWhereUniqueInput
    update?: XOR<XOR<ReflectionUpdateToOneWithWhereWithoutWeekPlanInput, ReflectionUpdateWithoutWeekPlanInput>, ReflectionUncheckedUpdateWithoutWeekPlanInput>
  }

  export type UserUpdateOneRequiredWithoutWeekPlanNestedInput = {
    create?: XOR<UserCreateWithoutWeekPlanInput, UserUncheckedCreateWithoutWeekPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeekPlanInput
    upsert?: UserUpsertWithoutWeekPlanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeekPlanInput, UserUpdateWithoutWeekPlanInput>, UserUncheckedUpdateWithoutWeekPlanInput>
  }

  export type GoalUncheckedUpdateManyWithoutWeekPlanNestedInput = {
    create?: XOR<GoalCreateWithoutWeekPlanInput, GoalUncheckedCreateWithoutWeekPlanInput> | GoalCreateWithoutWeekPlanInput[] | GoalUncheckedCreateWithoutWeekPlanInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutWeekPlanInput | GoalCreateOrConnectWithoutWeekPlanInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutWeekPlanInput | GoalUpsertWithWhereUniqueWithoutWeekPlanInput[]
    createMany?: GoalCreateManyWeekPlanInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutWeekPlanInput | GoalUpdateWithWhereUniqueWithoutWeekPlanInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutWeekPlanInput | GoalUpdateManyWithWhereWithoutWeekPlanInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type ReflectionUncheckedUpdateOneWithoutWeekPlanNestedInput = {
    create?: XOR<ReflectionCreateWithoutWeekPlanInput, ReflectionUncheckedCreateWithoutWeekPlanInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutWeekPlanInput
    upsert?: ReflectionUpsertWithoutWeekPlanInput
    disconnect?: ReflectionWhereInput | boolean
    delete?: ReflectionWhereInput | boolean
    connect?: ReflectionWhereUniqueInput
    update?: XOR<XOR<ReflectionUpdateToOneWithWhereWithoutWeekPlanInput, ReflectionUpdateWithoutWeekPlanInput>, ReflectionUncheckedUpdateWithoutWeekPlanInput>
  }

  export type SkillCreateNestedOneWithoutGoalInput = {
    create?: XOR<SkillCreateWithoutGoalInput, SkillUncheckedCreateWithoutGoalInput>
    connectOrCreate?: SkillCreateOrConnectWithoutGoalInput
    connect?: SkillWhereUniqueInput
  }

  export type WeekPlanCreateNestedOneWithoutGoalsInput = {
    create?: XOR<WeekPlanCreateWithoutGoalsInput, WeekPlanUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: WeekPlanCreateOrConnectWithoutGoalsInput
    connect?: WeekPlanWhereUniqueInput
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type SkillUpdateOneRequiredWithoutGoalNestedInput = {
    create?: XOR<SkillCreateWithoutGoalInput, SkillUncheckedCreateWithoutGoalInput>
    connectOrCreate?: SkillCreateOrConnectWithoutGoalInput
    upsert?: SkillUpsertWithoutGoalInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutGoalInput, SkillUpdateWithoutGoalInput>, SkillUncheckedUpdateWithoutGoalInput>
  }

  export type WeekPlanUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<WeekPlanCreateWithoutGoalsInput, WeekPlanUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: WeekPlanCreateOrConnectWithoutGoalsInput
    upsert?: WeekPlanUpsertWithoutGoalsInput
    connect?: WeekPlanWhereUniqueInput
    update?: XOR<XOR<WeekPlanUpdateToOneWithWhereWithoutGoalsInput, WeekPlanUpdateWithoutGoalsInput>, WeekPlanUncheckedUpdateWithoutGoalsInput>
  }

  export type WeekPlanCreateNestedOneWithoutReflectionInput = {
    create?: XOR<WeekPlanCreateWithoutReflectionInput, WeekPlanUncheckedCreateWithoutReflectionInput>
    connectOrCreate?: WeekPlanCreateOrConnectWithoutReflectionInput
    connect?: WeekPlanWhereUniqueInput
  }

  export type WeekPlanUpdateOneRequiredWithoutReflectionNestedInput = {
    create?: XOR<WeekPlanCreateWithoutReflectionInput, WeekPlanUncheckedCreateWithoutReflectionInput>
    connectOrCreate?: WeekPlanCreateOrConnectWithoutReflectionInput
    upsert?: WeekPlanUpsertWithoutReflectionInput
    connect?: WeekPlanWhereUniqueInput
    update?: XOR<XOR<WeekPlanUpdateToOneWithWhereWithoutReflectionInput, WeekPlanUpdateWithoutReflectionInput>, WeekPlanUncheckedUpdateWithoutReflectionInput>
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

  export type NestedEnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type SkillCreateWithoutUserInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    Goal?: GoalCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    Goal?: GoalUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUserInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillCreateManyUserInputEnvelope = {
    data: SkillCreateManyUserInput | SkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeekPlanCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    goals?: GoalCreateNestedManyWithoutWeekPlanInput
    reflection?: ReflectionCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanUncheckedCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutWeekPlanInput
    reflection?: ReflectionUncheckedCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanCreateOrConnectWithoutUserInput = {
    where: WeekPlanWhereUniqueInput
    create: XOR<WeekPlanCreateWithoutUserInput, WeekPlanUncheckedCreateWithoutUserInput>
  }

  export type WeekPlanCreateManyUserInputEnvelope = {
    data: WeekPlanCreateManyUserInput | WeekPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
  }

  export type SkillUpdateManyWithWhereWithoutUserInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: EnumSkillLevelFilter<"Skill"> | $Enums.SkillLevel
    notes?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    userId?: StringFilter<"Skill"> | string
    categoryId?: StringFilter<"Skill"> | string
  }

  export type WeekPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: WeekPlanWhereUniqueInput
    update: XOR<WeekPlanUpdateWithoutUserInput, WeekPlanUncheckedUpdateWithoutUserInput>
    create: XOR<WeekPlanCreateWithoutUserInput, WeekPlanUncheckedCreateWithoutUserInput>
  }

  export type WeekPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: WeekPlanWhereUniqueInput
    data: XOR<WeekPlanUpdateWithoutUserInput, WeekPlanUncheckedUpdateWithoutUserInput>
  }

  export type WeekPlanUpdateManyWithWhereWithoutUserInput = {
    where: WeekPlanScalarWhereInput
    data: XOR<WeekPlanUpdateManyMutationInput, WeekPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type WeekPlanScalarWhereInput = {
    AND?: WeekPlanScalarWhereInput | WeekPlanScalarWhereInput[]
    OR?: WeekPlanScalarWhereInput[]
    NOT?: WeekPlanScalarWhereInput | WeekPlanScalarWhereInput[]
    id?: StringFilter<"WeekPlan"> | string
    userId?: StringFilter<"WeekPlan"> | string
    startDate?: DateTimeFilter<"WeekPlan"> | Date | string
    endDate?: DateTimeFilter<"WeekPlan"> | Date | string
    createdAt?: DateTimeFilter<"WeekPlan"> | Date | string
  }

  export type SkillCreateWithoutCategoryInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillInput
    Goal?: GoalCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    Goal?: GoalUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput>
  }

  export type SkillCreateManyCategoryInputEnvelope = {
    data: SkillCreateManyCategoryInput | SkillCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutCategoryInput, SkillUncheckedUpdateWithoutCategoryInput>
    create: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutCategoryInput, SkillUncheckedUpdateWithoutCategoryInput>
  }

  export type SkillUpdateManyWithWhereWithoutCategoryInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutSkillInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    WeekPlan?: WeekPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    WeekPlan?: WeekPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
  }

  export type SkillCategoryCreateWithoutSkillsInput = {
    id?: string
    name: string
  }

  export type SkillCategoryUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
  }

  export type SkillCategoryCreateOrConnectWithoutSkillsInput = {
    where: SkillCategoryWhereUniqueInput
    create: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
  }

  export type GoalCreateWithoutSkillInput = {
    id?: string
    title: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
    weekPlan: WeekPlanCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutSkillInput = {
    id?: string
    weekPlanId: string
    title: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutSkillInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutSkillInput, GoalUncheckedCreateWithoutSkillInput>
  }

  export type GoalCreateManySkillInputEnvelope = {
    data: GoalCreateManySkillInput | GoalCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSkillInput = {
    update: XOR<UserUpdateWithoutSkillInput, UserUncheckedUpdateWithoutSkillInput>
    create: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillInput, UserUncheckedUpdateWithoutSkillInput>
  }

  export type UserUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WeekPlan?: WeekPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WeekPlan?: WeekPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillCategoryUpsertWithoutSkillsInput = {
    update: XOR<SkillCategoryUpdateWithoutSkillsInput, SkillCategoryUncheckedUpdateWithoutSkillsInput>
    create: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    where?: SkillCategoryWhereInput
  }

  export type SkillCategoryUpdateToOneWithWhereWithoutSkillsInput = {
    where?: SkillCategoryWhereInput
    data: XOR<SkillCategoryUpdateWithoutSkillsInput, SkillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillCategoryUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCategoryUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GoalUpsertWithWhereUniqueWithoutSkillInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutSkillInput, GoalUncheckedUpdateWithoutSkillInput>
    create: XOR<GoalCreateWithoutSkillInput, GoalUncheckedCreateWithoutSkillInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutSkillInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutSkillInput, GoalUncheckedUpdateWithoutSkillInput>
  }

  export type GoalUpdateManyWithWhereWithoutSkillInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutSkillInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    weekPlanId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    skillId?: StringFilter<"Goal"> | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    notes?: StringNullableFilter<"Goal"> | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type GoalCreateWithoutWeekPlanInput = {
    id?: string
    title: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutWeekPlanInput = {
    id?: string
    title: string
    skillId: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutWeekPlanInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutWeekPlanInput, GoalUncheckedCreateWithoutWeekPlanInput>
  }

  export type GoalCreateManyWeekPlanInputEnvelope = {
    data: GoalCreateManyWeekPlanInput | GoalCreateManyWeekPlanInput[]
    skipDuplicates?: boolean
  }

  export type ReflectionCreateWithoutWeekPlanInput = {
    id?: string
    summary: string
    challenges: string
    wins: string
    ideas: string
    createdAt?: Date | string
  }

  export type ReflectionUncheckedCreateWithoutWeekPlanInput = {
    id?: string
    summary: string
    challenges: string
    wins: string
    ideas: string
    createdAt?: Date | string
  }

  export type ReflectionCreateOrConnectWithoutWeekPlanInput = {
    where: ReflectionWhereUniqueInput
    create: XOR<ReflectionCreateWithoutWeekPlanInput, ReflectionUncheckedCreateWithoutWeekPlanInput>
  }

  export type UserCreateWithoutWeekPlanInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    Skill?: SkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeekPlanInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    Skill?: SkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeekPlanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeekPlanInput, UserUncheckedCreateWithoutWeekPlanInput>
  }

  export type GoalUpsertWithWhereUniqueWithoutWeekPlanInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutWeekPlanInput, GoalUncheckedUpdateWithoutWeekPlanInput>
    create: XOR<GoalCreateWithoutWeekPlanInput, GoalUncheckedCreateWithoutWeekPlanInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutWeekPlanInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutWeekPlanInput, GoalUncheckedUpdateWithoutWeekPlanInput>
  }

  export type GoalUpdateManyWithWhereWithoutWeekPlanInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutWeekPlanInput>
  }

  export type ReflectionUpsertWithoutWeekPlanInput = {
    update: XOR<ReflectionUpdateWithoutWeekPlanInput, ReflectionUncheckedUpdateWithoutWeekPlanInput>
    create: XOR<ReflectionCreateWithoutWeekPlanInput, ReflectionUncheckedCreateWithoutWeekPlanInput>
    where?: ReflectionWhereInput
  }

  export type ReflectionUpdateToOneWithWhereWithoutWeekPlanInput = {
    where?: ReflectionWhereInput
    data: XOR<ReflectionUpdateWithoutWeekPlanInput, ReflectionUncheckedUpdateWithoutWeekPlanInput>
  }

  export type ReflectionUpdateWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    wins?: StringFieldUpdateOperationsInput | string
    ideas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUncheckedUpdateWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    wins?: StringFieldUpdateOperationsInput | string
    ideas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutWeekPlanInput = {
    update: XOR<UserUpdateWithoutWeekPlanInput, UserUncheckedUpdateWithoutWeekPlanInput>
    create: XOR<UserCreateWithoutWeekPlanInput, UserUncheckedCreateWithoutWeekPlanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeekPlanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeekPlanInput, UserUncheckedUpdateWithoutWeekPlanInput>
  }

  export type UserUpdateWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Skill?: SkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillCreateWithoutGoalInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutGoalInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type SkillCreateOrConnectWithoutGoalInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutGoalInput, SkillUncheckedCreateWithoutGoalInput>
  }

  export type WeekPlanCreateWithoutGoalsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    reflection?: ReflectionCreateNestedOneWithoutWeekPlanInput
    user: UserCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanUncheckedCreateWithoutGoalsInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    reflection?: ReflectionUncheckedCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanCreateOrConnectWithoutGoalsInput = {
    where: WeekPlanWhereUniqueInput
    create: XOR<WeekPlanCreateWithoutGoalsInput, WeekPlanUncheckedCreateWithoutGoalsInput>
  }

  export type SkillUpsertWithoutGoalInput = {
    update: XOR<SkillUpdateWithoutGoalInput, SkillUncheckedUpdateWithoutGoalInput>
    create: XOR<SkillCreateWithoutGoalInput, SkillUncheckedCreateWithoutGoalInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutGoalInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutGoalInput, SkillUncheckedUpdateWithoutGoalInput>
  }

  export type SkillUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type WeekPlanUpsertWithoutGoalsInput = {
    update: XOR<WeekPlanUpdateWithoutGoalsInput, WeekPlanUncheckedUpdateWithoutGoalsInput>
    create: XOR<WeekPlanCreateWithoutGoalsInput, WeekPlanUncheckedCreateWithoutGoalsInput>
    where?: WeekPlanWhereInput
  }

  export type WeekPlanUpdateToOneWithWhereWithoutGoalsInput = {
    where?: WeekPlanWhereInput
    data: XOR<WeekPlanUpdateWithoutGoalsInput, WeekPlanUncheckedUpdateWithoutGoalsInput>
  }

  export type WeekPlanUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflection?: ReflectionUpdateOneWithoutWeekPlanNestedInput
    user?: UserUpdateOneRequiredWithoutWeekPlanNestedInput
  }

  export type WeekPlanUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflection?: ReflectionUncheckedUpdateOneWithoutWeekPlanNestedInput
  }

  export type WeekPlanCreateWithoutReflectionInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    goals?: GoalCreateNestedManyWithoutWeekPlanInput
    user: UserCreateNestedOneWithoutWeekPlanInput
  }

  export type WeekPlanUncheckedCreateWithoutReflectionInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutWeekPlanInput
  }

  export type WeekPlanCreateOrConnectWithoutReflectionInput = {
    where: WeekPlanWhereUniqueInput
    create: XOR<WeekPlanCreateWithoutReflectionInput, WeekPlanUncheckedCreateWithoutReflectionInput>
  }

  export type WeekPlanUpsertWithoutReflectionInput = {
    update: XOR<WeekPlanUpdateWithoutReflectionInput, WeekPlanUncheckedUpdateWithoutReflectionInput>
    create: XOR<WeekPlanCreateWithoutReflectionInput, WeekPlanUncheckedCreateWithoutReflectionInput>
    where?: WeekPlanWhereInput
  }

  export type WeekPlanUpdateToOneWithWhereWithoutReflectionInput = {
    where?: WeekPlanWhereInput
    data: XOR<WeekPlanUpdateWithoutReflectionInput, WeekPlanUncheckedUpdateWithoutReflectionInput>
  }

  export type WeekPlanUpdateWithoutReflectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutWeekPlanNestedInput
    user?: UserUpdateOneRequiredWithoutWeekPlanNestedInput
  }

  export type WeekPlanUncheckedUpdateWithoutReflectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutWeekPlanNestedInput
  }

  export type SkillCreateManyUserInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type WeekPlanCreateManyUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type SkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    Goal?: GoalUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    Goal?: GoalUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type WeekPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutWeekPlanNestedInput
    reflection?: ReflectionUpdateOneWithoutWeekPlanNestedInput
  }

  export type WeekPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutWeekPlanNestedInput
    reflection?: ReflectionUncheckedUpdateOneWithoutWeekPlanNestedInput
  }

  export type WeekPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyCategoryInput = {
    id?: string
    name: string
    level: $Enums.SkillLevel
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SkillUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillNestedInput
    Goal?: GoalUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    Goal?: GoalUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GoalCreateManySkillInput = {
    id?: string
    weekPlanId: string
    title: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type GoalUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekPlan?: WeekPlanUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekPlanId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyWeekPlanInput = {
    id?: string
    title: string
    skillId: string
    status?: $Enums.GoalStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type GoalUpdateWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutWeekPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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