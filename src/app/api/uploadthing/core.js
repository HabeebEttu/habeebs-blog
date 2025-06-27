// app/api/uploadthing/core.js
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  coverImageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    ({ file }) => {
      console.log("Upload complete:", file.url);
      return { url: file.url };
    }
  ),
};
