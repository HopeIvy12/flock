"use client";
import React from "react";
import styles from "./TechnoEventsCarousel.module.css";

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
    title: "Underground Techno Night",
    date: "March 15, 2025",
    description:
      "Experience an electrifying night of deep beats and pulsating bass with top underground DJs.",
    image: "/images/underground_techno.jpg",
  },
  {
    id: 2,
    title: "Neon Rave Festival",
    date: "April 2, 2025",
    description: "Dance all night under neon lights with an epic lineup of techno and house DJs.",
    image: "/images/neon_rave.jpg",
  },
  {
    id: 3,
    title: "Warehouse Techno Party",
    date: "May 20, 2025",
    description:
      "Immerse yourself in the raw energy of an authentic warehouse rave with mind-blowing visuals and music.",
    image: "/images/warehouse_rave.jpg",
  },
  {
    id: 4,
    title: "Sunrise Beach Rave",
    date: "June 5, 2025",
    description:
      "Party till sunrise with hypnotic techno beats on a stunning beach location.",
    image: "/images/beach_rave.jpg",
  },
];

export default function EventCarousel() {
  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Techno & Rave Events</h2>
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
