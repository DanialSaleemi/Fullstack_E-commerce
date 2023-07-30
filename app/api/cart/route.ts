import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { ne } from "drizzle-orm";



// export const currentUser = async (request: NextRequest) => {
//   const userID = request.cookies.get("user_id");
//   console.log(userID);
//   fetch(`${process.env.BASE_PATH}/api/cart?user_id=${userID}`, {
//     method: "GET",
//   });
// };

// export const userID = cookies().get("user_id")?.value as string;

export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  if (!uid) {
    console.log("No items added to cart");
  }
  try {
    // const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid));
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Something went wrong in fetching GET method",
    });
  }
};


console.log("VerceL ENV: " +  process.env.VERCEL_URL, "PostgresURL_ENV: " + process.env.POSTGRES_URL);
export const getCartData = await db.select().from(cartTable);


export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const uid = uuid();
  const setCookies = cookies();
  const user_id = cookies().get("user_id")?.value;

  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        product_name: req.product_name,
        price: req.price,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    console.log(res);
    return NextResponse.json({ res, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, success: false });
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  console.log("uid is", uid);
  if (uid != undefined) {
    try {
      const deletedrecords: { deletedId: string }[] = await db // :
        .delete(cartTable)
        .where(ne(cartTable.user_id, uid))
        .returning({ deletedId: cartTable.product_name });
      console.log(deletedrecords);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error, success: false });
    }
  }
};

export const deleteOldRecords = async () => {
  const uid = cookies().get("user_id")?.value;
  console.log("UID from deleteOldRecords", uid);
  if (uid) {
    const deletedrecords: { deletedId: string }[] =   await db 
    .delete(cartTable)
    .where(ne(cartTable.user_id, uid))
    .returning({ deletedId: cartTable.product_name });
    console.log(deletedrecords);
  }
}
