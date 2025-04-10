export const scenarios = {
  cafe: {
    name: "Coffee Shop Meet-Cute",
    description: "Practice flirting in a casual café setting",
    difficulty: "Easy",
    context: "You're at a cozy coffee shop and spot someone interesting reading your favorite book.",
    culturalNotes: [
      "In English-speaking countries, it's common to start conversations with strangers in cafes",
      "Commenting on someone's choice of book/drink is considered a natural icebreaker",
      "Maintain personal space and respect if someone seems uninterested"
    ],
    exercises: [
      {
        id: "cafe_1",
        type: "fill-blank",
        situation: "Approaching someone reading",
        text: "Excuse me, I couldn't help but notice _____ you're reading. I loved the part about _____.",
        answers: [
          ["the book", "what", "that book"],
          ["the story", "the characters", "the ending"]
        ],
        hints: [
          "Use a demonstrative or relative pronoun",
          "Reference a general aspect of the book"
        ],
        explanation: "This approach shows genuine interest in their reading choice while giving them an opportunity to engage in conversation."
      }
    ]
  },
  // ... other scenarios with similar structure
};