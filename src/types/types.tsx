import { Blog, User } from "@prisma/client";

export type SafeBlog = Omit<Blog, "createdAt"> & {
  createdAt: string;
};

// export type SafeReservation = Omit<
//   "createdAt" | "startDate" | "endDate" | "listing"
// > & {
//   createdAt: string;
//   startDate: string;
//   endDate: string;
//   listing: SafeListing;
// };

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};