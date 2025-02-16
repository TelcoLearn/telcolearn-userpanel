import { ICourse } from "@/types/Course";
import { useState } from "react";
import courseImage from "@/assets/image/download.jpeg";
import courseImage2 from "@/assets/image/images.jpeg"
import { Link } from "react-router";

export const courseData: ICourse[] = [
  {
    id: 1,
    image: courseImage,
    title: "Lorem Ipsum Dolor Sit Amet",
    description: "Nulla facilisi. Suspendisse potenti. Integer id felis sed felis sagittis gravida.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "COURSE",
    totalChapters: 98,
  },
  {
    id: 2,
    image: courseImage2,
    title: "Vestibulum Ante Ipsum Primis",
    description: "Curabitur vehicula lacus id sapien volutpat, at dapibus libero aliquet. Fusce nec quam vel erat varius egestas.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "COURSE",
    totalChapters: 98,
  },
  {
    id: 3,
    image: courseImage,
    title: "Aenean Ultricies Nibh Non",
    description: "Duis vitae orci nec augue cursus rhoncus a at velit. Quisque scelerisque erat in lectus facilisis, nec tristique justo aliquet.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "COURSE",
    totalChapters: 98,
  },
  {
    id: 4,
    image: courseImage2,
    title: "Suspendisse Euismod Dui Vel",
    description: "Vivamus pharetra ipsum eget lorem mollis, vel hendrerit orci suscipit. Mauris eleifend quam vel lectus gravida, nec sollicitudin purus viverra.",
    price: 0,
    createdBy: "Sultan",
    isPublished: false,
    category: "COURSE",
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center items-center">
        {courseData.map((course, index) => (
          <Link key={course?.id} to={`/chapter`}  className="w-full flex justify-center" state={{ id: course?.id }}>
            <div className="max-w-sm rounded-lg overflow-hidden border hover:shadow-lg hover:shadow-white/50">
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
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event bubbling
                          e.preventDefault(); // Prevent default link behavior
                          toggleReadMore(index);
                        }}
                        style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                      >
                        {expandedIndex === index ? " Read Less" : " Read More"}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Course;
