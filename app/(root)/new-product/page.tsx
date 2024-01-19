import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { AddProductForm } from "@/components/add-product/add-product";

export default function NewProduct() {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <main className="flex flex-col justify-center items-center sm:pt-10 md:pt-12 pt-16 border-t-2 mt-6">
      <h1 className="font-bold text-lg">Add New Product</h1>
      <AddProductForm />
    </main>
  );
}
