import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RichTextEditor from "./RichTextEditor/RichTextEditor";
import { useRef, useState } from "react";
import { $getRoot } from "lexical";

async function uploadFileToPinata(file: any) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PINATA_TOKEN}`,
    },
    body: formData,
  });

  const result = await response.json();
  return result;
}

async function sendJSONToPinata(data: any) {
  const response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PINATA_TOKEN}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
}

export default function EditBlogComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    reset,
  } = useForm();

  const editorRef: any = useRef();

  if (editorRef.current !== undefined) {
    if (editorRef.current !== null) {
      const latestEditorState = editorRef.current.getEditorState();
      const textContent = latestEditorState.read(() =>
        $getRoot().getAllTextNodes()
      );
      
      console.log(textContent);
    }
  }
  const [hash, setHash] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      // Subir imagen a Pinata y obtener hash IPFS
      const imageFile = data.image[0];
      const imageResponse = await uploadFileToPinata(imageFile);
      const imageUrl = `https://gateway.pinata.cloud/ipfs/${imageResponse.IpfsHash}`;

      // Obtener contenido del editor de texto enriquecido
      const latestEditorState = editorRef.current.getEditorState();
      const content = latestEditorState.read(() => $getRoot().getTextContent());

      if (!content) {
        setError("content", { type: "required", message: "Blog content is required" });
        return;
      }

      // Crear objeto JSON con datos del formulario y URL de la imagen
      const blogData = {
        title: data.title,
        image: imageUrl,
        contentType: data.contentType || "comfortable",
        contentUrl: data.contentType === "default" ? data.contentUrl : "",
        content,
        briefs: [
          {
            title: data.brief1Title,
            content: data.brief1Content,
          },
        ],
      };

      // Enviar datos JSON a Pinata y obtener el hash
      const pinataResponse = await sendJSONToPinata(blogData);
      setHash(pinataResponse.IpfsHash); // Guardar el hash en el estado
      reset(); // Limpiar el formulario
      editorRef.current.clearEditor(); // Limpiar el contenido del editor de texto
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  const contentType = watch("contentType");

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => reset()}>Cancel</Button>
            <Button type="submit">Save</Button>
            <Button type="button" onClick={() => reset()}>Publish</Button>
          </div>

          <div className="mb-6">
            <Label htmlFor="title" className="mb-2">
              Blog Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter your blog title"
              className="w-full"
              {...register("title", { required: true, maxLength: 100 })}
            />
            {errors.title && (
              <span className="text-red-500">
                {errors.title.type === "required"
                  ? "Title is required"
                  : "Title must be less than 100 characters"}
              </span>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="image" className="mb-2">
              Blog Image
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              className="w-full"
              {...register("image", { required: true })}
            />
            {errors.image && <span className="text-red-500">Image is required</span>}
          </div>

          <div className="mb-6">
            <Label htmlFor="contentType" className="mb-2">
              Content Type
            </Label>
            <RadioGroup
              {...register("contentType", { required: false })}
              defaultValue="comfortable"
              onValueChange={(value: any) => setValue("contentType", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" disabled={true} />
                <Label htmlFor="r1" className="text-gray-400">External Content</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" defaultChecked={true} />
                <Label htmlFor="r2">Own Content (Allow Donation)</Label>
              </div>
            </RadioGroup>
            {errors.contentType && (
              <span className="text-red-500">Content type is required</span>
            )}
          </div>

          {contentType === "default" && (
            <div className="mb-6">
              <Label htmlFor="contentUrl" className="mb-2">
                Content URL
              </Label>
              <Input
                id="contentUrl"
                type="text"
                placeholder="Enter your content url"
                className="w-full"
                {...register("contentUrl", {
                  required: true,
                  pattern: {
                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: "Please enter a valid URL",
                  },
                })}
              />
              {errors.contentUrl && (
                <span className="text-red-500">Content url is required</span>
              )}
            </div>
          )}

          <div className="mb-6">
            <Label htmlFor="content" className="mb-2">
              Blog Content
            </Label>
            <RichTextEditor ref={editorRef} />
            {errors.content && (
                <span className="text-red-500">Blog content is required</span>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Resume Briefs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="brief1Title" className="mb-2">
                  Brief 1 Title
                </Label>
                <Input
                  id="brief1Title"
                  type="text"
                  placeholder="Enter brief 1 title"
                  className="w-full mb-2"
                  {...register("brief1Title", { required: true })}
                />
                {errors.brief1Title && (
                  <span className="text-red-500">Brief 1 title is required</span>
                )}
                <Label htmlFor="brief1Content" className="mb-2">
                  Brief 1 Content
                </Label>
                <Textarea
                  id="brief1Content"
                  placeholder="Write brief 1 content here..."
                  rows={4}
                  maxLength={200}
                  className="w-full"
                  {...register("brief1Content", { required: true })}
                />
                {errors.brief1Content && (
                  <span className="text-red-500">Brief 1 content is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => reset()}>Cancel</Button>
            <Button type="submit">Save</Button>
            <Button type="button" onClick={() => reset()}>Publish</Button>
          </div>

          {hash && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700">
              Hash generated successfully: {hash}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
