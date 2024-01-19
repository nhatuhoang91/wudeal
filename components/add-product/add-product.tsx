"use client";
import React, { useRef, useState, createContext } from "react";
import { useForm } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryList } from "@/config/categories";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";
import { TagInput } from "./tag-input";
import { ImageUploader } from "./image-uploader";

export const TagContext = createContext("");

const formSchema = z.object({
  productName: z.string({ required_error: "Required." }).min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Required.",
  }),
  description: z
    .string({ required_error: "Required." })
    .min(10, {
      message: "Description must be at least 10 character.",
    })
    .max(2000, {
      message: "Description must not be longer than 2000 characters.",
    }),
  originalPrice: z.string().transform((val, ctx) => {
    const parsed = parseInt(val);
    if (isNaN(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not a number",
      });
      return z.NEVER;
    }
    return parsed;
  }),
  discountedPrice: z.string().transform((val, ctx) => {
    const parsed = parseInt(val);
    if (isNaN(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not a number",
      });
      return z.NEVER;
    }
    return parsed;
  }),
  link: z.string({ required_error: "Required." }),
  store: z.string({ required_error: "Required." }),
  tags: z.string({ required_error: "Required." }),
});

export const AddProductForm = () => {
  const [category, setCategory] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <TagContext.Provider value={category}>
      <div className="flex flex-col md:flex-row justify-center w-[90%] md:w-[85%] lg:w-[85%] mt-8">
        <ImageUploader className="md:flex-grow-[1] flex flex-col items-center justify-start " />
        <div className="md:flex-grow-[4]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center "
            >
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem className="w-[90%] md:w-[85%] lg:w-[50%]">
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Product Name" {...field} />
                    </FormControl>
                    <FormDescription>The product display name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-[90%] md:w-[85%] lg:w-[50%] mt-10">
                    <FormLabel>Category</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "flex justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <span>
                              {field.value
                                ? categoryList.find(
                                    (cat) => cat === field.value
                                  )
                                : "Select category"}
                            </span>

                            <ChevronsUpDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Command>
                          <CommandInput placeholder="Search category..." />
                          <CommandEmpty>No category found</CommandEmpty>
                          <CommandGroup>
                            {categoryList.map((cat) => (
                              <CommandItem
                                value={cat}
                                key={cat}
                                onSelect={() => {
                                  form.setValue("category", cat);
                                  setCategory(cat);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    cat === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {cat}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      This is the category of the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col md:flex-row justify-between w-[90%] md:w-[85%] lg:w-[50%] mt-10">
                <FormField
                  control={form.control}
                  name="originalPrice"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Original Price ($)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter original price"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The product original price
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="discountedPrice"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Discounted Price ($)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter discounted price"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The product discounted price
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem className="w-[90%] md:w-[85%] lg:w-[50%] mt-10">
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="Enter Product Website Link"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>The product website link</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="store"
                render={({ field }) => (
                  <FormItem className="w-[90%] md:w-[85%] lg:w-[50%] mt-10">
                    <FormLabel>Store</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Store" {...field} />
                    </FormControl>
                    <FormDescription>
                      The store sell the product
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-[90%] md:w-[85%] lg:w-[50%] pt-10">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter product description"
                        className="resize-none min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The product desciption must be detailed and concise.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <TagInput className="flex flex-col  w-[90%] md:w-[85%] lg:w-[50%] mt-10">
                <FormLabel>Tag</FormLabel>
              </TagInput>
              <Button type="submit" className="mt-10">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </TagContext.Provider>
  );
};
