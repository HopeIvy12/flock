"use client";
import React from "react";
import styles from "./MartialArtsEventsCarousel.module.css";

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Karate Training Camp",
    date: "March 15, 2025",
    description:
      "Enhance your karate skills with expert instructors in an intensive training session.",
    image: "/images/karate_camp.jpg",
  },
  {
    id: 2,
    title: "Muay Thai Sparring Night",
    date: "April 2, 2025",
    description: "Test your striking and clinch techniques in a controlled sparring environment.",
    image: "/images/muay_thai_sparring.jpg",
  },
  {
    id: 3,
    title: "Jiu-Jitsu Submission Workshop",
    date: "May 20, 2025",
    description:
      "Learn and refine your submission techniques with top-level Jiu-Jitsu practitioners.",
    image: "/images/jiu_jitsu_workshop.jpg",
  },
  {
    id: 4,
    title: "MMA Conditioning & Drills",
    date: "June 5, 2025",
    description:
      "Improve your endurance, strength, and technique with MMA-specific drills and conditioning.",
    image: "/images/mma_conditioning.jpg",
  },
];

export default function EventCarousel() {
  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Martial Arts Events</h2>
      <div className={styles.eventsList}>
        {events.map((event: Event) => (
          <div key={event.id} className={styles.eventCard}>
            <h3>{event.title}</h3>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}