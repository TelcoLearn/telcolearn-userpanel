import { useLocation } from "react-router";
import { useState } from "react";
import { courseData } from "./Courses";
import { IChapter } from "@/types/Course";

const chapterDetails: IChapter[] = [
    {
        id: 1,
        chapter: "Chapter 1",
        chapterTitle: "Introduction of React js",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 2,
        chapter: "Chapter 2",
        chapterTitle: "Introduction of React Hooks",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    {
        id: 3,
        chapter: "Chapter 3",
        chapterTitle: "Difference Between Functional Component & Class Component in React",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus vel neque fermentum pharetra. Donec vel neque vel justo ultricies viverra. Nullam id nisi vel urna pharetra hendrerit. In hac habitasse platea dictumst. Donec vel turpis et libero convallis condimentum. Sed vel risus in velit cursus gravida vel ac mauris.",
        url: "https://player.vimeo.com/video/1052553710?h=5385efdc5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
];

function Course() {
    const location = useLocation();
    const [selectedChapter, setSelectedChapter] = useState<IChapter | null>(null);

    const data = courseData.find(course => course.id === location.state.id);

    const handleChapterClick = (chapter: IChapter) => {
        setSelectedChapter(chapter);
    };

    return (
        <div>
            <h1 className="text-commonHeader font-bold">{data?.title}</h1>
            <div className="flex py-4 justify-between items-start gap-2">
                <div className="w-[25%] scroll-smooth md:scroll-auto p-2 overflow-y-scroll h-[80vh]">
                    {chapterDetails.map(element => (
                        <div
                            key={element.id}
                            className={`text-base/6 border-b-2 px-2 py-3 capitalize hover:bg-gray-200 hover:text-black rounded cursor-pointer ${
                                selectedChapter?.id === element.id ? 'bg-gray-200 text-black' : ''
                            }`}
                            onClick={() => handleChapterClick(element)}
                        >
                            {element.chapter}, {element.chapterTitle}
                        </div>
                    ))}
                </div>
                <div className="w-[75%] p-2">
                    {selectedChapter && (
                        <div>
                            <iframe
                                src={selectedChapter.url}
                                className="w-full h-[75vh]"
                                title={selectedChapter.chapterTitle}
                            ></iframe>
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {selectedChapter.chapter}: {selectedChapter.chapterTitle}
                                </h2>
                                <p className="text-gray-700">{selectedChapter.content}</p>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
}

export default Course;