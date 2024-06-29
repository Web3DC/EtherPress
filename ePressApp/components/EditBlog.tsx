
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function EditBlogComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
          <Button>Publish</Button>
        </div>

        <div className="mb-6">
          <Label htmlFor="title" className="mb-2">
            Blog Title
          </Label>
          <Input id="title" type="text" placeholder="Enter your blog title" className="w-full" />
        </div>
        <div className="mb-6">
          <Label htmlFor="image" className="mb-2">
            Blog Image
          </Label>
          <Input id="image" type="file" accept="image/*" className="w-full" />
        </div>
        <div className="mb-6">
          <Label htmlFor="image" className="mb-2">
            Content Type
          </Label>
          <RadioGroup defaultValue="comfortable w-full">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">External Content</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Own Content(Allow Donation)</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-6">
          <Label htmlFor="title" className="mb-2">
            Content URL
          </Label>
          <Input id="contentUrl" type="text" placeholder="Enter your content url" className="w-full" />
        </div>
        <div className="mb-6">
          <Label htmlFor="content" className="mb-2">
            Blog Content
          </Label>
          <Textarea
            id="content"
            placeholder="Write your blog content here..."
            rows={10}
            maxLength={2000}
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Resume Briefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="brief1Title" className="mb-2">
                Brief 1 Title
              </Label>
              <Input id="brief1Title" type="text" placeholder="Enter brief 1 title" className="w-full mb-2" />
              <Label htmlFor="brief1Content" className="mb-2">
                Brief 1 Content
              </Label>
              <Textarea
                id="brief1Content"
                placeholder="Write brief 1 content here..."
                rows={4}
                maxLength={200}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="brief2Title" className="mb-2">
                Brief 2 Title
              </Label>
              <Input id="brief2Title" type="text" placeholder="Enter brief 2 title" className="w-full mb-2" />
              <Label htmlFor="brief2Content" className="mb-2">
                Brief 2 Content
              </Label>
              <Textarea
                id="brief2Content"
                placeholder="Write brief 2 content here..."
                rows={4}
                maxLength={200}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="brief3Title" className="mb-2">
                Brief 3 Title
              </Label>
              <Input id="brief3Title" type="text" placeholder="Enter brief 3 title" className="w-full mb-2" />
              <Label htmlFor="brief3Content" className="mb-2">
                Brief 3 Content
              </Label>
              <Textarea
                id="brief3Content"
                placeholder="Write brief 3 content here..."
                rows={4}
                maxLength={200}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
          <Button>Publish</Button>
        </div>
      </div>
    </div>
  )
}