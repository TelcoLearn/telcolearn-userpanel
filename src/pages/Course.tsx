import { ICourse } from "@/types/Course";
import { useState } from "react";
import courseImage from "@/assets/image/download.jpeg";
import courseImage2 from "@/assets/image/images.jpeg"
const courseData: ICourse[] = [
  {
    image: courseImage,
    title: "Suspendisse Euismod Dui Vel",
    description: "Vivamus pharetra ipsum eget lorem mollis, vel hendrerit orci suscipit. Mauris eleifend quam vel lectus gravida, nec sollicitudin purus viverra.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "AI COURSE",
    totalChapters: 98,
  },
  {
    image: courseImage2,
    title: "Suspendisse Euismod Dui Vel",
    description: "Vivamus pharetra ipsum eget lorem mollis, vel hendrerit orci suscipit. Mauris eleifend quam vel lectus gravida, nec sollicitudin purus viverra.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "AI COURSE",
    totalChapters: 98,
  },
  {
    image: courseImage,
    title: "Suspendisse Euismod Dui Vel",
    description: "Vivamus pharetra ipsum eget lorem mollis, vel hendrerit orci suscipit. Mauris eleifend quam vel lectus gravida, nec sollicitudin purus viverra.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "AI COURSE",
    totalChapters: 98,
  },
  {
    image: courseImage2,
    title: "Suspendisse Euismod Dui Vel",
    description: "Vivamus pharetra ipsum eget lorem mollis, vel hendrerit orci suscipit. Mauris eleifend quam vel lectus gravida, nec sollicitudin purus viverra.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "AI COURSE",
    totalChapters: 98,
  },
]

function Course() {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expansion
  };

  return (
    <div>
      <h1 className=" mb-6 text-commonHeader font-bold " >Learning Courses</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 content-start items-start " >
      {courseData.map((course, index) => (
        <div key={index} className="max-w-sm rounded-lg overflow-hidden border hover:shadow-lg">
          <img className="w-full" src={course.image} alt="Course Image" />
          <div className="px-6 flex flex-col gap-3 py-4">
            <div className="font-bold text-xl mb-2">{course.title}</div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-[14px]">Type: {course.category}</p>
              <p>
                {expandedIndex === index
                  ? course.description
                  : course.description.slice(0, 50) + (course.description.length > 50 ? "..." : "")}
                {course.description.length > 50 && (
                  <span
                    onClick={() => toggleReadMore(index)}
                    style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                  >
                    {expandedIndex === index ? " Read Less" : " Read More"}
                  </span>
                )}
              </p>
            </div>
            <p className="text-base text-gray-500">
              Created by: {course.createdBy} | Published: {course.isPublished ? "Yes" : "No"}
            </p>
            <div>
              Price: <span className="text-green-500">$ {course.price}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
export default Course;
