"use client";
import { UploadButton } from "@uploadthing/react";

export default function UploadBtn({ onUploadComplete }) {
  return (
    <UploadButton
      endpoint="coverImageUploader"
      onClientUploadComplete={(res) => {
        onUploadComplete(res);
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}