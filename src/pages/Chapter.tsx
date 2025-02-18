import { useParams } from "react-router"
import { useState } from "react"
import { courseData } from "./Courses"
import type { IChapter, ISection } from "@/types/course.type"
import "@/App.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const courseDetails: ISection[] = [
  {
    name: "Course Overview",
    chapter: [
      {
        id: 1,
        chapter: "Chapter 1",
        chapterTitle: "Introduction of React js",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
      {
        id: 2,
        chapter: "Chapter 2",
        chapterTitle: "Introduction of React Hooks",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
      {
        id: 3,
        chapter: "Chapter 3",
        chapterTitle: "Difference Between Functional Component & Class Component in React",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
    ],
  },
  {
    name: "Course Overview",
    chapter: [
      {
        id: 1,
        chapter: "Chapter 1",
        chapterTitle: "Introduction of React js",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
      {
        id: 2,
        chapter: "Chapter 2",
        chapterTitle: "Introduction of React Hooks",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
      {
        id: 3,
        chapter: "Chapter 3",
        chapterTitle: "Difference Between Functional Component & Class Component in React",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
      {
        id: 4,
        chapter: "Chapter 4",
        chapterTitle: "Difference Between Functional Component & Class Component in React",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      },
    ],
  },
]

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }),
})

function Course() {
  const params = useParams()
  const [selectedChapter, setSelectedChapter] = useState<IChapter | null>(null)
  const [openSections, setOpenSections] = useState<string[]>(["section-0"])

  const data = courseData.find((course) => course.id === params.id)

  const handleChapterClick = (chapter: IChapter) => {
    setSelectedChapter(chapter)
  }

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => (prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]))
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission here
  }

  return (
    <div>
      <h1 className="text-commonHeader font-bold">{data?.title}</h1>
      <div className="flex py-4 justify-between items-start gap-2">
        <div className="w-[25%] scroll-smooth md:scroll-auto p-2 overflow-y-scroll h-[80vh] custom-scrollbar">
          <Accordion type="multiple" value={openSections} className="w-full">
            {courseDetails.map((section, index) => (
              <AccordionItem key={index} value={`section-${index}`}>
                <AccordionTrigger onClick={() => toggleSection(`section-${index}`)}>{section.name}</AccordionTrigger>
                <AccordionContent>
                  {section.chapter.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`text-base/6 border-b-2 px-2 py-3 capitalize hover:bg-gray-200 hover:text-black rounded cursor-pointer ${
                        selectedChapter?.id === chapter.id ? "bg-gray-200 text-black" : ""
                      }`}
                      onClick={() => handleChapterClick(chapter)}
                    >
                      {chapter.chapter}, {chapter.chapterTitle}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-[75%] p-2">
          {selectedChapter && (
            <div>
              <iframe
                src={selectedChapter.url}
                className="w-full h-[75vh]"
                title={selectedChapter.chapterTitle}
              ></iframe>
              <Tabs defaultValue="about" className="w-full mt-4">
                <TabsList className="w-full flex justify-around">
                  <TabsTrigger value="about">About Video</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                  <TabsTrigger value="attachments">Attachments</TabsTrigger>
                  <TabsTrigger value="doubts">Doubts</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-semibold mb-2">
                        {selectedChapter.chapter}: {selectedChapter.chapterTitle}
                      </h2>
                      <p className="text-gray-700">{selectedChapter.content}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="review">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="h-6 w-6 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-gray-600">(5.0)</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="attachments">
                  <Card>
                    <CardContent className="pt-6">
                      <a href="#" className="text-blue-600 hover:underline">
                        Download PDF
                      </a>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="doubts">
                  <Card>
                    <CardContent className="pt-6">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="question"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Question</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Your question" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Course

