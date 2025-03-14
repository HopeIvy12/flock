"use client";
import React from "react";
import styles from "./BookClubEventsCarousel.module.css";

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
    title: "Mystery Book Club Meeting",
    date: "March 15, 2025",
    description:
      "Join us for an in-depth discussion on the latest mystery novel and share your theories.",
    image: "/images/mystery_book_club.jpg",
  },
  {
    id: 2,
    title: "Sci-Fi & Fantasy Book Night",
    date: "April 2, 2025",
    description: "Explore new worlds and epic adventures in this month's sci-fi and fantasy meetup.",
    image: "/images/scifi_fantasy_club.jpg",
  },
  {
    id: 3,
    title: "Classic Literature Discussion",
    date: "May 20, 2025",
    description:
      "Dive into timeless literary works and engage in thought-provoking conversations.",
    image: "/images/classic_literature.jpg",
  },
  {
    id: 4,
    title: "Poetry & Prose Reading Night",
    date: "June 5, 2025",
    description:
      "Share your favorite poems or original works in an evening of literary appreciation.",
    image: "/images/poetry_reading.jpg",
  },
];

export default function EventCarousel() {
  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Book Club Events</h2>
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
