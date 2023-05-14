import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerDurationPrice = {
  readonly one_month?: number | null;
  readonly three_month?: number | null;
  readonly one_year?: number | null;
}

type LazyDurationPrice = {
  readonly one_month?: number | null;
  readonly three_month?: number | null;
  readonly one_year?: number | null;
}

export declare type DurationPrice = LazyLoading extends LazyLoadingDisabled ? EagerDurationPrice : LazyDurationPrice

export declare const DurationPrice: (new (init: ModelInit<DurationPrice>) => DurationPrice)

type EagerOrderRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly products?: (ProductOrderRoom | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly products: AsyncCollection<ProductOrderRoom>;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderRoom = LazyLoading extends LazyLoadingDisabled ? EagerOrderRoom : LazyOrderRoom

export declare const OrderRoom: (new (init: ModelInit<OrderRoom>) => OrderRoom) & {
  copyOf(source: OrderRoom, mutator: (draft: MutableModel<OrderRoom>) => MutableModel<OrderRoom> | void): OrderRoom;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly type?: string | null;
  readonly price?: DurationPrice | null;
  readonly buycount?: number | null;
  readonly cartCount?: number | null;
  readonly CartRooms?: (ProductCartRoom | null)[] | null;
  readonly OrderRooms?: (ProductOrderRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly type?: string | null;
  readonly price?: DurationPrice | null;
  readonly buycount?: number | null;
  readonly cartCount?: number | null;
  readonly CartRooms: AsyncCollection<ProductCartRoom>;
  readonly OrderRooms: AsyncCollection<ProductOrderRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCartRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: string | null;
  readonly products?: (ProductCartRoom | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly number?: string | null;
  readonly products: AsyncCollection<ProductCartRoom>;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartRoom = LazyLoading extends LazyLoadingDisabled ? EagerCartRoom : LazyCartRoom

export declare const CartRoom: (new (init: ModelInit<CartRoom>) => CartRoom) & {
  copyOf(source: CartRoom, mutator: (draft: MutableModel<CartRoom>) => MutableModel<CartRoom> | void): CartRoom;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mail?: string | null;
  readonly passe?: string | null;
  readonly profil?: string | null;
  readonly endDateAccount?: string | null;
  readonly endDateProfil?: string | null;
  readonly pin?: string | null;
  readonly free?: boolean | null;
  readonly service?: string | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountUserId?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mail?: string | null;
  readonly passe?: string | null;
  readonly profil?: string | null;
  readonly endDateAccount?: string | null;
  readonly endDateProfil?: string | null;
  readonly pin?: string | null;
  readonly free?: boolean | null;
  readonly service?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountUserId?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FamilyName?: string | null;
  readonly LastName?: string | null;
  readonly city?: string | null;
  readonly mail?: string | null;
  readonly birthdate?: string | null;
  readonly staff?: boolean | null;
  readonly CartRooms?: (CartRoom | null)[] | null;
  readonly OrderRooms?: (OrderRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FamilyName?: string | null;
  readonly LastName?: string | null;
  readonly city?: string | null;
  readonly mail?: string | null;
  readonly birthdate?: string | null;
  readonly staff?: boolean | null;
  readonly CartRooms: AsyncCollection<CartRoom>;
  readonly OrderRooms: AsyncCollection<OrderRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProductOrderRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOrderRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderRoomId?: string | null;
  readonly productId?: string | null;
  readonly orderRoom: OrderRoom;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductOrderRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOrderRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderRoomId?: string | null;
  readonly productId?: string | null;
  readonly orderRoom: AsyncItem<OrderRoom>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductOrderRoom = LazyLoading extends LazyLoadingDisabled ? EagerProductOrderRoom : LazyProductOrderRoom

export declare const ProductOrderRoom: (new (init: ModelInit<ProductOrderRoom>) => ProductOrderRoom) & {
  copyOf(source: ProductOrderRoom, mutator: (draft: MutableModel<ProductOrderRoom>) => MutableModel<ProductOrderRoom> | void): ProductOrderRoom;
}

type EagerProductCartRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCartRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly cartRoomId?: string | null;
  readonly product: Product;
  readonly cartRoom: CartRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductCartRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCartRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly cartRoomId?: string | null;
  readonly product: AsyncItem<Product>;
  readonly cartRoom: AsyncItem<CartRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductCartRoom = LazyLoading extends LazyLoadingDisabled ? EagerProductCartRoom : LazyProductCartRoom

export declare const ProductCartRoom: (new (init: ModelInit<ProductCartRoom>) => ProductCartRoom) & {
  copyOf(source: ProductCartRoom, mutator: (draft: MutableModel<ProductCartRoom>) => MutableModel<ProductCartRoom> | void): ProductCartRoom;
}