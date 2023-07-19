import codeImg from "./public/images/code1.jpg";
import codeImg2 from "./public/images/code2.jpg";

// Array of posts
export const posts = [
  {
    title: "Getting Started with Programming",
    slug: "getting-started-programming",
    description:
      "An introduction to the basics of programming and how to get started on your programming journey.",
    categoryId: 1, // Corresponds to the "Beginner" category
  },
  {
    title: "Choosing a Programming Language",
    slug: "choosing-programming-language",
    description:
      "A guide to selecting the right programming language based on your goals and interests.",
    categoryId: 2, // Corresponds to the "Language Selection" category
  },
  {
    title: "Learning Resources for Programmers",
    slug: "learning-resources-programmers",
    description:
      "A list of recommended books, websites, and online courses to enhance your programming skills.",
    categoryId: 3, // Corresponds to the "Learning Resources" category
  },
  // Add more posts as needed...
];

// Array of categories
const categories = [
  {
    id: 1,
    name: "Beginner",
  },
  {
    id: 2,
    name: "Language Selection",
  },
  {
    id: 3,
    name: "Learning Resources",
  },
  // Add more categories as needed...
];
