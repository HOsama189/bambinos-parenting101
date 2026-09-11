const categories = [
  {
    id: "sleep",
    label: "Sleep",
    image:
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "feeding",
    label: "Feeding",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "development",
    label: "Development",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "health",
    label: "Health & care",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "emotions",
    label: "Feelings",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=300&q=80",
  },
];

const articles = [
  {
    id: "1",
    category: "sleep",
    date: "10 May 2024",
    title: "A calmer bedtime when nights feel endless",
    excerpt: "Small routines that help when your child will not settle.",
    image:
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
    body: [
      "When bedtime stretches past the hour you hoped for, it can feel like the night will never start. You are not failing. Many children need a slower, more predictable wind-down than the clock suggests.",
      "Begin the same way each evening, even if the timing slips. Dim the lights, put screens away, and name what comes next in a calm voice: bath, pyjamas, story, sleep. The order matters more than the exact minute.",
      "If your child will not settle, stay close without turning it into a new game. Sit nearby, keep your words short, and repeat one soothing phrase. Getting up and down for extra snacks or another cartoon usually lengthens the night.",
      "Some nights still run long. When they do, protect the next day’s rest as best you can: an earlier quiet start, a slightly earlier lunchtime nap if they still take one, and less stimulation in the late afternoon.",
      "You do not need a perfect routine. You need a few steps you can repeat when everyone is tired. Tomorrow evening, start from the same small sequence — not from last night’s frustration.",
    ],
  },
  {
    id: "2",
    category: "feeding",
    date: "8 May 2024",
    title: "Picky eating without turning dinner into a battle",
    excerpt: "What to try when every meal becomes a negotiation.",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
    body: [
      "A child who refuses dinner is rarely trying to win. New textures, tiredness, and a need to feel in control all show up at the table.",
      "Offer one familiar food beside one small new bite. Keep the mood light, sit together, and avoid bargaining for every mouthful. Pressure often makes the next meal harder.",
      "You decide what is served and when. They decide how much to eat from what is there. That split keeps the meal from becoming a standoff.",
      "If a meal goes uneaten, end it without a lecture and wait until the next planned snack or meal. Constant grazing makes it harder for hunger to show up at dinner.",
    ],
  },
  {
    id: "3",
    category: "development",
    date: "5 May 2024",
    title: "Milestones as a map, not a race",
    excerpt: "How to notice progress without comparing every week.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    body: [
      "Milestone lists are a map of typical ranges, not a scoreboard. Children move through skills at different speeds, and a quiet week is not always a delay.",
      "Notice what your child can do this month compared with last month: a new sound, a longer stretch of play, a slightly steadier step. That is progress even if a neighbour’s child did it earlier.",
      "If something worries you — lost skills, very limited eye contact, or a gut feeling that will not settle — write down what you see and speak to your child’s clinician. Asking is part of caring, not overreacting.",
    ],
  },
  {
    id: "4",
    category: "health",
    date: "2 May 2024",
    title: "When to call, and when to wait it out",
    excerpt: "A parent’s checklist for common worries at home.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80",
    body: [
      "Most coughs, mild fevers, and off days improve with rest, fluids, and time. Still, you should not have to guess alone when something feels different.",
      "Call sooner if your child is unusually drowsy, struggling to breathe, not drinking, has a rash that does not fade, or you cannot rouse a sense that they are themselves.",
      "For milder illness, note when it started, how they are eating and peeing, and whether they can be comforted. That record helps you decide overnight and helps a clinician if you do call.",
      "Trust the worry that keeps returning. A phone call that ends with “keep watching at home” is still a useful call.",
    ],
  },
  {
    id: "5",
    category: "emotions",
    date: "28 Apr 2024",
    title: "Big feelings in small bodies",
    excerpt: "Language that helps during tantrums and tears.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    body: [
      "A tantrum is a nervous system overflowing, not a speech your child planned. In the peak, they cannot use reason the way an adult can.",
      "Stay close, keep them safe, and use short words: “You are angry. I am here.” Save the lesson for after the body has calmed.",
      "When the storm passes, name the feeling and the limit together: “You wanted the toy. Hitting is not okay. We can try again.” Connection first, then the boundary.",
    ],
  },
  {
    id: "6",
    category: "sleep",
    date: "22 Apr 2024",
    title: "Naps that slipped — what still helps",
    excerpt: "Adjusting the day when the old schedule no longer fits.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    body: [
      "Dropped naps often arrive before you feel ready. The old schedule stops working, and evenings get harder before days get easier.",
      "Watch sleepy signs, not only the clock. If lunchtime sleep is a fight every day, try a slightly later quiet rest with books, even if they do not drop off.",
      "Protect an earlier bedtime for a stretch of weeks while the body recalibrates. A short, cranky afternoon is common during the change — it does not mean you must force the old nap forever.",
    ],
  },
];

function categoryLabel(id) {
  return categories.find((c) => c.id === id)?.label || id;
}

function articleUrl(id) {
  return "./article.html#" + encodeURIComponent(id);
}
