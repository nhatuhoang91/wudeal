"use client";
import Image from "next/image";
import { useState, ChangeEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { AlertDialog } from "../commons/alert-dialog";

export const ImageUploader = ({ className }: { className: string }) => {
  const [preview, setPreview] = useState("/200x200svg.svg");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const inputFileRef = useRef(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files!);
    if (event.target.files?.length != 0) {
      if (event.target.files![0].size < 500000) {
        const imgUrl = URL.createObjectURL(event.target.files![0]);
        setPreview(imgUrl);
        setFile(event.target.files![0]);
      } else {
        setAlertMessage("The image size must be less than 1Mb.");
        setAlertOpen(true);
      }
    }
  };
  const onImageClear = () => {
    if (!file) {
      console.log("file is not ready");
      return;
    }
    setPreview("/200x200svg.svg");
    setFile(null);
    //console.log(inputFileRef);
    if (inputFileRef.current) {
      (inputFileRef.current as HTMLInputElement).value = "";
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.log("file is not ready");
      return;
    }

    setUploading(true);
    console.log("file name: " + file.name);
    console.log("file type: " + file.type);
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename: file.name, contentType: file.type }),
    });

    if (response.ok) {
      const res = await response.json();
      const { url, fields } = res;
      console.log("response: " + JSON.stringify(res));
      //console.log("url: " + url);
      //console.log("fields: " + fields);
      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append("file", file);
      const uploadResponse = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const uploadResJson = await uploadResponse.json();
      console.log("upload response json: " + JSON.stringify(uploadResJson));
      if (uploadResponse.ok) {
        setAlertMessage("Uploaded Successful.");
        setAlertOpen(true);
        //const res = await uploadResponse.json();
        //console.log("res: " + JSON.stringify(res));
      } else {
        setAlertMessage("Uploaded Failed.");
        setAlertOpen(true);
      }
    } else {
      setAlertMessage("Failed to get pre-signed URL");
    }
    setUploading(false);
  };
  const onImageDelete = () => {};
  return (
    <div className={cn(className, "relative")}>
      <AlertDialog isOpen={isAlertOpen}>
        <div className="flex flex-col justify-center items-center w-[90%] md:w-[50%] lg:w-[40%] bg-background pt-10 pb-10 border-2">
          <span className="text-lg font-bold mb-10">{alertMessage}</span>
          <Button
            className="w-[20%] text-lg"
            variant="secondary"
            onClick={() => {
              setAlertOpen(false);
              setAlertMessage("");
            }}
          >
            Ok
          </Button>
        </div>
      </AlertDialog>
      <Image
        className="border-black border-2"
        src={preview}
        width={200}
        height={200}
        alt="Image Preview"
        style={{ objectFit: "contain" }}
      ></Image>
      <form className="mt-5 w-[400px]" onSubmit={handleSubmit}>
        <Input
          ref={inputFileRef}
          className="mt-5 w-[400px]"
          type="file"
          onChange={onChange}
          accept="image/png, image/jpeg"
        />
        <Button
          className="mt-5 w-[400px]"
          variant={"outline"}
          type="submit"
          disabled={uploading}
        >
          Upload
        </Button>
      </form>
      <Button
        className="mt-5 w-[400px]"
        variant={"outline"}
        disabled={uploading}
        onClick={onImageClear}
      >
        Clear
      </Button>
    </div>
  );
};
